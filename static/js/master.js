var a;
var score;
var high;
var gg;
var wrong;
var level;
var count;
score = 0;
level = 1;
high = 0;
wrong = 0;
gg = 0;
count = 0;

function scoreing1() {
    let d = document.getElementById('box1');
    count = 0;
    if (box1.style.background == 'white') {
        score = score + 10;
        box1.style.background = 'green';
        d.innerHTML = '<audio autoplay><source src="static/correct_option.mp3" type="audio/mpeg"></audio>';
        if (score <= 100) {
            level = 1;
            document.getElementById('lvlnm').innerHTML = `${level}`;
        }
        else if (score > 100 && score <= 300) {
            level = 2;
            document.getElementById('lvlnm').innerHTML = `${level}`;
        }
        else if (score > 300 && score <= 500) {
            level = 3;
            document.getElementById('lvlnm').innerHTML = `${level}`;
        }
        else if (score > 500) {
            level = 4;
            document.getElementById('lvlnm').innerHTML = `${level}`;
        }
        document.getElementById('CurrentScore').innerHTML = `${score}`;

    }
    else {
        wrong++;
        d.style.background = 'red';
        d.innerHTML = '<audio autoplay><source src="static/wrong_option.mp3" type="audio/mpeg"></audio>';
        setTimeout(() => {
            d.style.background = 'none';
        }, 200);
        if (wrong == 3) {
            if (score > high)
                high = score;
            gg = 0;
            document.getElementById('highsco').innerHTML = `${high}`;
            document.getElementById('CurrentScore').innerHTML = `${score}`;
            document.getElementById('gameover').style.display = 'block';
            score = 0;
            wrong = 0;
            level = 1;
        }
    }
}
function scoreing2() {
    let d = document.getElementById('box2');
    count = 0;
    if (box2.style.background == 'white') {
        score = score + 10;
        box2.style.background = 'green';
        d.innerHTML = '<audio autoplay><source src="static/correct_option.mp3" type="audio/mpeg"></audio>';
        if (score <= 100) {
            level = 1;
            document.getElementById('lvlnm').innerHTML = `${level}`;
        }
        else if (score > 100 && score <= 300) {
            level = 2;
            document.getElementById('lvlnm').innerHTML = `${level}`;
        }
        else if (score > 300 && score <= 500) {
            level = 3;
            document.getElementById('lvlnm').innerHTML = `${level}`;
        }
        else if (score > 500) {
            level = 4;
            document.getElementById('lvlnm').innerHTML = `${level}`;
        }
        document.getElementById('CurrentScore').innerHTML = `${score}`;

    }
    else {
        wrong++;
        d.style.background = 'red';
        d.innerHTML = '<audio autoplay><source src="static/wrong_option.mp3" type="audio/mpeg"></audio>';
        setTimeout(() => {
            d.style.background = 'none';
        }, 200);
        if (wrong == 3) {
            if (score > high)
                high = score;
            gg = 0;
            document.getElementById('highsco').innerHTML = `${high}`;
            document.getElementById('CurrentScore').innerHTML = `${score}`;
            document.getElementById('gameover').style.display = 'block';
            score = 0;
            wrong = 0;
            level = 1;
        }
    }
}
function scoreing3() {
    let d = document.getElementById('box3');
    count = 0;
    if (box3.style.background == 'white') {
        score = score + 10;
        box3.style.background = 'green';
        d.innerHTML = '<audio autoplay><source src="static/correct_option.mp3" type="audio/mpeg"></audio>';
        if (score <= 100) {
            level = 1;
            document.getElementById('lvlnm').innerHTML = `${level}`;
        }
        else if (score > 100 && score <= 300) {
            level = 2;
            document.getElementById('lvlnm').innerHTML = `${level}`;
        }
        else if (score > 300 && score <= 500) {
            level = 3;
            document.getElementById('lvlnm').innerHTML = `${level}`;
        }
        else if (score > 500) {
            level = 4;
            document.getElementById('lvlnm').innerHTML = `${level}`;
        }
        document.getElementById('CurrentScore').innerHTML = `${score}`;

    }
    else {
        wrong++;
        d.style.background = 'red';
        d.innerHTML = '<audio autoplay><source src="static/wrong_option.mp3" type="audio/mpeg"></audio>';
        setTimeout(() => {
            d.style.background = 'none';
        }, 200);
        if (wrong == 3) {
            if (score > high)
                high = score;
            gg = 0;
            document.getElementById('highsco').innerHTML = `${high}`;
            document.getElementById('CurrentScore').innerHTML = `${score}`;
            document.getElementById('gameover').style.display = 'block';
            score = 0;
            wrong = 0;
            level = 1;
        }
    }
}
function scoreing4() {
    let d = document.getElementById('box4');
    count = 0;
    if (box4.style.background == 'white') {
        score = score + 10;
        box4.style.background = 'green';
        d.innerHTML = '<audio autoplay><source src="static/correct_option.mp3" type="audio/mpeg"></audio>';
        if (score <= 100) {
            level = 1;
            document.getElementById('lvlnm').innerHTML = `${level}`;
        }
        else if (score > 100 && score <= 300) {
            level = 2;
            document.getElementById('lvlnm').innerHTML = `${level}`;
        }
        else if (score > 300 && score <= 500) {
            level = 3;
            document.getElementById('lvlnm').innerHTML = `${level}`;
        }
        else if (score > 500) {
            level = 4;
            document.getElementById('lvlnm').innerHTML = `${level}`;
        }
        document.getElementById('CurrentScore').innerHTML = `${score}`;

    }
    else {
        wrong++;
        d.style.background = 'red';
        d.innerHTML = '<audio autoplay><source src="static/wrong_option.mp3" type="audio/mpeg"></audio>';
        setTimeout(() => {
            d.style.background = 'none';
        }, 200);
        if (wrong == 3) {
            if (score > high)
                high = score;
            gg = 0;
            document.getElementById('highsco').innerHTML = `${high}`;
            document.getElementById('CurrentScore').innerHTML = `${score}`;
            document.getElementById('gameover').style.display = 'block';
            score = 0;
            wrong = 0;
            level = 1;
        }
    }
}
function scoreing5() {
    let d = document.getElementById('box5');
    count = 0;
    if (box5.style.background == 'white') {
        score = score + 10;
        box5.style.background = 'green';
        d.innerHTML = '<audio autoplay><source src="static/correct_option.mp3" type="audio/mpeg"></audio>';
        if (score <= 100) {
            level = 1;
            document.getElementById('lvlnm').innerHTML = `${level}`;
        }
        else if (score > 100 && score <= 300) {
            level = 2;
            document.getElementById('lvlnm').innerHTML = `${level}`;
        }
        else if (score > 300 && score <= 500) {
            level = 3;
            document.getElementById('lvlnm').innerHTML = `${level}`;
        }
        else if (score > 500) {
            level = 4;
            document.getElementById('lvlnm').innerHTML = `${level}`;
        }
        document.getElementById('CurrentScore').innerHTML = `${score}`;

    }
    else {
        wrong++;
        d.style.background = 'red';
        d.innerHTML = '<audio autoplay><source src="static/wrong_option.mp3" type="audio/mpeg"></audio>';
        setTimeout(() => {
            d.style.background = 'none';
        }, 200);
        if (wrong == 3) {
            if (score > high)
                high = score;
            gg = 0;
            document.getElementById('highsco').innerHTML = `${high}`;
            document.getElementById('CurrentScore').innerHTML = `${score}`;
            document.getElementById('gameover').style.display = 'block';
            score = 0;
            wrong = 0;
            level = 1;
        }
    }
}
function scoreing6() {
    let d = document.getElementById('box6');
    count = 0;
    if (box6.style.background == 'white') {
        score = score + 10;
        box6.style.background = 'green';
        d.innerHTML = '<audio autoplay><source src="static/correct_option.mp3" type="audio/mpeg"></audio>';
        if (score <= 100) {
            level = 1;
            document.getElementById('lvlnm').innerHTML = `${level}`;
        }
        else if (score > 100 && score <= 300) {
            level = 2;
            document.getElementById('lvlnm').innerHTML = `${level}`;
        }
        else if (score > 300 && score <= 500) {
            level = 3;
            document.getElementById('lvlnm').innerHTML = `${level}`;
        }
        else if (score > 500) {
            level = 4;
            document.getElementById('lvlnm').innerHTML = `${level}`;
        }
        document.getElementById('CurrentScore').innerHTML = `${score}`;

    }
    else {
        wrong++;
        d.style.background = 'red';
        d.innerHTML = '<audio autoplay><source src="static/wrong_option.mp3" type="audio/mpeg"></audio>';
        setTimeout(() => {
            d.style.background = 'none';
        }, 200);
        if (wrong == 3) {
            if (score > high)
                high = score;
            gg = 0;
            document.getElementById('highsco').innerHTML = `${high}`;
            document.getElementById('CurrentScore').innerHTML = `${score}`;
            document.getElementById('gameover').style.display = 'block';
            score = 0;
            wrong = 0;
            level = 1;
        }
    }
}
function scoreing7() {
    let d = document.getElementById('box7');
    count = 0;
    if (box7.style.background == 'white') {
        score = score + 10;
        box7.style.background = 'green';
        d.innerHTML = '<audio autoplay><source src="static/correct_option.mp3" type="audio/mpeg"></audio>';
        if (score <= 100) {
            level = 1;
            document.getElementById('lvlnm').innerHTML = `${level}`;
        }
        else if (score > 100 && score <= 300) {
            level = 2;
            document.getElementById('lvlnm').innerHTML = `${level}`;
        }
        else if (score > 300 && score <= 500) {
            level = 3;
            document.getElementById('lvlnm').innerHTML = `${level}`;
        }
        else if (score > 500) {
            level = 4;
            document.getElementById('lvlnm').innerHTML = `${level}`;
        }
        document.getElementById('CurrentScore').innerHTML = `${score}`;

    }
    else {
        wrong++;
        d.style.background = 'red';
        d.innerHTML = '<audio autoplay><source src="static/wrong_option.mp3" type="audio/mpeg"></audio>';
        setTimeout(() => {
            d.style.background = 'none';
        }, 200);
        if (wrong == 3) {
            if (score > high)
                high = score;
            gg = 0;
            document.getElementById('highsco').innerHTML = `${high}`;
            document.getElementById('CurrentScore').innerHTML = `${score}`;
            document.getElementById('gameover').style.display = 'block';
            score = 0;
            wrong = 0;
            level = 1;
        }
    }
}
function scoreing8() {
    let d = document.getElementById('box8');
    count = 0;
    if (box8.style.background == 'white') {
        score = score + 10;
        box8.style.background = 'green';
        d.innerHTML = '<audio autoplay><source src="static/correct_option.mp3" type="audio/mpeg"></audio>';
        if (score <= 100) {
            level = 1;
            document.getElementById('lvlnm').innerHTML = `${level}`;
        }
        else if (score > 100 && score <= 300) {
            level = 2;
            document.getElementById('lvlnm').innerHTML = `${level}`;
        }
        else if (score > 300 && score <= 500) {
            level = 3;
            document.getElementById('lvlnm').innerHTML = `${level}`;
        }
        else if (score > 500) {
            level = 4;
            document.getElementById('lvlnm').innerHTML = `${level}`;
        }
        document.getElementById('CurrentScore').innerHTML = `${score}`;

    }
    else {
        wrong++;
        d.style.background = 'red';
        d.innerHTML = '<audio autoplay><source src="static/wrong_option.mp3" type="audio/mpeg"></audio>';
        setTimeout(() => {
            d.style.background = 'none';
        }, 200);
        if (wrong == 3) {
            if (score > high)
                high = score;
            gg = 0;
            document.getElementById('highsco').innerHTML = `${high}`;
            document.getElementById('CurrentScore').innerHTML = `${score}`;
            document.getElementById('gameover').style.display = 'block';
            score = 0;
            wrong = 0;
            level = 1;
        }
    }
}
function scoreing9() {
    let d = document.getElementById('box9');
    count = 0;
    if (box9.style.background == 'white') {
        score = score + 10;
        box9.style.background = 'green';
        d.innerHTML = '<audio autoplay><source src="static/correct_option.mp3" type="audio/mpeg"></audio>';
        if (score <= 100) {
            level = 1;
            document.getElementById('lvlnm').innerHTML = `${level}`;
        }
        else if (score > 100 && score <= 300) {
            level = 2;
            document.getElementById('lvlnm').innerHTML = `${level}`;
        }
        else if (score > 300 && score <= 500) {
            level = 3;
            document.getElementById('lvlnm').innerHTML = `${level}`;
        }
        else if (score > 500) {
            level = 4;
            document.getElementById('lvlnm').innerHTML = `${level}`;
        }
        document.getElementById('CurrentScore').innerHTML = `${score}`;

    }
    else {
        wrong++;
        d.style.background = 'red';
        d.innerHTML = '<audio autoplay><source src="static/wrong_option.mp3" type="audio/mpeg"></audio>';
        setTimeout(() => {
            d.style.background = 'none';
        }, 200);
        if (wrong == 3) {
            if (score > high)
                high = score;
            gg = 0;
            document.getElementById('highsco').innerHTML = `${high}`;
            document.getElementById('CurrentScore').innerHTML = `${score}`;
            document.getElementById('gameover').style.display = 'block';
            score = 0;
            wrong = 0;
            level = 1;
        }
    }
}
function scoreing10() {
    let d = document.getElementById('box10');
    count = 0;
    if (box10.style.background == 'white') {
        score = score + 10;
        box10.style.background = 'green';
        d.innerHTML = '<audio autoplay><source src="static/correct_option.mp3" type="audio/mpeg"></audio>';
        if (score <= 100) {
            level = 1;
            document.getElementById('lvlnm').innerHTML = `${level}`;
        }
        else if (score > 100 && score <= 300) {
            level = 2;
            document.getElementById('lvlnm').innerHTML = `${level}`;
        }
        else if (score > 300 && score <= 500) {
            level = 3;
            document.getElementById('lvlnm').innerHTML = `${level}`;
        }
        else if (score > 500) {
            level = 4;
            document.getElementById('lvlnm').innerHTML = `${level}`;
        }
        document.getElementById('CurrentScore').innerHTML = `${score}`;

    }
    else {
        wrong++;
        d.style.background = 'red';
        d.innerHTML = '<audio autoplay><source src="static/wrong_option.mp3" type="audio/mpeg"></audio>';
        setTimeout(() => {
            d.style.background = 'none';
        }, 200);
        if (wrong == 3) {
            if (score > high)
                high = score;
            gg = 0;
            document.getElementById('highsco').innerHTML = `${high}`;
            document.getElementById('CurrentScore').innerHTML = `${score}`;
            document.getElementById('gameover').style.display = 'block';
            score = 0;
            wrong = 0;
            level = 1;
        }
    }
}
function scoreing11() {
    let d = document.getElementById('box11');
    count = 0;
    if (box11.style.background == 'white') {
        score = score + 10;
        box11.style.background = 'green';
        d.innerHTML = '<audio autoplay><source src="static/correct_option.mp3" type="audio/mpeg"></audio>';
        if (score <= 100) {
            level = 1;
            document.getElementById('lvlnm').innerHTML = `${level}`;
        }
        else if (score > 100 && score <= 300) {
            level = 2;
            document.getElementById('lvlnm').innerHTML = `${level}`;
        }
        else if (score > 300 && score <= 500) {
            level = 3;
            document.getElementById('lvlnm').innerHTML = `${level}`;
        }
        else if (score > 500) {
            level = 4;
            document.getElementById('lvlnm').innerHTML = `${level}`;
        }
        document.getElementById('CurrentScore').innerHTML = `${score}`;

    }
    else {
        wrong++;
        d.style.background = 'red';
        d.innerHTML = '<audio autoplay><source src="static/wrong_option.mp3" type="audio/mpeg"></audio>';
        setTimeout(() => {
            d.style.background = 'none';
        }, 200);
        if (wrong == 3) {
            if (score > high)
                high = score;
            gg = 0;
            document.getElementById('highsco').innerHTML = `${high}`;
            document.getElementById('CurrentScore').innerHTML = `${score}`;
            document.getElementById('gameover').style.display = 'block';
            score = 0;
            wrong = 0;
            level = 1;
        }
    }
}
function scoreing12() {
    let d = document.getElementById('box12');
    count = 0;
    if (box12.style.background == 'white') {
        score = score + 10;
        box12.style.background = 'green';
        d.innerHTML = '<audio autoplay><source src="static/correct_option.mp3" type="audio/mpeg"></audio>';
        if (score <= 100) {
            level = 1;
            document.getElementById('lvlnm').innerHTML = `${level}`;
        }
        else if (score > 100 && score <= 300) {
            level = 2;
            document.getElementById('lvlnm').innerHTML = `${level}`;
        }
        else if (score > 300 && score <= 500) {
            level = 3;
            document.getElementById('lvlnm').innerHTML = `${level}`;
        }
        else if (score > 500) {
            level = 4;
            document.getElementById('lvlnm').innerHTML = `${level}`;
        }
        document.getElementById('CurrentScore').innerHTML = `${score}`;

    }
    else {
        wrong++;
        d.style.background = 'red';
        d.innerHTML = '<audio autoplay><source src="static/wrong_option.mp3" type="audio/mpeg"></audio>';
        setTimeout(() => {
            d.style.background = 'none';
        }, 200);
        if (wrong == 3) {
            if (score > high)
                high = score;
            gg = 0;
            document.getElementById('highsco').innerHTML = `${high}`;
            document.getElementById('CurrentScore').innerHTML = `${score}`;
            document.getElementById('gameover').style.display = 'block';
            score = 0;
            wrong = 0;
            level = 1;
        }
    }
}
function scoreing13() {
    let d = document.getElementById('box13');
    count = 0;
    if (box13.style.background == 'white') {
        score = score + 10;
        box13.style.background = 'green'
        d.innerHTML = '<audio autoplay><source src="static/correct_option.mp3" type="audio/mpeg"></audio>';
        if (score <= 100) {
            level = 1;
            document.getElementById('lvlnm').innerHTML = `${level}`;
        }
        else if (score > 100 && score <= 300) {
            level = 2;
            document.getElementById('lvlnm').innerHTML = `${level}`;
        }
        else if (score > 300 && score <= 500) {
            level = 3;
            document.getElementById('lvlnm').innerHTML = `${level}`;
        }
        else if (score > 500) {
            level = 4;
            document.getElementById('lvlnm').innerHTML = `${level}`;
        }
        document.getElementById('CurrentScore').innerHTML = `${score}`;

    }
    else {
        wrong++;
        d.style.background = 'red';
        d.innerHTML = '<audio autoplay><source src="static/wrong_option.mp3" type="audio/mpeg"></audio>';
        setTimeout(() => {
            d.style.background = 'none';
        }, 200);
        if (wrong == 3) {
            if (score > high)
                high = score;
            gg = 0;
            document.getElementById('highsco').innerHTML = `${high}`;
            document.getElementById('CurrentScore').innerHTML = `${score}`;
            document.getElementById('gameover').style.display = 'block';
            score = 0;
            wrong = 0;
            level = 1;
        }
    }
}
function scoreing14() {
    let d = document.getElementById('box14');
    count = 0;
    if (box14.style.background == 'white') {
        score = score + 10;
        box14.style.background = 'green';
        d.innerHTML = '<audio autoplay><source src="static/correct_option.mp3" type="audio/mpeg"></audio>';
        if (score <= 100) {
            level = 1;
            document.getElementById('lvlnm').innerHTML = `${level}`;
        }
        else if (score > 100 && score <= 300) {
            level = 2;
            document.getElementById('lvlnm').innerHTML = `${level}`;
        }
        else if (score > 300 && score <= 500) {
            level = 3;
            document.getElementById('lvlnm').innerHTML = `${level}`;
        }
        else if (score > 500) {
            level = 4;
            document.getElementById('lvlnm').innerHTML = `${level}`;
        }
        document.getElementById('CurrentScore').innerHTML = `${score}`;

    }
    else {
        wrong++;
        d.style.background = 'red';
        d.innerHTML = '<audio autoplay><source src="static/wrong_option.mp3" type="audio/mpeg"></audio>';
        setTimeout(() => {
            d.style.background = 'none';
        }, 200);
        if (wrong == 3) {
            if (score > high)
                high = score;
            gg = 0;
            document.getElementById('highsco').innerHTML = `${high}`;
            document.getElementById('CurrentScore').innerHTML = `${score}`;
            document.getElementById('gameover').style.display = 'block';
            score = 0;
            wrong = 0;
            level = 1;
        }
    }
}
function scoreing15() {
    let d = document.getElementById('box15');
    count = 0;
    if (box15.style.background == 'white') {
        score = score + 10;
        box15.style.background = 'green';
        d.innerHTML = '<audio autoplay><source src="static/correct_option.mp3" type="audio/mpeg"></audio>';
        if (score <= 100) {
            level = 1;
            document.getElementById('lvlnm').innerHTML = `${level}`;
        }
        else if (score > 100 && score <= 300) {
            level = 2;
            document.getElementById('lvlnm').innerHTML = `${level}`;
        }
        else if (score > 300 && score <= 500) {
            level = 3;
            document.getElementById('lvlnm').innerHTML = `${level}`;
        }
        else if (score > 500) {
            level = 4;
            document.getElementById('lvlnm').innerHTML = `${level}`;
        }
        document.getElementById('CurrentScore').innerHTML = `${score}`;

    }
    else {
        wrong++;
        d.style.background = 'red';
        d.innerHTML = '<audio autoplay><source src="static/wrong_option.mp3" type="audio/mpeg"></audio>';
        setTimeout(() => {
            d.style.background = 'none';
        }, 200);
        if (wrong == 3) {
            if (score > high)
                high = score;
            gg = 0;
            document.getElementById('highsco').innerHTML = `${high}`;
            document.getElementById('CurrentScore').innerHTML = `${score}`;
            document.getElementById('gameover').style.display = 'block';
            score = 0;
            wrong = 0;
            level = 1;
        }
    }
}
function scoreing16() {
    let d = document.getElementById('box16');
    count = 0;
    if (box16.style.background == 'white') {
        score = score + 10;
        box16.style.background = 'green';
        d.innerHTML = '<audio autoplay><source src="static/correct_option.mp3" type="audio/mpeg"></audio>';
        if (score <= 100) {
            level = 1;
            document.getElementById('lvlnm').innerHTML = `${level}`;
        }
        else if (score > 100 && score <= 300) {
            level = 2;
            document.getElementById('lvlnm').innerHTML = `${level}`;
        }
        else if (score > 300 && score <= 500) {
            level = 3;
            document.getElementById('lvlnm').innerHTML = `${level}`;
        }
        else if (score > 500) {
            level = 4;
            document.getElementById('lvlnm').innerHTML = `${level}`;
        }
        document.getElementById('CurrentScore').innerHTML = `${score}`;

    }
    else {
        wrong++;
        d.style.background = 'red';
        d.innerHTML = '<audio autoplay><source src="static/wrong_option.mp3" type="audio/mpeg"></audio>';
        setTimeout(() => {
            d.style.background = 'none';
        }, 200);
        if (wrong == 3) {
            if (score > high)
                high = score;
            gg = 0;
            document.getElementById('highsco').innerHTML = `${high}`;
            document.getElementById('CurrentScore').innerHTML = `${score}`;
            document.getElementById('gameover').style.display = 'block';
            score = 0;
            wrong = 0;
            level = 1;
        }
    }
}
function random() {
    if (gg == 1) {

        a = 0 + ((16) * Math.random());
        if (a >= 0 && a < 1) {
            let b = document.getElementById('box1');
            box1.style.background = 'white';
            count++;
            if (count > 3) {
                if (score == 0) {
                    score = 0;
                    gg = 0;
                }
                else {
                    score = score - 2;
                    document.getElementById('CurrentScore').innerHTML = `${score}`;
                    count = 0;
                }

            }
            if (level == 1) {
                setTimeout(() => {
                    box1.style.background = 'none';
                }, 900);
            }
            if (level == 2) {
                setTimeout(() => {
                    box1.style.background = 'none';
                }, 700);
            }
            if (level == 3) {
                setTimeout(() => {
                    box1.style.background = 'none';
                }, 600);
            }
            if (level == 4) {
                setTimeout(() => {
                    box1.style.background = 'none';
                }, 500);
            }
        }

        else if (a >= 1 && a < 2) {
            let b = document.getElementById('box2');
            box2.style.background = 'white';
            count++;
            if (count > 3) {
                if (score == 0) {
                    score = 0;
                    gg = 0;
                }
                else {
                    score = score - 2;
                    document.getElementById('CurrentScore').innerHTML = `${score}`;
                    count = 0;
                }

            }
            if (level == 1) {
                setTimeout(() => {
                    box2.style.background = 'none';
                }, 900);
            }
            if (level == 2) {
                setTimeout(() => {
                    box2.style.background = 'none';
                }, 700);

            }
            if (level == 3) {
                setTimeout(() => {
                    box2.style.background = 'none';
                }, 600);

            }
            if (level == 4) {
                setTimeout(() => {
                    box2.style.background = 'none';
                }, 500);

            }
        }
        else if (a >= 2 && a < 3) {
            let b = document.getElementById('box3');
            box3.style.background = 'white';
            count++;
            if (count > 3) {
                if (score == 0) {
                    score = 0;
                    gg = 0;
                }
                else {
                    score = score - 2;
                    document.getElementById('CurrentScore').innerHTML = `${score}`;
                    count = 0;
                }

            }
            if (level == 1) {
                setTimeout(() => {
                    box3.style.background = 'none';
                }, 900);

            }
            if (level == 2) {
                setTimeout(() => {
                    box3.style.background = 'none';
                }, 700);

            }
            if (level == 3) {
                setTimeout(() => {
                    box3.style.background = 'none';
                }, 600);

            }
            if (level == 4) {
                setTimeout(() => {
                    box3.style.background = 'none'
                }, 500);

            }
        }
        else if (a >= 3 && a < 4) {
            let b = document.getElementById('box4');
            box4.style.background = 'white';
            count++;
            if (count > 3) {
                if (score == 0) {
                    score = 0;
                    gg = 0;
                }
                else {
                    score = score - 2;
                    document.getElementById('CurrentScore').innerHTML = `${score}`;
                    count = 0;
                }

            }
            if (level == 1) {
                setTimeout(() => {
                    box4.style.background = 'none';
                }, 900);

            }
            if (level == 2) {
                setTimeout(() => {
                    box4.style.background = 'none';
                }, 700);

            }
            if (level == 3) {
                setTimeout(() => {
                    box4.style.background = 'none';
                }, 600);

            }
            if (level == 4) {
                setTimeout(() => {
                    box4.style.background = 'none';
                }, 500);

            }
        }
        else if (a >= 4 && a < 5) {
            let b = document.getElementById('box5');
            box5.style.background = 'white';
            count++;
            if (count > 3) {
                if (score == 0) {
                    score = 0;
                    gg = 0;
                }
                else {
                    score = score - 2;
                    document.getElementById('CurrentScore').innerHTML = `${score}`;
                    count = 0;
                }

            }
            if (level == 1) {
                setTimeout(() => {
                    box5.style.background = 'none';
                }, 900);

            }
            if (level == 2) {
                setTimeout(() => {
                    box5.style.background = 'none';
                }, 700);

            }
            if (level == 3) {
                setTimeout(() => {
                    box5.style.background = 'none';
                }, 600);

            }
            if (level == 4) {
                setTimeout(() => {
                    box5.style.background = 'none';
                }, 500);

            }
        }
        else if (a >= 5 && a < 6) {
            let b = document.getElementById('box6');
            box6.style.background = 'white';
            count++;
            if (count > 3) {
                if (score == 0) {
                    score = 0;
                    gg = 0;
                }
                else {
                    score = score - 2;
                    document.getElementById('CurrentScore').innerHTML = `${score}`;
                    count = 0;
                }

            }
            if (level == 1) {
                setTimeout(() => {
                    box6.style.background = 'none';
                }, 900);

            }
            if (level == 2) {
                setTimeout(() => {
                    box6.style.background = 'none';
                }, 700);

            }
            if (level == 3) {
                setTimeout(() => {
                    box6.style.background = 'none';
                }, 600);

            }
            if (level == 4) {
                setTimeout(() => {
                    box6.style.background = 'none';
                }, 500);

            }
        }
        else if (a >= 6 && a < 7) {
            let b = document.getElementById('box7');
            box7.style.background = 'white';
            count++;
            if (count > 3) {
                if (score == 0) {
                    score = 0;
                    gg = 0;
                }
                else {
                    score = score - 2;
                    document.getElementById('CurrentScore').innerHTML = `${score}`;
                    count = 0;
                }

            }
            if (level == 1) {
                setTimeout(() => {
                    box7.style.background = 'none';
                }, 900);

            }
            if (level == 2) {
                setTimeout(() => {
                    box7.style.background = 'none';
                }, 700);

            }
            if (level == 3) {
                setTimeout(() => {
                    box7.style.background = 'none';
                }, 600);

            }
            if (level == 4) {
                setTimeout(() => {
                    box7.style.background = 'none';
                }, 500);

            }
        }
        else if (a >= 7 && a < 8) {
            let b = document.getElementById('box8');
            box8.style.background = 'white';
            count++;
            if (count > 3) {
                if (score == 0) {
                    score = 0;
                    gg = 0;
                }
                else {
                    score = score - 2;
                    document.getElementById('CurrentScore').innerHTML = `${score}`;
                    count = 0;
                }

            }
            if (level == 1) {
                setTimeout(() => {
                    box8.style.background = 'none';
                }, 900);

            }
            if (level == 2) {
                setTimeout(() => {
                    box8.style.background = 'none';
                }, 700);

            }
            if (level == 3) {
                setTimeout(() => {
                    box8.style.background = 'none';
                }, 600);

            }
            if (level == 4) {
                setTimeout(() => {
                    box8.style.background = 'none';
                }, 500);

            }
        }
        else if (a >= 8 && a < 9) {
            let b = document.getElementById('box9');
            box9.style.background = 'white';
            count++;
            if (count > 3) {
                if (score == 0) {
                    score = 0;
                    gg = 0;
                }
                else {
                    score = score - 2;
                    document.getElementById('CurrentScore').innerHTML = `${score}`;
                    count = 0;
                }

            }
            if (level == 1) {
                setTimeout(() => {
                    box9.style.background = 'none';
                }, 900);

            }
            if (level == 2) {
                setTimeout(() => {
                    box9.style.background = 'none';
                }, 700);

            }
            if (level == 3) {
                setTimeout(() => {
                    box9.style.background = 'none';
                }, 600);

            }
            if (level == 4) {
                setTimeout(() => {
                    box9.style.background = 'none';
                }, 500);

            }
        }

        else if (a >= 9 && a < 10) {
            let b = document.getElementById('box10');
            box10.style.background = 'white';
            count++;
            if (count > 3) {
                if (score == 0) {
                    score = 0;
                    gg = 0;
                }
                else {
                    score = score - 2;
                    document.getElementById('CurrentScore').innerHTML = `${score}`;
                    count = 0;
                }

            }
            if (level == 1) {
                setTimeout(() => {
                    box10.style.background = 'none';
                }, 900);

            }
            if (level == 2) {
                setTimeout(() => {
                    box10.style.background = 'none';
                }, 700);

            }
            if (level == 3) {
                setTimeout(() => {
                    box10.style.background = 'none';
                }, 600);

            }
            if (level == 4) {
                setTimeout(() => {
                    box10.style.background = 'none';
                }, 500);

            }
        }
        else if (a >= 10 && a < 11) {
            let b = document.getElementById('box11');
            box11.style.background = 'white';
            count++;
            if (count > 3) {
                if (score == 0) {
                    score = 0;
                    gg = 0;
                }
                else {
                    score = score - 2;
                    document.getElementById('CurrentScore').innerHTML = `${score}`;
                    count = 0;
                }

            }
            if (level == 1) {
                setTimeout(() => {
                    box11.style.background = 'none';
                }, 900);

            }
            if (level == 2) {
                setTimeout(() => {
                    box11.style.background = 'none';
                }, 700);

            }
            if (level == 3) {
                setTimeout(() => {
                    box11.style.background = 'none';
                }, 600);

            }
            if (level == 4) {
                setTimeout(() => {
                    box11.style.background = 'none';
                }, 500);

            }
        }
        else if (a >= 11 && a < 12) {
            let b = document.getElementById('box12');
            box12.style.background = 'white';
            count++;
            if (count > 3) {
                if (score == 0) {
                    score = 0;
                    gg = 0;
                }
                else {
                    score = score - 2;
                    document.getElementById('CurrentScore').innerHTML = `${score}`;
                    count = 0;
                }

            }
            if (level == 1) {
                setTimeout(() => {
                    box12.style.background = 'none';
                }, 900);

            }
            if (level == 2) {
                setTimeout(() => {
                    box12.style.background = 'none';
                }, 700);

            }
            if (level == 3) {
                setTimeout(() => {
                    box12.style.background = 'none';
                }, 600);

            }
            if (level == 4) {
                setTimeout(() => {
                    box12.style.background = 'none';
                }, 500);

            }
        }
        else if (a >= 12 && a < 13) {
            let b = document.getElementById('box13');
            box13.style.background = 'white';
            count++;
            if (count > 3) {
                if (score == 0) {
                    score = 0;
                    gg = 0;
                }
                else {
                    score = score - 2;
                    document.getElementById('CurrentScore').innerHTML = `${score}`;
                    count = 0;
                }

            }
            if (level == 1) {
                setTimeout(() => {
                    box13.style.background = 'none';
                }, 900);

            }
            if (level == 2) {
                setTimeout(() => {
                    box13.style.background = 'none';
                }, 700);

            }
            if (level == 3) {
                setTimeout(() => {
                    box13.style.background = 'none';
                }, 600);

            }
            if (level == 4) {
                setTimeout(() => {
                    box13.style.background = 'none';
                }, 500);

            }
        }
        else if (a >= 13 && a < 14) {
            let b = document.getElementById('box14');
            box14.style.background = 'white';
            count++;
            if (count > 3) {
                if (score == 0) {
                    score = 0;
                    gg = 0;
                }
                else {
                    score = score - 2;
                    document.getElementById('CurrentScore').innerHTML = `${score}`;
                    count = 0;
                }

            }
            if (level == 1) {
                setTimeout(() => {
                    box14.style.background = 'none';
                }, 900);

            }
            if (level == 2) {
                setTimeout(() => {
                    box14.style.background = 'none';
                }, 700);

            }
            if (level == 3) {
                setTimeout(() => {
                    box14.style.background = 'none';
                }, 600);

            }
            if (level == 4) {
                setTimeout(() => {
                    box14.style.background = 'none';
                }, 500);

            }
        }
        else if (a >= 14 && a < 15) {
            let b = document.getElementById('box15');
            box15.style.background = 'white';
            count++;
            if (count > 3) {
                if (score == 0) {
                    score = 0;
                    gg = 0;
                }
                else {
                    score = score - 2;
                    document.getElementById('CurrentScore').innerHTML = `${score}`;
                    count = 0;
                }

            }
            if (level == 1) {
                setTimeout(() => {
                    box15.style.background = 'none';
                }, 900);

            }
            if (level == 2) {
                setTimeout(() => {
                    box15.style.background = 'none';
                }, 700);

            }
            if (level == 3) {
                setTimeout(() => {
                    box15.style.background = 'none';
                }, 600);

            }
            if (level == 4) {
                setTimeout(() => {
                    box15.style.background = 'none';
                }, 500);

            }
        }
        else if (a >= 15 && a < 16) {
            let b = document.getElementById('box16');
            box16.style.background = 'white';
            count++;
            if (count > 3) {
                if (score == 0) {
                    score = 0;
                    gg = 0;
                }
                else {
                    score = score - 2;
                    document.getElementById('CurrentScore').innerHTML = `${score}`;
                    count = 0;
                }

            }
            if (level == 1) {
                setTimeout(() => {
                    box16.style.background = 'none';
                }, 900);

            }
            if (level == 2) {
                setTimeout(() => {
                    box16.style.background = 'none';
                }, 700);

            }
            if (level == 3) {
                setTimeout(() => {
                    box16.style.background = 'none';
                }, 600);

            }
            if (level == 4) {
                setTimeout(() => {
                    box16.style.background = 'none';
                }, 500);

            }
        }
    }

}
function exit() {
    if (gg == 1) {
        gg = 0;
        if (score > high) {
            high = score;
            document.getElementById('highsco').innerHTML = `${high}`;
        }
        score = 0;
        level = 1;
        document.getElementById('gameover').style.display = 'block';
        document.getElementById('CurrentScore').innerHTML = `${score}`;
        document.getElementById('lvlnm').innerHTML = `${level}`;
    }
    else {
        gg = 1;
        if (score > high) {
            high = score;
            document.getElementById('highsco').innerHTML = `${high}`;
        }
        score = 0;
        level = 1;
        document.getElementById('gameover').style.display = 'none';
        document.getElementById('CurrentScore').innerHTML = `${score}`;
        document.getElementById('lvlnm').innerHTML = `${level}`;
    }
}
setInterval(random, 1000);
