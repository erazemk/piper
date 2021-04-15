var host = "https://piped.kavin.rocks";

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return {redirectUrl: host + details.url.match(/^https?:\/\/[^\/]+([\S\s]*)/)[1]};
    },
    {
        urls: ["*://youtube.com/*", "*://www.youtube.com/*"],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);