document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.images');
    const buttonsContainer = document.getElementById('buttons');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentPage = 1;
    const imagesPerPage = 4;
    const totalPages = Math.ceil(images.length / imagesPerPage);

    function createPageButton(page) {
        const button = document.createElement('button');
        button.textContent = page;
        button.className = 'btn-css';
        button.id = `btns-${page}`;
        button.addEventListener('click', () => {
            currentPage = page;
            showPage(currentPage);
        });
        return button;
    }

    function updatePageButtons() {
        // Clear existing page buttons
        const pageButtons = buttonsContainer.querySelectorAll('.btn-css[id^="btns-"]');
        pageButtons.forEach(button => button.remove());

        // Add buttons based on the current page
        const startPage = Math.max(1, currentPage - 1);
        const endPage = Math.min(totalPages, currentPage + 1);

        if (currentPage > 1) {
            buttonsContainer.insertBefore(createPageButton(currentPage - 1), nextBtn);
        }

        buttonsContainer.insertBefore(createPageButton(currentPage), nextBtn);

        if (currentPage < totalPages) {
            buttonsContainer.insertBefore(createPageButton(currentPage + 1), nextBtn);
        }
    }

    function showPage(page) {
        const start = (page - 1) * imagesPerPage;
        const end = page * imagesPerPage;
        images.forEach((image, index) => {
            image.classList.toggle('hide', !(index >= start && index < end));
        });

        updatePageButtons();

        const pageButtons = buttonsContainer.querySelectorAll('.btn-css[id^="btns-"]');
        pageButtons.forEach((button, index) => {
            button.classList.toggle('active', button.textContent == page);
        });

        prevBtn.disabled = page === 1;
        nextBtn.disabled = page === totalPages;
    }

    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            showPage(currentPage);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            showPage(currentPage);
        }
    });

    updatePageButtons();
    showPage(currentPage);
});






// document.addEventListener('DOMContentLoaded', () => {
//     const images = document.querySelectorAll('.images');
//     const buttons = document.querySelectorAll('#buttons button[id^="btns-"]');
//     const prevBtn = document.getElementById('prevBtn');
//     const nextBtn = document.getElementById('nextBtn');
//     let currentPage = 1;
//     const imagesPerPage = 4;
//     const totalPages = Math.ceil(images.length / imagesPerPage);

//     function showPage(page) {
//         const start = (page - 1) * imagesPerPage;
//         const end = page * imagesPerPage;
//         images.forEach((image, index) => {
//             image.classList.toggle('hide', !(index >= start && index < end));
//         });

//         buttons.forEach((button, index) => {
//             button.classList.toggle('active', index === page - 1);
//         });

//         prevBtn.disabled = page === 1;
//         nextBtn.disabled = page === totalPages;
//     }

//     buttons.forEach((button, index) => {
//         button.addEventListener('click', () => {
//             currentPage = index + 1;
//             showPage(currentPage);
//         });
//     });

//     prevBtn.addEventListener('click', () => {
//         if (currentPage > 1) {
//             currentPage--;
//             showPage(currentPage);
//         }
//     });

//     nextBtn.addEventListener('click', () => {
//         if (currentPage < totalPages) {
//             currentPage++;
//             showPage(currentPage);
//         }
//     });

//     showPage(currentPage);
// });
