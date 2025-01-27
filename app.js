     function checkFortune() {
            var colour = document.getElementById('colour-select').value;
            var number = parseInt(document.getElementById('number-input').value, 10);
            var result = "犬"; // デフォルトの値

            if (colour === "小型犬" && number === 0) {
                result = "トイプードル";
            } else if (colour === "小型犬" && number === 1) {
                result = "チワワ";
            } else if (colour === "小型犬" && number === 2) {
                result = "ポメラニアン";
            } else if (colour === "中型犬" && number === 0) {
                result = "コーギー";
            } else if (colour === "中型犬" && number === 1) {
                result = "柴犬";
            } else if (colour === "中型犬" && number === 2) {
                result = "アメリカンコッカースパニエル";
            } else if (colour === "大型犬" && number === 0) {
                result = "ゴールデンレトリバー;
            } else if (colour === "大型犬" && number === 1) {
                result = "ラブラドルレトリバー";
            } else if (colour === "大型犬" && number === 2) {
                result = "シベリアンハスキー";
            }

            document.getElementById('result-output').innerText = "あなたのワンちゃんは【" + result + "】です";
        } 　

