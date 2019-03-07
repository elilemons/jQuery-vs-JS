// // JavaScript
// (function () {
//     document.querySelector('.cat-name').innerText = 'Rudy';
//     document.querySelector('.cat-description').innerText = 'Rudy is extremely rude.';

//     document.querySelector('.cat').style.margin = "0 auto";
//     document.querySelector('.cat').style.width = "90%";
//     document.querySelector('.cat').style.textAlign = "center";
    
//     document.querySelector('.cat').setAttribute('title', 'Now if you hover, Rudy will gain weight!');
// })();

// // jQuery
$(() => {
    $('.cat-name').text('Rudy');
    $('.cat-description').text('Rudy is extremely rude.');

    $('.cat').css('margin', '0 auto');
    $('.cat').css('width', '90%');
    $('.cat').css('text-align', 'center');
    
    $('.cat').attr('title', 'Now if you hover, Rudy will gain weight!');
});