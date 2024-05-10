const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const explaination = document.getElementById('.explaination');


const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFiles = [
    "/CIS166AA/images/ProjectOne.png",
    "/CIS166AA/images/ProjectTwo.png",
    "/CIS166AA/images/ProjectThree.png",
    "/CIS166AA/images/ProjectFour.png",
    "/CIS166AA/images/ProjectFive.png",
    ]
/* Declaring the alternative text for each image file */

const altText = {
    //had to change from normal number names to a zero based to get the index to make sense
    pictureZero: "Moving dot; keybind event",
    pictureOne: "Updating cart; multiple events",
    pictureTwo: "FizzBuzz; if statements",
    pictureThree: "Text change; click event",
    pictureFour: "Color change; click event"
}

const descriptionPara = {
    pictureZero: "This exercises focuses on the realtime changes JavaScript can have on a website. " 
    + "With the pre-established canvas provided, I had to use add an EventListener so that pressing one of the "
    + "WASD keys would change the the XY variables. I had trouble with this exercise for a while before realizing I had "
    + "drawCircle in my function so it can display on the screen.",
    pictureOne: "This exercise focuses on the real life implementation of updating the HTML throught JavaScript by using DOM. "
    + "Using the basics of createElement, appendChild, and remove; DOM functions can really help with recording and display of "
    + "interactive elements.",
    pictureTwo: "",
    pictureThree: "",
    pictureFour: ""
}
/* Looping through images */

//forEach used instead of a for loop
imageFiles.forEach((filename,index) => {
    const newImage = document.createElement('img');
    //use the value in the array with the filename arguement
    newImage.setAttribute('src', filename);
    //use the index number of the array to 
    newImage.setAttribute('alt', altText[`picture${index}`]);
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', () => {
        displayedImage.setAttribute('src', filename);
        displayedImage.setAttribute('alt', altText[`picture${index}`])
        explaination.textContent = descriptionPara[`picture${index}`];
    })
})

/* Wiring up the Darken/Lighten button */

btn.addEventListener("click", () =>{
    //had to change from className to classList
    overlay.classList.toggle('darken')

    //access to the class
    const currentClass = btn.getAttribute('class');

    //check the value of the class with if and proceed to change it
    if(currentClass === 'dark') {
        //change class att
        btn.setAttribute('class','light');
        //then text
        btn.textContent = 'Lighten';
        //then the overlay to darken
        overlay.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    }
    //no need for else if when there is only one other option
    else{
        btn.setAttribute('class','dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgb(0 0 0 / 0%)';
    }
    
})