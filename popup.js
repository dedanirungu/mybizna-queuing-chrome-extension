document.addEventListener('DOMContentLoaded', function() {
  var openButton = document.getElementById('openButton');
  var urlInput = document.getElementById('urlInput');

  openButton.addEventListener('click', function() {
    var url = urlInput.value;
  });
});
