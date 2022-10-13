// Add a "checked" symbol (after comleting that particular task) when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(event)
 {
  if (event.target.tagName === 'LI')
   {
    event.target.classList.toggle('checked');
  }
}, false);

// Create a "close" button and append it to each list item
var myToDolist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myToDolist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myToDolist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++)
 {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Create a new list item when clicking on the "Add" button
function newElementOnClickAddButton() 
{
  var li = document.createElement("li");
  var inputValue = document.getElementById("input").value;
  var text = document.createTextNode(inputValue);
  li.appendChild(text);

  if (inputValue === '')
   {
    alert("You have to write something...and then click on 'Add' button!!!");
  } 
  else 
  {
    document.getElementById("list").appendChild(li);
  }
  document.getElementById("input").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}