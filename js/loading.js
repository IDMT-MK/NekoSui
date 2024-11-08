const loading = document.getElementById('loading');

function animation(){
    loading.classList.add('loaded');
}

// window.addEventListener('load', animation);
window.setTimeout( animation, 250);


