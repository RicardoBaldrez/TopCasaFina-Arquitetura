$('#collapse-navbar').on('show.bs.collapse', function(){
    $('.topCasaFina-banner').css('transform', 'translate(-50%, 13%)');
});

$('#collapse-navbar').on('hide.bs.collapse', function(){
    $('.topCasaFina-banner').css('transform', 'translate(-50%, -50%)');
});

$('#link-sobreNos').click(scrollSobreNos);
$('#link-nossosProj').click(scrollNossosProj);
$('#link-depoimentos').click(scrollDepoimentos);
$('#link-video').click(scrollVideo);
$('#link-contato').click(scrollContato);
$('#btn-contato').click(scrollContato);

function scrollSobreNos() {
    var sobreNos = $('#sobre-nos').offset().top;    

    $('body, html').animate({
        scrollTop: sobreNos + 'px'
    }, 1000);
}

function scrollNossosProj() {
    var nossosProjetos = $('#nossos-projetos').offset().top;
    
    $('html, body').animate({
        scrollTop: nossosProjetos + 'px'
    }, 1500);
}

function scrollDepoimentos() {
    var depoimentos = $('#depoimentos').offset().top;
    
    $('html, body').animate({
        scrollTop: depoimentos + 'px'
    }, 2500);
}

function scrollVideo() {
    var video = $('#video').offset().top;

    $('html, body').animate({
        scrollTop: video + 'px'
    }, 3200);
}

function scrollContato() {
    var contato = $('#contato').offset().top;
    
    $('html, body').animate({
        scrollTop: contato + 'px'
    }, 3800);
}