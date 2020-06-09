function confirmName() {
	//document.write("hh");
  var name = document.getElementById("name").value;
  document.getElementById("name_id").innerHTML="Is "+name+" your name?";
  document.getElementById("action").innerHTML="OK";
		$("#hid").show();
$("#myModal").modal();

$("#action").click(function()
{
	document.getElementById("name_id").innerHTML=name+" Welcome to techment training";
	document.getElementById("action").innerHTML="close";
	$("#hid").hide();
	$("#action").click(function(){

		$('#myModal').modal('hide');
		location.reload();

		});

});

}