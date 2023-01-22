


function triggerScript(buttonName) {

    console.log(`./src/contents/content_${buttonName}.js`)
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {

    chrome.scripting.executeScript(
      {
        target: {tabId: tabs[0].id},
        files: [`./src/contents/content_${buttonName}.js`],
      })
  });

}


function openMenu(elementName) {
  var menu = document.getElementById(elementName+"-Btn");
  var arrowDiv = document.getElementById("arrow-"+elementName);
  if(arrowDiv.className.includes('up'))
  {
    arrowDiv.classList.remove('up');
    arrowDiv.classList.add('down');
  }else{
    arrowDiv.classList.remove('down');
    arrowDiv.classList.add('up');
  } 
 
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}




//open or close menu

document.getElementById('arrow-subject_1').addEventListener('click', function() {
  openMenu("subject_1");
});
document.getElementById('arrow-subject_2').addEventListener('click', function() {
  openMenu("subject_2");
});


//trigger scripts Prebid
document.getElementById('demo_1').addEventListener('click', function() {
  triggerScript("demo_1");
});

document.getElementById('demo_2').addEventListener('click', function() {
  triggerScript("demo_2");
});










