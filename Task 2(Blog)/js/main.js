$(function(){
    $('#sortCat').click(function(){
        $('#sortCat .select-sorting-list').slideToggle(100);
        $('#sortCat .current i').toggleClass('active-select-sorting-icon');
        // let sortingListLi = $('.select-sorting-list li');
        // console.log(sortingListLi);
        // [...sortingListLi].forEach(el=>{
        //     el.click(function(){
        //         // let sortingListLiVal = el.attr('data-value');
        //         // let currentLi = $('.current');
        //         // console.log(sortingListLiVal);
        //         // currentLi.text(sortingListLiVal);
        //         console.log(el.attr('data-value'));
        //     })
        //     console.log(el);
        // })
    })
    $('#sortPage').click(function(){
        $('#sortPage .select-sorting-list').slideToggle(100);
        $('#sortPage .current i').toggleClass('active-select-sorting-icon');
    })

    let pageStyleIcons = $('.filter-list-icons .icn');
    [...pageStyleIcons].forEach(el=>{
        // el.css({"color":"#ff5a3c"})
        let dataId = el.getAttribute("data-id");
        // let activePageStyle = $('.row.active-page-style');
        // if(activePageStyle){
        //     el.style.color = '#ff5a3c';
        // }

        // el.siblings('.icn').removeClass('active-icon');
        // el.siblings('.icn').addClass('');
        // el.addClass('active-icon');
        // console.log(dataId)
        let style = $("#"+dataId);
        // console.log(style);
        console.log(el);

        el.addEventListener('click',function(){
            // if(activePageStyle){
            //     activePageStyle.siblings().removeClass('active-page-style');
            //     activePageStyle.siblings('.row').addClass('d-none');
            // }
            style.siblings('.row').removeClass('active-page-style');
            style.siblings('.row').addClass('d-none');
            style.addClass('active-page-style');

            let activeIcon = $('.active-icon');
            if(activeIcon){
                activeIcon.removeClass('active-icon');
            }
            $(this).addClass('active-icon');
            // let icon =document.querySelector(this + " i");
            // icon.classList.add('active-icon')
            // console.log(icon);
            // console.log(this);
            // console.log($(this)[0]);
            // if(activePageStyle){
            //     activePageStyle.removeClass('active-page-style');
            // }
            // style.toggleClass('active-page-style')
            // console.log($(this));
        })
    })
})