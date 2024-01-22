console.log("Dev | Javascript App loaded")


function inputReview(){
    let reviewList = ['Goed', 'Episch', 'Adembenemend', 'Leerzaam','Fantastisch','Super']; 
    let reviewContent = ['Heel leuk museum! Leuke tentoonstellingen en zeer interesant.', 'Verschikkelijk episch en cool voor op mijn insta!', 'Een adembenemende tentoonstelling! Zeker een aanrader!', 'Leuk en leerzaam! Veel dingen geleerd en lol gehad.', 'Fantasische tentoonstelling! Super cool!', 'Wauw echt gewoon wauw! Super leuk en leuk voor alle leeftijden']
    let reviewTags = document.getElementsByClassName("rtext")
    


    for (let i = 0; i < 4; i++) { // Genereer 4 random reviews
        let rN = Math.floor(Math.random() * reviewList.length);
        let pick = reviewList[rN] + ": " + reviewContent[rN];
        reviewTags[i].innerText = pick
        reviewList.splice(rN, 1);
        reviewContent.splice(rN, 1);
    }




}
inputReview();

document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector('.slider');
    let currentIndex = 0;
  
    function showImage(index) {
      const newTransformValue = -index * 100 + '%';
      slider.style.transform = 'translateX(' + newTransformValue + ')';
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slider.children.length;
      showImage(currentIndex);
    }
  
    function prevSlide() {
      currentIndex = (currentIndex - 1 + slider.children.length) % slider.children.length;
      showImage(currentIndex);
    }
  
    setInterval(nextSlide, 3000);
  });
