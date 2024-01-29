let startBtn = document.getElementById('start'); 
let stopBtn = document.getElementById('stop'); 
let resetBtn = document.getElementById('reset'); 
let lapBtn=document.getElementById('lap');

let hour = 00; 
let minute = 00; 
let second = 00; 
let count = 00;
 
let timer=false;
let num=0;

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
    document.getElementById("lapItem").innerHTML="";
    delete num;
    num=0;
    
    
});

function lapTime(){
    if(timer){
		
			function numCount(){
				num++;
				return "#"+num+" " ;
				
			}
		const li=document.createElement("li");
        li.innerText=numCount()+newLap();
        document.getElementById("lapItem").appendChild(li);

	}
}
function newLap(){
	let hrStr=hour.toString();
	let minStr=minute.toString();
	let secStr=second.toString();
	let countStr=count.toString();
	
	
	return   (hour<10 ? "0"+hrStr : hrStr)+"hr "+(minStr<10 ? "0"+minStr : minStr)+"min "+(secStr<10? "0"+secStr:  secStr )+"sec "+(countStr<10 ? "0"+countStr :countStr);
	
}

function time(){
	
	console.log("hii");

}

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

		getTimer();
        setTimeout(stopWatch, 10);
	} 
}

function getTimer(){
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

    document.getElementById('hr').innerText = hrString; 
    document.getElementById('min').innerText = minString; 
    document.getElementById('sec').innerText = secString; 
    document.getElementById('count').innerText = countString; 
     

}
