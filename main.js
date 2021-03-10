// Dom elements
const hours_div = document.getElementById('hours');
const minutes_div = document.getElementById('minutes');
const seconds_div = document.getElementById('seconds');


setInterval(() => {
    showTime();
}, 1000)


function NumberToImage(number) {
    if(number == null) return
    if(typeof(number) != "number") return
    const images = ["c0.gif","c1.gif","c2.gif","c3.gif","c4.gif","c5.gif","c6.gif","c7.gif","c8.gif","c9.gif"];
    const numberSplited = number.toString().padStart(2, "0").split('').map(n => Number(n))
    
    return [
        images[numberSplited[0]],
        images[numberSplited[1]],
    ];
}

function showTime() {
    // A new Date instance
    const date = new Date();

    let hours = NumberToImage(date.getHours())
    hours_div.innerHTML = `
        <img src="./img/${hours[0]}" alt="">
        <img src="./img/${hours[1]}" alt="">
    `
    let minutes = NumberToImage(date.getMinutes())
    minutes_div.innerHTML = `
        <img src="./img/${minutes[0]}" alt="">
        <img src="./img/${minutes[1]}" alt="">
    `
    let seconds = NumberToImage(date.getSeconds())
    seconds_div.innerHTML = `
        <img src="./img/${seconds[0]}" alt="">
        <img src="./img/${seconds[1]}" alt="">
    `
}
