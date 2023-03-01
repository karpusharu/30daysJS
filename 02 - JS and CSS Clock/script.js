const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    secondHand.style.transform = `rotate(${90+ seconds * 6}deg)`;
    minuteHand.style.transform = `rotate(${90 + minutes * 6}deg)`;
    hourHand.style.transform = `rotate(${90 + hours * 30}deg)`;
}

// Delete transform style when hand finishes its round
function handTransform(hand){
    if(hand.style.transform === 'rotate(90deg)') {
        hand.style.transition = 'none';
    } else {
        hand.style.transition = 'all 0.05s cubic-bezier(0.1,2.7,0.58,1)';
    }
}

handTransform(secondHand);
handTransform(minuteHand);
handTransform(hourHand);
setInterval(setDate, 1000);