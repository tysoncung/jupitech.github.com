$(document).ready(function() {

    var $panels = $('.profilescroll .profilecnt .profile');
    var $container = $('.profilescroll .profilecnt');

    // if false, we'll float all the panels left and fix the width 
    // of the container
    var horizontal = true;

    // float the panels left if we're going horizontal
    if (horizontal) {
    $panels.css({
      'float' : 'left',
      'position' : 'relative' // IE fix to ensure overflow is hidden
      });

    // calculate a new width for the container (so it holds all panels)
    $container.css('width', $panels[0].offsetWidth * $panels.length);
    }

    // collect the scroll object, at the same time apply the hidden overflow
    // to remove the default scrollbars that will appear
    var $scroll = $('.profilescroll').css('overflow', 'hidden');

    // handle nav selection
    function selectNav() {
      $(this)
        .parents('ul:first')
        .find('li')
        .removeClass('active')
        .end()
        .end().parents('li')
        .addClass('active');
    }

    $('.slider .navigation').find('a').click(selectNav);

    // go find the navigation link that has this target and select the nav
    function trigger(data) {
      var el = $('.slider .navigation').find('a[href$="' + data.id + '"]').get(0);
      selectNav.call(el);
    }

    if (window.location.hash) {
      trigger({ id : window.location.hash.substr(1) });
    } else {
      $('.navigation ul a:first').click();
      $('.navigation ul.projects a:first').click();
    }

    // offset is used to move to *exactly* the right place, since I'm using
    // padding on my example, I need to subtract the amount of padding to
    // the offset.  Try removing this to get a good idea of the effect
    var offset = parseInt((horizontal ? 
          $container.css('paddingTop') : 
          $container.css('paddingLeft')) 
        || 0) * -1;


    var scrollOptions = {
navigation: '.navigation a',
            axis: 'x',
            force: true,
            interval: 5000,
            onAfter: trigger, // our final callback
            offset: offset,
            duration: 500,
            easing: 'swing',
            prev: 'div.actions a.previous',
            next: 'div.actions a.next'
    };

    // Who We Are
    scrollOptions['target'] = $('.profilescroll');
    scrollOptions['items'] = $('.profilescroll .profilecnt .profile');
    $('.profilescroll').serialScroll(scrollOptions);

    // Featured Projects
    scrollOptions['interval'] = 60000;
    scrollOptions['target'] = $('#featured-projects.slider .scroll');
    scrollOptions['items'] = $('#featured-projects.slider .scroll-container .scroll-panel');
    $('#featured-projects.slider').serialScroll(scrollOptions);

});
// JavaScript Document