     
        
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>3択クイズ</title>
    <style>
        .question { font-size: 20px; }
        .choices { margin-top: 10px; }
        .choice { margin: 5px 0; }
    </style>
</head>
<body>
    <div id="quiz-container">
        <div id="question" class="question"></div>
        <div id="choices" class="choices"></div>
        <button id="next-button" onclick="nextQuestion()">次の問題へ</button>
    </div>
    <script src="quiz.js"></script>
</body>
</html>

