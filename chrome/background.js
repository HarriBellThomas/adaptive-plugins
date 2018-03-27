var browserObject = window.navigator.userAgent.indexOf("Edge") != -1 ?   // If we have Edge
                    browser : chrome;

browserObject.browserAction.onClicked.addListener(function() {
   // browserObject.tabs.create({"url": "https://adaptive.org.uk/home"});
   browserObject.storage.local.get('ADAPTIVE_ENABLE', function(result) {
       if(result.ADAPTIVE_ENABLE == 1) browserObject.storage.local.set({"ADAPTIVE_ENABLE": 0});
       else browserObject.storage.local.set({"ADAPTIVE_ENABLE": 1});
   });
});
