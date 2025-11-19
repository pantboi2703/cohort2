var img = document.querySelector('img');
var love = document.querySelector('#love');

img.addEventListener('dblclick', () => {
    // console.log("hello");
    love.style.opacity = 1;
    love.style.transform = 'translate(-50%,-50%) scale(1) rotate(0deg)';

    setTimeout(() => {
        // console.log('hello guys timeout chal gaya');
         love.style.transform = 'translate(-50%,-300%) scale(1) rotate(60deg)';
    },800);

    setTimeout(() => {
        love.style.opacity = 0;
        // love.style.transform = 'translate(-50%,-50%) scale(0) rotate(0deg)';
    }, 1000);

    setTimeout(() => {
        // love.style.opacity = 0;
        love.style.transform = 'translate(-50%,-50%) scale(0) rotate(-60deg)';
    }, 1200);


})
