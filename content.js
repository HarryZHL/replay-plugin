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
  // console.log(sender.tab ?"from a content script:" + sender.tab.url :"from the extension");
  const { tab, recordUrl, scriptUrl, scriptContent, isDefault } = request
  if(tab !== 'popup') return
  var _scriptContent = `
      window.record.record({
        emit(event) {
          // 将 event 存入 events 数组中
          console.log('-------event--------', event)
        },
      })`
  if (isDefault) {
    injectCustomJs('', _scriptContent)
  } else {
    injectCustomJs(recordUrl || '', scriptContent || _scriptContent, scriptUrl)
  }
	sendResponse('received!!!');
});