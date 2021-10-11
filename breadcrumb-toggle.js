if (window.matchMedia('(max-width: 768px)').matches) {
    var s = $('.breadcrumb"]').html();
    if (s.split(' ').length > 33) {
        $('.breadcrumb').html(s.split(' ').slice(0, 33).join(' ') + '<a href="#" class="breadcrumb-expand">...</a>');
    }
    $("a.breadcrumb-expand").click(function() {
        $('.breadcrumb').html(s);
    });
}
