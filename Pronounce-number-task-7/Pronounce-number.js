function numberToText(num,rflag=0)
{
    if(!typeAsserter(num,'number',rflag,'number'))
    {
        return 'Invalid argument'
    }
    let lookUp = {
        0:'Zero',1:'One',2:'Two',3:"Three",4:'Four',5:'Five',6:'Six',7:'Seven',
        8:'Eight',9:'Nine',10:'Ten',11:"Eleven",12:'Twelve',13:'Thirteen',14:'Fourteen',15:'Fifteen',
        16:'Sixteen',17:'Seventeen',18:'Eighteen',19:"Nineteen",20:'Twenty',30:'Thiry',40:'Fourty',50:'Fifty',
        60:'Sixty',70:'Seventy',80:'Eighty',90:"Ninety",100:'Hundred',1000:'Thousand',100000:'Lakh',10000000:'Crore',
    }
    let sizelookup = {
        2:10,3:100,4:1000,5:1000,6:100000,7:100000,8:10000000
    }
    let initNum = String(num)

    let returnString = ''

    let i = 0
    while(num>0)
    {
        // console.log('i,num',i,num)
        if(lookUp[num]&&num<100)
        {
            returnString+=' '+lookUp[num]
            num-=num
            // console.log(initNum[initNum.length-1])
            //here check XOR condition both not 0 nut 1 zero and seven and seventy else is for common and 25 type of checks
            let oneZero = initNum[initNum.length-1]=='0'||initNum[initNum.length-2]=='0'
            let notBothZero = !(initNum[initNum.length-1]=='0'&&initNum[initNum.length-2]=='0')
            let lessthan19 = Number(initNum.slice(initNum.length-2,initNum.length))<19
            // console.log(oneZero,notBothZero)
            // console.log(initNum[initNum.length-3])
            let passingCondition = (initNum[initNum.length-3]!='0'&&initNum[initNum.length-3]!=undefined)
            if(!rflag&&initNum>100&&!(!notBothZero&&initNum[initNum.length-3]=='0'))
            {
                returnString = returnString.split(' ')
                if((oneZero&&notBothZero)||lessthan19)
                {
                    returnString.splice(returnString.length-1,0,'and')
                }
                else{
                    returnString.splice(returnString.length-2,0,'and')
                }
                returnString = returnString.reduce((a,b)=>a+b+' ')
            }
            // console.log(returnString)
            return returnString.trim()
        }
        let numBase = sizelookup[String(num).length]
        //numbase 400-100
        let baseCount = num-(num%numBase)
        //base count 420 - 400
        let frontTail = Math.floor(num/numBase)
        // console.log('base count',baseCount)
        // console.log('front',((num/numBase)-(num/numBase)%1))
        if(String(baseCount).length==2)
        {
            returnString+=' '+lookUp[baseCount]
        }
        else{
            if(String(frontTail).length>1)
            {
                returnString+=' '+numberToText(frontTail,1) +' '+lookUp[numBase]
            }
            else{
                returnString+=' '+lookUp[frontTail] +' '+lookUp[numBase]
            }
        }
        num-=baseCount
    }
    return returnString.trim()
}

console.log(numberToText(100000))
//114
// console.log(numberToText(43))
// console.log(numberToText(14))
// console.log(numberToText(140))
// console.log(numberToText(1100))
// console.log(numberToText(114))
// console.log(numberToText(121))
// console.log(numberToText(200))
// console.log(numberToText(21144))
// console.log(numberToText(344))
// console.log(numberToText(5633024))
// console.log(numberToText(65433024))
// console.log(numberToText(65433024))
// console.log(numberToText(10100000))

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
            if(!Array.isArray(typelist[i])||(typelist[i+1]!=='Array'))
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
    function getcopy(element){
        return JSON.parse(JSON.stringify(element))
    }
  function checkEqual(obj1,obj2)
  {
      let i = 0
      let keys = Object.keys(obj2)
      if(Object.keys(obj1).length!=Object.keys(obj2).length)
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
            if((typeof key=='number'&&isNaN(key)||(typeof obj1[key]=='number')&&isNaN(obj1[key])))
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
      if(checkEqual(callback(...getcopy(inputArray[i])),expectedOutputArray[i])==='Equal')
      {
        console.log(`%c Test ${i+1} Passed`,'color:green; font-weight:700;font-size:25px')
      }
      else
      {
        console.log(`%c Test ${i+1} Failed`,'color:red; font-weight:700;font-size:25px')
      }
    }
    else{
        if((typeof callback(...getcopy(inputArray[i]))=='number')&&(isNaN(callback(...getcopy(inputArray[i])))))
        {
            if(isNaN(expectedOutputArray[i]))
            {
                console.log(`%c Test ${i+1} Passed`,'color:green; font-weight:700;font-size:25px')
            }
            else
            {
                console.log(`%c Test ${i+1} Failed`,'color:red; font-weight:700;font-size:25px')
            }
        } 
        else if((callback(...getcopy(inputArray[i])))===expectedOutputArray[i])
        {
            console.log(`%c Test ${i+1} Passed`,'color:green; font-weight:700;font-size:25px')
        }
        else
        {
            console.log(`%c Test ${i+1} Failed`,'color:red; font-weight:700;font-size:25px')
        }
    }   
  }
}

// console.log(pronounceNumber())
let input1 = [723]
let ouput1 = 'Seven Hundred and Twenty Three'
let input2 = [{},{},2]
let ouput2 = 'Invalid argument'
let input3 = [1]
let ouput3 = 'One'
let input4 = [2359]
let ouput4 = 'Two Thousand Three Hundred and Fifty Nine'
let input5 = [99999]
let ouput5 = 'Ninety Nine Thousand Nine Hundred and Ninety Nine'
let input6 = [60709]
let ouput6 = 'Sixty Thousand Seven Hundred and Nine'
let input7 = [50585]
let ouput7 = 'Fifty Thousand Five Hundred and Eighty Five'
let input8 = [[1,2,3],[4,5,6],'3']
let ouput8 = 'Invalid argument'
let input9 = ['Hello']
let ouput9 = 'Invalid argument'
let input10 = [1001200]
let ouput10 = 'Ten Lakh One Thousand Two Hundred'
let input11 = [["username@mailid.com","user","mailid",'com']]
let ouput11 = 'Invalid argument'
let input12 = [200]
let ouput12 = 'Two Hundred'
let input13 = []
let ouput13 = 'Invalid argument'
let input14 = [10100000]
let ouput14 = 'One Crore One Lakh'
let input15 = [[[],[]]]
let ouput15 = 'Invalid argument'

testProgram(numberToText,[input1,input2,input3,input4,input5,input6,input7,input8,input9,input10,
                    input11,input12,input13,input14,input15],
                    [ouput1,ouput2,ouput3,ouput4,ouput5,ouput6,ouput7,ouput8,ouput9,ouput10,
                    ouput11,ouput12,ouput13,ouput14,ouput15])