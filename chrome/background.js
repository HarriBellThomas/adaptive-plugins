var browserObject = !(!!document.documentMode) && !!window.StyleMedia ?    // If we have Edge 20+
                    browser : chrome; 

browserObject.browserAction.onClicked.addListener(function() {
   browserObject.tabs.create({"url": "https://adaptive.org.uk/home"});
});
