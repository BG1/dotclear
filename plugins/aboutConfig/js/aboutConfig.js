$(function() {
	$("#global_submit").hide();
	$("#local_submit").hide();
	$("#global_nav").change(function() {
		window.location = $("#global_nav option:selected").val();
	})
	$("#local_nav").change(function() {
		window.location = $("#local_nav option:selected").val();
	})
});