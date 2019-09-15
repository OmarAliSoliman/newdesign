const input = document.querySelectorAll('form input');
const label = document.querySelectorAll('form label');
const icon = document.querySelectorAll('form label i');

function make(index){
  label[index].style.fontSize="10px";
  icon[index].style.color = "#AD1457";
}

function dele(index){
  label[index].style.fontSize="15px";
  icon[index].style.color = "#AFAFAF";
}

$(document).ready(function(){
  $('.sidenav').sidenav();
});
    
