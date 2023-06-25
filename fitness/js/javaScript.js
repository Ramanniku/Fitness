// function startTimer(duration, display) {
//     var timer = duration, minutes, seconds;
//     setInterval(function () {
//         minutes = parseInt(timer / 60, 10);
//         seconds = parseInt(timer % 60, 10);

//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;

//         display.textContent = minutes + ":" + seconds;

//         if (--timer < 0) {
//             timer = duration;
//         }
//     }, 1000);
// }

// window.onload = function () {
//     var fiveMinutes = 60 * 3,
//         display = document.querySelector('#time');
//     startTimer(fiveMinutes, display);
// };

// <div class="clock">Registration closes in <span id="time">05:00</span> minutes!</div>
 
let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

let hour = 00;
let minute = 00;
let second = 00;
let count = 00;

startBtn.addEventListener('click', function () {
	timer = true;
	stopWatch();
});

stopBtn.addEventListener('click', function () {
	timer = false;
});

resetBtn.addEventListener('click', function () {
	timer = false;
	hour = 0;
	minute = 0;
	second = 0;
	count = 0;
	document.getElementById('hr').innerHTML = "00";
	document.getElementById('min').innerHTML = "00";
	document.getElementById('sec').innerHTML = "00";
	document.getElementById('count').innerHTML = "00";
});

function stopWatch() {
	if (timer) {
		count++;

		if (count == 100) {
			second++;
			count = 0;
		}

		if (second == 60) {
			minute++;
			second = 0;
		}

		if (minute == 60) {
			hour++;
			minute = 0;
			second = 0;
		}

		let hrString = hour;
		let minString = minute;
		let secString = second;
		let countString = count;

		if (hour < 10) {
			hrString = "0" + hrString;
		}

		if (minute < 10) {
			minString = "0" + minString;
		}

		if (second < 10) {
			secString = "0" + secString;
		}

		if (count < 10) {
			countString = "0" + countString;
		}

		document.getElementById('hr').innerHTML = hrString;
		document.getElementById('min').innerHTML = minString;
		document.getElementById('sec').innerHTML = secString;
		document.getElementById('count').innerHTML = countString;
		setTimeout(stopWatch, 10);
	}
}


function x(){
	let sss = document.getElementById("Big");
	location.replace("C:/Users/HP/OneDrive/Desktop/fitness/html/looseWeight.html");

}

function another(){
let get = document.getElementById('Big');

if(get == 'Biginner'){
	
		location.replace("C:/Users/HP/OneDrive/Desktop/fitness/html/looseWeight.html");
	

}
else if(get == 'Medium'){
	location.replace("C:/Users/HP/OneDrive/Desktop/fitness/html/looseWeight1.html");
	
}

else if(get == 'Advance'){
	location.replace("C:/Users/HP/OneDrive/Desktop/fitness/html/looseWeight2.html");
}

}


function anotherPage(){
	location.replace("C:/Users/HP/OneDrive/Desktop/fitness/html/looseWeight.html");
}
function anotherPage1(){
	location.replace("C:/Users/HP/OneDrive/Desktop/fitness/html/looseWeight1.html");
}
function anotherPage2(){
	location.replace("C:/Users/HP/OneDrive/Desktop/fitness/html/looseWeight2.html");
}