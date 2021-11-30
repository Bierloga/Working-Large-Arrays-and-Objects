const button = document.getElementById("btn")

const ExpiringCreditCards = () => {
    const aboutToExpire = [];
    let currentDate = new Date();
    let currentDateinMS = currentDate.getTime()
    randomPersonData.forEach(function (item) {
        const ExpirationDate = "01/" + item.credit_card.expiration
        const ExpirationDateInMS = Date.parse(ExpirationDate)
        if (item.age < 18) { return }
        else if (ExpirationDateInMS < currentDateinMS) {
            return
        } else if (ExpirationDateInMS < (currentDateinMS + (1000 * 3600 * 24 * 365))) {
            aboutToExpire.push(item)
        }
    })
    const aboutToExpireSorted = aboutToExpire.sort(function (a, b) {
        return parseInt(a.credit_card.expiration) - parseInt(b.credit_card.expiration)
    })
    console.log(aboutToExpireSorted)
    aboutToExpireSorted.forEach(function (item) {
        const newLi = document.createElement("li")
        newLi.innerHTML = `Name: ${item.name} ${item.surname}, Phone Number: ${item.phone}, Credit Card Number: ${item.credit_card.number}, Expiration Date: ${item.credit_card.expiration}`
        const list = document.getElementById("aboutToExpire-list")
        list.appendChild(newLi)
    })
    const title = document.createElement("h1")
    title.innerHTML = "Credit Cards About To Expire"
    const titleSection = document.getElementById("header-aboutToExpire-list")
    titleSection.appendChild(title)
}


button.addEventListener("click", ExpiringCreditCards)

