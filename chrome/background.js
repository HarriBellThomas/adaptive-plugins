chrome.browserAction.onClicked.addListener(function() {
   chrome.tabs.create({"url": "https://adaptive.org.uk/home"});
});
