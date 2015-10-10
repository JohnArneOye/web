
$(".card").click(function(){
  $el = $(this);
  $parent = $el.parent();
  if($el.hasClass("selected")){
    var curWidth = $el.width();
    $parent.removeClass("large-12");
    $parent.addClass("large-6");
    var autoWidth = $parent.width();
    $el.animate({height:200,width:autoWidth},100); //set to parent width instead
    $parent.find("span:first").fadeIn();
    $parent.removeClass("large-12")
    $parent.addClass("large-6");
    $el.removeClass("selected");
  }else{
    var curHeight = $el.height();
    var autoHeight = $el.css("height", "auto").height();
    $el.height(curHeight);
    $el.animate({height:autoHeight+25,width:1170}, 100); //Find parent width instead
    $parent.find("span:first").fadeOut();
    $parent.removeClass("large-6")
    $parent.addClass("large-12");
    $el.addClass("selected");
  }

});
