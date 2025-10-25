let textArea = document.querySelector('.text-area')
let progressBar = document.querySelector('.progress-bar')
let progress = document.querySelector('.progress')

textArea.addEventListener('scroll',()=>{
    // console.log(textArea.scrollTop)
    // console.log(textArea.scrollHeight-textArea.getBoundingClientRect().height)
    // console.log(Math.round((textArea.scrollTop)/(textArea.scrollHeight-textArea.getBoundingClientRect().height)*100))
    let scrollPercentage = Math.round((textArea.scrollTop)/(textArea.scrollHeight-textArea.getBoundingClientRect().height)*100)+"%"
    progress.innerText = scrollPercentage
    progressBar.style.setProperty('--progress',scrollPercentage)
})