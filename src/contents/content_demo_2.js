

var s = document.createElement('script');
s.src = chrome.runtime.getURL('./src/scripts/demo_2.js');
(document.head||document.documentElement).appendChild(s);
s.onload = function() {
    s.parentNode.removeChild(s);
};

