function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("bulbon")) {
      image.src = "/bulbofff.png";
    } else {
      image.src = "/bulbon.png";
    }
  }