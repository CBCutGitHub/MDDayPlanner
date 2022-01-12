// Referrence moment.js to get current date and display as text on html
$("#currentDay").text(moment().format("MMMM DD, YYYY"))
var momentHour = moment().hours()
// Create click event on save button that takes the value of text area and saves it to (localStorage.setItem)
$(".saveBtn").on("click", function(){
    var noteValue = $(this).siblings(".description").val()
    var noteKey = $(this).parent().attr("id")

    localStorage.setItem(noteKey, noteValue)
})
// Grab values from local storage using key and then set as value of set area (localStorage.getItem)
$("#9 .description").val(localStorage.getItem("9"))
$("#10 .description").val(localStorage.getItem("10"))
$("#11 .description").val(localStorage.getItem("11"))
$("#12 .description").val(localStorage.getItem("12"))
$("#13 .description").val(localStorage.getItem("13"))
$("#14 .description").val(localStorage.getItem("14"))
$("#15 .description").val(localStorage.getItem("15"))
$("#16 .description").val(localStorage.getItem("16"))
$("#17 .description").val(localStorage.getItem("17"))

// ****add the rest the grab values***

// Create conditional to change color of note blocks based on time of day

function updateBlockColor(){
    $(".time-block").each(function(){
        var divHour = $(this).attr("id")
        if (divHour < momentHour){
            $(this).addClass("past")

        }
        else if(divHour == momentHour){
            $(this).addClass("present")
        }
        else {
            $(this).addClass("future")
        }
    })
}

updateBlockColor()