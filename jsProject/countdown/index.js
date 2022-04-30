var newYearEve = new Date("jan 1, 2023 00:00").getTime();
// console.log(newYearEve);

var Count=setInterval(( 
    function getCountdown() {
            var now = new Date().getTime();
            var distance = newYearEve - now;
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            // console.log(seconds);
            var d_days=document.querySelector('#day')
            var d_hours=document.querySelector('#hour')
            var d_minutes=document.querySelector('#minute')
            var d_seconds=document.querySelector('#second')

        d_days.innerText=days
        d_hours.innerText=hours
        d_minutes.innerText=minutes
        d_seconds.innerText=seconds
            
        }
),{}, 1000);



