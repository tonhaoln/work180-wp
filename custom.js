<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet">
<script>	
jQuery(function($) {
    
    //Products and Services Table READ MORE
    $('.table-control .row-header').click(function() {
        $(this).toggleClass('active');
        $(this).next('.row-content').toggleClass('show');
    });

    //Anchor general READ MORE
    $('.reveal-more-control .et_pb_module_header').click(function() {
        $(this).toggleClass('active');
        $(this).next('.et_pb_blurb_description').toggleClass('show');
    });

    //Breadcrumbs TOGGLE MOBILE
    if (window.matchMedia('(max-width: 768px)').matches) {

        var s = $('.breadcrumbs-control span[typeof="BreadcrumbList"]').html();

        if (s.split(' ').length > 33) {
            $('.breadcrumbs-control span[typeof="BreadcrumbList"]').html(s.split(' ').slice(0, 33).join(' ') + '<a href="#" class="br-expand">...</a>');
        }

        $("a.br-expand").click(function() {
            $('.breadcrumbs-control span[typeof="BreadcrumbList"]').html(s);
        });
    }

    //$('.breadcrumbs-control span[typeof="BreadcrumbList"]').click(function() {
    //$(this).toggleClass('active');			
    //});

    //$('.fa').click(function() {
        //alert('The button was clicked!'); //$(this).toggleClass('active');			
    //});

});
</script>
