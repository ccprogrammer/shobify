// fungsi saat web di load
$(window).on('load', function(){
    // Animasi .navbar .Product, h1, h2, .btn
    $('.navbar').addClass('showNavbar');
    $('.product').addClass('showProduct');
    $('h1').addClass('showH1');
    $('h2').addClass('showH2');
    $('.btn-anim').addClass('showBtn');

    // Animasi warna dot Muncul satu satu
    $('.warna .dot').each(function(i){
        setTimeout(function(){
            $('.warna .dot').eq(i).addClass('showDot');   
        }, 300 * (i+1));
    });

});

// fungsi shoes list yang active
$(document).on('click', 'ul li', function(){
    $(this).addClass('active').siblings().removeClass('active');
  });

// fungsi menangkap nilai scroll window/brower
$(window).scroll(function(){
    let wScroll = $(this).scrollTop();

    // animasi navbar bergerak ketika di scroll
    $('nav').css({
        'transform' : 'translate(0px, -'+ wScroll +'%)'
    });

    if( wScroll > $('.section-satu').offset().top - 250) {
    // animasi top shoes dan filter muncul
    $('.head-text').addClass('showHeadText');
    // animasi sepatu Muncul satu satu
    $('.section-satu .shoes').each(function(i){
        setTimeout(function(){
            $('.section-satu .shoes').eq(i).addClass('showShoes');   
        }, 300 * (i+1));
    });
    };
    
    if( wScroll > $('.section-footer').offset().top - 500) {
    $('.section-footer').addClass('showFooter');
    };

});

// fungsi filter list shoes
$(document).on('click', '.list', function(){
    const value = $(this).attr('data-filter');
      if ( value == 'all'){
        $('.shoes').show('1000');
      } 
      else {
        $('.shoes').not('.' + value).hide('1000');
        $('.shoes').filter('.' + value).show('1000');
      }
});




//   Vanilla Javascript Gallery
const thumb = document.querySelector('.shoes-list');
const product = document.querySelector('.head-product .product');
const thumbs = document.querySelectorAll('.thumb')

// mengganti src foto product di header sesuai gambar dari shoes-list yang di click
thumb.addEventListener('click', function(e){
    if (e.target.className == 'thumb') {
        
        // mengganti src
        product.src = e.target.src;

        // animasi kedip saat gambar berganti
        product.classList.add('fade');
        setTimeout(function(){
            product.classList.remove('fade');
        }, 500);

        // gambar yang sudah di click opacitynya berkurang
        thumbs.forEach(function(thumbs){
            if( thumbs.classList.contains('clicked') ){
                thumbs.classList.remove('clicked');
            };
        });
        // menambahkan class active kepada yang di click
        e.target.classList.add('clicked');
    }
})