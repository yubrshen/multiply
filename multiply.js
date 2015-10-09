var range = 10;
var left = 0;
var right = 0;
var expected = 0;

var upperPast = range * range;
var lowerLast = -1;

function drill() {
    left = Math.floor(Math.random() * range);
    right = Math.floor(Math.random() * range);
    expected = left * right;
}

function present() {
    drill();
    $("#left").html(left);
    $("#right").html(right);
    $("#encouragement").html("Be courageous, just keep trying...");
    // clear inputs
    $(".input").val('');
    }

$("#check").click(function () {
    var equal = parseInt($("#equal").val());
    var upper = parseInt($("#upper").val());
    var lower = parseInt($("#lower").val());
    
    if (equal == expected) {
        $("#encouragement").html('<img id="congrats" src="bravo.GIF" />');
        setTimeout(function(){
            present();
        },
                   5000);
        return;
    } else if (expected < lower && upper < expected) {
        $("#encouragement").html("Sorry, none of your estimate is correct, please reflect and try again.");
        return;
    }
    $("#encouragement").html("");
    if (upper < upperPast && expected <= upper) {
        $("#encouragement").html("Better estimate of the upper bound!");
        upperPast = upper;
    } else {
        $("#encouragement").html("Try better upper bound!");
    }
    if (lowerLast < lower && lower <= expected) {
        $("#encouragement").append("<p>Better estimate of the lower bound!</p>");
        lowerLast = lower;
    } else {
        $("#encouragement").append("<p>Try better lower bound!</p>");
    }
    $("#encouragement").append("<p>Based on the estimate, can you come up better solution?</p>");
    // give hint here
});

present();



