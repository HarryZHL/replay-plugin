// 向页面注入JS
function injectCustomJs(jsPath, script, scriptUrl)
{
	jsPath = jsPath || 'record.js';
	var temp = document.createElement('script');
	temp.setAttribute('type', 'text/javascript');
	temp.src = chrome.extension.getURL(jsPath);
	temp.onload = function(){
		// 放在页面不好看，执行完后移除掉
    this.parentNode.removeChild(this);
    if (script) {
      const iseeRecord = document.getElementById('iseeRecord')
      if (iseeRecord) {
        iseeRecord.innerHTML = script
      } else {
        let temp2 = document.createElement('script');
        temp2.setAttribute('type', 'text/javascript');
        temp2.setAttribute('id', 'iseeRecord');
        temp2.innerHTML = script
        document.getElementsByTagName('html')[0].appendChild(temp2)
      }
    }
    if (scriptUrl) {
      var temp3 = document.createElement('script');
      temp3.setAttribute('type', 'text/javascript');
      temp3.src = scriptUrl;
      temp3.onload = function(){
        this.parentNode.removeChild(this);
      }
    }
  };
  document.head.appendChild(temp);
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