$(".openbtn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});

const hour = document.querySelector(".hour.hand");
const minute = document.querySelector(".minute.hand");
const second = document.querySelector(".second.hand");

setInterval(() => {
  const date = new Date();
  const s = (360 / 60) * date.getSeconds();
  const m = (360 / 60) * date.getMinutes() + (s / 60);
  const h = (360 / 24) * date.getHours() + (m / 24);
  
  second.style.transform = `rotate(${s}deg)`;
  minute.style.transform = `rotate(${m}deg)`;
  hour.style.transform = `rotate(${h}deg)`;
}, 1000);

const container = document.querySelector('.box-02');
const slides = document.querySelectorAll('.slide');
const containerWidth = container.offsetWidth;
gsap.to( slides, {
   xPercent: -110 * (slides.length - 1),
   ease: "none",
   scrollTrigger: {
      trigger: container,
      pin: true,
      scrub: 1,
      end: () => "+=" + containerWidth,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      markers:true,
  }
})
