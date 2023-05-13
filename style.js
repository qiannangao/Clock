let hr=document.querySelector('.hr')
let mn=document.querySelector('.mn')
let sc=document.querySelector('.sc');
let deg=6;
// 定时器
setInterval(function(){
let day=new Date();
// console.log(day.getHours());//eg:16
let h=day.getHours()*30;//一小时等于30度
let m=day.getMinutes()*deg;//一分钟等于6度
let s=day.getSeconds()*deg;//一秒钟6度
hr.style.transform=`rotateZ(${h+m/12}deg)`;//时针转一圈360度，一小时分针转360*60度，
mn.style.transform=`rotateZ(${m}deg)`
sc.style.transform=`rotateZ(${s}deg)`
},1000)