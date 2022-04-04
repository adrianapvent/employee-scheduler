//WHEN I open the planner THEN the current day is displayed at the top of the calendar
// reference #currentDay, add moment().format('MMMM Do YYYY, h:mm:ss a');, display it

var date = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(date);

$(document).ready(function () {
    // saveBtn click listener
    $(".saveBtn").on("click", function () {
        // get nearby values of the description in JQuery
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem(time, text);
    })
// })

    function timeTracker() {
        //get current number of hours
        var timeNow = moment().hour();

        //loop over time blocks
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            // To chck the time and add the classes for background indicators
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }

// Get item from local storage if any
$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));

// //references
// const currentDayEl = document.querySelector("#currentDay");
// const timeBlocksEl = document.querySelector(".container");
// timeStamp();

timeTracker();

})














