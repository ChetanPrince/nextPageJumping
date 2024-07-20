document.addEventListener("DOMContentLoaded", ()=>{
    const imageContainer = document.getElementById("container");
    const images = document.querySelectorAll(".images");
    const buttonsContainer = document.getElementById("buttons");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    
    function createButton(page){
        const btn = buttonContainer.createElement("button");
        btn.textContent = page;
        btn.classList.add(".btn-css");
        btn.id = `btn-${page}`;
        btn.addEventListener("click", ()={
            currentPage = page;
            showPage(currentPage);
        });
        return btn;

    }
})