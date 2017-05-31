$(function(){
    $('.youtube-playlist a').each(function(){
        var element = $(this);

        element.click(function(e){
            var iframe = $('.youtube-iframe-container');

            iframe.html('<iframe width="100%" height="315" src="https://www.youtube.com/embed/'+element.data('youtubeId')+'?ecver=1&autoplay=1" frameborder="0" allowfullscreen></iframe>');

            $('.youtube-playlist a').removeClass('active');
            element.addClass('active');
            e.preventDefault();
        });
    })
})
