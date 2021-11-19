//get option element
let option= document.getElementsByClassName('option')[0];

//get modal element
let modal= document.getElementsByClassName('optionModal')[0];

option.addEventListener('click',()=>{
    modal.style.display="block"
})

modal.addEventListener('click',(e)=>{
    if(e.target==modal){
        modal.style.display="none"
    }
})