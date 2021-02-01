function Send() {

    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;

    var questionNumber = "<h4>" + number1 + " " + "-" + " " + number2 + "</h4>";
    var inputBox = "<br> Answer: <input type='number' id='inputCheckBox' placeholder='Answer'>";
    var check_button = "<br><br> <button class='btn btn-danger' onclick='check()'>Check</button>";

    var row = questionNumber + inputBox + check_button;
    document.getElementById("output").innerHTML = row;

    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";

}