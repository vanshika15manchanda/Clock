window.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector("body");
    const hourHand = document.querySelector(".hour");
    const minuteHand = document.querySelector(".minute");
    const secondHand = document.querySelector(".second");
    const modeSwitch = document.querySelector(".mode-switch");

    modeSwitch.addEventListener("click", () => {
        // Toggle dark mode class on body
        body.classList.toggle("dark");
        //Check if the "dark" class is present on the body element
        const isDarkMode = body.classList.contains("dark");
        console.log(isDarkMode);

        // Change the text of the switch based on mode
        if (body.classList.contains("dark")) {
            modeSwitch.textContent = "Light Mode";
        } else {
            modeSwitch.textContent = "Dark Mode";
        }
    });

    const updateTime = () => {
        // Get current time and calculate degree for clock hannds
        let date = new Date();
        console.log(date);
        let secToDeg = (date.getSeconds() / 60) * 360;
        let minToDeg = (date.getMinutes() / 60) * 360;
        let hourToDeg = (date.getHours() / 12) * 360 ;
        console.log(secToDeg);

        //   Rotate the clock hands to appropriate degree based on current time
        secondHand.style.transform = `rotate(${secToDeg}deg)`; 
        minuteHand.style.transform = `rotate(${minToDeg}deg)`;
        hourHand.style.transform = `rotate(${hourToDeg}deg)`;
    };

    updateTime();
    setInterval(updateTime, 1000);
});
