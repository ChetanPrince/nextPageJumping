document.addEventListener("DOMContentLoaded", ()=>{
    const imageContainer = document.getElementById("container");
    const images = document.querySelectorAll(".images");
    const buttonsContainer = document.getElementById("buttons");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    let currentPage = 1;
    let imagesPerPage = 4;
    let totalPages = Math.ceil(images.length / imagesPerPage );

    
    function createButton(page){
        const btn = buttonsContainer.createElement("button");
        btn.textContent = page;
        btn.classList.add(".btn-css");
        btn.id = `btn-${page}`;
        btn.addEventListener("click", ()=>{
            currentPage = page;
            showPage(currentPage);
        });
        return btn;
    }
    function updatePageButton(page){
        const pageButtons = buttonsContainer.querySelectorAll('.btn-css[id^="btns-"]');
        pageButtons.forEach(buttons=>buttons.remove());

        let start = Math.max(1, currentPage-1);
        let end = Math.min(totalPages, currentPage+1);


    } 

})