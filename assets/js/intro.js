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
        introSection.classList.add('intro-hidden');
    }, 2300);
}
