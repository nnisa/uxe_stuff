function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}



window.onscroll = function(ev) {
	console.log("window.innerHeight "+window.innerHeight)
	console.log("window.scrollY "+ window.scrollY)
	console.log("document.body.offsetHeight "+ document.body.offsetHeight)

if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
	var newDiv = document.createElement("div");
	newDiv.classList.add('newDiv');
	newDiv.style.width = "100%";
	newDiv.style.height = "1200px";
	newDiv.style.background = getRandomColor();

    document.body.appendChild(newDiv);
    }
};
