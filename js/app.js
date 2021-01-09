window.onload = function() {
    let clock = document.getElementById("realtime");
    setInterval(() => {
        let time = new Date();

        let realtime = time.toLocaleTimeString();
        clock.innerHTML = realtime;

    }, 1000);
}