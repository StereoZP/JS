class CreateModal{
    constructor(modal, btnOpen, div, btnClose, text) {
        this.modal=document.getElementById("myModal");
        this.btnOpen=document.getElementById("root");
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
        this.modal.classList.add("modal");
    }
    innerText(){
        this.btnClose.innerText="X";
        this.text.innerText="lorem10";
    }
    getCloseElementId(){
        this.btnClose=document.getElementById("close");
    }
    createElements(){
        this.appendChild();
        this.setAttribute();
        this.add();
        this.getCloseElementId();
        this.innerText();
    }
    btnClick(){
        const myElement = document.getElementById('myModal');
        if (myElement.children.length===0) {
            this.createElements();
        }
        this.modal.addEventListener("click", this.windowClick.bind(this));
    }
    closeClick(){
        this.deleteItems();
    }
    windowClick(event){
        if(event.target === this.modal){
            this.deleteItems();
        }
    }
    deleteItems() {
        const deleteElement = document.getElementById("myModal");
        deleteElement.innerHTML = '';
        deleteElement.classList.remove("modal")
    }
    listener(){
        this.btnOpen.addEventListener("click", this.btnClick.bind(this));
        this.btnClose.addEventListener("click", this.closeClick.bind(this));
    }
    eventListener(){
        this.listener();
    }
}
const modalWindow = new CreateModal("modal", "btnOpen","div", "link", "text");
modalWindow.eventListener();
