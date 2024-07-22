document.addEventListener("DOMContentLoaded", ()=>{
const images = document.querySelectorAll(".images");
const buttonsContainer = document.getElementById("buttons");
const previousBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let currentPage = 1;
let imagesPerPage = 4;
let totalPages = Math.ceil(images.length/imagesPerPage);
function createButton(page){
    const button = document.createElement("button");
    button.classList.add("btn-css");
    button.id = `btns-${page}`;
    button.textContent = page;
    button.addEventListener("click", ()=>{
        currentPage = page;
        showPage(currentPage);
    });
    return button;
}

function updatePageButton(){
    const buttons = document.querySelectorAll(".btn-css[id^='btns-']");
    buttons.forEach(button=>button.remove());
    
    let startPage = Math.min(1, currentPage-1);
    let endPage = Math.max(totalPages, currentPage+1);
    
    if(currentPage === 1){
        endPage = Math.min(totalPages, currentPage+2);    }
        if (currentPage ===totalPages){
            startPage = Math.max(1, currentPage-2);
        }
        for(let i = startPage; i<=endPage; i++){
            buttonsContainer.insertBefore(createButton(i), nextBtn);
        }
}


})