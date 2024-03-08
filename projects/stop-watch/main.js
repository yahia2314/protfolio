let [second , miuntes , hours] =[0,0,0];
let displayTime = document.getElementById('display-time');
let timer = null

function stopWtach(){
     second++;
     if(second == 60){
          second= 0;
          miuntes++;
          if(miuntes == 60){
               miuntes = 0;
               hours++;
          }
     }
     
    let h = hours < 10 ? '0' + hours : hours;
    let m = miuntes < 10 ? '0' + miuntes : miuntes;
    let s = second < 10 ? '0' + second : second;
     
     displayTime.innerHTML = h + ':' + m + ':' + s
}

function startWatch(){
     if(timer !== null){
          clearInterval(timer)
     }
    timer = setInterval(stopWtach,1000)
}
function watchStop(){
     clearInterval(timer)
}
function watchReset(){
     clearInterval(timer);
     [second , miuntes , hours] = [0,0,0];
     displayTime.innerHTML = '00:00:00';

}
