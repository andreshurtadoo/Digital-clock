function theTime(){
	let time = new Date(),
        year = time.getFullYear(),
        month = time.getMonth(),
        day = time.getDate(),
        dayWeek = time.getDay(),
        hour = time.getHours(),
        minute = time.getMinutes(),
        second = time.getSeconds();

    if(hour > 12){
        hour += -12;
    }

    let newMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
    month = newMonth[month];

    let newDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    dayWeek = newDay[dayWeek];
    
    console.log(dayWeek);
    document.querySelector(".dayWeek").innerHTML = dayWeek;
    document.querySelector(".day").innerHTML = day;
    document.querySelector(".month").innerHTML = month;
    document.querySelector(".year").innerHTML = year;
    document.querySelector(".hour").innerHTML = hour;
    document.querySelector(".minute").innerHTML = minute;
    document.querySelector(".second").innerHTML = second;

}
setInterval(theTime, 1000);


