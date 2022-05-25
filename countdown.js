var day = new Date("May 27, 2022 17:00:00").getTime();

var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = day - now;
    var days1 = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours2 = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes3 = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds4 = Math.floor((distance % (1000 * 60)) / 1000);
    var days = ('0' + days1).slice(-2);
    var hours = ('0' + hours2).slice(-2);
    var minutes = ('0' + minutes3).slice(-2);
    var seconds = ('0' + seconds4).slice(-2);
    document.getElementById("u-countdown-counter-2").innerHTML = days
    document.getElementById("u-countdown-counter-3").innerHTML = hours
    document.getElementById("u-countdown-counter-4").innerHTML = minutes
    document.getElementById("u-countdown-counter-5").innerHTML = seconds
    if(distance < 0){
        clearInterval(x);
        document.getElementById("u-countdown-counter-2").innerHTML = "0"
        document.getElementById("u-countdown-counter-3").innerHTML = "0"
        document.getElementById("u-countdown-counter-4").innerHTML = "0"
        document.getElementById("u-countdown-counter-5").innerHTML = "0"
        document.getElementById("u-countdown-wrapper-1").style.display = "none"
    }
}, 1000)
