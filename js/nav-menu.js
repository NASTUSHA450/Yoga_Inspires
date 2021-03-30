document.querySelector('#btn-open').onclick = openNav;
document.querySelector('#btn-close').onclick = closeNav;

function openNav(){
    document.querySelector('#nav-menu').style.display = 'block'
}
function closeNav(){
    document.querySelector('#nav-menu').style.display = 'none'
}

document.getElementById('moreText1').hidden = true;
document.getElementById('moreText2').hidden = true;
document.getElementById('moreText3').hidden = true;
function readMore(){
let moreBtn = document.querySelectorAll('.read-more-btn');
// console.log(moreBtn);

for(let i=0;i<moreBtn.length;i++){
    moreBtn[0].addEventListener('click', function(){
        document.getElementById('moreText1').hidden = false;
        document.getElementById('btn_more_1').style.display = 'none';
        document.getElementById('btn_less_1').style.display = 'inline';
    });
    moreBtn[1].addEventListener('click', function(){
        document.getElementById('moreText2').hidden = false;
        document.getElementById('btn_more_2').style.display = 'none';
        document.getElementById('btn_less_2').style.display = 'inline';
    });
    moreBtn[2].addEventListener('click', function(){
        document.getElementById('moreText3').hidden = false;
        document.getElementById('btn_more_3').style.display = 'none';
        document.getElementById('btn_less_3').style.display = 'inline';
    });
}
}
readMore();

function readLess(){ 
let lessBtn = document.querySelectorAll('.read-less-btn');
// console.log(lessBtn);

for(let i=0;i<lessBtn.length;i++){
    lessBtn[0].addEventListener('click', function(){
        document.getElementById('moreText1').hidden = true;
        document.getElementById('btn_more_1').style.display = 'inline';
        document.getElementById('btn_less_1').style.display = 'none';
    });
    lessBtn[1].addEventListener('click', function(){
        document.getElementById('moreText2').hidden = true;
        document.getElementById('btn_more_2').style.display = 'inline';
        document.getElementById('btn_less_2').style.display = 'none';
    });
    lessBtn[2].addEventListener('click', function(){
        document.getElementById('moreText3').hidden = true;
        document.getElementById('btn_more_3').style.display = 'inline';
        document.getElementById('btn_less_3').style.display = 'none';
    });
}
}
readLess();