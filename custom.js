$(document).ready(function () {

    let mousePointer = $('#mouse-pointer');
    let defaultPointer = $('#mouse-pointer-defalut');
    let clickElemnet = $('.phototicket li');
    

    function moveCursorDefalut(e) {
        defaultPointer.css({
            "left": e.pageX,
            "top": e.pageY
        })


    }




    function moveCursor(e) {
        mousePointer.css({
            "left": e.pageX,
            "top": e.pageY,
            "opacity" : "1"
        })


    }

    function moveCursor2(e) {
        mousePointer.css({
            "left": e.pageX,
            "top": e.pageY, 
            "opacity": 0
        })


    }







    

    $(clickElemnet).on('mousemove', moveCursor)
    $('.filmo').on('mousemoce', moveCursor2)

    
    // $(noneClickElement).on('mousemove', moveCursor2)

  










       





})