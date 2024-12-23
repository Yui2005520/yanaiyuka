        function checkFortune() {
            var colour = document.getElementById('colour-select').value;
            var number = parseInt(document.getElementById('number-input').value, 10);
            var result = "凶"; // デフォルトの値

            if (colour === "モコモコしていて、垂れ耳な小型犬" トイプードル　原産国　フランス&& number === 0) {
                result = "吉";
            } else if (colour === "立ち耳の小型犬はチワワ　原産国　メキシコ" && number === 1) {
                result = "末吉";
            } else if (colour === "黒" && number === 2) {
                result = "小吉";
            } else if (colour === "白" && number === 0) {
                result = "中吉";
            } else if (colour === "白" && number === 1) {
                result = "大吉";
            } else if (colour === "白" && number === 2) {
                result = "凶";
            } else if (colour === "オレンジ" && number === 0) {
                result = "大凶";
            } else if (colour === "オレンジ" && number === 1) {
                result = "大吉";
            } else if (colour === "オレンジ" && number === 2) {
                result = "末吉";
            }

            document.getElementById('result-output').innerText = "あなたの今週の運勢は【" + result + "】です";
        }
