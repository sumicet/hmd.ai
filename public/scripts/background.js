var contextMenuItem = {
    id: 'hid.ai',
    title: 'Check harmful ingredients' /* what appears in the menu */,
    type: 'normal',
    contexts: ['selection'],
};

// When the tabs activate
chrome.tabs.onActivated.addListener(function (activeInfo) {
    chrome.contextMenus.create(contextMenuItem);

    chrome.contextMenus.onClicked.addListener(async clickData => {
        const text = clickData.selectionText;
        (async () => {
            const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
            await chrome.tabs.sendMessage(tab.id, { ingredients: text, type: 'ingredients' });
        })();
    });
});
