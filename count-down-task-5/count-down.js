function countDown(targetDate)
{
    if(new Date().getTime()<targetDate.getTime())
    {
    let intervel =  setInterval(()=>{
            let now = new Date()
            // console.log(targetDate,now)
            let remaining = targetDate.getTime()-now.getTime()
            // console.log(Math.round(remaining/1000))
            if(Math.round(remaining/1000)==0)
            {
                clearInterval(intervel)
                console.log('Countdown Finished!')
            }
            else{
                // console.log(remaining)
                remaining = (remaining/(1000*60*60*24))
                let days = remaining - (remaining%1)
                // console.log(days)
                remaining = (remaining%1)*24
                let hours = remaining - (remaining%1)
                // console.log(hours)
                remaining = (remaining%1)*64
                let minutes = remaining - (remaining%1)
                // console.log(minutes)
                remaining = (remaining%1)*64
                let seconds = remaining - (remaining%1)
                // console.log(seconds)
                console.log(`Days:${days} Hours:${hours} Minutes:${minutes} Seconds:${seconds}`)
            }
        },1000)}
        else{
            console.log("__Target Date can't be in the past__")
        }
}

let targetDate = new Date('Oct 25 2025 13:39:00')
countDown(targetDate)