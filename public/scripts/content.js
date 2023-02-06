chrome.runtime.onMessage.addListener(async function (request, sender, sendResponse) {
    if (request.type === 'ingredients') {
        sendResponse({ ok: true });

        chrome.runtime.sendMessage(request);
    }
});
