let input =document.querySelector('.entered-list');
let addBtn=document.querySelector('.add-items');
let tasklist =document.querySelector('.tasklist');

// add task disabled

input.addEventListener('keyup',() => {
    if(input.value.trim() !==0)
    {
        addBtn.classList.add('active');

    }else{
        addBtn.classList.remove('active');

    }
})
//add new tasks
addBtn.addEventListener('click',()=>{
    if(input.value.trim() !=0){
        let newItem=document.createElement('div');
        newItem.classList.add('items');
        newItem.innerHTML=`
        <p>${input.value}</p>
        <div class="btn-item">
        <i class="fa-regular fa-pen-to-square"></i>
        <i class="fa-regular fa-xmark"></i>
        </div>
        `
        tasklist.appendChild(newItem);
        input.value= '';
    }else{
        alert('please enter a tasks');
    }
})

// delete items from List 
tasklist.addEventListener('click',(e)=>{
    if(e.target.classList.contains('fa-xmark')){
        e.target.parentElement.parentElement.remove();
    }
} )

// mark item as completed

tasklist.addEventListener('click',(e)=>{
    if(e.target.classList.contains('fa-pen-to-square')
    ) {
        e.target.parentElement.parentElement.classList.toggle('item-completed');

    }


})


