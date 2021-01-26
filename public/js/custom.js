$(document).ready(function () {
    var playListNames = $('.play-list-names');
	var slideIndex = $('.play-list-names .item.active').index();
	

	playListNames.not('.slick-initialized').slick({
		mobileFirst: true,
		arrows: true,
        draggable: true,
		dots: false,
		swipeToSlide: true,
        
		infinate: true,
		variableWidth: true,
	});
	if (slideIndex > 0) {
		$('.play-list-names').slick('slickGoTo', slideIndex);
	}
    
    $('.select-price-text').on('click', function() {
        var price = $('.price-text', this).text();
        
        $('.about-subscription .price-label span').text(price);
    })
    
    $("body").on('click', 'a.fps-slide',
             (ev)=>{
                var t=$(ev.currentTarget), d;
                $("a.fps-slide").removeClass("cb-active");
                t.addClass("cb-active");
                var a = t.attr("href");
                $(".free-preview").css("backgroundImage", "url(" + a + ")");
                $("#free_preview_name").text(t.attr('title'));
                $("#free_preview_duration").text(t.attr('duration'));
                $("#free_preview_description").text(d=t.attr('description'));
                $("#watch_free_preview").attr('href', t.attr('video_url'));
                return false;
            }
    );
    $("a.fps-slide").first().click();

    $('section.free-preview .owl-carousel').on('changed.owl.carousel', (ev) => {
        if (ev.page.size === 1) {
            setTimeout(() => {
                var a = $('section.free-preview .owl-carousel div.owl-item.active a.fps-slide');
                if (a.length === 1)
                    a.click();
            }, 500);
        }
    });
    "use strict";

    /* =================================
     SUPERSLIDES                
     =================================== */
    $('#slides').superslides({
        play: 0,
        animation: 'fade'
    })


	$('img').Lazy();
	
	
	/*setTimeout(function(){
		
	
		playListNames.owlCarousel({
			loop: false,
			margin: 0,
			responsiveClass: true,
			autoWidth: true,
			//items:10,
			margin: 10,
			nav: true,			
		})
		
		
		if (index > 0) {
			playListNames.trigger("to.owl.carousel", [slideIndex, 1])
		}
		
	}, 1000)*/
	
    var owl = $('.owl-carousel-c');
    owl.owlCarousel({
        nav:true,
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: true
            },
            1000: {
                items: 3,
                nav: true,
                loop: false
            },
            1200: {
                items: 4,
                nav: true
            }
        }
    });

    
      $(".my-carousel").owlCarousel({
        nav:true,
        items: 1,
        animateOut: 'fadeOut',
        dots: true
      });





    function DropDown(el) {
        this.dd = el;
        this.placeholder = this.dd.children('span');
        this.opts = this.dd.find('ul.dropdown > li');
        this.val = '';
        this.index = -1;
        this.initEvents();
    }
    DropDown.prototype = {
        initEvents: function () {
            var obj = this;

            obj.dd.on('click', function (event) {
                $(this).toggleClass('active');
                return false;
            });

            obj.opts.on('click', function () {
                var opt = $(this);
                obj.val = opt.text();
                obj.index = opt.index();
                obj.placeholder.text(obj.val);
            });
        },
        getValue: function () {
            return this.val;
        },
        getIndex: function () {
            return this.index;
        }
    }

    







    var container = document.getElementById('embed_container');
    var video = document.getElementById('video');
    var ratio = 8 / 16; //this is why the 56.25% padding hack exists

    function resizer() {
//    var width = parseInt(window.getComputedStyle(container)['width'], 10);
        /*    var width = $(window).width();
         var height = (width * ratio);
         
         video.style.width = width + 'px';
         video.style.height = height + 'px';
         video.style.marginTop = '-.278%'; //~732px wide, the video border is about 24px thick (24/732)
         
         container.style.height = (height * 0.88) + 'px'; //0.88 was the magic number that you needed to shrink the height of the outer container with.
         */
    }

//attach event on resiz10
    window.addEventListener('resize', resizer, false);

//call function for initial sizing
//no need for padding hack since we are setting the height based off of the width * aspect ratio
    resizer();
//container.style.padding = 0;







}); // End $(document).ready Function




/* =================================
 Tab 1
 ==================================== */
$(document).ready(function () {
    // Variables
    var clickedTab = $(".tab-1 .tabs > .active");
    var tabWrapper = $(".tab-1 .tab-content-1");
    var activeTab = tabWrapper.find(".active");
    var activeTabHeight = activeTab.outerHeight();

    // Show tab on page load
    activeTab.show();

    // Set height of wrapper on page load
    tabWrapper.height(activeTabHeight);
    $(".tab-1 .tabs > li").on("click", function () {
        if ($(this).attr("data") == "content") {
            $(".free-preview").hide();
            $(".carousel-block").hide();
            $(".main-sign-up").hide();
        } else {
            $(".free-preview").show();
            $(".carousel-block").show();
            $(".main-sign-up").show();
        }
        // Remove class from active tab
        $(".tab-1 .tabs > li").removeClass("active");

        // Add class active to clicked tab
        $(this).addClass("active");

        // Update clickedTab variable
        clickedTab = $(".tab-1 .tabs .active");

        // fade out active tab
        activeTab.fadeOut(150, function () {

            // Remove active class all tabs
            $(".tab-1 .tab-content-1 > li").removeClass("active");

            // Get index of clicked tab
            var clickedTabIndex = clickedTab.index();

            // Add class active to corresponding tab
            $(".tab-1 .tab-content-1 > li").eq(clickedTabIndex).addClass("active");

            // update new active tab
            activeTab = $(".tab-1 .tab-content-1 > .active");

            // Update variable
            activeTabHeight = activeTab.outerHeight();

            // Animate height of wrapper to new tab height
            tabWrapper.stop().delay(50).animate({
                height: activeTabHeight
            }, 100, function () {

                // Fade in active tab
                activeTab.delay(50).fadeIn(150);

            });
        });
    });

	$('#regtabs.lics .tablink[data="lic_form"]').on('click', function() {
		$('#regtabs.lics .tabLink').removeClass('h5active');
		$(this).addClass('h5active');
	})

	/*$(function () {

		var dd = new DropDown($('#dd'));

		$(document).click(function () {
			// all dropdowns
			$('.wrapper-dropdown-3').removeClass('active');
		});

	});	*/
})




