window.onload = function() {
   // Inject the script
   var adaptiveScript = document.createElement("script");
   adaptiveScript.src = "https://js.adaptive.org.uk/fresh/?negateglobal=N&mod=onDOMChange,adaptiveBase,adaptiveTools,linkHighlighter,motorFeatures,speedBar,typeWarning,colourTools,passwordReveal,darkMode,magnifier,showMouse,init";
   document.body.appendChild(adaptiveScript);
   
   if (window.location.hash) {
      try {
         var hash = window.atob(window.location.hash.substr(1, window.location.hash.length - 1));
         var data = JSON.parse(hash);
         console.log(data);

         if ("user_id" in data) {
            chrome.storage.local.set({"ADAPTIVE_A": data["user_id"]});
            userID = data["user_id"];
         }

         if ("style_id" in data) {
            chrome.storage.local.set({"ADAPTIVE_B": data["style_id"]});
            styleID = data["style_id"];
         }
      } catch(e) {}
   }
};