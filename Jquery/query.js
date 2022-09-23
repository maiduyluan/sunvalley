$(function(){
    $('.slide').slick({
        autoplay: true,
        autoplaySpeed: 2500,
        infinite: true,
        fade: true,
        prevArrow: false,
        nextArrow: false
    })

    $('.img-slide').slick({
        autoplay:true,
        autoplaySpeed: 3000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        prevArrow: false,
        nextArrow: false
    })
    // SLIDDING

    $(window).scroll(function(event) {
        var i = $('body, html').scrollTop()
        
            if ( i >= 100 ) {
                $('header').addClass('lock')
            } else {
                $('header').removeClass('lock')
            }
        }
    );

    $('.introduction').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('html, body').animate({scrollTop:$('.main-intro').offset().top -150 }, 0);
	});

    $('.location').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('html, body').animate({scrollTop:$('.main-location').offset().top -250 }, 0);
	});

    $('.ground').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('html, body').animate({scrollTop:$('.main-ground').offset().top -250 }, 0);
	});

    $('.utilities').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('html, body').animate({scrollTop:$('.content-product2').offset().top -200 }, 0);
	});

    $('.product').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('html, body').animate({scrollTop:$('.main-product').offset().top -250 }, 0);
	});

    $('.news').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('html, body').animate({scrollTop:$('.main-news').offset().top -230 }, 0);
	});

    $('.contact').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('html, body').animate({scrollTop:$('footer').offset().top -200 }, 0);
	});

    //SCROLL NAV

    $('.btn-nav').on('click', function(event) {
        event.preventDefault();
        $('.res-nav').addClass('showup')
    });

    $('.res-cancel-btn').on('click', function(event) {
        event.preventDefault();
        $('.res-nav').removeClass('showup')
    });

    // BTN RES NAV

    new WOW().init();

    // WOW


    $('.list-price').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop:$('.form-product-document').offset().top -200 }, 0);
    });

    $('.about').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('html, body').animate({scrollTop:$('.main-ground').offset().top -250 }, 0);
	});

    $('.location-btn').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('html, body').animate({scrollTop:$('.main-location-btn').offset().top -250 }, 0);
	});

    $('.utilities').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('html, body').animate({scrollTop:$('.main-utilities').offset().top -250 }, 0);
	});


    // ------FILTER-GROUND-SUNVALLEY

    $('.btn-mb-1').on('click', function(event) {
        event.preventDefault();

        $('.annecy a').removeClass('active')
        $('.sunvalley-ground img').removeClass('active')
        
        $(this).addClass('active')
        $('.img-sunvalley-ground1').addClass('active')
    })

    $('.btn-mb-2').on('click', function(event) {
        event.preventDefault();

        $('.annecy a').removeClass('active')
        $('.sunvalley-ground img').removeClass('active')
        
        $(this).addClass('active')
        $('.img-sunvalley-ground2').addClass('active')
    })

    $('.btn-mb-3').on('click', function(event) {
        event.preventDefault();

        $('.annecy a').removeClass('active')
        $('.sunvalley-ground img').removeClass('active')
        
        $(this).addClass('active')
        $('.img-sunvalley-ground3').addClass('active')
    })

    $('.btn-mb-4').on('click', function(event) {
        event.preventDefault();

        $('.annecy a').removeClass('active')
        $('.sunvalley-ground img').removeClass('active')
        
        $(this).addClass('active')
        $('.img-sunvalley-ground4').addClass('active')
    })

    $('.btn-mb-5').on('click', function(event) {
        event.preventDefault();

        $('.annecy a').removeClass('active')
        $('.sunvalley-ground img').removeClass('active')
        
        $(this).addClass('active')
        $('.img-sunvalley-ground5').addClass('active')
    })

    $('.btn-mb-6').on('click', function(event) {
        event.preventDefault();

        $('.annecy a').removeClass('active')
        $('.sunvalley-ground img').removeClass('active')
        
        $(this).addClass('active')
        $('.img-sunvalley-ground7').addClass('active')
    })

    $('.btn-mb-7').on('click', function(event) {
        event.preventDefault();

        $('.annecy a').removeClass('active')
        $('.sunvalley-ground img').removeClass('active')
        
        $(this).addClass('active')
        $('.img-sunvalley-ground7').addClass('active')
    })

    $('.btn-mb-8').on('click', function(event) {
        event.preventDefault();

        $('.annecy a').removeClass('active')
        $('.sunvalley-ground img').removeClass('active')
        
        $(this).addClass('active')
        $('.img-sunvalley-ground8').addClass('active')
    })
})