var browserObject = window.navigator.userAgent.indexOf("Edge") != -1 ?   // If we have Edge
                    browser : chrome; 

browserObject.browserAction.onClicked.addListener(function() {
   browserObject.tabs.create({"url": "https://adaptive.org.uk/home"});
});