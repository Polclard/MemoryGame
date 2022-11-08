$(function(){

    $.setOfCards = $(".card");

    let list = [1,1,2,2,3,3,4,4,5,5,6,6];


    $(".card").each(function (i, obj) { 
        shuffle(list);
        $(this).text($("h1")).text(list[list.length-1]);
        list.pop();
        shuffle(list);
    });


    if($('.selected-card').length > 1)
    {
        console.log("entered");
       $('.selected-card').each(function(){
            $(this).removeClass("selected-card");
       });
    }

    $(".card").click(function(event){

        if($(event.target).hasClass('selected-card') == false)
        {
            if($('.selected-card').length > 1)
            {
                $('.selected-card').each(function(){
                    $(this).removeClass("selected-card");
                    $(this).removeClass("applyAnimationRottaion");
                    $(this).addClass("applyAnimationRottaionBackwards");
            });
            }
            $(event.target).addClass("applyAnimationRottaion");
            $(event.target).addClass("selected-card");
            $(this).removeClass("applyAnimationRottaionBackwards");

            console.clear();
            if($('.selected-card').length == 2)
            {
                console.log($('.selected-card').eq(0).html());
                if($('.selected-card').eq(0).html() == $('.selected-card').eq(1).html())
                {

                    $('.selected-card').eq(0).addClass("dissapearAnimation");
                    $('.selected-card').eq(1).addClass("dissapearAnimation");

                    $('.selected-card').eq(0).addClass("delete");
                    $('.selected-card').eq(1).addClass("delete");
                }
                else
                {
                }
            }
        } 
        if($('.delete').length >= 12)
        {
            location.reload();
        }  
    });

    

});


function randint(from, to){
    return Math.trunc(Math.random() * (to-from) + from);
}
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }