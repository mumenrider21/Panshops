console.log("main.js!!");
window.onload = () => {
    const carousel = new bootstrap.Carousel("#myCarousel",{
        interval: 3000//自動的に切り替える時間
    });
}