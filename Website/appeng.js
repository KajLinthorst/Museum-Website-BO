console.log("Dev | Javascript App loaded")


function inputReview(){
    let reviewList = ['Great', 'Epic', 'Breathtaking', 'Educational','Fantastic','Super']; 
    let reviewContent = ['A very fun museum! Very interesting and a great exhibition', 'Incredibly epic and cool to place on my insta!', 'A breathtaking exhibition! Highly recommended!', 'Fun and educational! Learned a lot of things and had fun.', 'Fantastic exhibition! Super cool!', 'Wow really just wow! Super fun and fun for all ages!']
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
