document.querySelector('#btn-open').onclick = openNav;
document.querySelector('#btn-close').onclick = closeNav;

function openNav(){
    document.querySelector('#nav-menu').style.display = 'block'
}
function closeNav(){
    document.querySelector('#nav-menu').style.display = 'none'
}