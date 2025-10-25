function gropAnagrams(wordlist)
{
    let wordMap = new Map()
    for(let word of wordlist)
    {
        let wordArray = new Array(26).fill(0)
        for(let letters of word.toLowerCase())
        {
            // console.log('a','a'.charCodeAt(0)-97)
            // console.log(letters,letters.charCodeAt(0)-97)
            wordArray[letters.charCodeAt(0)-97]++
        }
        // console.log(wordArray)
        // console.log((wordMap.get(String(wordArray))||[]).push(2))
        let currentList = wordMap.get(String(wordArray))||[]
        currentList.push(word)
        wordMap.set(String(wordArray),currentList)
    }
    return Array.from(wordMap.values()).sort((a,b)=>b.length-a.length)
    // return wordMap
}

// console.log(gropAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
console.log(gropAnagrams(["ate", "nat", "bat","eat", "tea", "tan"]))