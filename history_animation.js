$("#showModal").click(function() {
    $(".modal").addClass("is-active"); 
  });
  
  $(".modal-close").click(function() {
     $(".modal").removeClass("is-active");

  });

$(function () { // wait for document ready
    var flightpath = {
        //modificare traiettoria, composta da punto a punto, i negativi specchiano l'immagine !! non invertono la traiettoria
        entry : {
            curviness: 1.25,
            autoRotate: true,
            values: [
                    {x: 100,	y: 10},
                    {x: 300,    y: 15 }
                 ]
        },
        // leave : {
        //     curviness: 1.25,
        //     autoRotate: true,
        //     values: [
        //             {x: 100,	y: 200}
        //         ]
        //     }
        
    };
     var paragrafi=3;
    // init controller
    var controller = new ScrollMagic.Controller();

    // create tween
    var tween = new TimelineMax()//aggiungere tween/scene allunga la page
        .add(TweenMax.to($("#ship"), 1, {css:{bezier:flightpath.entry}, ease:Power1.easeInOut}))
        // .add(TweenMax.to($("#ship"), 3, {css:{bezier:flightpath.storia1}, ease:Power1.easeNone}))
        // .add(TweenMax.to($("#ship"),3.2,    ))
        // .add(TweenMax.to($("#ship"), 4, {css:{bezier:flightpath.storia2}, ease:Power1.easeNone}))
        // .add(TweenMax.to($("#ship"), 6, {css:{bezier:flightpath.leave}, ease:Power1.easeOut}));

    // build scene
    var scene = new ScrollMagic.Scene({triggerHook: "onCenter", duration: 100, offset: 50})
                    .setPin("#target")
                    .setTween(tween)
                    //.addIndicators() // add indicators (requires plugin)
                    .addTo(controller);
})

