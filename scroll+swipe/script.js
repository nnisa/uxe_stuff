function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

var main_section = document.getElementById("main_section");

function pageWithNewDivs (){
  for (var i = 0; i < 9; i++) {
    var newDiv = document.createElement("div");
    newDiv.classList.add('newDiv');
    newDiv.style.background = getRandomColor();
    main_section.appendChild(newDiv);
  };
}


window.onscroll = function(ev) {
    // console.log("window.innerHeight "+window.innerHeight)
    // console.log("window.scrollY "+ window.scrollY)
    // console.log("document.body.offsetHeight "+ document.body.offsetHeight)

if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    pageWithNewDivs()
    }
};

pageWithNewDivs()
