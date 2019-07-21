function populate() {
    if (quiz.isEnded()) {
        showScores();

    } else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for (var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Pertanyaan " + currentQuestionNumber + " dari " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Hasil Skor</h1>";

    gameOverHTML += "<h2 id='score'> Jumlah Skor Anda: " + quiz.score + "/10</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};




// create questions
var questions = [
    new Question("CSS merupakan singkatan dari ?", ["Cascading Style Sheet", "Cascading Sheet Style", "Computer Sheet Style", "Computer Style Sheet"], "Cascading Style Sheet"),
    new Question("Bahasa yang digunakan untuk mendesain sebuah website adalah?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("Properti yang digunakan untuk mengatur ukuran besar kecilnya sebuah huruf adalah  ?", ["font-weight", "font-size", "font-color", "font-variant"], "font-size"),
    new Question("properti yang digunakan untuk mengatur tebal tipisnya sebuah huruf adalah", ["font-size", "font-weight", "font-variant", "font-color"], "font-weight"),
    new Question("untuk membuat sebuah garis tepi pada suatu content dibutuhkan sebuah properti ? ", ["font-style", "color", "border-radius", "border"], "border"),
    new Question("berikut adalah Nilai (Value) yang dibutuhkan untuk membuat sebuah paragraf menjadi rata kanan-kiri pada properti 'text-align' adalah ?", ["justify", "center", "right", "left"], "justify"),
    new Question("Dimana didalam dokumen html yang menjadi tempat yang tepat untuk merujuk ke style sheet eksternal ? ", ["Didalam (body) section", "Didalam (head) section", "Diakhir dokumen html", "Diawal dokumen html"], "Didalam (head) section"),
    new Question("Properti mana yang digunakan untuk mengubah warna latar belakang?", ["bgcolor", "color", "background-color", "style-background"], "background-color"),
    new Question("Berikut ini manakah syntax CSS yang benar", ["{body:color=yellow;}", "body {color:yellow;}", "body:color=yellow;", "{body;color:yellow;"], "body {color:yellow;}"),
    new Question("Bagaimana Anda memasukkan komentar dalam file CSS ? ", ["// ini adlaah komentar //", "// ini adalah komentar", "'ini adalah komentar;", "/* ini adalah komentar */"], "/* ini adalah komentar */")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();