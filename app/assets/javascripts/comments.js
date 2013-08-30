$(document).ready(function(){
  $('#new_comment').bind('ajax:success',function(evt, data, status, xhr){
		$(".comment_listing").append("<b>"+data.user+" says:</b><br/>"+data.content+"<br/><br/>");
		$("#comment").val("");
	}).bind("ajax:error",function() {
		alert('failure');
	});
});