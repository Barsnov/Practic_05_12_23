const background = document.createElement('div')
background.className = "class_room"
background.style.opacity = "0"
document.querySelector("body").appendChild(background)


//Массив с данными картинками. Массив с нашими брёвнами
const images = [
    {
        name: "image_back",
        src: "assets/images/background.svg",
        alt: "background",
        className: "background",
        style_left: "-2.5rem",
        style_top: "0",
        zIndex: 0,
        item_move: false,
    },

    {
        name: "image_carpet" ,
        src: "assets/images/carpet.svg",
        alt: "carpet",
        className: "carpet",
        style_left: "45rem",
        style_top: "47.5rem",
        zIndex: 3,
        item_move: false,
    },

    {
        name: "image_gift_one" ,
        src: "assets/images/gift_one.svg",
        alt: "gift_one",
        className: "gift_one",
        style_left: "52rem",
        style_top: "51rem",
        zIndex: 28,
        item_move: false,
    },

    {
        name: "image_gift_two" ,
        src: "assets/images/gift_two.svg",
        alt: "gift_two",
        className: "gift_two",
        style_left: "33rem",
        style_top: "52rem",
        zIndex: 26,
        item_move: false,
    },

    {
        name: "image_gift_three",
        src: "assets/images/gift_three.svg",
        alt: "gift_three",
        className: "gift_three",
        style_left: "43rem",
        style_top: "50rem",
        zIndex: 27,
        item_move: false,
    },

    {
        name: "image_gift_four" ,
        src: "assets/images/gift_four.svg",
        alt: "gift_four",
        className: "gift_four",
        style_left: "61rem",
        style_top: "48rem",
        zIndex: 25,
        item_move: false,
    },

    {
        name: "image_gift_five" ,
        src: "assets/images/gift_five.svg",
        alt: "gift_five",
        className: "gift_five",
        style_left: "56rem",
        style_top: "45rem",
        zIndex: 24,
        item_move: false,
    },

    {
        name: "image_gift_six" ,
        src: "assets/images/gift_six.svg",
        alt: "gift_six",
        className: "gift_six",
        style_left: "54.5rem",
        style_top: "50.5rem",
        zIndex: 23,
        item_move: false,
    },

    {
        name: "image_gift_seven" ,
        src: "assets/images/gift_seven.svg",
        alt: "gift_seven",
        className: "gift_seven",
        style_left: "44rem",
        style_top: "46rem",
        zIndex: 22,
        item_move: false,
    },

    {
        name: "image_gift_eight" ,
        src: "assets/images/gift_eight.svg",
        alt: "gift_eight",
        className: "gift_eight",
        style_left: "36rem",
        style_top: "48rem",
        zIndex: 21,
        item_move: false,
    },

    {
        name: "image_gift_nine" ,
        src: "assets/images/gift_nine.svg",
        alt: "gift_nine",
        className: "gift_nine",
        style_left: "51rem",
        style_top: "45rem",
        zIndex: 20,
        item_move: false,
    },

    {
        name: "image_wreath" ,
        src: "assets/images/wreath.svg",
        alt: "wreath",
        className: "wreath",
        style_left: "70.7rem",
        style_top: "15rem",
        zIndex: 19,
        item_move: false,
    },

    {
        name: "image_matches" ,
        src: "assets/images/matches.svg",
        alt: "matches",
        className: "matches",
        style_left: "20rem",
        style_top: "60rem",
        zIndex: 40,
        item_move: false,
    },

    {
        name: "image_cat" ,
        src: "assets/images/cat.svg",
        alt: "cat",
        className: "cat",
        style_left: "15.5rem",
        style_top: "47rem",
        zIndex: 30,
        item_move: false,
    },

    {
        name: "image_mouse_and_cat" ,
        src: "assets/images/mouse_and_cat.svg",
        alt: "mouse_cat",
        className: "mouse_cat",
        style_left: "16rem",
        style_top: "47rem",
        zIndex: 29,
        item_move: false
    },


    {
        name: "image_tree" ,
        src: "assets/images/сhristmas_tree.svg",
        alt: "tree",
        className: "tree",
        style_left: "24rem",
        style_top: "2rem",
        zIndex: 15,
        item_move: false,
    },

    {
        name: "image_mouse" ,
        src: "assets/images/mouse.svg",
        alt: "mouse",
        className: "mouse",
        style_left: "77.2rem",
        style_top: "28rem",
        zIndex: 5,
        item_move: true,
    },

    {
        name: "image_cup" ,
        src: "assets/images/cup.svg",
        alt: "cup",
        className: "cup",
        style_left: "77rem",
        style_top: "41.5rem",
        zIndex: 14,
        item_move: false,
    },

    {
        name: "image_phone" ,
        src: "assets/images/phone_mini.svg",
        alt: "phone_mini",
        className: "phone_mini",
        style_left: "70rem",
        style_top: "44.5rem",
        zIndex: 14,
        item_move: false,
    },

    {
        name: "image_armchair" ,
        src: "assets/images/armchair.svg",
        alt: "armchair",
        className: "armchair",
        style_left: "80rem",
        style_top: "35rem",
        zIndex: 12,
        item_move: false,
    },

    {
        name: "image_sock_one" ,
        src: "assets/images/sock_one.svg",
        alt: "sock_one",
        className: "sock_one",
        style_left: "81rem",
        style_top: "26rem",
        zIndex: 6,
        item_move: false,
    },

    {
        name: "image_sock_two" ,
        src: "assets/images/sock_two.svg",
        alt: "sock_two",
        className: "sock_two",
        style_left: "76rem",
        style_top: "26rem",
        zIndex: 6,
        item_move: false,
    },

    {
        name: "image_sock_three" ,
        src: "assets/images/sock_three.svg",
        alt: "sock_three",
        className: "sock_three",
        style_left: "71rem",
        style_top: "26rem",
        zIndex: 6,
        item_move: false,
    },

    {
        name: "image_sock_four" ,
        src: "assets/images/sock_four.svg",
        alt: "sock_four",
        className: "sock_four",
        style_left: "66rem",
        style_top: "26rem",
        zIndex: 6,
        item_move: false,
    },

    {
        name: "image_log_one" ,
        src: "assets/images/log.svg",
        alt: "log one",
        className: "log one",
        style_left: "94rem",
        style_top: "59.5rem",
        zIndex: 16,
        item_move: true,
    },

    {
        name: "image_log_two" ,
        src: "assets/images/log.svg",
        alt: "log two",
        className: "log two",
        style_left: "95rem",
        style_top: "60.5rem",
        zIndex: 16,
        item_move: true,
    },

    {
        name: "image_log_three" ,
        src: "assets/images/log.svg",
        alt: "log three",
        className: "log three",
        style_left: "96rem",
        style_top: "61.5rem",
        zIndex: 16,
        item_move: true,
    },

    {
        name: "image_log_four" ,
        src: "assets/images/log.svg",
        alt: "log four",
        className: "log four",
        style_left: "94.5rem",
        style_top: "56rem",
        zIndex: 16,
        item_move: true,
    },

    {
        name: "image_log_five" ,
        src: "assets/images/log.svg",
        alt: "log five",
        className: "log five",
        style_left: "95.5rem",
        style_top: "57rem",
        zIndex: 16,
        item_move: true,
    },

    {
        name: "image_log_six" ,
        src: "assets/images/log.svg",
        alt: "log six",
        className: "log six",
        style_left: "95rem",
        style_top: "53rem",
        zIndex: 16,
        item_move: true,
    },

    {
        name: "image_table" ,
        src: "assets/images/table.svg",
        alt: "table",
        className: "table",
        style_left: "68rem",
        style_top: "43.5rem",
        zIndex: 13,
        item_move: false,
    },

    {
        name: "image_window_one" ,
        src: "assets/images/window_one.svg",
        alt: "window_one",
        className: "window_one",
        style_left: "-3.5rem",
        style_top: "0",
        zIndex: 2,
        item_move: false,
    },

    {
        name: "image_window_two" ,
        src: "assets/images/window_two.svg",
        alt: "window_two",
        className: "window_two",
        style_left: "74rem",
        style_top: "5rem",
        zIndex: 2,
        item_move: false,
    },

    {
        name: "image_fireplace_off" ,
        src: "assets/images/fireplace_off.svg",
        alt: "fireplace_off",
        className: "fireplace_off",
        style_left: "60rem",
        style_top: "14rem",
        zIndex: 3,
        item_move: false,
    },

    {
        name: "image_fireplace_on" ,
        src: "assets/images/fireplace_on.svg",
        alt: "fireplace_on",
        className: "fireplace_on",
        style_left: "60.5rem",
        style_top: "25.5rem",
        zIndex: 3,
        item_move: false,
    },

    {
        name: "image_book_in_frplc" ,
        src: "assets/images/book_in_frplc.svg",
        alt: "book_in_frplc",
        className: "book_in_frplc",
        style_left: "70rem",
        style_top: "40rem",
        zIndex: 4,
        item_move: true,
    },

    {
        name: "image_book_on_shelf" ,
        src: "assets/images/book_on_shelf.svg",
        alt: "book_in_shelf_off",
        className: "book_in_shelf",
        style_left: "73.6rem",
        style_top: "6.1rem",
        zIndex: 4,
        item_move: false,
    },

    {
        name: "image_books" ,
        src: "assets/images/shelf_with_books.svg",
        alt: "books",
        className: "books",
        style_left: "62rem",
        style_top: "2rem",
        zIndex: 3,
        item_move: false,
    },

    {
        name: "image_watch" ,
        src: "assets/images/watch.svg",
        alt: "watch",
        className: "watch",
        style_left: "50rem",
        style_top: "4rem",
        zIndex: 4,
        item_move: false,
    },

    {
        name: "image_carpet_one" ,
        src: "assets/images/carpet_one.svg",
        alt: "carpet_one",
        className: "carpet_one",
        style_left: "9rem",
        style_top: "55rem",
        zIndex: 1,
        item_move: false,
    },

    {
        name: "image_carpet_two" ,
        src: "assets/images/carpet_two.svg",
        alt: "carpet_two",
        className: "carpet_two",
        style_left: "90rem",
        style_top: "61rem",
        zIndex: 1,
        item_move: false,
    },


];
const log_images = []

//Массив с ответами на задания
const quest_answer = (question) => {
    const answer = {
        one: 6611,
        two: "Логист",
        three: "Морозко",
        four: "Царь",
        five: "Снеговик",
        six: "Снегурочке",
        }
        return answer[question];
}

//------ проверка ответа в зависимости от кнопочки + счётчик на окончание игры
let counter = 0
function comparison(id) {
    if (id === "code_Father"){
        if (quest_answer("one") === Number(document.querySelector(".code_Father").value)){
            document.querySelector(".phone_bg").style.background = "#04ff75";
            document.querySelector(".quest.father").style.animation = "Father_top 2s linear";
            document.querySelector(".quest.father").style.animationFillMode = "forwards";
            document.querySelector("img.father").style.animation = "Father_bottom 2s linear";
            document.querySelector("img.father").style.animationFillMode = "forwards";
            counter ++
            document.querySelector("button#code_Father").onclick = "";
        }else{
            document.querySelector(".phone_bg").style.background = "#ef1a24";
        }
        // ---------- 1
    }else if (id === "quest_Father"){
        if ((quest_answer("six")).toUpperCase() === (document.querySelector(".quest_Father.one").value).toUpperCase()){
            document.querySelector(".quest_Father.one").style.borderColor = "#04ff75";
            counter ++
            document.querySelector(".question.one").style.opacity = "0";
            document.querySelector(".question.one").style.zIndex = "0";
            document.querySelector(".phone_mini").className = "block";
            document.querySelector("#quest_Father").className = "block";
            document.querySelector("button#quest_Father").onclick = "";
        }else{
            document.querySelector(".quest_Father.one").style.borderColor = "#ef1a24";
        }
        // ---------- 6
    }else if (id === "quest_two"){
        if ((quest_answer("two")).toUpperCase() === (document.querySelector(".quest_Father.two").value).toUpperCase()){
            document.querySelector(".quest_Father.two").style.borderColor = "#04ff75";
            counter ++
            document.querySelector(".question.two").style.opacity = "0"
            document.querySelector(".question.two").style.zIndex = "0"
            document.querySelector("#quest_two").className = "block";
            document.querySelector("button#quest_two").onclick = "";

        }else{
            document.querySelector(".quest_Father.two").style.borderColor = "#ef1a24";
        }
        // ---------- 2
    }else if (id === "quest_three"){
        if ((quest_answer("three")).toUpperCase() === (document.querySelector(".quest_Father.three").value).toUpperCase()){
            document.querySelector(".quest_Father.three").style.borderColor = "#04ff75";
            counter ++
            document.querySelector(".question.three").style.opacity = "0"
            document.querySelector(".question.three").style.zIndex = "0"
            document.querySelector("#quest_three").className = "block";
            document.querySelector("button#quest_three").onclick = "";
        }else{
            document.querySelector(".quest_Father.three").style.borderColor = "#ef1a24";
        }
        // ---------- 3
    }else if (id === "quest_four"){
        if ((quest_answer("four")).toUpperCase() === (document.querySelector(".quest_Father.four").value).toUpperCase()){
            document.querySelector(".quest_Father.four").style.borderColor = "#04ff75";
            counter ++
            document.querySelector(".question.four").style.opacity = "0"
            document.querySelector(".question.four").style.zIndex = "0"
            document.querySelector("#quest_four").className = "block";
            document.querySelector("button#quest_four").onclick = "";
        }else{
            document.querySelector(".quest_Father.four").style.borderColor = "#ef1a24";
        }
        // ---------- 4
    } else if (id === "quest_five"){
        if ((quest_answer("five")).toUpperCase() === (document.querySelector(".quest_Father.five").value).toUpperCase()){
            document.querySelector(".quest_Father.five").style.borderColor = "#04ff75";
            counter ++
            document.querySelector(".question.five").style.opacity = "0"
            document.querySelector(".question.five").style.zIndex = "0"
            document.querySelector("#quest_five").className = "block";
            document.querySelector("button#quest_five").onclick = "";
        }else{
            document.querySelector(".quest_Father.five").style.borderColor = "#ef1a24";
        }
        // ---------- 5
    }
    if (counter === 6){
        document.querySelector(".end").style.transition = "5s"
        document.querySelector(".end").style.zIndex = "1000"
        document.querySelector(".end").style.opacity = "1"
    }
    console.log(counter)
}


// ------
function startGame(){
    images.forEach((item) => {
        const element = createItem(item)
        background.appendChild(element)
    });

    background.style.opacity = "1"

}
function createItem(item){
    const element = document.createElement("img")
    element.src = item.src
    element.alt = item.alt
    element.className = item.className
    element.style.left = item.style_left
    element.style.top = item.style_top
    element.style.zIndex = item.zIndex
    element.item_move = item.item_move

    element.addEventListener("touchstart", handleTouchStart)
    if (element.item_move ===true){
        element.style.transition = ".1s"
    }
    if (/log one|two|three|four|five/.test(element.className) === true){
        element.item_move = false
        log_images.push(element)
    }
    if (element.className === "carpet_two"){
        element.className = "carpet_two_block"
    }

    sockItem (element)
    bookItem(element)
    logItem(element)
    matches(element)
    cat(element)
    sock(element)
    return element
}

document.addEventListener("DOMContentLoaded", ()=>{
    startGame();
})


// -----------
const currentElement = { // --- ТЕКУЩАЯ ПЕРЕТАСКИВАЕМАЯ ЦЕЛЬ
    current: null,
};

function handleTouchStart(item){
    ToolHide()

    currentElement.current = item.targetTouches[0];
    //------Метод для телефона
    if (currentElement.current.target.className === "phone_mini"){
        document.querySelector(".question.one").style.transition = "2s"
        document.querySelector(".question.one").style.opacity = "1"
        document.querySelector(".question.one").style.zIndex = "1000"
    }

    //----- тут мы обнуляем мышке анимацию
    if ((currentElement.current.target.className === "mouse") && (currentElement.current.target.alt === "mouse")){
        document.querySelector("img.mouse").style.animation = "";
        currentElement.current.target.style.left = "75.5rem";
        currentElement.current.target.style.top = "25rem";
        currentElement.current.target.style.zIndex = "31";
    }

    if (/log/.test(currentElement.current.target.className)){document.querySelector("img.fireplace_on").style.zIndex = "1000"}

    if (currentElement.current.target.item_move === true){
        currentElement.current.target.style.zIndex = String(100 + Number(currentElement.current.target.style.zIndex))
        document.body.addEventListener('touchmove', handleTouchMove);

        //----- тут мы двигаем кота уже вместе с мышкой (планируем)
        if (currentElement.current.target.className === "cat"){
            document.querySelector("img.cat").style.zIndex = "30"
            if(document.querySelector("img.mouse").alt === "mouse_block"){
                document.querySelector("img.mouse").alt = "mouse0nCat";
            }
        }
    } else{
        console.log("Объект нельзя выбрать")
    }
}

function handleTouchMove(event) {
    if (currentElement.current !== null) { // --- ЕСЛИ ПЕРЕТАСКИВАЕМАЯ ЦЕЛЬ ОПРЕДЕЛЕНА
        if (currentElement.current.target.item_move === true){
            
            let item = currentElement.current.target 
            if (item.className ==="mouse_cat"){
                item.style.left = event.touches[0].pageX - 15 - item.offsetWidth / 2 + 'px';
                item.style.top = event.touches[0].pageY - 90 - item.offsetHeight / 2 + 'px';
            } else{
                // --- ЗАДАЕМ ЧЕРЕЗ JS-АНИМАЦИЮ КООРДИНАТЫ НАШЕГО КУРСОРА (ПАЛЬЦА) НА ЭКРАНЕ ---
                item.style.left = event.touches[0].pageX - item.offsetWidth / 2 + 'px';
                item.style.top = event.touches[0].pageY - item.offsetHeight / 2 + 'px';
            }
            
            // --- ПРОВЕРЯЕМ, НЕ ВЫХОДИТ ЛИ НАШ ОБЪЕКТ ЗА ГРАНИЦЫ ЭКРАНА ---
            item_document(event, item)

            //проверка элемента под нашим объектом
            check_Class(event, item)

        } else{
            console.log("Объект нельзя двигать")
        }
    }
}

function item_document(event, item){
    if (event.touches[0].pageX < 40) {
        item.style.left = event.touches[0].pageX - item.offsetWidth / 2 + 50 + 'px';
    } else if (event.touches[0].pageX > window.screen.width - 30) {
        item.style.left = event.touches[0].pageX - item.offsetWidth / 2 - 50 + 'px';
    }
    if (event.touches[0].pageY < 40) {
        item.style.top = event.touches[0].pageY - item.offsetHeight / 2 + 50 + 'px';
    } else if (event.touches[0].pageY > window.screen.height - 30) {
        item.style.top = event.touches[0].pageY - item.offsetHeight / 2 - 50 + 'px';
    }
}

function handleTouchEnd() { // --- КОГДА УБИРАЕМ ПАЛЕЦ С ЭКРАНА - ТЕКУЩИЙ ПЕРЕМЕЩАЕМЫЙ ОБЪЕКТ ОБНУЛЯЕТСЯ
    if (currentElement.current.target.item_move === true){
        currentElement.current.target.style.zIndex = String(Number(currentElement.current.target.style.zIndex) - 100)
        log()
        cat_mouse()
        bookInFireplace()
        catInCarpet()
        FirePlaceOnMatches()
        currentElement.current = null;
    } else{
        console.log("Объекту нельзя заканчивать что-то")
    }

    if (document.querySelector("img.mouse").alt !== "Mouse_block"){
        document.querySelector("img.cat").style.zIndex = "30"
    }

    if (document.querySelector("img.mouse").alt === "Mouse_block"){
        document.querySelector("img.cat").item_move = false;
        document.querySelector("img.cat").style.zIndex = "30";
    }

    if (document.querySelector("img.cat").item_move === true){
        document.querySelector("img.mouse").alt = "mouse_block"
    }
    elemBelow = null
}

document.body.addEventListener('touchend', handleTouchEnd);
    
//******* Метод для нахождения того: под чем находится объект
let elemBelow = ""
function check_Class(event, item){
    item.style.display = 'none';
    elemBelow = document.elementFromPoint(event.touches[0].pageX, event.touches[0].pageY);
    item.style.display = 'block';
    console.log(elemBelow.className)
}


//------- Пропишем метод для дров, чтобы они в камине крч оставались и было очень круто (проверка на нахождение книжки внутри)
let ch_log = 0
function log(){
    if (/log/.test(currentElement.current.target.className) === true){
        if (document.querySelector("img.book_in_frplc").style.opacity === "0"){
            if (elemBelow.className === "fireplace_on"){
                currentElement.current.target.style.width = "10rem"
                currentElement.current.target.style.height = "3.5rem"
                currentElement.current.target.style.left = "70.625rem"
                currentElement.current.target.style.top = "39.5rem"
                currentElement.current.target.style.zIndex = "4"
                if (ch_log === 0){
                    ch_log += 1
                    currentElement.current.target.style.zIndex = "6"
                    document.querySelector("img.log.five").item_move = true

                } else if (ch_log === 1){
                    currentElement.current.target.style.top = "38rem"
                    currentElement.current.target.style.rotate = "25deg"
                    currentElement.current.target.style.zIndex = "5"
                    document.querySelector("img.log.four").item_move = true
                    ch_log += 1

                }else if (ch_log === 2) {
                    currentElement.current.target.style.top = "38rem"
                    currentElement.current.target.style.rotate = "-25deg"
                    document.querySelector("img.log.three").item_move = true
                    ch_log += 1

                }else if (ch_log === 3) {
                    document.querySelector("img.log.two").item_move = true
                    ch_log += 1

                }else if (ch_log === 4) {
                    document.querySelector("img.log.one").item_move = true
                    ch_log += 1

                }else if (ch_log === 5) {
                    document.querySelector("img.carpet_two_block").className = "carpet_two"
                    document.querySelector(".question.four").style.transition = "2s"
                    document.querySelector(".question.four").style.opacity = "1"
                    document.querySelector(".question.four").style.zIndex = "1000"
                }

                currentElement.current.target.item_move = false
            }else {
                if (ch_log === 0){
                    currentElement.current.target.style.left = "95rem"
                    currentElement.current.target.style.top = "53rem"

                } else if (ch_log === 1){
                    currentElement.current.target.style.left = "95.5rem"
                    currentElement.current.target.style.top = "57rem"

                }else if (ch_log === 2) {
                    currentElement.current.target.style.left = "94.5rem"
                    currentElement.current.target.style.top = "56rem"

                }else if (ch_log === 3) {
                    currentElement.current.target.style.left = "96rem"
                    currentElement.current.target.style.top = "61.5rem"

                }else if (ch_log === 4) {
                    currentElement.current.target.style.left = "95rem"
                    currentElement.current.target.style.top = "60rem"

                }else if (ch_log === 5) {
                    currentElement.current.target.style.left = "94rem"
                    currentElement.current.target.style.top = "59.5rem"
                }
                document.querySelector("img.fireplace_on").style.zIndex = "3"
            }
        } else{
            console.log("Тут лежит книжечка!")
            currentElement.current.target.style.left = "95rem"
            currentElement.current.target.style.top = "53rem"
        }
    }
    document.querySelector("img.fireplace_on").style.zIndex = "3"
}


//------- Пропишем метод для мышки, которая должна вылезти из нужного носка и дать её коту
function sock(element){
    if (element.className === "sock_two"){
        element.addEventListener("click", click_Sock_Two)
    }
}

function click_Sock_Two(){
    document.querySelector("img.mouse").style.animation = "mouse 2s linear";
    document.querySelector("img.mouse").style.animationFillMode = "forwards";
    document.querySelector("img.sock_two").removeEventListener("click", click_Sock_Two)
}

function cat_mouse(){
    if (currentElement.current.target.className === "mouse"){
        if (elemBelow.className === "cat") {
            currentElement.current.target.style.left = "23rem"
            currentElement.current.target.style.top = "50.4rem"
            currentElement.current.target.item_move = false
            currentElement.current.target.alt = "mouse0nCat"

            document.querySelector("img.mouse_cat").style.opacity = "1"
            document.querySelector("img.mouse_cat").item_move = true
            document.querySelector("img.mouse_cat").style.zIndex = "32"

            document.querySelector("img.mouse").style.opacity = "0"
            document.querySelector("img.cat").style.opacity = "0"
            document.querySelector("img.mouse_cat").style.transform = "scaleX(-1)";

            cat_mouse_log()
            document.body.addEventListener('touchmove', handleTouchMove);

        } else{
            currentElement.current.target.style.left = "75.5rem"
            currentElement.current.target.style.top = "25.5rem"
        }
    }
}

function catInCarpet(){
    if (currentElement.current.target.className === "mouse_cat"){
        if (elemBelow.className === "carpet_two"){
            currentElement.current.target.style.left = "94rem";
            currentElement.current.target.style.top = "51.25rem";
            document.querySelector("img.mouse_cat").style.transform = "scaleX(1)";
            document.querySelector("img.mouse_cat").item_move = false
            document.querySelector(".question.two").style.transition = "2s"
            document.querySelector(".question.two").style.opacity = "1"
            document.querySelector(".question.two").style.zIndex = "1000"
            document.querySelector("img.matches").item_move = true;
        }else if((elemBelow.querySelector("img.carpet_two_block")) && (elemBelow.className ==="carpet_two_block") || (/log/.test(elemBelow.className))){
            logCatTool()
            currentElement.current.target.style.left = "15.5rem";
            currentElement.current.target.style.top = "47rem";
        } else{
            currentElement.current.target.style.left = "15.5rem";
            currentElement.current.target.style.top = "47rem";
        }
    }
}


//------- Метод для книжки, чтобы убрать её на полку
function  bookInFireplace(){
    if (currentElement.current.target.className === "book_in_frplc"){
        if ((elemBelow.className === "books")||((elemBelow.className === "book_in_shelf"))){
            currentElement.current.target.style.opacity = '0';
            (document.querySelector("img.book_in_shelf").alt = "book_in_shelf_on")
            document.querySelector(".book_in_shelf").style.opacity = "1"
            document.querySelector(".question.three").style.transition = "2s"
            document.querySelector(".question.three").style.opacity = "1"
            document.querySelector(".question.three").style.zIndex = "1000"
        } else{
            currentElement.current.target.style.left = "70rem";
            currentElement.current.target.style.top = "40rem";
        }
    }
}


//------- Метод для спичичнего коробка, чтобы зажечь каминчик
function  FirePlaceOnMatches(){
        if (currentElement.current.target.className === "matches"){
            if ((elemBelow.className === "fireplace_on") ||(/log/.test(elemBelow.className))){
                currentElement.current.target.style.opacity = '0';
                document.querySelector("img.fireplace_on").style.opacity = "1";
                document.querySelector(".question.five").style.transition = "2s"
                document.querySelector(".question.five").style.opacity = "1"
                document.querySelector(".question.five").style.zIndex = "1000"
            } else{
                currentElement.current.target.style.left = "20rem";
                currentElement.current.target.style.top = "60rem";
            }
        }
}


//-------- Метод для кота и некоторых других объектов, дающий подсказку
let timer = 0
function cat(element){
    if (element.className === "cat"){
        element.addEventListener("click", catTool)
    }
}

function catTool(){
    if (document.querySelector(".mouse").alt === "mouse") {
        document.querySelector('span.tool.cat').style.transition = "1s"
        document.querySelector('span.tool.cat').style.opacity = "1"
        document.querySelector('span.tool.cat').style.zIndex = "1000"
        document.querySelector('.tool.cat').style.left = "20rem"
        document.querySelector('.tool.cat').style.top = "35rem"
        timer = setTimeout(() =>{
            document.querySelector('span.tool.cat').style.opacity = '0';
            document.querySelector('span.tool.cat').style.zIndex = '1';
        }, 5000);
    }
}

function matches(element){
    if (element.className === "matches"){
        element.addEventListener("click", matchesTool)
    }
}

function matchesTool(){
    if (document.querySelector("img.matches").item_move === false){
        document.querySelector('span.tool.matches').style.transition = "1s"
        document.querySelector('span.tool.matches').style.opacity = "1"
        document.querySelector('span.tool.matches').style.zIndex = "1000"
        document.querySelector('.tool.matches').style.left = "35rem"
        document.querySelector('.tool.matches').style.top = "50rem"
        timer = setTimeout(() =>{
            document.querySelector('span.tool.matches').style.opacity = '0';
            document.querySelector('span.tool.matches').style.zIndex = '1';
        }, 5000);
    }
}

function logCatTool(){
    if (document.querySelector("img.carpet_two_block")){
        document.querySelector('span.tool.log').style.zIndex = "1000"
        document.querySelector('span.tool.log').style.transition = "1s"
        document.querySelector('span.tool.log').style.opacity = "1"
        document.querySelector('.tool.log').style.left = "52rem"
        document.querySelector('.tool.log').style.top = "55rem"
        timer = setTimeout(() =>{
            document.querySelector('span.tool.log').style.zIndex = '1';
            document.querySelector('span.tool.log').style.opacity = '0';
        }, 5000);
    }
}

function logItem(element){
    if (element.className === "log six"){
        element.addEventListener("click", logTool)
    }
}

function logTool(){
    if ((document.querySelector("img.carpet_two_block")) && (document.querySelector("img.log.six").item_move === true)){
        document.querySelector('span.tool.log_carpet').style.transition = "1s"
        document.querySelector('span.tool.log_carpet').style.opacity = "1"
        document.querySelector('span.tool.log_carpet').style.zIndex = "1000"
        document.querySelector('.tool.log_carpet').style.left = "85rem"
        document.querySelector('.tool.log_carpet').style.top = "47rem"
        timer = setTimeout(() =>{
            document.querySelector('span.tool.log_carpet').style.opacity = '0';
            document.querySelector('span.tool.log_carpet').style.zIndex = '1';
        }, 5000);
    }
}

function bookItem(element){
    if (element.className === "book_in_frplc"){
        element.addEventListener("click", bookTool)
    }
}

function bookTool(){
    if (document.querySelector("img.book_in_shelf").alt === "book_in_shelf_off"){
        document.querySelector('span.tool.book').style.transition = "1s"
        document.querySelector('span.tool.book').style.opacity = "1"
        document.querySelector('span.tool.book').style.zIndex = "1000"
        document.querySelector('.tool.book').style.left = "58rem"
        document.querySelector('.tool.book').style.top = "30rem"
        timer = setTimeout(() =>{
            document.querySelector('span.tool.book').style.opacity = '0';
            document.querySelector('span.tool.book').style.zIndex = '1';
        }, 5000);
    }
}

function sockItem(element){
    if (/sock/.test(element.className)){
        element.onclick = () => {sockTool(element)}
    }
}

function sockTool(element){
    if (element.className === "sock_one"){
        if (document.querySelector("img.sock_three")){document.querySelector("img.sock_three").className = "sook_three_off"}
        if (document.querySelector("img.sock_four")){document.querySelector("img.sock_four").className = "sook_four_off"}
        document.querySelector('span.tool.sook').style.opacity = "1"
        document.querySelector('span.tool.sook').style.zIndex = '1000';
        document.querySelector('.tool.sook').style.left = "58.5rem"
        document.querySelector('.tool.sook').style.top = "20rem";
        (document.querySelector("img.sock_one"))

    }else if (element.className === "sock_three"){
        if (document.querySelector("img.sock_one")){document.querySelector("img.sock_one").className = "sook_one_off"}
        if (document.querySelector("img.sock_four")){document.querySelector("img.sock_four").className = "sook_four_off"}
        document.querySelector('span.tool.sook').style.opacity = "1"
        document.querySelector('span.tool.sook').style.zIndex = '1000';
        document.querySelector('.tool.sook').style.left = "58.5rem"
        document.querySelector('.tool.sook').style.top = "20rem";
        (document.querySelector("img.sock_one"))

    }else if (element.className === "sock_four") {
        if (document.querySelector("img.sock_one")) {document.querySelector("img.sock_one").className = "sook_one_off"}
        if (document.querySelector("img.sock_three")) {document.querySelector("img.sock_three").className = "sook_three_off"}
        document.querySelector('span.tool.sook').style.opacity = "1"
        document.querySelector('span.tool.sook').style.zIndex = '1000';
        document.querySelector('.tool.sook').style.left = "58.5rem"
        document.querySelector('.tool.sook').style.top = "20rem";
        (document.querySelector("img.sock_one"))
    }else if (element.className === "sock_two"){
        if (document.querySelector("img.sock_one")){document.querySelector("img.sock_one").className = "sook_one_off"}
        if (document.querySelector("img.sock_three")){document.querySelector("img.sock_three").className = "sook_three_off"}
        if (document.querySelector("img.sock_four")){document.querySelector("img.sock_four").className = "sook_four_off"}
    }
     timer = setTimeout(() =>{
        document.querySelector('span.tool.sook').style.opacity = '0';
        document.querySelector('span.tool.sook').style.zIndex = '1';
    }, 5000);
}

function cat_mouse_log() {
    if (document.querySelector("img.carpet_two_block")) {
        document.querySelector('span.tool.cat_mouse_log').style.transition = "1s"
        document.querySelector('span.tool.cat_mouse_log').style.opacity = "1"
        document.querySelector('span.tool.cat_mouse_log').style.zIndex = "1000"
        document.querySelector('.tool.cat_mouse_log').style.left = "35rem"
        document.querySelector('.tool.cat_mouse_log').style.top = "50rem"
        timer = setTimeout(() => {
            document.querySelector('span.tool.cat_mouse_log').style.opacity = '0';
            document.querySelector('span.tool.cat_mouse_log').style.zIndex = '1';
        }, 5000);
    }
}

function ToolHide(){
    let elements = document.querySelectorAll(".tool")
    for (let item of elements){
        item.style.opacity = "0"
        item.style.zIndex = "1"
        clearInterval(timer)
    }
}




