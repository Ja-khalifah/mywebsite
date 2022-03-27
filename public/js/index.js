const toggle = document.getElementById('toggle');
const resize = document.getElementById('resize');

document.onclick = function(e){
    if(e.target.id !== 'resize' && e.target.id !== 'toggle')
    {
        toggle.classList.remove('on');
        resize.classList.remove('active')
    }
}

$('#toggle').click(function(){
    $(this).toggleClass('on');
    $('#resize').toggleClass('active')
})

// toggle.onclick = function(){
//     toggle.classList.toggle('on');
//     resize.classList.toggle('active');
// }