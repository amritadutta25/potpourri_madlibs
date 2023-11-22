//-------------------
//setAlarm
//-------------------

function setAlarm(employed, vacationing)
{   
    // if employed=true and vacationing=false
    if (employed & !vacationing){
        return true
    }
    else{
        return false
    }
}

// console.log(setAlarm(true, true)) // => returns false
// console.log(setAlarm(false, false)) // => returns false
// console.log(setAlarm(false, true)) // => returns false
// console.log(setAlarm(true, false)) // => returns true

//-------------------
//Count Odd Numbers
//-------------------

function oddNumberCount(num)
{   
    let counter = 0 // counter to count no. of positive odd numbers
    for (let i=1; i<num ; i++) // checks numbers from 1 to num-1
    {
        if (i%2 !== 0) // condition to check if number is odd
        {
            counter++ // increment the counter
        }
    }
    return counter
}

// console.log(oddNumberCount(7))
// console.log(oddNumberCount(16))

//-------------------
//Disemvoweling Trolls
//-------------------

function trollsBeGone(line)
{   
    // replace vowels with empty string to essentially remove them
    // string.replace takes two arguments - first is the string or regular expression that is a pattern to match what we want to replace, second is the string replace the matching pattern
    //here, /[aeiou]/gi
    // the /[aeiou]/ part - tells to look for all characters inside [], /.../ says it is the start and end of regular expression
    //g tells to match all occurrences of a vowel in the string and not just the first occurrence
    // i tells to search for the pattern in a non case-sensitive way

    line = line.replace(/[aeiou]/gi, '')
    return line
}
// console.log(trollsBeGone("This website is for losers LOL"))

//-------------------
//Bank Account Summary
//-------------------

const bankInfo = {
    savings: 600,
    checking: 800,
    moneyMarket: 200,
    creditCard: -2000
}

function bankAccountSummary(bankinfo)
{   
    let total = 0
    // using for ...in loop for getting key-value from the object
    for (let key in bankinfo)
    {
        total = total + bankinfo[key]
    }
    return total
}
const bankTotal = bankAccountSummary(bankInfo)
// console.log(bankTotal)

function inTheRed(total)
{
    if (total < 0)
    {
        return true
    }
    else {
        return false
    }
}
// console.log(inTheRed(bankTotal))


