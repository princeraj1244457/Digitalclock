 const colck=document.getElementById('clock')
//  const clock=document.querySelector('#clock')

setInterval( function (){
    let date= new Date();
    // console.log(date.toLocaleTimeString());
    colck.innerHTML=date.toLocaleTimeString();
},1000);