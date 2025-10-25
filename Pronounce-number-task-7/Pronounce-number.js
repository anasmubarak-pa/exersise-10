function numberToText(num,rflag=0)
{
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
        if(lookUp[num])
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
            if(!rflag)
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
            return returnString
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
}

//114
console.log(numberToText(43))
console.log(numberToText(14))
console.log(numberToText(140))
console.log(numberToText(114))
console.log(numberToText(121))
console.log(numberToText(21144))
console.log(numberToText(344))
console.log(numberToText(5633024))
console.log(numberToText(65433024))
