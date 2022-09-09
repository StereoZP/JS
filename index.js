//const modal = document.getElementById("myModal");
//const btnOpen = document.getElementById("myBtn");
const body = document.getElementById("myBody");

class CreateModal{
    constructor(modal, btnOpen, div, btnClose, text) {
        this.modal=document.getElementById("myModal");
        this.btnOpen=document.getElementById("myBtn");
        this.div=document.createElement("div");
        this.btnClose=document.createElement("a");
        this.text=document.createElement("p");
    }
    appendChild(){
        this.modal.appendChild(this.div);
        this.div.appendChild(this.btnClose);
        this.div.appendChild(this.text);
    }
    setAttribute(){
        this.btnClose.setAttribute("href", "#close");
        this.btnClose.setAttribute("title", "#Закрыть");
        this.btnClose.setAttribute("id", "close");
    }
    add(){
        this.div.classList.add("modal-content");
        this.btnClose.classList.add("close");
    }
    innerText(){
        this.btnClose.innerText="X";
        this.text.innerText="lorem10";
    }
    element(){
        this.btnClose=document.getElementById("close");
    }
    btnClick(){
        this.modal.classList.toggle('display');
        body.addEventListener("click", this.windowClick);
    }
    closeClick(){
        this.modal.classList.toggle('display');
    }
    windowClick(event){
        if(event.target === this.modal){
            this.modal.classList.toggle('display');
            body.removeEventListener("click", this.windowClick);
        }
    }
    listener(){
        this.btnOpen.addEventListener("click", this.btnClick);
        this.btnClose.addEventListener("click", this.closeClick);
    }
    create(){
        this.appendChild();
        this.setAttribute();
        this.add();
        this.innerText();
        this.element();
        this.listener();
    }
}
const modalWindow = new CreateModal("modal", "btnOpen","div", "link", "text");
modalWindow.create();


/*const btnClose = document.getElementById("close");
btnOpen.addEventListener("click", btnClick);
btnClose.addEventListener("click", closeClick);


function btnClick(){
    modal.classList.toggle('display');
    body.addEventListener("click", windowClick);
}
function closeClick(){
    modal.classList.toggle('display');
}
function windowClick(e){
    if(e.target === modal){
        modal.classList.toggle('display');
        body.removeEventListener("click", windowClick);
    }
}*/
