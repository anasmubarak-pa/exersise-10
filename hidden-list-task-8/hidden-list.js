let hiddenItems = document.querySelectorAll('.hidden-item')

let Akey = 0
let Skey = 0

document.addEventListener('keydown',(e)=>{
    console.log(Akey,Skey)
    if(e.key=='A'||e.key=='a')
    {
        Akey = 1
    }
    if(e.key=='Shift')
    {
        Skey = 1
    }
    if(Akey&&Skey)
    {
        hiddenItems.forEach((hiddenItem)=>{
            hiddenItem.classList.toggle('hidden-item')
        })
    }
})

document.addEventListener('keyup',(e)=>{
    if(e.key=='A'||e.key=='a')
    {
        Akey = 0
    }
    if(e.key=='Shift')
    {
        Skey = 0
    }
})