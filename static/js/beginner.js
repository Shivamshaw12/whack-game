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
function random() {
    if (gg == 1) {

        a = 0 + ((4) * Math.random());
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
