$(document).ready(function () {



    // 실행문



    let i = $('.filmo img').index()
    let ii = $('.filmo div').index()

    $('.filmo img').eq(0).click(function () {
        $('.filmo div').eq(10).removeClass('on')
        $('.filmo div').eq(10).addClass('on')

    })



    $('.filmo img').eq(1).click(function () {
        $('.filmo div').eq(11).addClass('on')
    })

    $('.filmo img').eq(2).click(function () {
        $('.filmo div').eq(12).addClass('on')
    })

    $('.filmo img').eq(3).click(function () {
        $('.filmo div').eq(13).addClass('on')
    })

    $('.filmo img').eq(4).click(function () {
        $('.filmo div').eq(14).addClass('on')
    })

    $('.filmo img').eq(5).click(function () {
        $('.filmo div').eq(15).addClass('on')
    })

    $('.filmo img').eq(6).click(function () {
        $('.filmo div').eq(16).addClass('on')
    })

    $('.filmo img').eq(7).click(function () {
        $('.filmo div').eq(17).addClass('on')
    })

    $('.filmo img').eq(8).click(function () {
        $('.filmo div').eq(18).addClass('on')
    })

    /*
    1111 
    */

    $('.filmo img').eq(9).click(function () {
        $('.filmo div').eq(19).addClass('on')
    })

    $('.filmo img').eq(10).click(function () {
        $('.filmo div').eq(20).addClass('on')
    })

    //    뒷면 끄기

    $('.filmo div').eq(ii - 10).click(function () {
        $(this).removeClass('on')
    })

    $('.filmo div').eq(ii - 9).click(function () {
        $(this).removeClass('on')
    })

    $('.filmo div').eq(ii - 8).click(function () {
        $(this).removeClass('on')
    })

    $('.filmo div').eq(ii - 7).click(function () {
        $(this).removeClass('on')
    })

    $('.filmo div').eq(ii - 6).click(function () {
        $(this).removeClass('on')
    })

    $('.filmo div').eq(ii - 5).click(function () {
        $(this).removeClass('on')
    })


    $('.filmo div').eq(ii - 4).click(function () {
        $(this).removeClass('on')
    })


    $('.filmo div').eq(ii - 3).click(function () {
        $(this).removeClass('on')
    })

    $('.filmo div').eq(ii - 2).click(function () {
        $(this).removeClass('on')
    })

    $('.filmo div').eq(ii - 1).click(function () {
        $(this).removeClass('on')
    })



    
    











})