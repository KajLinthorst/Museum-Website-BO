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



  
