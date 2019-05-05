// 向页面注入JS
function injectCustomJs(jsPath, script, scriptUrl){
  const jsPathsLength = jsPath ? jsPath.split(';').length : 0
  jsPaths = jsPath && jsPathsLength ? jsPath.split(';') : ['record.js'];
  let i = 0
  jsPaths.forEach(path => {
    let temp = document.createElement('script');
    temp.setAttribute('type', 'text/javascript');
    temp.src = chrome.extension.getURL(path);
    temp.onload = function(){
      // 放在页面不好看，执行完后移除掉
      this.parentNode.removeChild(this);
      i++
      if (i < jsPathsLength) return
      if (script) {
        const iseeRecord = document.getElementById('iseeRecord')
        if (iseeRecord) {
          iseeRecord.innerHTML = script
        } else {
          let temp2 = document.createElement('script');
          temp2.setAttribute('type', 'text/javascript');
          temp2.setAttribute('id', 'iseeRecord');
          temp2.innerHTML = script
          temp2.onload = function() {
            this.parentNode.removeChild(this);
          }
          document.getElementsByTagName('html')[0].appendChild(temp2)
        }
      }
      if (scriptUrl) {
        const scriptUrls = scriptUrl.split(';')
        scriptUrls.forEach(s => {
          let temp3 = document.createElement('script');
          temp3.setAttribute('type', 'text/javascript');
          temp3.src = s;
          temp3.onload = function(){
            this.parentNode.removeChild(this);
          }
          document.getElementsByTagName('html')[0].appendChild(temp3)
        })
      }
    };
    document.head.appendChild(temp);
  })
}
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  const { tab, msg } = request
  if(tab !== 'popup') return
  if(msg === 'confirmClick') {
    execute()
  }
	sendResponse('received!!!');
});

function execute () {
  let [recordUrl, postUrl, scriptParams, scriptType1, scriptType2, scriptType3, scriptUrl, scriptText, isAutoInject] = ['' ,'http://dev.mytest.com/api/saveEvents', `{
    "event": $event, 
    "file": "test.json"
  }`, true, false, false, '', '', false]
  chrome.storage.local.get(['recordUrl', 'postUrl', 'scriptParams', 'scriptType1', 'scriptType2', 'scriptType3', 'scriptUrl', 'scriptText', 'isAutoInject'], function (obj) {
    recordUrl = obj['recordUrl'] || ''
    postUrl = obj['postUrl'] || ''
    scriptParams = (obj['scriptParams'] || `{
      "event": $event, 
      "file": "test.json"
    }`).replace('$event', 'event')
    scriptType1 = !!obj['scriptType1']
    scriptType2 = !!obj['scriptType2']
    scriptType3 = !!obj['scriptType3']
    scriptUrl = obj['scriptUrl'] || ''
    scriptText = obj['scriptText'] || ''
    isAutoInject = !!obj['isAutoInject']
    const script = `
      window.record.record({
        emit(event) {
          const obj = ${scriptParams}
          const xmlhttp = new XMLHttpRequest();
          xmlhttp.open("POST","${postUrl}",true);
          xmlhttp.setRequestHeader("Content-type", "application/json;charset=UTF-8");
          xmlhttp.timeout = 5000;
          xmlhttp.send(JSON.stringify(obj));
        },
      })`
    if (isAutoInject) {
      injectCustomJs(recordUrl, scriptType1 ? script : scriptType3 ? scriptText : null, scriptType2 ? scriptUrl : null)
    }
  })
}
execute()