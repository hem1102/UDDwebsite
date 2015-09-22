
$(window).load(function()
{
    $("#header").sticky({ topSpacing: 0 });
	//document.getElementById('pager').innerHTML 
	//= '<iframe src="./page_top.html" width="100%" scrolling="No" frameborder="0" height ="1000">';
});

function g()
{
	//$('iframe').contents().height() + 'is the height'
	var iframe = document.getElementById("mainframe");
	iframe.setAttribute('height', '1000');
	var content = iframe.contentWindow.document.body.scrollHeight
	alert(content);
}

