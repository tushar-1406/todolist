var todo_text = document.getElementById("todo_text");
var save_todo = document.getElementById("save_todo");
var list = document.getElementById("list");


var data=[];
init_todo();

save_todo.addEventListener("click", addToDo );

todo_text.addEventListener("keyup", function(event)
{
  if( event.keyCode === 13 )
  {
    addToDo();
  }
})


function addToDo()
{
  var value = todo_text.value;
  
  if( !value )
  {
    return
  }


    data.push(value);

  var string_data = JSON.stringify( data );
  localStorage.setItem("todo_data", string_data);

  todo_text.value = "";
  list.innerHTML="";
  init_todo();

}


function init_todo()
{
  
  var data1 = localStorage.getItem("todo_data");


  if(data1)
  {
    data1 = JSON.parse(data1);
    data=data1;

  }
  else
  {
    data = [];
    return;
  }


  data1.forEach(function(element,index)
  {
    var element = document.createElement("p");
    element.innerText = data1[index];
    list.appendChild(element)

    // element.addEventListener("click", function()
    // {
    //   element.style.textDecoration= "line-through"
    // });

    // element.addEventListener("dblclick", function()
    // {
    //   list.removeChild(element);
    //   delete1(index);
    
      
    // });

  })
}

function delete1(element,index)
{
    var data1 = localStorage.getItem("todo_data");


    if(data1)
    {
      data1 = JSON.parse(data1);

  
    }
    else
    {
      data1 = [];
    }

    data1.splice(index,1);
    
    
  var string_data = JSON.stringify( data1 );
  localStorage.setItem("todo_data", string_data);
  list.innerHTML="";
  init_todo();


}

list.addEventListener("click",function(e)
{
    e.target.style.textDecoration= "line-through";
  

})

list.addEventListener("dblclick", function(element,index)
{
  list.removeChild(element.target);
  console.log(index);
  delete1(element);

  
});
