let btn=document.querySelector("button")
let img=document.querySelector("img")
let input=document.querySelector("#inpu")
btn.addEventListener("click",(event)=>
{
    let inpu=input.value
    console.log(inpu)
    img.src=`https://api.qrserver.com/v1/create-qr-code/?data=${inpu}&amp;size=100x100`
})
