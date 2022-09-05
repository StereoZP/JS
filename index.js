let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

function btnClick(){
    modal.style.display = "block";
}
btn.addEventListener("click", btnClick);

function spanClick(){
    modal.style.display = "none";
}
span.addEventListener("click", spanClick);

function windowClick(e){
    if(e.target == modal){
    modal.style.display = "none";
    }
}
window.addEventListener("click", windowClick);
