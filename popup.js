function sendMessageToContentScript(message, callback) {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs)
	{
		chrome.tabs.sendMessage(tabs[0].id, message, function(response)
		{
			if(callback) callback(response);
		});
	});
}
function bindEvent() {
  chrome.storage.local.get('isFirst', function (obj) {
    if (!obj['isFirst']) {
      resetAll()
      chrome.storage.local.set({isFirst: true}, function () {
        console.log('初始化成功')
      })
    } else {
      getLocal(['recordUrl', 'postUrl', 'scriptParams', 'scriptType1', 'scriptType2', 'scriptType3', 'scriptUrl', 'scriptText', 'isAutoInject'])
    }
  })
  setLocal(['recordUrl', 'postUrl', 'scriptParams', 'scriptType1', 'scriptType2', 'scriptType3', 'scriptUrl', 'scriptText', 'isAutoInject'])
  document.getElementById('confirm').addEventListener('click', () => {
    sendMessageToContentScript({tab:'popup', msg: 'confirmClick'}, function(response) {
      console.log('来自content的回复：'+response);
    });
  })
  document.getElementById('reset').addEventListener('click', () => {
    resetAll()
  })
  const tabs = [...document.getElementsByClassName('tab')[0].getElementsByTagName('span')]
  const blocks = [...document.getElementsByClassName('block')]
  tabs.forEach((tab, index) => {
    tab.setAttribute('index', index)
    tab.addEventListener('click', e => {
      console.log(e)
      if(e.target.className === 'cur') {
        return
      } else {
        tabs.forEach(t => {
          t.className = ''
        })
        e.target.className = 'cur'
        const tabIndex = e.target.getAttribute('index')
        blocks.forEach(block => {
          block.style.display = 'none'
        })
        blocks[tabIndex].style.display = 'block'
      }
    })
  })
  document.getElementById('replay').addEventListener('click', () => {
    sendMessageToContentScript({tab:'popup', msg: 'replayClick'}, function(response) {
      console.log('来自content的回复：'+response);
    });
  })
}

function resetAll () {
  document.getElementById('recordUrl').value = ''
  document.getElementById('postUrl').value = 'http://dev.mytest.com/api/saveEvents'
  document.getElementById('scriptParams').value = `{
    "event": $event, 
    "file": "test.json"
  }`
  document.getElementById('scriptType1').checked = true
  document.getElementById('scriptType2').checked = false
  document.getElementById('scriptType3').checked = false
  document.getElementById('scriptUrl').value = ''
  document.getElementById('scriptText').value = ''
  document.getElementById('isAutoInject').checked = false
  const obj = {
    recordUrl: '',
    postUrl: 'http://dev.mytest.com/api/saveEvents',
    scriptParams: `{
      "event": $event, 
      "file": "test.json"
    }`,
    scriptType1: true,
    scriptType2: false,
    scriptType3: false,
    scriptUrl: '',
    scriptText: '',
    isAutoInject: false
  }
  chrome.storage.local.set(obj, function() {
    console.log('保存成功', obj)
  })
}

function setLocal(targetIds) {
  if (!Array.isArray(targetIds)) {
    return
  }
  targetIds.forEach(id => {
    const target = document.getElementById(id)
    if(target.type === 'checkbox' || target.type === 'radio') {
      target.addEventListener('change', function (e) {
        const obj = {}
        document.getElementsByName(e.target.name).forEach(elem => {
          obj[elem.id] = false
        })
        obj[e.target.id] = this.checked
        chrome.storage.local.set(obj, function() {
          console.log('保存成功', obj)
        })
      })
    } else {
      target.addEventListener('input', function () {
        const obj = {}
        obj[id] = this.value
        console.log(this.value)
        chrome.storage.local.set(obj, function() {
          console.log('保存成功', obj)
        })
      })
    }
  })
}

function getLocal(targetIds) {
  if (!Array.isArray(targetIds)) {
    return
  }
  targetIds.forEach(id => {
    const target = document.getElementById(id)
    if(target.type === 'checkbox' || target.type === 'radio') {
      chrome.storage.local.get(id, function(obj){
        target.checked = !!obj[id]
      })
    } else {
      chrome.storage.local.get(id, function(obj){
        target.value = obj[id] || ''
      })
    }
  })
}

document.addEventListener('DOMContentLoaded', function () {
	bindEvent()
});