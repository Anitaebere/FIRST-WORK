function shownav(){
    const sidenav = document.querySelector('.sidenav')
    sidenav.style.display = 'flex';
}
function hidenav(){
    const sidenav = document.querySelector('.sidenav')
    sidenav.style.display = 'none';
}

function menu(){
    document.getElementById('menu1')
    window.location.assign('./menu.html')
}
function times(){
    document.getElementsByClassName('fa-times')
    window.location.assign('./matias.html')
   }

   function homepage(){
    document.getElementById('home');
    window.location.assign('./matias.html')
   }

   function service(){
   document.getElementById('services').style.border="0"
    document.getElementById('br1').style.display="block";
    document.getElementById('br2').style.display="block";
   }

   function blogg(){
    document.getElementById('blog').style.border="0"
    document.getElementById('blo1').style.display="block";
    document.getElementById('blo2').style.display="block";
   }
   function showContact(){
    const sidenav = document.querySelector('.contacts')
    sidenav.style.display = 'block';
}