var currentTime = moment().hour()
var Date = (moment().format("MMMM D, YYYY, h:mm a"))
$("#currentDay").text(Date);

$(".saveBtn").on("click", function() {
    var toDo = $(this).siblings(".plan").val();
    console.log(toDo)
    var when = $(this).parent().attr("id");
    console.log(when)
    localStorage.setItem(when, toDo);
})

$("#9 .plan").val(localStorage.getItem("9"));
$("#10 .plan").val(localStorage.getItem("10"));
$("#11 .plan").val(localStorage.getItem("11"));
$("#12 .plan").val(localStorage.getItem("12"));
$("#13 .plan").val(localStorage.getItem("13"));
$("#14 .plan").val(localStorage.getItem("14"));
$("#15 .plan").val(localStorage.getItem("15"));
$("#16 .plan").val(localStorage.getItem("16"));
$("#17 .plan").val(localStorage.getItem("17"));
 


$(".time-block").each(function() {
   
    var dataTime = $(this).attr("id");
    console.log(dataTime)
    
    if (dataTime > currentTime) {
        $(this).addClass("future");
    }
    else if (dataTime == currentTime) {
        $(this).addClass("present");
    }
    else if (dataTime < currentTime) {
        $(this).addClass("past");
    }
})







