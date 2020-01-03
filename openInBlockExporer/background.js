chrome.runtime.onInstalled.addListener(function() {
  var context = "selection";
  var title = "Open on block explorer";
  var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                         "id": "context" + context}); 
});

chrome.contextMenus.onClicked.addListener(onClickHandler);

function onClickHandler(info, tab) {
  var sText = info.selectionText;
  if(sText.startsWith("3") || sText.startsWith("1") || sText.startsWith("bc")){
	var url = "https://www.blockchain.com/btc/address/" + encodeURIComponent(sText);
	  window.open(url, '_blank');
  }
  else if (sText.startsWith("0x")){
	var url = "https://etherscan.io/address/" + encodeURIComponent(sText);
	  window.open(url, '_blank');
  }
};