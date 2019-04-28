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
  document.getElementById('confirm').addEventListener('click', () => {
    const recordUrl = document.getElementById('recordUrl').value
    const scriptContent = document.getElementById('scriptContent').value
    const isDefault = document.getElementById('isDefault').checked
    sendMessageToContentScript({tab:'popup', recordUrl, scriptContent, isDefault}, function(response) {
      console.log('来自content的回复：'+response);
    });
  })
}

document.addEventListener('DOMContentLoaded', function () {
	bindEvent()
});