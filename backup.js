// create a variable called mirrorMessages that includes all of the mirror message objects, that each contain an array of objects specifing their types
const mirrorApp = {};

mirrorApp.mirrorMessages = {
    career: [
        {
            personality: 'boho',
            length: 'short',
            img: {
                src: 'mirrorMessageImage.png',
                alt: 'appropriate alt tag for image'
            },
        },
        {
            personality: 'boho',
            length: 'long',
            image: 'mirrorMessageImage.png',
            alt: 'appropriate alt tag for image'
        },
        {
            personality: 'funny',
            length: 'short',
            image: 'mirrorMessageImage.png',
            alt: 'appropriate alt tag for image'
        },
        {
            personality: 'funny',
            length: 'long',
            image: 'mirrorMessageImage.png',
            alt: 'appropriate alt tag for image'
        },
        {
            personality: 'serious',
            length: 'short',
            image: 'mirrorMessageImage.png',
            alt: 'appropriate alt tag for image'
        },
        {
            personality: 'serious',
            length: 'long',
            image: 'mirrorMessageImage.png',
            alt: 'appropriate alt tag for image'
        },
        {
            personality: 'sarcastic',
            length: 'short',
            image: 'mirrorMessageImage.png',
            alt: 'appropriate alt tag for image'
        },
        {
            personality: 'sarcastic',
            length: 'long',
            image: 'mirrorMessageImage.png',
            alt: 'appropriate alt tag for image'
        }
    ], //closing the career array of objects
    relationships: [
        {
            personality: 'boho',
            length: 'short',
            image: 'mirrorMessageImage.png',
            alt: 'appropriate alt tag for image'
        },
        {
            personality: 'boho',
            length: 'long',
            image: 'mirrorMessageImage.png',
            alt: 'appropriate alt tag for image'
        },
        {
            personality: 'funny',
            length: 'short',
            image: 'mirrorMessageImage.png',
            alt: 'appropriate alt tag for image'
        },
        {
            personality: 'funny',
            length: 'long',
            image: 'mirrorMessageImage.png',
            alt: 'appropriate alt tag for image'
        },
        {
            personality: 'serious',
            length: 'short',
            image: 'mirrorMessageImage.png',
            alt: 'appropriate alt tag for image'
        },
        {
            personality: 'serious',
            length: 'long',
            image: 'mirrorMessageImage.png',
            alt: 'appropriate alt tag for image'
        },
        {
            personality: 'sarcastic',
            length: 'short',
            image: 'mirrorMessageImage.png',
            alt: 'appropriate alt tag for image'
        },
        {
            personality: 'sarcastic',
            length: 'long',
            image: 'mirrorMessageImage.png',
            alt: 'appropriate alt tag for image'
        }
    ], //closing the relationship array of objects
    health: [
        {
            personality: 'boho',
            length: 'short',
            image: 'mirrorMessageImage.png',
            alt: 'appropriate alt tag for image'
        },
        {
            personality: 'boho',
            length: 'long',
            image: 'mirrorMessageImage.png',
            alt: 'appropriate alt tag for image'
        },
        {
            personality: 'funny',
            length: 'short',
            image: 'mirrorMessageImage.png',
            alt: 'appropriate alt tag for image'
        },
        {
            personality: 'funny',
            length: 'long',
            image: 'mirrorMessageImage.png',
            alt: 'appropriate alt tag for image'
        },
        {
            personality: 'serious',
            length: 'short',
            image: 'mirrorMessageImage.png',
            alt: 'appropriate alt tag for image'
        },
        {
            personality: 'serious',
            length: 'long',
            image: 'mirrorMessageImage.png',
            alt: 'appropriate alt tag for image'
        },
        {
            personality: 'sarcastic',
            length: 'short',
            image: 'mirrorMessageImage.png',
            alt: 'appropriate alt tag for image'
        },
        {
            personality: 'sarcastic',
            length: 'long',
            image: 'mirrorMessageImage.png',
            alt: 'appropriate alt tag for image'
        }
    ], //closing the health array of objects
    general:[
        {
            personality: 'boho',
            length: 'short',
            image: 'mirrorMessageImage.png',
            alt: 'appropriate alt tag for image'
        },
        {
            personality: 'boho',
            length: 'long',
            image: 'mirrorMessageImage.png',
            alt: 'appropriate alt tag for image'
        },
        {
            personality: 'funny',
            length: 'short',
            image: 'mirrorMessageImage.png',
            alt: 'appropriate alt tag for image'
        },
        {
            personality: 'funny',
            length: 'long',
            image: 'mirrorMessageImage.png',
            alt: 'appropriate alt tag for image'
        },
        {
            personality: 'serious',
            length: 'short',
            image: 'mirrorMessageImage.png',
            alt: 'appropriate alt tag for image'
        },
        {
            personality: 'serious',
            length: 'long',
            image: 'mirrorMessageImage.png',
            alt: 'appropriate alt tag for image'
        },
        {
            personality: 'sarcastic',
            length: 'short',
            image: 'mirrorMessageImage.png',
            alt: 'appropriate alt tag for image'
        },
        {
            personality: 'sarcastic',
            length: 'long',
            image: 'mirrorMessageImage.png',
            alt: 'appropriate alt tag for image'
        }
    ] //closing the general array of objects
}; //Closing the mirrorMessages variable

//test print the mirrorMeesage object to the console:
//console.log(mirrorMessages);


//User answers questions
// Question one answer determines the topic (Career, Relationships, Health or General)
// Question two answer determines the tone of voice (Boho, Funny, Serious or Sarcastic)
// Questions three answer determines the length of quote (Short or Long)

//when the form is submitted, grab the user's selection, using the on method and inserting a callback function.
$('form').on('submit', function(event) {
    event.preventDefault(); //prevents the submitting of the form from refreshing the page
    //console.log("It works!"); //confirming this works in the console.
    const userTheme = $('input[name=theme]:checked').val(); //used jQuery to select the input type selected by the user for the first question, in this case which theme they are selecting.
    //console.log(userTheme); //printing the selected theme to the console to confirm it works

    const userMood = $('input[name=mood]:checked').val(); //used jQuery to select the input type selected by the user for the second question, in this case which mood they are selecting.
    //console.log(userMood); //printing the selected mood to the console to confirm it works

    const userLength = $('input[name=length]:checked').val(); //used jQuery to select the input type selected by the user for the third question, in this case which length they are selecting.
    //console.log(userLength); //printing the selected mood to the console to confirm it works

    //console.log(userTheme, userMood, userLength); //printing the user's selection for theme, mood and length in one string to confirm it works.

    // attaching the users theme selection to the variable selectedTheme.
    // ie This means that mirrorMessages[career] is equal to the user selection of userTheme = 'career' and now stored inside the selectedTheme variable
    //it will print out an array of all of the 'career' objects (8 total)
    const selectedTheme = mirrorMessages[userTheme];
    //console.log(selectedTheme); //checking if the above variable (selectedTheme) prints out an array of options for that selected input. 

    // We now have an array of all theme objects.
    // We want to filter out the personalities that do not match what the user's selected theme is.
    // Creating a new empty array to store the theme > Mood options into.
    const filteredThemeOptions = [];
    const filteredThemeMoodOptions =[];
    //console.log(filteredThemeOptions); //checking to see if this is working by printing to the console.

    //Creating a loop that will run through all relevant theme objects in the theme array to check for exact matches with the user's selected mood AND their selected length properties.
    for (let i = 0; i < selectedTheme.length; i = i + 1) {
        //Storing the current version of the selection on a new variable called currentSelection.
        const currentSelection = selectedTheme[i];
        //If the current iteration's personality property matches the userMood selection by the user, then we want to push it into the filteredThemeOptions array for storage.
        if (currentSelection.personality === userMood && currentSelection.length === userLength) {
            filteredThemeOptions.push(currentSelection);
            console.log("Its working!");
        }
    }

    console.log(filteredThemeOptions);

    $('.hidden').removeClass(`hidden`); // this code removes the class of hidden-title form the h2 of the .results section.
    $('.box').prepend('<img src="images/mirrorMessageImage.png">'); //this code adds an img element to the div with a class of box including the specic alt tag for the image. Using this to add our mirror message image that the user has selected.

    
});//End the function running when the user submits select.



// $('.hidden').removeClass(`hidden`); // this code removes the class of hidden-title form the h2 of the .results section.
        // $('.box').prepend(`<img src="${mirrorApp.filteredThemeOptions.image}" alt="${mirrorApp.filteredThemeOptions.alt}">`); //this code adds an img element to the div with a class of box including the specic alt tag for the image. Using this to add our mirror message image that the user has selected.