var boomies = document.getElementById("Boomies");
var axi = document.getElementById("AXI");
var prjct1 = document.getElementById("prjct1");
var prjct2 = document.getElementById("prjct2");

function showBoomies() {
    boomies.classList.remove("hidden")
    boomies.classList.add("flex")
    axi.classList.remove("flex")
    axi.classList.add("hidden")
    prjct1.classList.remove("hover-blur")
    prjct2.classList.remove("hover-blur")
}

function noshowBoomies() {
    boomies.classList.remove("flex")
    boomies.classList.add("hidden")
    prjct1.classList.add("hover-blur")
    prjct2.classList.add("hover-blur")
}

function showAxi() {
    axi.classList.remove("hidden")
    axi.classList.add("flex")
    boomies.classList.remove("flex")
    boomies.classList.add("hidden")
    prjct2.classList.remove("hover-blur")
    prjct1.classList.remove("hover-blur")
}

function noshowAxi() {
    axi.classList.remove("flex")
    axi.classList.add("hidden")
    prjct2.classList.add("hover-blur")
    prjct1.classList.add("hover-blur")
}

// scrolling 
function scrollFooter(scrollY, heightFooter)
{

    if(scrollY >= heightFooter)
    {
        $('footer').css({
            'bottom' : '0px'
        });
    }
    else
    {
        $('footer').css({
            'bottom' : '-' + heightFooter + 'px'
        });
    }
}

$(window).load(function(){
    var windowHeight        = $(window).height(),
        footerHeight        = $('footer').height(),
        heightDocument      = (windowHeight) + ($('.content').height()) + ($('footer').height());

    // De grootte van het element instellen om te animeren
    $('#scroll-animate, #scroll-animate-main').css({
        'height' :  heightDocument + 'px'
    });

    // De grootte van de koptekst en inhoudselementen definiëren
    $('header').css({
        'height' : windowHeight + 'px',
        'line-height' : windowHeight + 'px'
    });

    $('.wrapper-parallax').css({
        'margin-top' : windowHeight + 'px'
    });

    scrollFooter(window.scrollY, footerHeight);

    // tijdens het scrollen
    window.onscroll = function(){
        var scroll = window.scrollY;

        $('#scroll-animate-main').css({
            'top' : '-' + scroll + 'px'
        });
        
        $('header').css({
            'background-position-y' : 50 - (scroll * 100 / heightDocument) + '%'
        });

        scrollFooter(scroll, footerHeight);
    }
});

// scroll down after click on arrow
$(function() {
    $('a[href*=#]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
  });

// typing animation
(function ($) {
    $.fn.writeText = function (content) {
      var contentArray = content.split(""),
        current = 0,
        elem = this;
      setInterval(function () {
        if (current < contentArray.length) {
          elem.text(elem.text() + contentArray[current++]);
        }
      }, 80);
    };
  })(jQuery);

  // input text for typing animation
  $("#holder").writeText("FRONT-END DEVELOPER");

// image modal
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img");
function ShowImage(image) {
    console.log(image);
    modal.style.display = "block";
    modalImg.src = image;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}