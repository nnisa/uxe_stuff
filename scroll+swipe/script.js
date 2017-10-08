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
    newDiv.id = i;
    newDiv.style.background = getRandomColor();
    main_section.appendChild(newDiv);

    newDiv.onclick = function () {

      $(this).animate({
        'padding': "0px",
        'margin-left':'-200px',
        'width':'0px',
      }, 1200, function() { 
        $(this).remove();      
      });
    };
  }
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
