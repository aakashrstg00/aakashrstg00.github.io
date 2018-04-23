$(document).ready(() => {
    document.querySelector('.toggle').addEventListener('click', () => {
        var bgs = ['pexels-photo.jpg', 'pexels-photo-169677.jpeg', 'pexels-photo-380283.jpeg', 'bg.jpg'];
        document.body.style.backgroundImage = 'url(' + 'images/' + bgs[Math.floor(Math.random() * bgs.length)] + ')';
        console.log('clicking');
    });

    $('.tile').click(e => {
        $('.over').animate({
            bottom: "20px",
        });
        document.querySelector('.container').style.filter = 'blur(4px)';
    });
});

function x() {
    $('.over').animate({
        bottom: "-100vh",
    });
    document.querySelector('.container').style.filter = 'none';
}