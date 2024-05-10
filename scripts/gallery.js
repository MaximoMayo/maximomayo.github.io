const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFiles = [
    "ssn1.png",
    "ssn2.png",
    "ssn3.png",
    "ssn4.png",
    "images/pic5.jpg",
    ]
/* Declaring the alternative text for each image file */

const altText = {
    //had to change from normal number names to a zero based to get the index to make sense
    pictureZero: "Aerial View of the Horseshoe Bend",
    pictureOne: "Dramatic view of the waterfall",
    pictureTwo: "Towering danger of many cacti",
    pictureThree: "Mystical form of the side of the canyon",
    pictureFour: "Wide view of waterfall canyon"
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