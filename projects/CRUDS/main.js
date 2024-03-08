// get total
// create product
// save localStorage 
// clear inpute 
// read 
// count
// delete
// update 
// search
// clean data 


let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let abs = document.getElementById('abs');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');
let mood = 'create'
let ton;


// get total
function gettotal(){
    if(price.value != ''){
    let result = (+price.value + +taxes.value + +abs.value) -
     +discount.value;
    total.innerHTML = result
     total.style.background = 'green'
    }
    else{
        total.innerHTML = '';
        total.style.background = 'red'
    }
   
       
   
    
 
}





// create product
let dataPro;
if(localStorage.product != null){
    dataPro = JSON.parse(localStorage.product)
}
else{
    dataPro = []
}

submit.onclick =  function() {
    let newpro ={
        title:title.value.toLowerCase(),
        price:price.value,
        taxes:taxes.value,
        abs:abs.value,
        discount:discount.value,
        count:count.value,
        category:category.value.toLowerCase(),
        total:total.innerHTML,
    }
    if(title.value != '' && price.value != '' && newpro.count < 100){
if(mood === 'create'){
        if(newpro.count > 1){
            for(let i = 0;i<newpro.count;i++){
                dataPro.push(newpro);
            }
        }
        else{
            dataPro.push(newpro);
        }

    }
    else{
        dataPro [ton] = newpro;
        mood = 'create'
        submit.innerHTML = 'create';
        count.style.display = 'block'


    }
    clearData()
    
    }
    
    


    localStorage.setItem('product', JSON.stringify(dataPro));
    
    showData()
}

// clear inpute 
function clearData(){
    title.value = '';
    price.value = '';
    taxes.value = '';
    abs.value = '';
    discount.value = '';
    category.value = '';
    total.innerHTML = '';
    count.value = '';
} 

// show 
function showData(){
    gettotal();
    let table = ''
for(let i = 0; i < dataPro.length;i++){
    table += `
    <tr>
    <td>${i+1}</td>
    <td>${dataPro[i].title}</td>
    <td>${dataPro[i].price}</td>
    <td>${dataPro[i].taxes}</td>
    <td>${dataPro[i].abs}</td>
    <td>${dataPro[i].discount}</td>
    <td>${dataPro[i].total}</td>
    <td>${dataPro[i].category}</td>
    <td><button onclick="upDate(${i})">update</button></td>
    <td><button onclick="deleteData(${i})">delete</button></td>
  </tr>
    `
}

    document.getElementById('tbody').innerHTML = table;
  let deleteAll =  document.getElementById('deleteAll');
    if(dataPro.length > 0){
       deleteAll.innerHTML = `<button onclick="deleteAll()">Delete All (${dataPro.length})</button>`
    }
    else{
        deleteAll.innerHTML = ''
    }
}
showData()


// delete
function deleteData(i){
dataPro.splice(i,1)
localStorage.product = JSON.stringify(dataPro)
showData()

}

// delete All
function deleteAll(){
    localStorage.clear();
    dataPro.splice(0);
    showData()
}


// upDate
function upDate(i){
    title.value = dataPro[i].title
    price.value = dataPro[i].price
    taxes.value = dataPro[i].taxes
    abs.value = dataPro[i].abs
    discount.value = dataPro[i].discount
    category.value = dataPro[i].category
 count.style.display = 'none'
 submit.innerHTML = 'update'
 mood = 'update'
 gettotal();
 ton = i ;
 scroll({
    top:0,
    behavior:"smooth",
 })
}



// search 
let searchMood = 'title'

function getSearchTitle(id){
    let search = document.getElementById('search')
if(id == 'searchtitle'){
    searchMood = 'title'
}
else{
    searchMood = 'category'
}
search.placeholder = 'search by '+ searchMood
search.focus()
search.value = ''
showData()
}


function serachData(value){
    table = '';
    for(let i = 0;i<dataPro.length;i++){
    if(searchMood == 'title'){
    if(dataPro[i].title.includes(value.toLowerCase())){
               
        table += `
    <tr>
    <td>${i}</td>
    <td>${dataPro[i].title}</td>
    <td>${dataPro[i].price}</td>
    <td>${dataPro[i].taxes}</td>
    <td>${dataPro[i].abs}</td>
    <td>${dataPro[i].discount}</td>
    <td>${dataPro[i].total}</td>
    <td>${dataPro[i].category}</td>
    <td><button onclick="upDate(${i})">update</button></td>
    <td><button onclick="deleteData(${i})">delete</button></td>
  </tr>
    `



            }

        
    }
    
    else{
       
            if(dataPro[i].category.includes(value.toLowerCase())){
                       
                table += `
            <tr>
            <td>${i}</td>
            <td>${dataPro[i].title}</td>
            <td>${dataPro[i].price}</td>
            <td>${dataPro[i].taxes}</td>
            <td>${dataPro[i].abs}</td>
            <td>${dataPro[i].discount}</td>
            <td>${dataPro[i].total}</td>
            <td>${dataPro[i].category}</td>
            <td><button onclick="upDate(${i})">update</button></td>
            <td><button onclick="deleteData(${i})">delete</button></td>
          </tr>
            `
        
        
        
                    }
                



    }
    }
    document.getElementById('tbody').innerHTML = table;

   
}
