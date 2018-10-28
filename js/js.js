var i,s;
s = "";
for(i=1;i<=3;i++)
	s += i +'[shape="circle"; style="filled"; color="blue"]; '+ i +'[shape="circle"]; '+ i +' -> ' + i + ';';
	var show = function(){
		console.log($("#ID").val());
		d3.select("#graph").graphviz()
			.width($("#graph").width())
			.height($("#graph").height())
			.fade(false)
			.renderDot('digraph  {' + s + '}');
	}
$("#show_button").click(show);