//samuel123

(function($) {

  $.fn.menumaker = function(options) {
      
      var cssmenu = $(this), settings = $.extend({
        title: "Menu",
        format: "dropdown",
        sticky: false
      }, options);

      return this.each(function() {
        cssmenu.prepend('<div id="menu-button">' + settings.title + '</div>');
        $(this).find("#menu-button").on('click', function(){
          $(this).toggleClass('menu-opened');
          var mainmenu = $(this).next('ul');
          if (mainmenu.hasClass('open')) { 
            mainmenu.hide().removeClass('open');
          }
          else {
            mainmenu.show().addClass('open');
            if (settings.format === "dropdown") {
              mainmenu.find('ul').show();
            }
          }
        });

        cssmenu.find('li ul').parent().addClass('has-sub');
        multiTg = function() {
          cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
          cssmenu.find('.submenu-button').on('click', function() {
            $(this).toggleClass('submenu-opened');
            if ($(this).siblings('ul').hasClass('open')) {
              $(this).siblings('ul').removeClass('open').hide();
            }
            else {
              $(this).siblings('ul').addClass('open').show();
            }
          });
        };

        if (settings.format === 'multitoggle') multiTg();
        else cssmenu.addClass('dropdown');

        if (settings.sticky === true) cssmenu.css('position', 'fixed');

        resizeFix = function() {
          if ($( window ).width() > 768) {
            cssmenu.find('ul').show();
          }

          if ($(window).width() <= 768) {
            cssmenu.find('ul').hide().removeClass('open');
          }
        };
        resizeFix();
        return $(window).on('resize', resizeFix);

      });
  };
})(jQuery);

(function($){
$(document).ready(function(){

$(document).ready(function() {
  $("#cssmenu").menumaker({
    title: "Menu",
    format: "multitoggle"
  });

  $("#cssmenu").prepend("<div id='menu-line'></div>");

var foundActive = false, activeElement, linePosition = 0, menuLine = $("#cssmenu #menu-line"), lineWidth, defaultPosition, defaultWidth;

$("#cssmenu > ul > li").each(function() {
  if ($(this).hasClass('active')) {
    activeElement = $(this);
    foundActive = true;
  }
});

if (foundActive === false) {
  activeElement = $("#cssmenu > ul > li").first();
}

defaultWidth = lineWidth = activeElement.width();

defaultPosition = linePosition = activeElement.position().left;

menuLine.css("width", lineWidth);
menuLine.css("left", linePosition);

$("#cssmenu > ul > li").hover(function() {
  activeElement = $(this);
  lineWidth = activeElement.width();
  linePosition = activeElement.position().left;
  menuLine.css("width", lineWidth);
  menuLine.css("left", linePosition);
}, 
function() {
  menuLine.css("left", defaultPosition);
  menuLine.css("width", defaultWidth);
});

});


});
})(jQuery);



$(document).ready(function(){
	
	function ajustar_layout() {
		tamanhoTela = $(window).width();
		$('.centered').css( "width", tamanhoTela + "px");
		$('.centered').css( "height", 626 / (1725 / tamanhoTela) + "px");
		$('.centered').css( "background-size", tamanhoTela + "px " + 626 / (1725 / tamanhoTela) + "px");
		
		
		$('.banner_secundario').css( "width", tamanhoTela + "px");
		$('.banner_secundario').css( "height", 198 / (1725 / tamanhoTela) + "px");
		$('.banner_secundario').css( "background-size", tamanhoTela + "px " + 198 / (1725 / tamanhoTela) + "px");
		
		$('.image_sec img').css( "width", tamanhoTela + "px " + 198 / (1725 / tamanhoTela) + "px");
		$('.image_sec img').css( "height", 198 / (1725 / tamanhoTela) + "px");
		
		
		$('.socio_torcedor').css( "height", 110 / (1725 / tamanhoTela) + "px");
		$('.logo img').css( "height", 120 / (1725 / tamanhoTela) + "px");
		
		
		//Configuracao do topo
		if(tamanhoTela >= 1263) {
			$('.nome').css( "fontSize", "40px");
		}
		if(tamanhoTela < 828) {
			$('.nome').css( "fontSize", "30px");
		}
		if(tamanhoTela < 656) {
			$('.nome').css( "fontSize", "20px");
		}
		if(tamanhoTela < 473) {
			$('.nome').css( "fontSize", "13px");
		}
		
		//Configuracao do menu
		tamanhoMenu = (tamanhoTela * 83) / 100;
		if(tamanhoMenu > 1050) {
			tamanhoMenu = 1050;
		}
		$('#menu_respon_out').css( "width", tamanhoMenu + "px");
		
		
		//Configuracao menu2
		if(tamanhoTela < 734) {
			$('.menu3').css( "height", "40px");
		} else {
			$('.menu3').css( "height", "20px");
		}
		
		//Configuracao patrocinadores
		//$('.img_patroc_1').css( "height", "60px");
		$('.img_patroc_1').css( "height", 83 / (1725 / tamanhoTela) + "px");
		$('.patroc_1').css( "width", 305 / (1725 / tamanhoTela) + "px");
		$('#patrocinadores_oficiais').css( "height", 90 / (1725 / tamanhoTela) + "px");
		$('.cycle-slideshow').css( "height", 90 / (1725 / tamanhoTela) + "px");

		
		
		$('#top').css( "width", tamanhoTela + "px");
		
		$('.anim1').css( "width", (tamanhoTela - (tamanhoTela/3.5)) + "px");
		$('.anim1').css( "height", 626 / (1725 / (tamanhoTela - 20)) + "px");
		tamanhoSlide1 = $(".anim1" ).height();
		$('.image1').css( "height",  tamanhoSlide1 + "px");
		
		$('.anim2').css( "width", (tamanhoTela - (tamanhoTela/3.5)) + "px");
		$('.anim2').css( "height", 626 / (1725 / (tamanhoTela - 20)) + "px");
		tamanhoSlide1 = $(".anim2" ).height();
		$('.image2').css( "height",  tamanhoSlide1 + "px");
		
		$('.anim3').css( "width", (tamanhoTela - (tamanhoTela/3.5)) + "px");
		$('.anim3').css( "height", 626 / (1725 / (tamanhoTela - 20)) + "px");
		tamanhoSlide1 = $(".anim3" ).height();
		$('.image3').css( "height",  (tamanhoSlide1 + 10) + "px");
		
		
		$('.anim1').css( "margin-left", (tamanhoTela / 8) + "px");
		$('.anim2').css( "margin-left", (tamanhoTela / 8) + "px");
		$('.anim3').css( "margin-left", (150 + (tamanhoTela / 4)) + "px");
		
		
	}
	setInterval(ajustar_layout, 15);
	
	animacao1Flag = 0;
	entrada1();
	$( ".anim3" ).hide();
	
	function entrada1() {
		$( ".anim1" ).hide();
		$( ".anim2" ).hide();
		$( ".anim1" ).fadeIn( 3000, function() {
			// Animation complete
			animacao1Flag = 1;
		});
	}
	
	function saida1() {
		$( ".anim1" ).fadeOut( 1000, function() {
			// Animation complete
			animacao1Flag = 2;
		});
	}
	
	
	function entrada2() {
		$( ".anim2" ).fadeIn( 3000, function() {
			// Animation complete
			animacao1Flag = 3;
		});
	}
	
	function saida2() {
		$( ".anim2" ).fadeOut( 1000, function() {
			// Animation complete
			animacao1Flag = 4;
		});
	}
	
	function entrada3() {
		$( ".anim3" ).fadeIn( 3000, function() {
			// Animation complete
			animacao1Flag = 5;
		});
	}
	
	function saida3() {
		$( ".anim3" ).fadeOut( 1000, function() {
			// Animation complete
			animacao1Flag = 6;
		});
	}
	
	function controller_animacao() {
		if (animacao1Flag == 1) { //A primeira entrada foi concluída
			saida1();
			entrada2();
		}
		
		if(animacao1Flag == 2) {//Final da saida 1
			
		}
		
		if(animacao1Flag == 3) { //Final da entrada 2
			saida2();
			entrada3();
		}
		if(animacao1Flag == 4) { //Final da saida 2
			
		}
		if(animacao1Flag == 5) { //Final da entrada 3
			saida3();
			entrada1();
		}
		if(animacao1Flag == 6) { //Final da saida 3
			
		}
	}
	
	setInterval(controller_animacao, 10000);
	
});