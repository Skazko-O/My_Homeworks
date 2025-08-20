const h1 = document.querySelector('h1');
const txtzone = document.createElement('div');
const textarea = document.createElement('textarea');
txtzone.innerText = `
Це тестовий текст для редагування!`;
txtzone.className = 'txtzone'
h1.insertAdjacentElement('afterend', txtzone);

document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.code === 'KeyE') {
        e.preventDefault();        
        txtzone.replaceWith(textarea);
        textarea.value = txtzone.textContent;
        textarea.id = 'editor';
        textarea.className = 'editor';
    }
    if (e.ctrlKey && e.code === 'KeyS') {
        e.preventDefault();
        textarea.replaceWith(txtzone);
        txtzone.textContent = textarea.value;
    }
})