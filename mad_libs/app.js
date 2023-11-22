//-------------------
//MadLibs
//-------------------

// Building an Object
const words = {
    number: "",
    adjective: "",
    pluralNoun: "",
    adverb: "",
    anotherAdjective: ""
}

//Interact With the User to get input and display the final output
function startMadlib(words)
{   
    for (let key in words)
    {
        const response = prompt(`Give me a ${key}`)
        words[key] = response
    }
    
    //Create the Tech Startup MadLib Story!

    const final = `Once upon a time a group of ${words.number} General Assembly graduates got together and made a startup called ${words.adjective} Technologies. Their goal was to create smart ${words.pluralNoun}. They approached the challenge ${words.adverb} which ultimately lead them to ${words.anotherAdjective} fame.`
    
    alert(final)


}

startMadlib(words)
// console.log(words)


// to start the game again
const startResponse = prompt(`Do you want to start again? Enter y/n:`)

if (startResponse === 'y')
{   
    startMadlib(words)
}
if (startResponse === 'n')
{
    alert("End of game")
}
if (response !== 'y' && response !=='n')
{
    alert("Invalid reponse, please enter 'y' or 'n'")
}

// Ques - this code starts the game only once, how can I keep on asking the user if they want to start again until they press 'n' to stp the game?