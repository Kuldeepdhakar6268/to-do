let input=document.querySelector(".input");
let addbutton=document.querySelector(".add");
let ul=document.querySelector("ul");

addbutton.addEventListener("click",function(){
  if(input.value!=""){
  let task=input.value;
  input.value="";
  let li=document.createElement("li");
  li.innerHTML=task+`<button class="del">Delete</button><button class="edit">Edit</button><button class="done">Done</button>`
  let del=li.querySelector(".del");
  let edit=li.querySelector(".edit");
  
  // edit button functionality
  let flag=true;
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

  //delete button functionality
  del.addEventListener("click",function(){
    li.remove();
  })

  let done=li.querySelector(".done");
  
  done.addEventListener("click",function(){
  li.classList.toggle("textdelete")
    
  })
  ul.appendChild(li);
}
})