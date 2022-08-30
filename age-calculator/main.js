



document.getElementById("trigger").addEventListener('click', cal)
function cal() {
    const update = function () {
        let date = document.querySelector("#age").value;
        let olddate = new Date(date),
            get_olddate = olddate.getTime(),
            newdate = new Date(),
            get_newdate = newdate.getTime(),
            total = get_newdate - get_olddate;
        let sec = Math.floor(total / 1000),
            min = Math.floor(total / (1000 * 60)),
            hour = Math.floor(total / (1000 * 60 * 60)),
            day = Math.floor(total / (1000 * 60 * 60 * 24)),
            week = Math.floor(total / (1000 * 60 * 60 * 24 * 7)),
            month = Math.floor(total / (1000 * 60 * 60 * 24 * 30.41)),
            years = Math.floor(total / (1000 * 60 * 60 * 24 * 365.25));
        let funcal = function (x, y) {
            let a = document.querySelector(x);
            a.innerHTML = y;
        }
        funcal("#year", years + "year");
            funcal("#month", month + "month");
            funcal("#week", week + "week");
            funcal("#days", day + "days");
            funcal("#hour" ,hour + "hour");
            funcal("#mint", min + 'minite');
            funcal("#second", sec + 'second');

    }
    setInterval(update, 5000);

}
