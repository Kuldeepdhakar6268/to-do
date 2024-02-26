let input=document.querySelector(".in");
let addbutton=document.querySelector(".addbutton");
let ul=document.querySelector("ul");
addbutton.addEventListener("click",function(){
    if(input.value!=""){
    let task=input.value;
    input.value="";

    let li=document.createElement("li");

    li.innerHTML=task+`<button class="del">Delete</button><button class="edit">Edit</button>`;

//this functionality is delete button

  let del=li.querySelector(".del");
  del.addEventListener("click",function(){
    li.remove();
  })

  // this functionnality is edit button
 let flag=true;
  let edit=li.querySelector(".edit");
  
  edit.addEventListener("click",function(){
  if(flag==true){
  input.value=li.childNodes[0].textContent;
  flag=false;
  }
  else{
    li.childNodes[0].textContent=input.value;
    input.value="";
    flag=true;
  }
    
  })

    ul.appendChild(li);
}
})