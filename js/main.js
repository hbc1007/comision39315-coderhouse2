const div = document.querySelector('header > div');
let prevY = window.scrollY;

window.addEventListener('scroll', function() {
    div.classList.toggle('abajo', window.scrollY > 0);
})


// const div = document.querySelector( 'header > div' );
// let prevY = window.scrollY;
// window.addEventListener('scroll', function() {
//     if( prevY > window.scrollY ){
//         div.classList.remove('off');
//     }else{
//         div.classList.add('off');
//     }
//     if( window.scrollY > 60 ){
//         div.classList.add('solid');
//     }else{
//         div.classList.remove('solid');
//     }
//     prevY = window.scrollY;
// } );

