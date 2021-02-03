// Even link ketika di klik 
$('.aku').on('click',function() {

var tujuan = $(this).attr('href');
var elemenTujuan = $(tujuan)

$('body').animate({
	scrollTop: elemenTujuan.offset().top-50
},1000,'swing');

e.preventDefault();

});
// About Ketika halaman di load
$(window).on('load',function(){

	$('.pkiri').addClass('pmuncul');
	$('.pkanan').addClass('pmuncul');

});



// parallax fungsi scroll
$(window).scroll(function() {
	var wScroll = $(this).scrollTop();

	//jumbotron

	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/4 +'% )'

	});


	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/2 +'% )'

	});


	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wScroll/2 +'% )'

	});

	// portofolio
	
	if(wScroll > $('.portofolio').offset().top-250){

		$('.portofolio .img-thumbnail').each(function(i){

			setTimeout(function(){
				$('.portofolio .img-thumbnail').eq(i).addClass('muncul');

			}, 300 * (i+1));
		});




		
	}





});


