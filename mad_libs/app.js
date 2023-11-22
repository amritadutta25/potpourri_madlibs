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
