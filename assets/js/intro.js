//Khi đang ở màn hình intro thì không scroll được
// var body = document.getElementsByTagName('body')
// body[0].classList.add('can-not-scroll')


var introSection = document.querySelector('.intro'),
    nextButton = introSection.querySelector('.intro__next');

nextButton.onclick = function(e){
    e.preventDefault();

    var partOne = introSection.querySelector('.intro__part-1');
    var partTwo = introSection.querySelector('.intro__part-2');
    var partThree = introSection.querySelector('.intro__part-3');

    partOne.classList.add('slide-out-1');
    partTwo.classList.add('slide-out-2');
    partThree.classList.add('slide-out-3');
    
    setTimeout(() => {
        console.log("removed");
        //Sau khi ấn explore thì cho scroll
        body[0].classList.remove('can-not-scroll')
        introSection.classList.add('intro-hidden');
    }, 2300);
}
