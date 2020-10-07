// $(document).ready(function() {
// 	$("#animate").show(5000).delay(5000).hide(5000);


// })
$(document).ready(function() {
    removeItem();
});

$(document).ready(function() {
    $('#button').on('click', function() {
        $('p:last').after('<p>' + $("#task").val() + '</p>');
        $('#task').val(' ');
        removeItem();
    })

})

function removeItem(){
	$("p").on("click", function(){
        	$(this).animate({
            opacity: 0.0,
            paddingLeft
            : '+=80'
        }, 500, function() {
            $(this).remove();
        });
        })
}