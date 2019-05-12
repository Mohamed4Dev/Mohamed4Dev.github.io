$(".nav-link").mouseover(function(){
    $(this).css("text-decoration","underline"),
    $(this).css("color","#000")
})
$(".nav-link").mouseout(function(){
    $(this).css("text-decoration","none")
    $(this).css("color","#999")
})