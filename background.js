// <a href="https://www.flaticon.com/free-icons/close" title="close icons">Close icons created by juicy_fish - Flaticon</a>
chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: executeScript,
  });
});

function executeScript() {
  // This function will be executed in the context of the web page
  Array.from(
    document.getElementsByClassName("fc-preference-legitimate-interest"),
  ).forEach((e) => {
    e.checked = false;
  });
}
