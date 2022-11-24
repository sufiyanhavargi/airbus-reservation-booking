
for (let i = 0; i < localStorage.length; i++) {
    let complete = localStorage.getItem(localStorage.key(i))
    let myarr = complete.split(",")
    let two = myarr[2]
    let four = myarr[4]
    let five = myarr[5]
    var divtag = document.createElement('div')
    divtag.classList.add('info')
    var ptag = document.createElement('p')
    var ptagText = document.createTextNode(i);
    ptag.appendChild(ptagText)
    divtag.appendChild(ptag)
    var pDate = document.createElement('p')
    var pDateText = document.createTextNode(two);
    pDate.appendChild(pDateText)
    divtag.appendChild(pDate)
    var pMob = document.createElement('p')
    var pMobText = document.createTextNode(four);
    pMob.appendChild(pMobText)
    divtag.appendChild(pMob)
    var pSeat = document.createElement('p')
    var pSeatText = document.createTextNode(five);
    pSeat.appendChild(pSeatText)
    divtag.appendChild(pSeat)
    var pArived = document.createElement('input')
    pArived.type = "checkbox"
    divtag.appendChild(pArived)
    var infoinfo = document.getElementById('infoinfo');
    infoinfo.appendChild(divtag);
}