const extensions = 'https://developer.chrome.com/docs/extensions'
const webstore = 'https://developer.chrome.com/docs/webstore'

chrome.action.onClicked.addListener(async (tab) => {
    await chrome.scripting.insertCSS({
        files: ["style.css"],
        target: { tabId: tab.id },
    });

});