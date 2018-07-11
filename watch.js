(function () {
    var updateHour = function() {
        var date = new Date();
            hours = date.getHours();
            ampm,
            minutes = date.getMinutes();
            seconds = date.getSeconds();
            dayWeek = date.getDay();
            day = date.getDate();
            month = date.getMonth();
            year = date.getFullYear();


        var pHours  = document.getElementById('Hours'),
            pAMPM = document.getElementById('ampm'),
            pMinutes = document.getElementById('minutes'),
            pSeconds = document.getElementById('seconds'),
            pDayWeek = document.getElementById('dayWeek'),
            pDay = document.getElementById('day'),
            pMonth = document.getElementById('month'),
            pYear = document.getElementById('year');
            
        var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        pDayWeek.textContent = week[dayWeek];

        pDay.textContent = day;

        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'December' ];
        pMonth.textContent = months[month];

        pYear.textContent = year;
    };

    updateHour();

}())