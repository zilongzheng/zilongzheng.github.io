$(document).ready(function () {
    $('a.abstract').click(function () {
        $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
    });
    // $('a.bibtex').click(function() {
    //     $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
    // });
    $('.navbar-nav').find('a').removeClass('waves-effect waves-light');

    $('body').scrollspy({
        target: ".navbar",
        offset: $('nav').outerHeight()
    });

    var clipboard = new ClipboardJS('#copy-btn', { container: document.getElementById('bibtex-modal') });
    clipboard.on('success', function (e) {
        console.log('Copied Success!');
        // console.log(e.text);
    })

    if (window.location.hash) {
        scrollToSection(window.location.hash);
    }

});

function scrollToSection(sectionId) {
    var navHeight = $('nav').outerHeight();
    var offset = 0;
    if (sectionId != '' && sectionId != '/') {
        offset = Math.max(0, $(sectionId).offset().top - navHeight);
    };
    $('html, body').stop().animate({
        scrollTop: offset
    }, 1500, 'easeInOutExpo');
}

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    $('a.page-scroll').bind('click', function (event) {
        event.preventDefault();
        if (this.pathname == window.location.pathname) {
            scrollToSection(this.hash);
        } else {
            window.location.replace(this.href);
        }
        // var href = $anchor.attr('href');
        // var navHeight = $('nav').outerHeight();
        // var offset = 0;
        // if (href != '/') {
        //     offset = Math.max(0, $(href).offset().top - navHeight);
        // };
        // $('html, body').stop().animate({
        //     scrollTop: offset
        // }, 1500, 'easeInOutExpo');
    })
});

//bibtex popup
$(function () {
    $('#bibtex-modal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget)
        var bibdata = $.trim(button.parent().parent().find(".bibtex.hidden").text())
        $(this).find('#bibtex-content').text(bibdata)
        // $(this).find('#copy-btn').attr('data-clipboard-text', bibdata)
        // clipboard.destroy();
    })
});

