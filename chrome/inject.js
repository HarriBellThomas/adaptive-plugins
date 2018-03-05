/* Runs every time the current tab location changes */
window.onload = function() {
    // Retrieve items from local chrome storage
    chrome.storage.local.get(['ADAPTIVE_A','ADAPTIVE_ENABLE'], function(result) {
        if(result.ADAPTIVE_ENABLE != 0) {

            /* If we have a user ID saved, inject it into the DOM */
            if(result.ADAPTIVE_A !== undefined && result.ADAPTIVE_A !== "") {
                var adaptiveAuth = document.createElement("script");
                adaptiveAuth.textContent = "var _adaptiveAuth = '" + result.ADAPTIVE_A + "';";
                document.body.appendChild(adaptiveAuth);
            }

            /* Inject the main adaptive script */
            var adaptiveScript = document.createElement("script");
            adaptiveScript.src = "https://js.adaptive.org.uk/adaptive.js?" + (+ new Date());
            document.body.appendChild(adaptiveScript);
        }

        /* If we see a page hash it might be out login return; check it */
        if (window.location.hash) {
            try {
                var hash = window.atob(window.location.hash.substr(1, window.location.hash.length - 1));
                var data = JSON.parse(hash);

                /* Successfully found login data, save it */
                if ("user_id" in data) {
                    chrome.storage.local.set({"ADAPTIVE_A": data["user_id"]});
                }

                if ("style_id" in data) {
                    chrome.storage.local.set({"ADAPTIVE_B": data["style_id"]});
                }

            } catch(e) {
                //console.log("Error: " + e);
            }
        }
    });
};
