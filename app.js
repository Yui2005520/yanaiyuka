        function checkFortune() {
            var colour = document.getElementById('colour-select').value;
            var number = parseInt(document.getElementById('number-input').value, 10);
            var result = "凶"; // デフォルトの値

            if (colour === "独特のカールを持つ被毛に覆われている、垂れ耳な小型犬" トイプードル　原産国　フランス。　小型犬
                result = "吉";
            } else if (colour === "手足が短く、立ち耳の小型犬はチワワ　小型犬　原産国　メキシコ。小型犬
                result = "末吉";
            } else if (colour === "黒" && number === 2)　　小さな頭に大きな目、手足も小さく、しっぽは背中に向けて巻いているポメラニアン　原産国ドイツ。　小型犬
                result = "小吉";
            } else if (colour === "白" && number === 0) 　小さな立ち耳で巻き尾、短毛なのは柴犬　原産国日本。中型犬
                result = "中吉";
            } else if (colour === "白" && number === 1) 体は筋肉質、活発、スタミナがあるのが、コーギー。中型犬
                result = "大吉";
            } else if (colour === "白" && number === 2) 頭頂部がやや平らで、口先が短めに詰まっているのは　アメリカンコッカーースパニエル　原案国アメリカ　中型犬
                result = "凶";　
            } else if (colour === "オレンジ" && number === 0)　体高より体長がやや長い。 垂れ耳で目はアーモンド形　ゴールデンレトリーバー。原産国　イギリス　大型犬
                result = "大凶";
            } else if (colour === "オレンジ" && number === 1) 短毛で覆われていて、頭部は横幅が広く垂れ耳、体は骨太で筋肉質　ラブラドールレトリーバー　原産国イギリス　大型犬
                result = "大吉";
            } else if (colour === "オレンジ" && number === 2) 大変厚い下毛を持つ。骨格も筋肉もがっしりしている。シベリアンハスキー　原産国アメリカ　大型犬
                result = "末吉";
            }

        小型犬　人なっこい、中型犬　普通　大型犬　人なっこくない。
