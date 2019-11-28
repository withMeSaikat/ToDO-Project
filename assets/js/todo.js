
//adding new todo

$("input[type='text']").keypress(function(event) {
	//If pressed Enter
	if(event.which === 13) {
		//grabbing new TODO from input
		var todoText = $(this).val();
		$("ul").append("<li><span><i class='fas fa-trash'></i> </span>" + todoText + "</li>");
		event.preventDefault();
		$(this).val("");
	}
	//console.log(event);
})

//Check off specific Todos by Clicking

var todo = $("ul");
todo.on("click", "li", function() {
	$(this).toggleClass("completed");
})

//deleting todo on clicking X sign

$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	})
	//preventing bubbling up to other elements on click
	event.stopPropagation();
})

// implementing input toggle feature

// $("#toggle").on("click", function() {
// 	$("input[type='text']").fadeToggle();
// })
