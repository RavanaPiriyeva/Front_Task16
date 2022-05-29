$(document).ready(function(){

    $("#test").hide();

    $("button").click(function(){
        // $("p").hide();
        // $("p:first").hide();
        // $("p:odd").hide();
        $("#test").show();
    })

    // $('#test').mouseenter(function(){
    //     alert('mouseenter');
    // })
    // $('#test').click(function(){
    //     alert('click');
    // })
    // $('#test').dblclick(function(){
    //     alert('dblclick');
    // })
    // // $('#test').mouseenter(function(){
    // //     alert('mouseleave');
    // // })

    // $("#test").on("click",function(){
    //     $(this).css("background-color", "lightgray");
    // })


    // $(".grow").click(function(){
    //     $("#box").animate({width: "200px"})
    // })

    
    // $(".shrink").click(function(){
    //     $("#box").animate({width: "100px"})
    // })

    // $(".grow").click(function () {
    //     $("#box").animate({width: "200px"},1000);
    //     $("#box").queue(function(){
    //         $("#box").css("background-color", "green");  
    //         $("#box").dequeue();
    //       });
    //     $("#box").animate({height: "200px"},1000);
        
    //     $("#box").animate({width: "100px"},1000);
    //     $("#box").animate({height: "100px"},1000);
    // })
    // $(".shrink").click(function(){
    //     $("#box").clearQueue();
    // })

    let box = $("#box");

    $(".grow").click(function(){
        // box.slideUp();
        box.slideToggle();
    })
    $(".shrink").click(function(){
        box.slideDown();
    })

    




});