//! Coded By Kqan on Github
//! Visit https://github.com/Kqan1 !//

//? --- Bottombar Toggler Function() --- ?//

const bottombar = document.getElementById('bottombar');
function bottomBarToggler_func(){
    if (bottombar.classList.contains('istoggled')){
        bottombar.classList.remove('istoggled');
    }else {
        bottombar.classList.add('istoggled');
    }
}