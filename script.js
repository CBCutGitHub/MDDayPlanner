// Referrence moment.js to get current date and display as text on html
$("#currentDay").text(moment().format("MMMM DD, YYYY"))

// Create click event on save button that takes the value of text area and saves it to (localStorage.setItem)
$(".saveBtn").on("click", function(){
    var noteValue = $(this).siblings(".description").val()
    var noteKey = $(this).parent().attr("id")

    localStorage.setItem(noteKey, noteValue)
})
// Grab values from local storage using key and then set as value of set area (localStorage.getItem)
$("#9 .description").val(localStorage.getItem("9"))
$("#10 .description").val(localStorage.getItem("10"))


// Create conditional to change color of note blocks based on time of day

