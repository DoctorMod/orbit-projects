chrome.contextMenus.create({"title": "Set As Orbit Background", "contexts":["image"], "onclick": test});

function test(action) {
	console.log(action)
	chrome.storage.sync.set({
	backgroundURL: action.srcUrl
}, function() {})};
