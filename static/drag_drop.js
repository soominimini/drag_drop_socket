var cart = document.getElementById("cart");

var cartX = cart.getBoundingClientRect().x;
var cartY = cart.getBoundingClientRect().y;
var cartWidth = cart.getBoundingClientRect().width;

var socket = io();


// 잠재적 드롭 가능한 요소
let currentScore = 0;

apple.onmousedown = function (event) {
    let final_locationX = 0;
    let final_locationY = 0;

    let shiftX = event.clientX - apple.getBoundingClientRect().left;
    let shiftY = event.clientY - apple.getBoundingClientRect().top;

    apple.style.position = 'absolute';
    apple.style.zIndex = 1000;
    document.body.append(apple);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        apple.style.left = pageX - shiftX + 'px';
        apple.style.top = pageY - shiftY + 'px';

        final_locationX = pageX - shiftX;
        final_locationY = pageY - shiftY;
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        apple.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY); // elemBelow : 드롭할 수 있는 공의 아래 요소, 축구골대
        apple.hidden = false;

        // 공을 윈도우 밖으로 드래그 했을 때,
        // clientX, clientY 가 윈도우 밖에 있으면, elementFromPoint 는 null 반환
        if (!elemBelow) return;

    }

    document.addEventListener('mousemove', onMouseMove);

    apple.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        apple.onmouseup = null;

        // location calculation
        if (final_locationX >= cartX && final_locationX <= cartX + cartWidth) {
            currentScore += 1;
            console.log("추가");

            socket.on('connect', function () {
                socket.emit('object', {data: 'apple\'added'});
            });

        }
        else if (final_locationY >= cartY && final_locationY <= cartY + cartWidth) {

            currentScore += 1;
            console.log("추가");
            socket.on('connect', function () {
                socket.emit('object', {data: 'apple\' added'});
            });

        }

        else {
            currentScore -= 1;
            console.log("마이너스");
            socket.on('connect', function () {
                socket.emit('object', {data: 'apple\' removed'});
            });
        }
    };

};

// orange object move
orange.onmousedown = function (event) {
    let final_locationX = 0;
    let final_locationY = 0;
    let shiftX = event.clientX - orange.getBoundingClientRect().left;
    let shiftY = event.clientY - orange.getBoundingClientRect().top;

    orange.style.position = 'absolute';
    orange.style.zIndex = 1000;
    document.body.append(orange);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        orange.style.left = pageX - shiftX + 'px';
        orange.style.top = pageY - shiftY + 'px';

        final_locationX = pageX - shiftX;
        final_locationY = pageY - shiftY;
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        orange.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY); // elemBelow : 드롭할 수 있는 공의 아래 요소, 축구골대
        orange.hidden = false;

        // 공을 윈도우 밖으로 드래그 했을 때,
        // clientX, clientY 가 윈도우 밖에 있으면, elementFromPoint 는 null 반환
        if (!elemBelow) return;
    }


    document.addEventListener('mousemove', onMouseMove);

    orange.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        orange.onmouseup = null;

        if (final_locationX >= cartX && final_locationX <= cartX + cartWidth) {
            currentScore += 1;
            console.log("orange 추가");
        }
        else if (final_locationY >= cartY && final_locationY <= cartY + cartWidth) {

            currentScore += 1;
            console.log(" orange 추가");
        }

        else {
            currentScore -= 1;
            console.log("orange 마이너스");
        }
    };

};


// cherry object move
cherry.onmousedown = function (event) {
    let final_locationX = 0;
    let final_locationY = 0;

    let shiftX = event.clientX - cherry.getBoundingClientRect().left;
    let shiftY = event.clientY - cherry.getBoundingClientRect().top;

    cherry.style.position = 'absolute';
    cherry.style.zIndex = 1000;
    document.body.append(cherry);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        cherry.style.left = pageX - shiftX + 'px';
        cherry.style.top = pageY - shiftY + 'px';

        final_locationX = pageX - shiftX;
        final_locationY = pageY - shiftY;
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        cherry.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY); // elemBelow : 드롭할 수 있는 공의 아래 요소, 축구골대
        cherry.hidden = false;

        // 공을 윈도우 밖으로 드래그 했을 때,
        // clientX, clientY 가 윈도우 밖에 있으면, elementFromPoint 는 null 반환
        if (!elemBelow) return;

    }

    document.addEventListener('mousemove', onMouseMove);

    cherry.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        cherry.onmouseup = null;

        // location calculation
        if (final_locationX >= cartX && final_locationX <= cartX + cartWidth) {
            currentScore += 1;
            console.log("추가");
        }
        else if (final_locationY >= cartY && final_locationY <= cartY + cartWidth) {

            currentScore += 1;
            console.log("추가");
        }

        else {
            currentScore -= 1;
            console.log("마이너스");
        }
    };

};


// pineapple object move
pineapple.onmousedown = function (event) {
    let final_locationX = 0;
    let final_locationY = 0;

    let shiftX = event.clientX - pineapple.getBoundingClientRect().left;
    let shiftY = event.clientY - pineapple.getBoundingClientRect().top;

    pineapple.style.position = 'absolute';
    pineapple.style.zIndex = 1000;
    document.body.append(pineapple);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        pineapple.style.left = pageX - shiftX + 'px';
        pineapple.style.top = pageY - shiftY + 'px';

        final_locationX = pageX - shiftX;
        final_locationY = pageY - shiftY;
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        pineapple.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY); // elemBelow : 드롭할 수 있는 공의 아래 요소, 축구골대
        pineapple.hidden = false;

        // 공을 윈도우 밖으로 드래그 했을 때,
        // clientX, clientY 가 윈도우 밖에 있으면, elementFromPoint 는 null 반환
        if (!elemBelow) return;

    }

    document.addEventListener('mousemove', onMouseMove);

    pineapple.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        pineapple.onmouseup = null;

        // location calculation
        if (final_locationX >= cartX && final_locationX <= cartX + cartWidth) {
            currentScore += 1;
            console.log("추가");
        }
        else if (final_locationY >= cartY && final_locationY <= cartY + cartWidth) {

            currentScore += 1;
            console.log("추가");
        }

        else {
            currentScore -= 1;
            console.log("마이너스");
        }
    };

};

// bag object move
bag.onmousedown = function (event) {
    let final_locationX = 0;
    let final_locationY = 0;

    let shiftX = event.clientX - bag.getBoundingClientRect().left;
    let shiftY = event.clientY - bag.getBoundingClientRect().top;

    bag.style.position = 'absolute';
    bag.style.zIndex = 1000;
    document.body.append(bag);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        bag.style.left = pageX - shiftX + 'px';
        bag.style.top = pageY - shiftY + 'px';

        final_locationX = pageX - shiftX;
        final_locationY = pageY - shiftY;
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        bag.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY); // elemBelow : 드롭할 수 있는 공의 아래 요소, 축구골대
        bag.hidden = false;

        // 공을 윈도우 밖으로 드래그 했을 때,
        // clientX, clientY 가 윈도우 밖에 있으면, elementFromPoint 는 null 반환
        if (!elemBelow) return;

    }

    document.addEventListener('mousemove', onMouseMove);

    bag.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        bag.onmouseup = null;

        // location calculation
        if (final_locationX >= cartX && final_locationX <= cartX + cartWidth) {
            currentScore += 1;
            console.log("추가");
        }
        else if (final_locationY >= cartY && final_locationY <= cartY + cartWidth) {

            currentScore += 1;
            console.log("추가");
        }

        else {
            currentScore -= 1;
            console.log("마이너스");
        }
    };

};

// crayons object move
crayons.onmousedown = function (event) {
    let final_locationX = 0;
    let final_locationY = 0;

    let shiftX = event.clientX - crayons.getBoundingClientRect().left;
    let shiftY = event.clientY - crayons.getBoundingClientRect().top;

    crayons.style.position = 'absolute';
    crayons.style.zIndex = 1000;
    document.body.append(crayons);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        crayons.style.left = pageX - shiftX + 'px';
        crayons.style.top = pageY - shiftY + 'px';

        final_locationX = pageX - shiftX;
        final_locationY = pageY - shiftY;
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        crayons.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY); // elemBelow : 드롭할 수 있는 공의 아래 요소, 축구골대
        crayons.hidden = false;

        // 공을 윈도우 밖으로 드래그 했을 때,
        // clientX, clientY 가 윈도우 밖에 있으면, elementFromPoint 는 null 반환
        if (!elemBelow) return;

    }

    document.addEventListener('mousemove', onMouseMove);

    crayons.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        crayons.onmouseup = null;

        // location calculation
        if (final_locationX >= cartX && final_locationX <= cartX + cartWidth) {
            currentScore += 1;
            console.log("추가");
        }
        else if (final_locationY >= cartY && final_locationY <= cartY + cartWidth) {

            currentScore += 1;
            console.log("추가");
        }

        else {
            currentScore -= 1;
            console.log("마이너스");
        }
    };

};

// eraser object move
eraser.onmousedown = function (event) {
    let final_locationX = 0;
    let final_locationY = 0;

    let shiftX = event.clientX - eraser.getBoundingClientRect().left;
    let shiftY = event.clientY - eraser.getBoundingClientRect().top;

    eraser.style.position = 'absolute';
    eraser.style.zIndex = 1000;
    document.body.append(eraser);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        eraser.style.left = pageX - shiftX + 'px';
        eraser.style.top = pageY - shiftY + 'px';

        final_locationX = pageX - shiftX;
        final_locationY = pageY - shiftY;
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        eraser.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY); // elemBelow : 드롭할 수 있는 공의 아래 요소, 축구골대
        eraser.hidden = false;

        // 공을 윈도우 밖으로 드래그 했을 때,
        // clientX, clientY 가 윈도우 밖에 있으면, elementFromPoint 는 null 반환
        if (!elemBelow) return;

    }

    document.addEventListener('mousemove', onMouseMove);

    eraser.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        eraser.onmouseup = null;

        // location calculation
        if (final_locationX >= cartX && final_locationX <= cartX + cartWidth) {
            currentScore += 1;
            console.log("추가");
        }
        else if (final_locationY >= cartY && final_locationY <= cartY + cartWidth) {

            currentScore += 1;
            console.log("추가");
        }

        else {
            currentScore -= 1;
            console.log("마이너스");
        }
    };
};

// pencil object move
pencil.onmousedown = function (event) {
    let final_locationX = 0;
    let final_locationY = 0;

    let shiftX = event.clientX - pencil.getBoundingClientRect().left;
    let shiftY = event.clientY - pencil.getBoundingClientRect().top;

    pencil.style.position = 'absolute';
    pencil.style.zIndex = 1000;
    document.body.append(pencil);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        pencil.style.left = pageX - shiftX + 'px';
        pencil.style.top = pageY - shiftY + 'px';

        final_locationX = pageX - shiftX;
        final_locationY = pageY - shiftY;
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        pencil.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY); // elemBelow : 드롭할 수 있는 공의 아래 요소, 축구골대
        pencil.hidden = false;

        // 공을 윈도우 밖으로 드래그 했을 때,
        // clientX, clientY 가 윈도우 밖에 있으면, elementFromPoint 는 null 반환
        if (!elemBelow) return;

    }

    document.addEventListener('mousemove', onMouseMove);

    pencil.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        pencil.onmouseup = null;

        // location calculation
        if (final_locationX >= cartX && final_locationX <= cartX + cartWidth) {
            currentScore += 1;
            console.log("추가");
        }
        else if (final_locationY >= cartY && final_locationY <= cartY + cartWidth) {

            currentScore += 1;
            console.log("추가");
        }

        else {
            currentScore -= 1;
            console.log("마이너스");
        }
    };
};

// ruler object move
ruler.onmousedown = function (event) {
    let final_locationX = 0;
    let final_locationY = 0;

    let shiftX = event.clientX - ruler.getBoundingClientRect().left;
    let shiftY = event.clientY - ruler.getBoundingClientRect().top;

    ruler.style.position = 'absolute';
    ruler.style.zIndex = 1000;
    document.body.append(ruler);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        ruler.style.left = pageX - shiftX + 'px';
        ruler.style.top = pageY - shiftY + 'px';

        final_locationX = pageX - shiftX;
        final_locationY = pageY - shiftY;
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        ruler.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY); // elemBelow : 드롭할 수 있는 공의 아래 요소, 축구골대
        ruler.hidden = false;

        // 공을 윈도우 밖으로 드래그 했을 때,
        // clientX, clientY 가 윈도우 밖에 있으면, elementFromPoint 는 null 반환
        if (!elemBelow) return;

    }

    document.addEventListener('mousemove', onMouseMove);

    ruler.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        ruler.onmouseup = null;

        // location calculation
        if (final_locationX >= cartX && final_locationX <= cartX + cartWidth) {
            currentScore += 1;
            console.log("추가");
        }
        else if (final_locationY >= cartY && final_locationY <= cartY + cartWidth) {

            currentScore += 1;
            console.log("추가");
        }

        else {
            currentScore -= 1;
            console.log("마이너스");
        }
    };
};


//detach mouse from the object
apple.ondragstart = function () {
    return false;
};
orange.ondragstart = function () {
    return false;
};
cherry.ondragstart = function () {
    return false;
};
pineapple.ondragstart = function () {
    return false;
};

bag.ondragstart = function () {
    return false;
};
crayons.ondragstart = function () {
    return false;
};
eraser.ondragstart = function () {
    return false;
};
pencil.ondragstart = function () {
    return false;
};
ruler.ondragstart = function () {
    return false;
};

function doAction() {
        var socket = io();
        socket.on('connect', function() {
        socket.emit('score', {data: currentScore});
    });
    }