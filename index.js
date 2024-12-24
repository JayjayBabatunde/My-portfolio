const list = document.getElementById('list');
const menuBtn = document.getElementById('menuBtn');
let menuVisible = false;

menuBtn.addEventListener('click', () => {
    if(!menuVisible) {
        list.style.display = 'none';
    } else {
        list.style.display = 'block';
    }

    menuVisible = !menuVisible;
})