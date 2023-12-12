let hide1 = document.querySelector(".hide1")
let hide2 = document.querySelector(".hide2") 
let hide3 = document.querySelector(".hide3") 
let hide4 = document.querySelector(".hide4") 

let content_boxes = document.querySelectorAll(".content-box")
let operators = document.querySelectorAll(".hide") 

//on startup 
hide1.src = "assets/images/icon-minus.svg"
hide2.src = "assets/images/icon-plus.svg"
hide3.src = "assets/images/icon-plus.svg"
hide4.src = "assets/images/icon-plus.svg"


var clicked = 1

//remove active status on other sections except the passed variable
function removeActives(ex) { 
    for(let i = 0;  i < content_boxes.length; i++) { 
        if(i + 1 != ex)
        { 
            content_boxes[i].classList.remove("active")
        }
    }
}

function setOperator(ex) { 
    for(let i = 0; i <  operators.length; i++ ) { 
        if(i+1 != ex) { 
            operators[i].src = "assets/images/icon-plus.svg"
        }
    }
}

hide1.addEventListener("click",()=> {
    removeActives(1)
    setOperator(1)
    if(clicked == 1) { 
        content_boxes[0].classList.remove("active")
        hide1.src = "assets/images/icon-plus.svg"
        clicked = 0
        return
    }

    if(clicked == 0) { 
        content_boxes[0].classList.add("active")
        hide1.src = "assets/images/icon-minus.svg"
        clicked = 1
        return
    }    

    content_boxes[0].classList.add("active")
    hide1.src = "assets/images/icon-minus.svg"
    clicked = 1

})


hide2.addEventListener("click",()=> {
    removeActives(2)
    setOperator(2)
    if(clicked == 2) { 
        content_boxes[1].classList.remove("active")
        hide2.src = "assets/images/icon-plus.svg"
        clicked = 0
        return
    }

    if(clicked == 0) { 
        content_boxes[1].classList.add("active")
        hide2.src = "assets/images/icon-minus.svg"
        clicked = 2
        return
    }   

    content_boxes[1].classList.add("active")
    hide2.src = "assets/images/icon-minus.svg"
    
    clicked = 2


})


hide3.addEventListener("click",()=> {
    removeActives(3)
    setOperator(3)
    if(clicked == 3) { 
        content_boxes[2].classList.remove("active")
        hide3.src = "assets/images/icon-plus.svg"
        clicked = 0
        return
    }

    if(clicked == 0) { 
        content_boxes[2].classList.add("active")
        hide3.src = "assets/images/icon-minus.svg"
        clicked = 3
        return
    }   

    content_boxes[2].classList.add("active")
    hide3.src = "assets/images/icon-minus.svg"
    
    clicked = 3


})



hide4.addEventListener("click",()=> {
    removeActives(4)
    setOperator(4)
    if(clicked ==4) { 
        content_boxes[3].classList.remove("active")
        hide4.src = "assets/images/icon-plus.svg"
        clicked = 0
        return
    }

    if(clicked == 0) { 
        content_boxes[3].classList.add("active")
        hide4.src = "assets/images/icon-minus.svg"
        clicked = 4
        return
    }   

    content_boxes[3].classList.add("active")
    hide4.src = "assets/images/icon-minus.svg"
    
    clicked = 4


})
