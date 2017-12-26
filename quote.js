

window.addEventListener('load', init);

function init () {
  setProverbText();
  var refreshBtn = document.getElementsByClassName('button')[0];
  refreshBtn.addEventListener('click', refreshProverbs);
  refreshBtn.style.backgroundColor = 'blueviolet';
  setTwitterQuote();
}

function setTwitterQuote () {
  var twitterLink = document.getElementById('twitter-link');
  var url = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp';
  var currentProverb = document.getElementById('quote-text').innerText;
  url = url + '&text=' + currentProverb;
  twitterLink.href = encodeURI(url);
}

function setProverbText () {
  var proverbObj = getProverbs();
  var proverbElem = document.getElementById('quote-text');
  proverbElem.innerHTML = proverbObj.source;
}

function getProverbs () {
  var proverb = '';
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://eda-te-reo.herokuapp.com/api/proverbs', false);
  xhr.send();
  // console.log(xhr.status);
  if (xhr.status === 200) {
    // console.log(xhr.responseText);
    proverb = JSON.parse(xhr.responseText);
  }
  // console.log(proverb.source);
  return proverb;
}

function refreshProverbs () {
  // refresh proverb
  setProverbText();

  // change color
  var colorShop = ['red', 'purple', 'green', 'orange', 'blueviolet'];
  var randomIndex = Math.floor(Math.random() * 5);
  var button = document.getElementsByClassName('button-primary')[0];
  button.style.backgroundColor = colorShop[randomIndex];
  document.body.style.backgroundColor = colorShop[randomIndex];
  setTwitterQuote();
}