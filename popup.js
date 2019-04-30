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
      return
    } else {
      getLocal(['recordUrl', 'postUrl', 'scriptParams', 'scriptType1', 'scriptType2', 'scriptUrl', 'isAutoInject'])
    }
  })
  setLocal(['recordUrl', 'postUrl', 'scriptParams', 'scriptType1', 'scriptType2', 'scriptUrl', 'isAutoInject'])
  document.getElementById('confirm').addEventListener('click', () => {
    sendMessageToContentScript({tab:'popup', msg: 'confirmClick'}, function(response) {
      console.log('来自content的回复：'+response);
    });
  })
  document.getElementById('reset').addEventListener('click', () => {
    resetAll()
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
  document.getElementById('scriptUrl').value = ''
  document.getElementById('isAutoInject').checked = false
  chrome.storage.local.set({
    recordUrl: '',
    postUrl: 'http://dev.mytest.com/api/saveEvents',
    scriptParams: `{
      "event": $event, 
      "file": "test.json"
    }`,
    scriptType1: true,
    scriptType2: false,
    scriptUrl: '',
    isAutoInject: false
  }, function() {
    console.log('保存成功')
  })
}

function setLocal(targetIds) {
  if (!Array.isArray(targetIds)) {
    return
  }
  targetIds.forEach(id => {
    const target = document.getElementById(id)
    if(target.type === 'checkbox' || target.type === 'radio') {
      target.addEventListener('change', function () {
        const obj = {}
        obj[id] = this.checked
        chrome.storage.local.set(obj, function() {
          console.log('保存成功')
        })
      })
    } else {
      target.addEventListener('change', function () {
        const obj = {}
        obj[id] = this.value
        chrome.storage.local.set(obj, function() {
          console.log('保存成功')
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