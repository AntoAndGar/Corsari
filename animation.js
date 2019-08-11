$(document).ready(function(){

    animationClick('#animatedLogo','#animatedLogo','flip')


	function animationClick(trigger, element, animation){
    element = $(element);
	trigger = $(trigger);
    trigger.click(
        function() {
            element.addClass('animated ' + animation);          
            //wait for animation to finish before removing classes
            window.setTimeout( function(){
                element.removeClass('animated ' + animation);
            }, 2000);           
 
        });
}
});
