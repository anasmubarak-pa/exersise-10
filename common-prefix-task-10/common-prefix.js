function longestCommonPrefix(strings)
{
    let commonString = ''
    for(let i=0;i<strings[0].length;i++)
    {
        let indexString = strings[0]
        for(let word of strings)
        {
            // console.log(indexString[i],word[i])
            if(!(indexString[i]==word[i]))
            {
                return commonString
            }
        }
        commonString+=indexString[i]
    }
    return commonString
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]))
console.log(longestCommonPrefix(["dog", "racecar", "car"]))
console.log(longestCommonPrefix(["flexing", "flex", "flexible"]))
console.log(longestCommonPrefix(["flower", "flower", "flower"]))