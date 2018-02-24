document.querySelector('button').addEventListener('click', function() {
  document.querySelector('button').style.background="grey";
  document.querySelector('button').style.color="#cccccc";
 });
document.querySelector('button').addEventListener('click', function() {
  window.alert('Save Net Neutrality!');
});
document.querySelector('button').addEventListener('click', function() {
    var allH2 = document.querySelectorAll('h2')
    allH2[0].textContent="Loading...";
    allH2[0].style.color= "black";
    allH2[0].style.textShadow='none'
    allH2[1].textContent="Loading...";
    allH2[1].style.color= "black";
    allH2[1].style.textShadow='none'
    allH2[2].textContent="Loading...";
    allH2[2].style.color= "black";
    allH2[2].style.textShadow='none'
});
document.querySelector('button').addEventListener('click', function() {
  var allImages = document.querySelectorAll('img');
  allImages[0].src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif";
  allImages[1].src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif";
});
document.querySelector('button').addEventListener('click', function() {
  var allLinks = document.querySelectorAll('a');
  allLinks[0].href="troll, you cant access dis link";
  allLinks[1].href="troll, you cant access dis link";
  allLinks[2].href="troll, you cant access dis link";
  allLinks[3].href="troll, you cant access dis link";
});
document.querySelector('button').addEventListener('click', function() {
  var allParagraphs = document.querySelectorAll('p');
  allParagraphs[0].textContent="Made last it seen went no just when of by. Occasional entreaties comparison me difficulty so themselves. At brother inquiry of offices without do my service. As particular to companions at sentiments. Weather however luckily enquire so certain do. Aware did stood was day under ask. Dearest affixed enquire on explain opinion he. Reached who the mrs joy offices pleased. Towards did colonel article any parties.";
  allParagraphs[1].textContent="Yourself off its pleasant ecstatic now law. Ye their mirth seems of songs. Prospect out bed contempt separate. Her inquietude our shy yet sentiments collecting. Cottage fat beloved himself arrived old. Grave widow hours among him ﻿no you led. Power had these met least nor young. Yet match drift wrong his our.";
});
document.querySelector('#signButton').addEventListener('click', function() {
  var name = document.querySelector('#userName').value;
  if (name == ''){
    window.alert('Your name is required');
  }
});
document.querySelector('#signButton').addEventListener('click', function() {
  var email = document.querySelector('#userEmail').value;
  if(email == ''){
    window.alert('Your email is required');
  }
});
document.querySelector('#signButton').addEventListener('click', function() {
  var comment = document.querySelector('#userComment').value;
  if (comment == ''){
  window.alert('A comment is required');
}
});
