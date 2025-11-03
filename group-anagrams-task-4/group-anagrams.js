function gropAnagrams(wordlist)
{
    if(!typeAsserter(wordlist,'Array'))
    {
        return 'Invalid argument'
    }
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
// console.log(gropAnagrams(["ate", "nat", "bat","eat", "tea", "tan"]))

function typeAsserter(...typelist)
{
    let i =0
    for(i=0;i<typelist.length;i+=2)
    {
        if(typelist[i+1].indexOf('|')!=-1)
        {
            let tlist = typelist[i+1].split('|')
            if(!(tlist.find((e)=>e==typeof typelist[i])))
            {
                // console.log(tlist)
                return false
            }
        }
        else if(Array.isArray(typelist[i])||typelist[i+1]=='Array')
        {
            if(Array.isArray(typelist[i])&&(typelist[i+1]!=='Array'))
            {
                return false
            }
        }
        else if(typeof typelist[i]!=typelist[i+1])
        {
            return false
        }
    }
    return true
}

function testProgram(callback,inputArray,expectedOutputArray)
{
  function checkEqual(obj1,obj2)
  {
      let i = 0
      let keys = Object.keys(obj2)
      if(obj1.length!=obj2.length)
      {
        return 'Not Equal'
      }
      for(let key in obj1)
      {
          if(typeof obj1[key]=='object'||typeof obj2[keys[i]]=='object')
          {
              if(typeof obj1[key]!='object'||typeof obj2[keys[i]]!='object')
              {
                  return 'Not Equal'
              }
              else
              {
                  if(checkEqual(obj1[key],obj2[keys[i]])!='Equal')
                  {
                      return 'Not Equal'
                  }
              }
              i++
          }
          else
          {
            if((typeof key=='number'||typeof obj1[key]=='number')&&(isNaN(key)||isNaN(obj1[key])))
            {
                if((typeof key=='number'||typeof obj1[key]=='number')&&(isNaN(key)&&!(isNaN(keys[i]))||isNaN(obj1[key])&&!isNaN(obj2[keys[i]])))
                {
                    // console.log('nan2')
                    return 'Not Equal'
                }
            }
            else if(key!=keys[i]||obj1[key]!=obj2[keys[i]])
            {
                return 'Not Equal'
            }
            i++
          }
      }
      return 'Equal'
  }
  for(let i = 0;i<inputArray.length;i++)
  {
    if(typeof expectedOutputArray[i]=='object')
    {
        // console.log(i,'obj')
        // console.log(i,...inputArray[i])
      if(checkEqual(callback(...inputArray[i]),expectedOutputArray[i])==='Equal')
      {
        console.log(`%c Passed`,'color:green; font-weight:700;font-size:25px')
      }
      else
      {
          console.log(`%c Failed`,'color:red; font-weight:700;font-size:25px')
      }
    }
    else{
        if(isNaN(callback(...inputArray[i])))
        {
            if(isNaN(expectedOutputArray[i]))
            {
                console.log(`%c Passed`,'color:green; font-weight:700;font-size:25px')
            }
            else
            {
                console.log(`%c Failed`,'color:red; font-weight:700;font-size:25px')
            }
        } 
      else if(callback(...inputArray[i])===expectedOutputArray[i])
      {
        console.log(`%c Passed`,'color:green; font-weight:700;font-size:25px')
      }
      else
      {
            console.log(`%c Failed`,'color:red; font-weight:700;font-size:25px')
      }
    }   
  }
}

let anagramList1 = [['care','race']]
let test1 = [['care','race']]

let anagramList2 = [['Hello','World']]
let test2 = [['Hello'],['World']]


let anagramList3 = [['AA','A']]
let test3 = [['AA'],['A']]

let anagramList4 = [['hi','hello']]
let test4 = [['hi'],['hello']]

let anagramList5 = [["care", "race", "acre", "dog", "god", "cat"]]
let test5 = [["care","race","acre"],["dog","god"],["cat"]]

let anagramList6 = [["hello", "hello"]]
let test6 = [["hello","hello"]]

let anagramList7 = [["a", "b", "c", "d", "e", "f","g"]]
let test7 = [["a"],["b"],["c"],["d"],["e"],["f"],["g"]]

let anagramList8 = [["aa", "aa", "bb", "bb", "cc", "cc"]]
let test8 = [["aa","aa"],["bb","bb"],["cc","cc"]]

//case insensitive
let anagramList9 = [["hello", "HELLO"]]
let test9 = [["hello","HELLO"]]

let anagramList10 = [["one", "two", "three", "four", "five", "six","seven"]]
let test10 = [["one"],["two"],["three"],["four"],["five"],["six"],["seven"]]

let anagramList11 = [["hello", "olleh", "world", "dlrow"]]
let test11 = [["hello","olleh"],["world","dlrow"]]

let anagramList12 = [["helloo", "hello"]]
let test12 = [["helloo"],["hello"]]

let anagramList13 = [["aa", "cc", "gg", "bb", "aa", "kk"]]
let test13 = [["aa","aa"],["cc"],["gg"],["bb"],["kk"]]

let anagramList14 = [["google", "GOOGLE", "microsoft", "MICROSOFT"]]
let test14 = [["google","GOOGLE"],["microsoft","MICROSOFT"]]

let anagramList15 = [["ghost", "host", "hostel", "lost", "most"]]
let test15 = [["ghost"],["host"],["hostel"],["lost"],["most"]]

testProgram(gropAnagrams,[anagramList1,anagramList2,anagramList3,anagramList4,anagramList5,
                          anagramList6,anagramList7,anagramList8,anagramList9,anagramList10,
                        anagramList11,anagramList12,anagramList13,anagramList14,anagramList15],
                        [test1,test2,test3,test4,test5,test6,test7,test8,test9,test10,
                            test11,test12,test13,test14,test15])