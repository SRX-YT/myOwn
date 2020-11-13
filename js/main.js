$(document).ready(function() {
    $('img.animate__animated').hover(
    	function() {
    		$(this).addClass('animate__bounce'); // Добавляем класс bounce
    	},
    	function() {
    		$(this).removeClass('animate__bounce'); // Убираем класс
    	}
    )
}
)

$(window).scroll(function() {
var height = $(window).scrollTop();
 /*Если сделали скролл на 100px задаём новый класс для header*/
if(height > 100){
$('div.tools').addClass('animate__fadeInUp');
}
});