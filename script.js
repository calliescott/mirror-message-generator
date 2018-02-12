// create a variable called mirrorMessages that includes all of the mirror message objects, that each contain an array of objects specifing their types
const mirrorApp = {};

mirrorApp.mirrorMessages = {
    career: [
        {   
            theme: 'career',
            mood: 'boho',
            length: 'short',
            image: 'images/career-boho-short.png',
            alt: 'appropriate alt tag for image'
        },
        {
            theme: 'career',
            mood: 'boho',
            length: 'long',
            image: 'images/career-boho-long.png',
            alt: 'appropriate alt tag for image'
        },
        {
            theme: 'career',
            mood: 'funny',
            length: 'short',
            image: 'images/career-funny-short.png',
            alt: 'appropriate alt tag for image'
        },
        {
            theme: 'career',
            mood: 'funny',
            length: 'long',
            image: 'images/career-funny-long.png',
            alt: 'appropriate alt tag for image'
        },
        {
            theme: 'career',
            mood: 'serious',
            length: 'short',
            image: 'images/career-serious-short.png',
            alt: 'appropriate alt tag for image'
        },
        {
            theme: 'career',
            mood: 'serious',
            length: 'long',
            image: 'images/career-serious-long.png',
            alt: 'appropriate alt tag for image'
        },
        {
            theme: 'career',
            mood: 'other',
            length: 'short',
            image: 'images/career-other-short.png',
            alt: 'appropriate alt tag for image'
        },
        {
            theme: 'career',
            mood: 'other',
            length: 'long',
            image: 'images/career-other-long.png',
            alt: 'appropriate alt tag for image'
        }
    ], //closing the career array within the mirrorApp.mirrorMessages object
    relationships: [
        {
            theme: 'relationships',
            mood: 'boho',
            length: 'short',
            image: 'images/relationships-boho-short.png',
            alt: 'appropriate alt tag for image'
        },
        {
            theme: 'relationships',
            mood: 'boho',
            length: 'long',
            image: 'images/relationships-boho-long.png',
            alt: 'appropriate alt tag for image'
        },
        {
            theme: 'relationships',
            mood: 'funny',
            length: 'short',
            image: 'images/relationships-funny-short.png',
            alt: 'appropriate alt tag for image'
        },
        {
            theme: 'relationships',
            mood: 'funny',
            length: 'long',
            image: 'images/relationships-funny-long.png',
            alt: 'appropriate alt tag for image'
        },
        {
            theme: 'relationships',
            mood: 'serious',
            length: 'short',
            image: 'images/relationships-serious-short.png',
            alt: 'appropriate alt tag for image'
        },
        {
            theme: 'relationships',
            mood: 'serious',
            length: 'long',
            image: 'images/relationships-serious-long.png',
            alt: 'appropriate alt tag for image'
        },
        {
            theme: 'relationships',
            mood: 'other',
            length: 'short',
            image: 'images/relationships-other-short.png',
            alt: 'appropriate alt tag for image'
        },
        {
            theme: 'relationships',
            mood: 'other',
            length: 'long',
            image: 'images/relationships-other-long.png',
            alt: 'appropriate alt tag for image'
        }
    ], //closing the relationship array within the  mirrorApp.mirrorMessages object
    health: [
        {
            theme: 'health',
            mood: 'boho',
            length: 'short',
            image: 'images/health-boho-short.png',
            alt: 'appropriate alt tag for image'
        },
        {
            theme: 'health',
            mood: 'boho',
            length: 'long',
            image: 'images/health-boho-long.png',
            alt: 'appropriate alt tag for image'
        },
        {
            theme: 'health',
            mood: 'funny',
            length: 'short',
            image: 'images/health-funny-short.png',
            alt: 'appropriate alt tag for image'
        },
        {
            theme: 'health',
            mood: 'funny',
            length: 'long',
            image: 'images/health-funny-long.png',
            alt: 'appropriate alt tag for image'
        },
        {
            theme: 'health',
            mood: 'serious',
            length: 'short',
            image: 'images/health-serious-short.png',
            alt: 'appropriate alt tag for image'
        },
        {
            theme: 'health',
            mood: 'serious',
            length: 'long',
            image: 'images/health-serious-long.png',
            alt: 'appropriate alt tag for image'
        },
        {
            theme: 'health',
            mood: 'other',
            length: 'short',
            image: 'images/health-other-short.png',
            alt: 'appropriate alt tag for image'
        },
        {
            theme: 'health',
            mood: 'other',
            length: 'long',
            image: 'images/health-other-long.png',
            alt: 'appropriate alt tag for image'
        }
    ], //closing the health array within the mirrorApp.mirrorMessages object
    general:[
        {
            theme: 'general',
            mood: 'boho',
            length: 'short',
            image: 'images/general-boho-short.png',
            alt: 'appropriate alt tag for image'
        },
        {
            theme: 'general',
            mood: 'boho',
            length: 'long',
            image: 'images/general-boho-long.png',
            alt: 'appropriate alt tag for image'
        },
        {
            theme: 'general',
            mood: 'funny',
            length: 'short',
            image: 'images/general-funny-short.png',
            alt: 'appropriate alt tag for image'
        },
        {
            theme: 'general',
            mood: 'funny',
            length: 'long',
            image: 'images/general-funny-long.png',
            alt: 'appropriate alt tag for image'
        },
        {
            theme: 'general',
            mood: 'serious',
            length: 'short',
            image: 'images/general-serious-short.png',
            alt: 'appropriate alt tag for image'
        },
        {
            theme: 'general',
            mood: 'serious',
            length: 'long',
            image: 'images/general-serious-long.png',
            alt: 'appropriate alt tag for image'
        },
        {
            theme: 'general',
            mood: 'other',
            length: 'short',
            image: 'images/general-other-short.png',
            alt: 'appropriate alt tag for image'
        },
        {
            theme: 'general',
            mood: 'other',
            length: 'long',
            image: 'images/general-other-long.png',
            alt: 'appropriate alt tag for image'
        }
    ] //closing the general array within the mirrorApp.mirrorMessages object
}; //Closing the mirrorApp.mirrorMessages object

//User answers questions
// Q1: determines the topic (Career, Relationships, Health or General)
// Q2: determines the tone of voice (Boho, Funny, Serious or Sarcastic)
// Q3: determines the length (Short or Long)

//when the form is submitted, grab the user's selection, using the on method and inserting a callback function.
mirrorApp.events = function () {
    
    $('a').smoothScroll({
    });

    

    //insert code that refreshes the page on click
    $('.next-four').on('click', function (event) {
        window.location.reload(true);
    })


    $('form').on('submit', function(event) {

        //prevent the page from refreshing on submit event
        event.preventDefault(); 
        
        //using jQuery to select the theme, mood and length inputs
        //store this data in variables.
        mirrorApp.userTheme = $('input[name=theme]:checked').val(); 
        mirrorApp.userMood = $('input[name=mood]:checked').val(); 
        mirrorApp.userLength = $('input[name=length]:checked').val(); 


        // attaching the users theme selection to the variable selectedTheme.
        // ie This means that mirrorMessages[career] is equal to the user selection of userTheme = 'career' and now stored inside the selectedTheme variable
        //it will print out an array of all of the 'career' objects (8 total)
        mirrorApp.selectedTheme = mirrorApp.mirrorMessages[mirrorApp.userTheme];
        //console.log(mirrorApp.selectedTheme); //checking if the above variable (selectedTheme) prints out an array of options for that selected input. 

        // We now have an array of all theme objects (mirrorApp.selectedTheme).
        // We want to filter out the personalities that do not match what the user's selected theme is.
        // Creating a new empty array to store the theme + mood into.
        mirrorApp.themeMood = [];

        //Creating a loop that will run through all relevant theme objects in the theme array to check for exact matches with the inputted mood
        for (let i = 0; i < mirrorApp.selectedTheme.length; i = i + 1) {
            //Storing the current version of the selection on a new variable called mirrorApp.currentSelection.
            mirrorApp.currentSelection = mirrorApp.selectedTheme[i];
            //console.log(mirrorApp.currentSelection);
            //If the current iteration's personality property matches the userMood selection by the user, then we want to push it into the filteredThemeOptions array for storage.
            if (mirrorApp.currentSelection.mood === mirrorApp.userMood) {
                mirrorApp.themeMood.push(mirrorApp.currentSelection);
            }
        }

        // Creating a new empty array to store the theme + mood + length into.
        mirrorApp.themeMoodLength = [];
        //Creating a loop that will run through all relevant theme + mood matches to check for exact matches with the inputted length
        for (let i = 0; i < mirrorApp.themeMood.length; i = i + 1) {
            mirrorApp.updatedSelection = mirrorApp.themeMood[i];
            if (mirrorApp.updatedSelection.length === mirrorApp.userLength) {
                mirrorApp.themeMoodLength.push(mirrorApp.updatedSelection);
                console.log(mirrorApp.themeMoodLength);
            }
        }

        //creating a variable to hold the selected mirror messages image path for later.
        mirrorApp.img = mirrorApp.themeMoodLength[0].image;
        //creating a variable to hold the selected mirror messages alt tag content for later.
        mirrorApp.alt = mirrorApp.themeMoodLength[0].alt;
        
        $('.toggle').addClass("hide-form"); //  this code adds the class of hidden on the form section when the form is submitted. 
        $('.hidden').removeClass("hidden"); // this code removes the class of hidden on the.results section.
        $('.box-img').prepend(`<img id="image" src="${mirrorApp.img}" alt="${mirrorApp.alt}">`); //this code adds an img element to the div with a class of box including the specic alt tag for the image. Using this to add our mirror message image that the user has selected.
    });//Close the function running when the user submits select.
}//End of mirrorApp.events(); function 


//Organzing all functions needed to run on page load into one function.
mirrorApp.init = function () {
    mirrorApp.events(); //calling the events function. 
}

//Calling mirror.App(); to run on page load inside the document ready function.
$(function () {
    mirrorApp.init();  
});
