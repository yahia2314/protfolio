let NotesContainer = document.querySelector('.notes-container');
let CreateBtn = document.querySelector('.btn');
let Notes = document.querySelector('.input-box');


function showNotes(){
     NotesContainer.innerHTML = localStorage.getItem('notes');
}
showNotes()

function updateStorage(){
     localStorage.setItem('notes', NotesContainer.innerHTML);
}

CreateBtn.addEventListener('click', ()=>{
     let inputbox = document.createElement('p')
     let img = document.createElement('img')
     inputbox.className = 'input-box'
     inputbox.setAttribute('contenteditable','true')
     img.src ='images/delete.png'
     NotesContainer.appendChild(inputbox).appendChild(img);
})
NotesContainer.addEventListener('click' , function (e){
     if(e.target.tagName === 'IMG'){
          e.target.parentElement.remove()
          updateStorage();
     }
    else if (e.target.tagName === 'P'){
     Notes = document.querySelectorAll('.input-box');
     Notes.forEach(nt => {
          nt.onkeyup = function(){
               updateStorage();
          }
          
     });
    }
})

