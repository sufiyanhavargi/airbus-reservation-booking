



console.log("This is JS File");

var today = new Date().toISOString().slice(0, 10)
var date = document.getElementById('date');
date.value = today
date.min = today

var btn = document.getElementById("myBtn")
btn.addEventListener("click", myClick, false);
var isClick=0

var bookBtn = document.createElement("button");
bookBtn.setAttribute('id','bookFlight')
var btnTextNode = document.createTextNode("Book Flight")
bookBtn.appendChild(btnTextNode)

var form = document.forms['myForm'];

function myClick() {
   var flag = 0
   for (i = 0; i < form.length; i++) {
      //Validation if form is empty or not
      if (form[i].value == "") {
         flag++;
      }
   }
   if (flag == 0 && isClick==0) {
      var source = form[0].value;
      var destination = form[1].value
      var date = form[2].value

      var divelem = document.createElement('div');
      divelem.classList.add('result');
      divelem.setAttribute('id', 'result-shown');

      for (i = 0; i <= 2; i++) {

         if (i == 1) {
            var travelTime = document.createElement('p')
            travelTime.classList.add('result-elem')
            var travelTimeTextNode = document.createTextNode("12 Hours 20 Mins")
            travelTime.appendChild(travelTimeTextNode)
            divelem.appendChild(travelTime)
         }
         var pelem = document.createElement('p');
         pelem.classList.add('result-elem')
         var pelemtextnode = document.createTextNode(form[i].value);
         pelem.appendChild(pelemtextnode)
         divelem.appendChild(pelem)
      }

      divelem.appendChild(bookBtn)
      
      flight_result = document.getElementById('flight-result');
      flight_result.appendChild(divelem);

      var resultShown = document.getElementById('result-shown');
      isClick++;
   }

   var bft=document.getElementById('bookFlight')
   // console.log(bft);
   bft.addEventListener('click', bookFlight, true)
}
function bookFlight() {

   let arr = [form[0].value, form[1].value, form[2].value, form[3].value, form[4].value, form[5].value,]
   localStorage.setItem(form[4].value, arr)

   alert(`Your ticket has been booked succesfully.
   \n ${form[5].value} ticket booked`);

   location.reload()
}






