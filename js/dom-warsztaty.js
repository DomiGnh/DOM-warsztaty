'use strict';

var przycisk= document.getElementById('przycisk');
var par1 = document.getElementById('par1');
var par2 = document.getElementById('par2');

function ustawTlo(e){
    
      
         par1.style.background="red";
        
         par2.style.background="yellow"
  
    }


document.getElementById('przycisk').onclick = ustawTlo;
 


