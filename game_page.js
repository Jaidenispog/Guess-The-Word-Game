player1_name= localStorage.getItem("Player1");
player2_name= localStorage.getItem("Player2");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML=player1_name + " : ";
document.getElementById("player2_name").innerHTML=player2_name + " : ";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn - " + player2_name;



function send() {
    get_word = document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log(word);

    ch1=word.charAt(1); 
    console.log(ch1);
    
    length_div_2 = Math.floor(word.length/2);
    ch2=word.charAt(length_div_2);
    console.log(ch2);

    length_minus_1= word.length-1;
    ch3=word.charAt(length_minus_1);
    console.log(ch3);
    
    remove_ch1= word.replace(ch1, "_");
    remove_ch2=remove_ch1.replace(ch2, "_");    
    remove_ch3=remove_ch2.replace(ch3, "_");
    console.log(remove_ch3);

    question_word="<h4 id='word_display'Q.>" + remove_ch3 + "</h4>";
    input_box="<br> ANSWER: <input type='text' id='input_check_box'>";
    check_button="<br> <br> <button onclick='check()'class='btn btn-info'>Check</button>";
    row=question_word + input_box + check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}

question_turn="player_1";
answer_turn="player_2";


function check() {
get_answer = document.getElementById("input_check_box").value;
answer = get_answer.toLowerCase();
console.log(answer);


    if (answer == word) {

        if (answer_turn == "player_1") {
    
            player1_score= player1_score + 1;
            document.getElementById("player1_score").innerHTML= player1_score;
            

        }
    else {

        player2_score = player2_score +1;
        document.getElementById("player2_score").innerHTML=player2_score;

    }

    if (question_turn == "player_1") {

        question_turn = "player_2";
        document.getElementById("player_question").innerHTML = "questionturn" + player2_name;


    } 

    else {

          question_turn = "player_1";
          document.getElementById("player_question").innerHTML = "question_turn" + player1_name;

    } 

    }

    if (answer_turn=="player_1") {

        answer_turn = "player_2";
        document.getElementById("player_answer").innerHTML = "answer_turn" +player2_name;

    }

    else {
        answer_turn = "player_1";
        document.getElementById("player_answer").innerHTML = "answer_turn" + player1_name;
    }
document.getElementById("output").innerHTML="";




}
