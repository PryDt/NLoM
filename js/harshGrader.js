
// DON'T CHEAT!! ~ PryDt
var ans = 
	[
		"a", "d", "b", 
		"a", "c", "b", 
		"d", "a", "c", 
		"c", "a", "b"
						];

$(function() {
	var correct = 0;
	$("#submit").click(function() {
		//alert($("input[name=1]:checked").val());
		
		var all = true; // are all answered?
		$("input:radio").each(function(){
			
			var name = $(this).attr("name");
			if($("input:radio[name="+ name + "]:checked").length == 0)
			{
				all = false;
			}

		});

		if(!all)
		{
			alert("How bad of a student do you have to be to not answer ALL the questions? At least try...");
			return false; // exit if all questions aren't answered
		}

		for(i = 0; i < ans.length; i++)
		{
			if($("input[name=" + (i+1) + "]:checked").val() == ans[i])
			{
				correct++;
			}
		}
		window.location.replace("https://prydt.github.io/NLoM/done.html");
		// Testing...
		//alert(correct);
		//correct = 0;
	});
});
