function calcDatas() {
    const modal = document.querySelector(".model")
    const page = document.querySelector("#page-contando")
    const info = document.querySelector("h2#info")
    var query = location.search.slice(1);
    let date = query.replace("date=", "").split("-")
    const data = new Date(date[0], date[1] - 1, date[2])
    const now = new Date()
    console.log(now)



    let resultTempo = data - now

    let s = Math.floor(resultTempo / 1000)
    let m = Math.floor(s / 60)
    let h = Math.floor(m / 60)
    let d = Math.floor(h / 24)

    s %= 60
    m %= 60
    h %= 24

    h = (h < 10) ? "0" + h : h
    m = (m < 10) ? "0" + m : m
    s = (s < 10) ? "0" + s : s

    if (d >= 0) {
        modal.classList.add("hide")
        page.classList.remove("hide")
        document.querySelector("#dias").textContent = d
        document.querySelector("#dias").innerText = d
        document.querySelector("#horas").textContent = h
        document.querySelector("#minutos").textContent = m
        document.querySelector("#segundos").textContent = s
        setTimeout(calcDatas, 1000)

    } else {

        info.innerHTML = `A data não pode ser igual ou anterior a <span> 
       ${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}</span>`
        modal.classList.remove("hide")
        page.classList.add("hide")

    }



}

calcDatas()