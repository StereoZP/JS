const modal = document.getElementById("myModal");
const div = document.createElement("div");
modal.appendChild(div);
div.classList.add("modal-content");
const link = document.createElement("a")
div.appendChild(link);
link.setAttribute("href", "#close");
link.setAttribute("title", "#Закрыть");
link.classList.add("close");
link.innerText="X";
const text = document.createElement("p");
div.appendChild(text);
text.innerText="Текст";
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];
const body = document.getElementById("myBody")

function btnClick(){
    modal.classList.toggle('display');
}
btn.addEventListener("click", btnClick);

function spanClick(){
    modal.classList.toggle('display');
}
span.addEventListener("click", spanClick);

function windowClick(e){
    if(e.target === modal){
        modal.classList.toggle('display');
    }
}
body.addEventListener("click", windowClick);



