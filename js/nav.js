$(document).ready(function () {

    // icon을 클릭했을 때 nav가 on, off되어라. 

    $('.menuOn').click(function () {

        $(this).css({
            'z-index': 10
        })

        $('.menuOff').css({
            'z-index': 11
        })

        $('nav').addClass('on')
    })


    // 아이콘을 한번 더 클릭했을 때 nav가 다시 사라져라 (on - x )

    $('.menuOff').click(function () {

        $('.menuOn').css({
            'z-index': 11
        })
        $(this).css({
            'z-index': 10
        })


        $('nav').removeClass('on')

    })




    // 아이콘을 클릭했을 때 현재위치로 nav가 내려와라  (on)

    $('.menuOn').click(function () {
        let windowHt = $(window).height();

        let windowSt = $('html, body').scrollTop();


        $('nav').css({
            'top': windowSt
        })

    })

    // .menuOff를 클릭했을 때 본래위치로 nav가 올라가라
    $('.menuOff').click(function () {


        $('nav').css({
            'top': '-250%'
        })



        // nav li가 각각 내려오게?





    })









    $('nav li').click(function () {



        let sectionHeight = $('section').height();
        let listIndex = $(this).index();
        let nowTop = ((sectionHeight + 100) * (listIndex + 1))
        let interviewTop = (sectionHeight + 100) * 5


        if (listIndex <= 2) {
            $('html, body').stop().animate({
                scrollTop: nowTop
            }, 1600)
        } else if (listIndex == 3) {
            $('html, body').stop().animate({
                scrollTop: interviewTop
            }, 1600)
        }

        // li클릭했을 때 nav가 위로 올라가라. 

        $('nav').css({
            'top': '-250%'
        })

        $('.menuOn').css({
            'z-index': '12'
        })

    })




    // window의 offset().top;이 .profile의  scrollTop 위치에 오면 인터렉션이 일어나라. 

    let profile1 = $('.profileTxt')
    let profile2 = $('.profileImg')




 
    $(window).scroll(function () {

        // scrollTop 값을 구해야함.
        let profileTop = $('.profile').offset().top;
        let windowTop = $('html, body').offset().top;
        // $('.menuOn').text(profileTop)


        if (profileTop >= windowTop) {
            $(profile1).css({
                'left': '0',
                'opacity' : '1'
            })
    
            $(profile2).css({
                'right': '0',
                'opacity' : '1'
            })
        }
    })

    

   










})