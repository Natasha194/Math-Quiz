function add() {

    var Player1_score = 0;
    var Player2_score = 0;
    
    player1_name = localStorage.getItem("player 1 name");
    player2_name = localStorage.getItem("player 2 name");
    
    
    document.getElementById("player1").innerHTML = player1_name + ":";
    document.getElementById("player2").innerHTML= player2_name + ":";
    
    document.getElementById("player1score").innerHTML=Player1_score;
    document.getElementById("player2score").innerHTML = Player2_score;
    
    document.getElementById("playerQuestion").innerHTML= "Question Turn - " + player1_name;
    document.getElementById("playerAnswer").innerHTML= "Answer Turn - " + player2_name;
    }
    


function Send() {

    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;

    var questionNumber = "<h4>" + number1 + " " + "/" + " " + number2 + "</h4>";
    var inputBox = "<br> Answer: <input type='number' id='inputCheckBox' placeholder='Answer'>";
    var check_button = "<br><br> <button class='btn btn-danger' onclick='check()'>Check</button>";

    var row = questionNumber + inputBox + check_button;
    document.getElementById("output").innerHTML = row;

    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";

}