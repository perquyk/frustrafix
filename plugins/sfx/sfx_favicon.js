changeFavicon();

function changeFavicon(){
    const head = $('head');
    const favicon = $('<link>');
    favicon.attr('href', 'https://cdn-icons-png.flaticon.com/512/9459/9459152.png');
    favicon.attr('rel', 'icon');
    favicon.attr('type', 'image/x-icon');
    const links = $('link');
    links.each((index, link) => {
        if(link.type === 'image/x-icon'){
            link.remove();
        }
        if(link.rel === 'icon'){
            link.remove();
        }
    });
    head.prepend(favicon);
}