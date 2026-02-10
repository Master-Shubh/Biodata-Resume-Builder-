AOS.init({
  duration:800,
  once:true
});

function scrollToTemplates(){
  document.getElementById("templates").scrollIntoView({behavior:"smooth"});
}

let count = 0;
let target = Math.floor(Math.random() * 10000) + 10000;

function animateCounter(){
  let interval = setInterval(() => {
    count += 73;
    if(count >= target){
      count = target;
      clearInterval(interval);
    }
    document.getElementById("userCount").innerText = count.toLocaleString();
  }, 20);
}

window.addEventListener("load", animateCounter);

