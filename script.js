//your JS code here. If required.
const browserName = navigator.appName;
const browserVersion = navigator.appVersion;

 const browserInfoDiv = document.getElementById('browser-info');

const message = "You are using " + browserName + " version " + browserVersion;

browserInfoDiv.textContent = message;