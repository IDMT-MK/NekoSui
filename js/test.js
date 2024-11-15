$(".openbtn").click(function () {
	$(this).toggleClass('active');
    $("#spg-nav").toggleClass('panelactive');
});

$("#g-nav a").click(function () {
    $(".openbtn").removeClass('active');
    $("#spg-nav").removeClass('panelactive');
});


const isFirstLoad = sessionStorage.getItem('isFirstLoad');
const modal = document.querySelector('.js-modal'),
open = document.querySelector('.js-modal-open'),
close = document.querySelector('.js-modal-close');


//「閉じるボタン」をクリックしてモーダルを閉じる
function modalClose() {
modal.classList.add('is-active');
}
close.addEventListener('click', modalClose);

//「モーダルの外側」をクリックしてモーダルを閉じる
function modalOut(e) {
if (e.target == modal) {
    modal.classList.add('is-active');
}
}
addEventListener('click', modalOut);