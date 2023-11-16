let counter1 = document.getElementById("timer1");
let counter2 = document.getElementById("timer2");
let counter3 = document.getElementById("timer3");
let counter4 = document.getElementById("timer4");
let count1 = counter1.innerText;
let count2 = counter1.innerText;
let count3 = counter1.innerText;
let count4 = counter1.innerText;


    
 var time1 = setInterval(function () {
    count1++;
    counter1.innerText = count1;

    if (count1 === 1500) {
      clearInterval(1);
    }
  }, 1);

  var time2 = setInterval(function () {
    count2++;
    counter2.innerText = count2;

    if (count2 === 358) {
      clearInterval(2);
    }
  }, 2);

  var time3 = setInterval(function () {
    count3++;
    counter3.innerText = count3;

    if (count3 === 853) {
      clearInterval(3);
    }
  }, 1);

  var time4 = setInterval(function () {
    count4++;
    counter4.innerText = count4;

    if (count4 === 18) {
      clearInterval(4);
    }else{}
  }, 300);


 



window.addEventListener("scroll",function (e){

    if(window.scrollY > 3000){
    setInterval(time1)
    setInterval(time2)
    setInterval(time3)
    setInterval(time4)
    
    }
  });
