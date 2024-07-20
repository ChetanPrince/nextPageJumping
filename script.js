document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.images');
    const buttons = document.querySelectorAll('#buttons button[id^="btns-"]');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentPage = 1;
    const imagesPerPage = 4;
    const totalPages = Math.ceil(images.length / imagesPerPage);

    function showPage(page) {
        const start = (page - 1) * imagesPerPage;
        const end = page * imagesPerPage;
        images.forEach((image, index) => {
            image.classList.toggle('hide', !(index >= start && index < end));
        });

        buttons.forEach((button, index) => {
            button.classList.toggle('active', index === page - 1);
        });

        prevBtn.disabled = page === 1;
        nextBtn.disabled = page === totalPages;
    }

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            currentPage = index + 1;
            showPage(currentPage);
        });
    });

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

    showPage(currentPage);
});
