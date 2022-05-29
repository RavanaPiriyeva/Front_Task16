// $(function(){
// $('#bars-icon').click(function(){
//     $('#mySidenav').css({"width": "250px"})
// })
// $('.closebtn').click(function(){
//     $('#mySidenav').css({"width": "0"})
  
// })

// $('.menu-item').each(function(){
//     $(this).click(function(){
//     $('.sub-menu').css({"display": "block"})
//     $('body').css({"background-color": "red"})
// })
// })

// })




$(function(){
    $('#sortCat').click(function(){
        $('#sortCat .select-sorting-list').slideToggle(100);
        $('#sortCat .current i').toggleClass('active-select-sorting-icon');
    })
    $('#sortPage').click(function(){
        $('#sortPage .select-sorting-list').slideToggle(100);
        $('#sortPage .current i').toggleClass('active-select-sorting-icon');
    })
    $('.fa-th-large').click(function(){
        $('.list-for-icon').removeClass("col-lg-6")
        $('.list-for-icon').addClass('col-lg-6')
    })
    $('.fa-list').click(function(){
        $('.list-for-icon').addClass('col-lg-12')
        $('.list-for-icon').removeClass('col-lg-6')
       
    })

    let pageStyleIcons = $('.filter-list-icons .icn');
    [...pageStyleIcons].forEach(el=>{
        let dataId = el.getAttribute("data-id");
       
        let style = $("#"+dataId);
        console.log(el);

        el.addEventListener('click',function(){
        
            style.siblings('.row').removeClass('active-page-style');
            style.siblings('.row').addClass('d-none');
            style.addClass('active-page-style');

            let activeIcon = $('.active-icon');
            if(activeIcon){
                activeIcon.removeClass('active-icon');
            }
            $(this).addClass('active-icon');
        
        })
    })
})
