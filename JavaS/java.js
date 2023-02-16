
const hideText_btn = document.getElementById('hideText_btn');

const hideText = document.getElementById('hideText');

hideText_btn.addEventListener('click', toggleText);

function toggleText() {
    hideText.classList.toggle('show');
    
    if(hideText.classList.contains('show')){
        hideText_btn.innerHTML = 'Ver menos';
    }
    else{
        hideText_btn.innerHTML = 'Ver mas';
    }
}
