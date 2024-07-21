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
        const button = buttonsContainer.createElement("button");
        button.textContent = page;
        button.className = "btn-css";
        button.id = `btn-${page}`;
        button.addEventListener("click", ()=>{
            currentPage = page;
            showPage(currentPage);
        });
        return button;
    }
    function updatePageButton(){
        const pageButtons = buttonsContainer.querySelectorAll('.btn-css[id^="btns-"]');
        pageButtons.forEach(button=> button.remove());
        let startPage = Math.max(1, currentPage-1);
        let endPage = Math.min(totalPages, currentPage+1);
        if(currentPage ===1){
            endPage = Math.min(totalPages, currentPage+2);
        }else if(currentPage === totalPages){
            startPage = Math.max(1, currentPage-2);        }

        for(let i=startPage; i<=endPage; i++){
            buttonsContainer.insertBefore(createButton(i),nextBtn);
        }
    }

function showPage(page){
    const start = (page-1) * imagesPerPage;
    const end = page * imagesPerPage;
    images.forEach((image, index)=>{
        image.classList.toggle("hdie", !(index >=start && index < end));
    });
    updatePageButton();
    const pageButtons = buttonsContainer.querySelectorAll('.btn-css[id^="btns-"]');
    pageButtons.forEach((button,index)=>{
        button.classList.toggle("active", button.textContent == page);
    });
    prevBtn.disabled = page  ===1;
    nextBtn.disabled = page  ===totalPages;

}
prevBtn.addEventListener("click", ()=>{
    if(currentPage > 1){
        currentPage--;
        showPage(currentPage);
    }
});
nextBtn.addEventListener("click", ()=>{
    if(currentPage < totalPages){
        currentPage++;
        showPage(currentPage);
    }
});
updatePageButton();
showPage(currentPage);

})