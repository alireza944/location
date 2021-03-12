let drop=document.getElementById("drop")
let inp=document.getElementById("inp")
let op1=document.getElementById("op1")
let op2=document.getElementById("op2")
let op3=document.getElementById("op3")
let btn=document.getElementById("btn")
function my_Function(){
    if (drop.value=="reload"){
        inp.value=""
    }
    else if(drop.value=="assign" && inp.value == ""){
        alert("ye chi bezan dige")
    }
    else if(drop.value=="assign" && inp!=""){
        window.location.assign(inp.value)
    }
    else if(drop.value=="print"){
        window.localStorage.setItem(window.location.href)
    }
}
btn.addEventListener("click",my_Function)
