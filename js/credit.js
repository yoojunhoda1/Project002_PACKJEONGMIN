$(document).ready(function(){

    let ht = $(window).height();
    console.log(ht);

    let resizeBox = $('section')

    $(resizeBox).height(ht)

    $(window).resize(function(){

        $(resizeBox).height(ht)

    })

    // function setTimeout 

    setTimeout(function(){

        $('.outline').eq(1).css({
            'z-index' : '5'
        })

    }, 2500)

    setTimeout(function(){

        $('.outline').eq(2).css({
            'z-index' : '5'
        })

    }, 5000)

   
   

    
  

})