$(document).ready(function(){
    $('.slider').slick({
        arrows: true,
        appendArrows: $('.slider__control'),
        prevArrow: $('#prevArrow'),
        nextArrow: $('#nextArrow'),
        slidesToShow: 2,
        infinite: false,
        responsive: [{
            breakpoint: 1000,
            settings: {
                slidesToShow: 1
            }
        }],
    });
});

$(document).ready(function() {
    var scroll = document.documentElement.clientHeight;
    var scrollTrigger = $('.section1__scroll');
    scrollTrigger[0].addEventListener('click', function() {
        document.documentElement.scrollTo({
            top: scroll,
            behavior: 'smooth'
            });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuICAgICQoJy5zbGlkZXInKS5zbGljayh7XHJcbiAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgIGFwcGVuZEFycm93czogJCgnLnNsaWRlcl9fY29udHJvbCcpLFxyXG4gICAgICAgIHByZXZBcnJvdzogJCgnI3ByZXZBcnJvdycpLFxyXG4gICAgICAgIG5leHRBcnJvdzogJCgnI25leHRBcnJvdycpLFxyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICAgICAgcmVzcG9uc2l2ZTogW3tcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogMTAwMCxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfV0sXHJcbiAgICB9KTtcclxufSk7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgIHZhciBzY3JvbGwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xyXG4gICAgdmFyIHNjcm9sbFRyaWdnZXIgPSAkKCcuc2VjdGlvbjFfX3Njcm9sbCcpO1xyXG4gICAgc2Nyb2xsVHJpZ2dlclswXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUbyh7XHJcbiAgICAgICAgICAgIHRvcDogc2Nyb2xsLFxyXG4gICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSk7Il0sImZpbGUiOiJzY3JpcHQuanMifQ==