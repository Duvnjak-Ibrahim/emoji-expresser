let myEmojis = ["👨‍💻", "⛷", "🍲"]
let emojiContainer = document.getElementById("emoji-container")
const inputEl = document.getElementById("input-emojis")
const pushBtn = document.getElementById("push-btn")
const unshiftBtn = document.getElementById("unshift-btn")
const popBtn=document.getElementById("pop-btn")
const shiftBtn=document.getElementById("shift-btn")
let invertBtn=document.getElementById("invert")


function render(){
        	for(let i= 0;i<myEmojis.length;i++){
     emojiContainer.innerHTML+=`<span>${myEmojis[i]}</span>`
     
}
}render()

pushBtn.addEventListener("click",function(){
    if(inputEl.value){
    myEmojis.push(inputEl.value)
    emojiContainer.innerHTML=""
    render()
    
    }    
})

unshiftBtn.addEventListener("click",function(){
    if(inputEl.value){
        myEmojis.unshift(inputEl.value)
        emojiContainer.innerHTML=""
        render()
    }
})

popBtn.addEventListener("click",function(){
    myEmojis.pop()
    emojiContainer.innerHTML=""
    render()
})

shiftBtn.addEventListener("click",function(){
    myEmojis.shift()
    emojiContainer.innerHTML=""
    render()
})

invertBtn.addEventListener("click",function(){
   document.body.appendChild(sheet); 
document.head.appendChild(sheet);
})





let sheet = document.createElement('style');
sheet.innerHTML = `
body{background:linear-gradient(pink,red);} 
input{background:black;
color:white;
border:2px solid grey;
color:white; }
button{color:black;
border:1px solid wheat}
h1{color:black;}
#shift-btn,#pop-btn {
    background-color: #e09f3e;
}
#push-btn,#unshift-btn {
    background-color: #335c67;
}
`

;

