document.addEventListener("DOMContentLoaded",()=>{
    const images = document.querySelectorAll(".images");
    const buttonContainer = document.getElementById("buttons");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    let currentPage = 1;
    let imagesPerPage = 4;
    let totalPages = Math.ceil(images.length / imagesPerPage);

    function createButton(page){
        const button = document.createElement("button");
        button.textContent =page;
        button.className = "btn-css";
        
        button.id =`btns-${page}`;
        button.addEventListener("click", ()=>{
            currentPage =page;
            showPage(currentPage);
        });
        return button;
    }
    function updatePageButtons(){
        const pageButtons = buttonContainer.querySelectorAll(".btn-css[id^='btns-']");
        pageButtons.forEach(button=>button.remove());
        
        let startPage = Math.max(1, currentPage-1);
        let endPage = Math.min(totalPages, currentPage+1);
        if(currentPage ===1){
            endPage = Math.min(totalPages, currentPage +2);
        }
        else if(currentPage === totalPages){
            startPage = Math.max(1, currentPage - 2);
        }
        
        for (let i = startPage; i <= endPage; i++) {
            buttonContainer.insertBefore(createButton(i), nextBtn);
        }
        }

    function showPage(page){
        const start = (page-1)*imagesPerPage;
        const end = page*imagesPerPage;
        images.forEach((image, index)=>{
            image.classList.toggle("hide", !(index >= start && index < end));
        });
        updatePageButtons();
        const pageButtons = buttonContainer.querySelectorAll('.btn-css[id^="btns-"]');
        pageButtons.forEach((button, index)=>{
            button.classList.toggle("active", button.textContent == page.toString());
        });

        prevBtn.disabled = page === 1 ;
        nextBtn.disabled = page === totalPages;
    }

    prevBtn.addEventListener("click", ()=>{
        if(currentPage>1){
            currentPage--;
            showPage(currentPage);
        }
    });
    nextBtn.addEventListener("click", ()=>{
        if(currentPage<totalPages){
            currentPage++;
            showPage(currentPage);
        }
    });

    showPage(currentPage);
});