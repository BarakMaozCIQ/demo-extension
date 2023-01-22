

data = {};

data.userAgent = window.navigator.userAgent;
data.screnSize = screen.width +' x '+screen.height;
data.sessionStorage = window.sessionStorage;
data.pageUrl = document.location.href;
console.log('%c Perion extension: Demo 2 general data:', 'background: #1E1E1E; color: #FEB12B; font-weight:bold;',data);
