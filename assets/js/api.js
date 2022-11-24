


const p = fetch('https://www.smsgatewayhub.com/api/mt/SendSMS?APIKey=yourapicode&senderid=TESTIN&channel=2&DCS=0&flashsms=0&number=91989xxxxxxx&text=test message&route=1&EntityId=Registered-Entity-Id&dlttemplateid=Registered-DLT-Template-Id',
method: 'POST',
Headers:{
    'content-Type':'application/json'
},
body:JSON.stringify({
    name:'user 1'
}).then(res =>{
    return res.json()
}))
.then(data => console.log(data))
.catch(error => console.log('ERROR'))

