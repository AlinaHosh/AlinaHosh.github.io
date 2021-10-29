function Prediction(){
    var answers=[
        "Yes",
        "Maybe",
        "Definely",
        "Most likely",
        "No", 
        "Try again",
        "It is certain",
        "Don’t count on it",
        "Very doubtful",
        "Outlook not so good"
    ];

    document.getElementById('pred').onclick = function () {
        var answer = answers[Math.floor(Math.random() * answers.length)];
            document.getElementById('pred').innerHTML = answer;
        }
}