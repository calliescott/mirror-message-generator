// create a variable called mirrorMessages that includes all of the mirror message objects, that each contain an array of objects specifing their types

const mirrorMessages = {
    career: [
        {
            personality: 'boho',
            length: 'short',
            image: '../images/mirrorMessageImage.png'
        },
        {
            personality: 'boho',
            length: 'long',
            image: '../images/mirrorMessageImage.png'
        },
        {
            personality: 'funny',
            length: 'short',
            image: '../images/mirrorMessageImage.png'
        },
        {
            personality: 'funny',
            length: 'long',
            image: '../images/mirrorMessageImage.png'
        },
        {
            personality: 'serious',
            length: 'short',
            image: '../images/mirrorMessageImage.png'
        },
        {
            personality: 'serious',
            length: 'long',
            image: '../images/mirrorMessageImage.png'
        },
        {
            personality: 'sarcastic',
            length: 'short',
            image: '../images/mirrorMessageImage.png'
        },
        {
            personality: 'sarcastic',
            length: 'long',
            image: '../images/mirrorMessageImage.png'
        }
    ], //closing the career array of objects
    relationships: [
        {
            personality: 'boho',
            length: 'short',
            image: '../images/mirrorMessageImage.png'
        },
        {
            personality: 'boho',
            length: 'long',
            image: '../images/mirrorMessageImage.png'
        },
        {
            personality: 'funny',
            length: 'short',
            image: '../images/mirrorMessageImage.png'
        },
        {
            personality: 'funny',
            length: 'long',
            image: '../images/mirrorMessageImage.png'
        },
        {
            personality: 'serious',
            length: 'short',
            image: '../images/mirrorMessageImage.png'
        },
        {
            personality: 'serious',
            length: 'long',
            image: '../images/mirrorMessageImage.png'
        },
        {
            personality: 'sarcastic',
            length: 'short',
            image: '../images/mirrorMessageImage.png'
        },
        {
            personality: 'sarcastic',
            length: 'long',
            image: '../images/mirrorMessageImage.png'
        }
    ], //closing the relationship array of objects
    health: [
        {
            personality: 'boho',
            length: 'short',
            image: '../images/mirrorMessageImage.png'
        },
        {
            personality: 'boho',
            length: 'long',
            image: '../images/mirrorMessageImage.png'
        },
        {
            personality: 'funny',
            length: 'short',
            image: '../images/mirrorMessageImage.png'
        },
        {
            personality: 'funny',
            length: 'long',
            image: '../images/mirrorMessageImage.png'
        },
        {
            personality: 'serious',
            length: 'short',
            image: '../images/mirrorMessageImage.png'
        },
        {
            personality: 'serious',
            length: 'long',
            image: '../images/mirrorMessageImage.png'
        },
        {
            personality: 'sarcastic',
            length: 'short',
            image: '../images/mirrorMessageImage.png'
        },
        {
            personality: 'sarcastic',
            length: 'long',
            image: '../images/mirrorMessageImage.png'
        }
    ], //closing the health array of objects
    general:[
        {
            personality: 'boho',
            length: 'short',
            image: '../images/mirrorMessageImage.png'
        },
        {
            personality: 'boho',
            length: 'long',
            image: '../images/mirrorMessageImage.png'
        },
        {
            personality: 'funny',
            length: 'short',
            image: '../images/mirrorMessageImage.png'
        },
        {
            personality: 'funny',
            length: 'long',
            image: '../images/mirrorMessageImage.png'
        },
        {
            personality: 'serious',
            length: 'short',
            image: '../images/mirrorMessageImage.png'
        },
        {
            personality: 'serious',
            length: 'long',
            image: '../images/mirrorMessageImage.png'
        },
        {
            personality: 'sarcastic',
            length: 'short',
            image: '../images/mirrorMessageImage.png'
        },
        {
            personality: 'sarcastic',
            length: 'long',
            image: '../images/mirrorMessageImage.png'
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

    const userMood = $('input[name=mood]:checked').val(); //used jQuery to select the input type selected by the user for the first question, in this case which mood they are selecting.
    //console.log(userMood); //printing the selected mood to the console to confirm it works

    const userLength = $('input[name=length]:checked').val(); //used jQuery to select the input type selected by the user for the first question, in this case which mood they are selecting.
    //console.log(userLength); //printing the selected mood to the console to confirm it works

    //console.log(userTheme, userMood, userLength); //printing the user's selection for theme, mood and length in one string to confirm it works.

    // attaching the users theme selection to the variable selectedTheme.
    // ie This means that mirrorMessages[career] is equal to the user selection of userTheme = 'career' and now stored inside the selectedTheme variable
    //it will print out an array of all of the 'career' objects (8 total)
    const selectedTheme = mirrorMessages[userTheme];
    console.log(selectedTheme); //checking if the above variable (selectedTheme) prints out an array of options for that selected input.

    // We now have an array of all theme objects.
    // We want to filter out the personalities that do not match what the user's selected theme is.
    // Creating a new empty array to store the theme > Mood options into.
    const filteredThemeOptions = [];

    //Creating a loop that will run through all relevant theme objects in the theme array to check for matches with the user's selected mood;

});//End the function running when the user submits select.

