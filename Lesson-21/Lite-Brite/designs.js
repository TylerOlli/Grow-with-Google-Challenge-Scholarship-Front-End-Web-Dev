// Select color input

function changeColor(){
        $('td').click(function () {
            $(this).css('background-color', $('#colorPicker').val());
        });
};

// Select size input

var table = document.getElementById("pixelCanvas");
var numRows = document.querySelectorAll("tr").length;
var numCols = document.querySelectorAll("td").length;

// When size is submitted by the user, call makeGrid()

function makeGrid(){
    $("#canvasContainer h2").remove();
    $("#pixelCanvas tr").remove();
    $("#canvasContainer input").remove();
    $("#giphy").remove();
    $("#canvasContainer").append('<input type="button" onclick="resetGrid()" value="Reset">')
    $("table").css('outline-style', 'solid')
    $("#canvasContainer").prepend('<h2>Design Canvas</h2>')
    var inputHeight = document.getElementById("inputHeight").value;
    var inputWeight = document.getElementById("inputWeight").value;
    var numberHeight = Number(inputHeight);
    var numberWeight = Number(inputWeight);

    for (var i = numRows; i < numberHeight; i++) {
        var ii = 0;
        $('#pixelCanvas').append("<tr>");
        
    };

    for (var i = numCols; i < numberWeight; i++) {
        $('tr').append("<td class='add' onclick='changeColor()'>");
    };
};

function resetGrid(){
    $("td").css('background-color', '');
};    
