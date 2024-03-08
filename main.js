let btn = document.getElementById('btn')

onscroll = function(){
    if(scrollY >= 500){
        btn.style.display ='block'
    }
    else{
        btn.style.display ='none'

    }
}
btn.onclick = function(){
    scroll({
        left:0,
        top:0,
        behavior:'smooth',
    })
}
