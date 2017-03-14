// Check off specific todo by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click on X to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//get new todo from input
		var todoText = $(this).val();
		//clear input
		$(this).val("");
		//create new li to add to ul
		$("ul").append("<li><span>X</span> "+ todoText +"</li>");
	}
});