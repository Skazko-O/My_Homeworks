const open = document.getElementById('open');
const close = document.getElementById('close');
const modal = document.getElementById('modal');

open.addEventListener('click', () => {
    modal.style.display = 'flex';
});

close.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Закриття по кліку поза вікном
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
