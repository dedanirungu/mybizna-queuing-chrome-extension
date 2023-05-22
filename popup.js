document.addEventListener('DOMContentLoaded', function() {
  var openButton = document.getElementById('openButton');
  var urlInput = document.getElementById('urlInput');

  openButton.addEventListener('click', function() {
    var url = urlInput.value;

    if (url) {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        var tab = tabs[0];
        chrome.tabs.executeScript(tab.id, {
          code: 'document.body.innerHTML = \'<iframe src="' + url + '" style="width:100%;height:100%;border:none;"></iframe>\';'
        });
      });
    }
  });
});
