const timer = document.getElementById('timer')
const main = document.getElementById('how')
const button = document.getElementById('button')
const howIn = document.getElementById('howIn')
const start = document.getElementById('start')

start.onclick = () => {
    function color() {
        timer.style.backgroundColor = 'rgb(0, 255, 242)'
        main.style.backgroundColor = 'rgb(0, 255, 242)'
        button.style.backgroundColor = 'rgb(0, 255, 242)'
        start.style.backgroundColor = 'rgb(0, 255, 242)'
    }
    color()
    let liczba = 0
    maxTime = 10
    button.onclick = () => {
        if (czas === maxTime) {
            main.innerHTML = 'Score: ' + liczba + '<br> P/M: ' + perMinet(liczba)
            function blue() {
                timer.style.backgroundColor = 'rgb(0, 81, 255)'
                main.style.backgroundColor = 'rgb(0, 81, 255)'
                button.style.backgroundColor = 'rgb(0, 81, 255)'
                start.style.backgroundColor = 'rgb(0, 81, 255)'
            }
            blue()
            function perMinet(b) {
                return b = b * 6
            }
        } else {
            liczba = liczba + 1
            main.textContent = liczba
        }
    }

    setInterval(sekond, 1000)
    let czas = 0
    function sekond() {
        if (czas === maxTime) {
            clearInterval()
        } else {
            czas++
            timer.innerHTML = 'Timer: ' + czas
        }
    }
}