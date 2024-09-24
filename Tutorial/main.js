// make tabs to show content
let tabs = document.querySelectorAll(".tabs .tab")
let contentP = document.querySelectorAll(".article .content p")

tabs.forEach(function (e) {
    e.onclick = function () {
        tabs.forEach((e) => {
            e.classList.remove("active")
        });
        this.classList.add("active")
        // showP(tabs, contentP);
        contentP.forEach((e)=> e.style.display="none")
        document.querySelector(this.dataset.cont).style.display="block";
    };
})
// method to appear and disappear content
// function showP (elementClick, elementsShow) {
//     for(let i=0; i< elementClick.length; i++) {
//             if (elementClick[i].classList.contains("active")) {
//             elementsShow[i].style.display = "block";
//         } else {
//             elementsShow[i].style.display = "none";
//         } 
//     };
// }


// make scroll to top
let btnTop= document.querySelector(".to-top")
window.onscroll = () => {
    if( window.scrollY >= 600) {
        btnTop.style.right="10px";
    } else {
        btnTop.style.right="-50px";
    }
}
btnTop.onclick = () => {
    window.scrollTo( {
        top:0,
        behavior: "smooth",
    });
};


// get random value from array or string
let arr= ["Ahmed", "Omar", "Essam"]


let serial = document.querySelector(".serial")
let generate = document.querySelector(".generate")

// generate serial number
generate.onclick = () => {
    let letterRandom = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%^&*";
    let randomStr="";
    for(let i=0; i <6 ;i++) {
        randomStr += letterRandom[Math.floor(Math.random() * letterRandom.length)]
    }
    serial.textContent = randomStr;
}


// show project section
let listProject = document.querySelectorAll(".switcher li")
let imgs = document.querySelectorAll(".gallery img")

// to show project section
listProject.forEach((li) => {
    li.addEventListener("click",removeActive);
    li.addEventListener("click",manageImgs);
})

function removeActive () {
    listProject.forEach((li)=> {
        li.classList.remove("active");
        this.classList.add("active");
    })
}

function manageImgs () {
    imgs.forEach((img) => img.style.display="none");
    document.querySelectorAll(this.dataset.cat).forEach((el) => el.style.display="block");
}


// random background color
let divRandom = document.querySelector(".random")

// let colorArr= [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
// let contArr=[];
// for(let i=0; i<6;i++) {
//     contArr.push(colorArr[Math.floor(Math.random() * colorArr.length)])
// }
// divRandom.innerHTML = "#" + contArr.join("");
// divRandom.style.backgroundColor= "#" + contArr.join("")


// another solution to random background color
let colorStr="0123456789abcdef";
let contStr ="";
for(let i =0; i < 6; i++) {
    contStr += colorStr[Math.floor(Math.random() * colorStr.length)]
}
divRandom.innerHTML = `#${contStr}`;
divRandom.style.backgroundColor=`#${contStr}`;


// navigation bar
let bars = document.querySelector(".bars")
let nav = document.querySelector(".nav")
let closeSpan = document.querySelector(".nav span")


bars.onclick = function () {
    nav.classList.add("open");   
}

closeSpan.onclick = function (e) {
    this.parentElement.classList.remove("open")
}

document.onkeyup = function (e) {
    if(e.key ==="Escape") {
        nav.classList.remove("open")
    }
}


// fill the input
let input = document.querySelector(".fill input")
let change = document.querySelector(".change span")
let count = document.querySelector(".count")

count.innerHTML = input.maxLength;
input.oninput = () => {
    count.innerHTML = input.maxLength - input.value.length;
    change.style.width = `${(input.value.length * 100) / input.maxLength}%`
    if (count.innerHTML === 0 ) {
        count.classList.add("zero");
    } else {
        count.classList.remove("zero");
    }
}


// countDown
// The End Of The Year Date To Countdown To
// 1000 milliseconds = 1 Second

let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();
// console.log(countDownDate);

let counter = setInterval(() => {
    // Get Date Now
    let dateNow = new Date().getTime();

    // Find The Date Difference Between Now And Countdown Date
    let dateDiff = countDownDate - dateNow;

    // Get Time Units
    // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);


// width at scrolling
let spanScroll = document.querySelectorAll(".skills .progress span")
let progressScroll = document.querySelector(".progress")
window.onscroll = () => {
    if (scrollY >= progressScroll.offsetTop - 300) {
        spanScroll.forEach((e)=> {
            e.style.width = e.dataset.width;
        })
    }
}


// increase Numbers
let cards = document.querySelector(".cards")
let cardNumber = document.querySelectorAll(".card-num")
let started = false; // Function Started ? No

function numIncrease (el) {
    let number = el.dataset.num;
    let stop = setInterval(() => {
        el.textContent++;
        if (el.textContent == number) {
            clearInterval(stop);
        }
        // make all elements reach to number with constant time
    }, 2000 / number)
}
window.onscroll = () => {
    if (scrollY >= cards) {
        // to make the function run only one time during scrolling
        if(!started) { 
            cardNumber.forEach((e)=> numIncrease(e))
        }
        started = true;
    }
}


// speed writing game

// Array Of Words
const words = {
    Easy: ["Hello", "Code", "Town", "Python", "Scala", "Task", "Roles", "Test", "Rust", "Funny", "Coding", "Runner","Php","Java"],
    Normal : [ "Country","Testing","Youtube","Linkedin","Twitter","Github","Leetcode","Internet","Paradigm","Styling","Cascade","Playing",
    "Working"],
    Hard : ["Programming","Javascript","Destructuring","Documentation","Dependencies","codeforces"]
};

// Setting Levels
const lvls = {
  "Easy": 5,
  "Normal": 3,
  "Hard": 2 
};

// catch Selector
let lvl = document.querySelector(".message .lvl")
let time = document.querySelector(".message .seconds")
let playing = document.querySelector(".start")
let theWord = document.querySelector(".the-word")
let inputWord = document.querySelector(".input-word")
let upComing = document.querySelector(".upcoming-words")
let timeLeft = document.querySelector(".time span")
let scoreGot = document.querySelector(".score .got")
let total = document.querySelector(".score .total")
let selectLvl = document.querySelector(".game select")
let instruction = document.querySelector(".instruction")
let finish = document.querySelector(".finish")

// Setting level + Seconds + score 
total.innerHTML = words.Normal.length;
// call the function in default value 
info();

selectLvl.onchange = () => {
    total.innerHTML = words[selectLvl.value].length;
    lvl.innerHTML = selectLvl.value;
    time.innerHTML = lvls[selectLvl.value];
    timeLeft.innerHTML = lvls[selectLvl.value];
    // trigger the function during changing
    info();
}

// instruction about levels
function info() {
    instruction.innerHTML="";
    let levelTitle = document.createElement("h3")
    let para_1 = document.createElement("p")
    let para_2 = document.createElement("p")
    let para_3 = document.createElement("p")
    levelTitle.append(selectLvl.value)
    para_1.textContent = `${selectLvl.value} have ${words[selectLvl.value].length} words`
    para_2.textContent = `${selectLvl.value} have ${lvls[selectLvl.value]} seconds`
    para_3.textContent = `In first word we increase 3 seconds above main time of level`
    instruction.append(levelTitle, para_1, para_2, para_3);
}

// prevent paste inside input field
inputWord.onpaste = () => {
    return false;
}

// start Playing
playing.onclick = () => {
    // remove the button
    playing.remove();
    // focus on input directly
    inputWord.focus();
    // call genWord function
    genWords(words[selectLvl.value]);
}

// genWords function
function genWords(level) {
    // get random word from array
    let random = level[Math.floor(Math.random() * level.length)]
    // append random to div Element
    theWord.innerHTML = random;
    // delete this random value from array
    level.splice(level.indexOf(random), 1);
    // empty the upcoming words in every time call this function
    upComing.innerHTML = "";
    // append the level to upcoming-words
    for (let i=0; i < level.length; i++) {
        let divWords = document.createElement("div")
        divWords.append(level[i]);
        upComing.append(divWords);  
    }
    // call playWords function
    playWords();
}

function playWords() {
    if (scoreGot.innerHTML === "0") {
        // in case of first word add 3 seconds to timer
        timeLeft.innerHTML = lvls[selectLvl.value] + 3;
    } else {
        // and the rest word timer will run from default seconds
        timeLeft.innerHTML = lvls[selectLvl.value];
    }
    let start = setInterval(function () {
        timeLeft.innerHTML--;
        if (timeLeft.innerHTML == "0") {
            // Stop Timer
            clearInterval(start);
            // call function checkWord
            checkWord();
        }
    } ,1000)
}

function checkWord() {
    // compare the words
    if (inputWord.value.toLowerCase() === theWord.innerHTML.toLowerCase()) {
        // increase the Score 
        scoreGot.innerHTML++;
        // empty the input as soon as writing the word
        inputWord.value = "";

        if (words[selectLvl.value].length > 0) {
            // call getWords function again
            genWords(words[selectLvl.value]);
        } else {
            let good = document.createElement("span");
            good.classList= "good";
            good.append("Congratz");
            finish.append(good);
            storage();
            // remove upComing
            upComing.remove();
        }
    } else {
        let bad = document.createElement("span");
        bad.classList= "bad";
        bad.append("Game Over");
        finish.append(bad);  
        storage();
    }
}

function storage() {
    // object to store score and date
    let result = {
        score: `${scoreGot.innerHTML} from ${total.innerHTML}`,
        date: new Date().toLocaleString(),
        level: lvl.innerHTML,
    }
    // put object inside localStorage
    localStorage.setItem("score",JSON.stringify(result))
}


// image slider

// Get Slider Items | Array.form [ES6 Feature]
let sliderImages = Array.from(document.querySelectorAll('.slider-container img'));
// Get Number Of Slide
let slideCount = sliderImages.length;
// set Current slide
let currentSlide = 1;


let sliderNumber = document.getElementById("slide-number");

// previous and next button
let nextButton = document.getElementById("next") 
let prevButton = document.getElementById("prev") 

// function during click event on next and previous
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// create ul element to append li inside him
let mainUl = document.createElement("ul");
// put id to mainUl
mainUl.id = "pagination-ul";

// create li that will be inside the ul
for (let i=1; i <= slideCount; i++) {
    // create li
    let listItem = document.createElement("li");
    // set custom attribute
    listItem.dataset.index = i;
    // set text inside li
    listItem.append(i);
    // put li inside the ul
    mainUl.append(listItem);
}

// Add the mainUl inside the indicators
document.getElementById("indicators").append(mainUl);

// get the new created ul
let createdUl = document.getElementById("pagination-ul");

let createdList =  Array.from(document.querySelectorAll("#pagination-ul li"));

// Loop Through All Bullets Item
for(let i=0; i < createdList.length; i++) {
    createdList[i].onclick = function () {
        currentSlide = parseInt(this.dataset.index);
        theChecker();
    }
}

// Trigger the function
theChecker();

// Previous Slide Function
function nextSlide() {
    if(nextButton.classList.contains("disabled")) {
        return false;
    } else {
        currentSlide++;
        theChecker();
    }
}

function prevSlide() {
    if (prevButton.classList.contains("disabled")) {
        return false;
    } else {
        currentSlide--;
        theChecker();
    }
}

function theChecker() {
    // set slider number
    sliderNumber.textContent = `Slide # ${currentSlide} of ${slideCount}`
    // remove active class from the list and the images
    removeActive();
    // set active class on currentSlide
    sliderImages[currentSlide-1].classList.add("active");
    // set active class on createdList
    createdList[currentSlide-1].classList.add("active");
    // check the currentSlide is the first
    if(currentSlide == 1) {
        prevButton.classList.add("disabled")
    } else {
        prevButton.classList.remove("disabled")
    }
    // check the currentSlide is the last
    if (currentSlide == slideCount) {
        nextButton.classList.add("disabled")
    } else {
        nextButton.classList.remove("disabled")
    }
}

function removeActive() {
    // remove active class from the images
    sliderImages.forEach((e) => {
        e.classList.remove("active")
    });
    // remove active class form the list(bullets)
    createdList.forEach((e) => {
        e.classList.remove("active")
    });
};


// Memory Game
let gameName = document.querySelector(".name span"); 
let control = document.querySelector(".control-buttons span");
let restart = document.querySelector(".restart");

function playerName () {
    tries.innerHTML = "0";
    minTimer.innerHTML = "1";
    secTimer.innerHTML = "10";
    let yourName = prompt("What's your Name");
    if (yourName == null || yourName == "") {
        gameName.innerHTML = "Unknown";
    } else {
        gameName.innerHTML = yourName;
    }
    blocksCard.forEach((e) => e.classList.add("has-match"));
    setTimeout(() => {
        blocksCard.forEach((e) => e.classList.remove("has-match"));
        record();
    },2000)
}

control.onclick = function () {
    playerName();
    this.parentElement.remove();
}

let duration = 1000;

let blocks = document.querySelector(".memory-game-blocks");
let blocksCard = Array.from(blocks.children);
let orderArr = [...Array(blocksCard.length).keys()];

shuffle(orderArr);

restart.onclick = function () {
    blocks.classList.remove("no-clicking");
    let arrBlocks = Array.from(document.querySelectorAll(".game-block"))
    let arrOrder = [...Array(arrBlocks.length).keys()];
    shuffle(arrOrder);
    arrBlocks.forEach((e,i) => e.style.order = arrOrder[i]);
    blocks.innerHTML = "";
    for(let i = 0 ; i < arrBlocks.length ; i++) {
        blocks.append(arrBlocks[i]);
    }
    arrBlocks = arrBlocks.forEach((e) => e.classList.remove("has-match","is-flipped"));
    playerName();
}

blocksCard.forEach((e,i) => {
    e.style.order = orderArr[i];
    e.addEventListener("click", function() {
        flip(e);
    });
});

function flip(block) {
    block.classList.add("is-flipped");
    let allBlocks = blocksCard.filter((e) => e.classList.contains("is-flipped"));
    if (allBlocks.length == 2) {
        stopClicking();
        checkBlocks(allBlocks[0],allBlocks[1]);
    }
}

function stopClicking() {
    blocks.classList.add("no-clicking");

    setTimeout(function() {
        blocks.classList.remove("no-clicking")
    }, duration);
}

let tries = document.querySelector(".tries span");

function checkBlocks(firstBlock, secondBlock) {

    if(firstBlock.dataset.technology === secondBlock.dataset.technology) {
        firstBlock.classList.remove("is-flipped");
        secondBlock.classList.remove("is-flipped");

        firstBlock.classList.add("has-match");
        secondBlock.classList.add("has-match");
    } else {
        tries.innerHTML++;
        setTimeout(() => {
            firstBlock.classList.remove("is-flipped")
            secondBlock.classList.remove("is-flipped")
        },duration)
    }
}

let minTimer = document.querySelector(".timer .minutes");
let secTimer = document.querySelector(".timer .seconds");

function record() {

    let timeCount = setInterval(()=>{
        secTimer.innerHTML--;
        let match = blocksCard.every((e) => e.classList.contains("has-match")); 
        if(minTimer.innerHTML == "0" && secTimer.innerHTML =="0" || match == true) {
            clearInterval(timeCount);
            storeData();
            playerResult();
            blocks.classList.add("no-clicking")
        }
        else if(secTimer.innerHTML=="0") {
            secTimer.innerHTML= 60;
            minTimer.innerHTML--;
        }
}, duration)   
};

// method to make shuffle to array
function shuffle (arrShuffle) {
    let current = arrShuffle.length,
    random,temp; 
    
    while (current > 0) {
        random = Math.floor(Math.random() * current)
        current--;
        temp = arrShuffle[current];
        arrShuffle[current] = arrShuffle[random];
        arrShuffle[random] = temp;
    }
    return arrShuffle;
}


let storeArr=[];
// re store local storage inside storeArr
storeArr = JSON.parse(localStorage.getItem("score"));
// make local storage and put empty array 
localStorage.setItem("score", JSON.stringify(storeArr));

function storeData() {

    let score = {
        name: gameName.innerHTML,
        mistakes : tries.innerHTML,
        statue: blocksCard.every((e) => e.classList.contains("has-match")) ? "winner" : "loser" 
    };
    // add the object inside the array
    storeArr.push(score);
    localStorage.setItem("score", JSON.stringify(storeArr));
    // store array inside local storage
    
};


let players = document.querySelector(".players");
function playerResult () {
    players.innerHTML="";
for (let i = 0; i < storeArr.length; i++) {
    let divPlayer = document.createElement("div");
    let spanName = document.createElement("span");
    let spanMistake = document.createElement("span");
    let spanStatue = document.createElement("span");
    spanName.innerHTML = `Name:` + (storeArr[i].name);
    spanMistake.innerHTML = `Mistakes:` + (storeArr[i].mistakes);
    spanStatue.innerHTML = `Statue:` + (storeArr[i].statue);
    divPlayer.append(spanName, spanMistake, spanStatue);
    players.append(divPlayer);
}}   
// playerResult();
// localStorage.clear()


// xo-game 

let xo = document.querySelector(".xo");
let  turn = document.querySelector(".turn")
let turnX = document.querySelector(".turn span:first-child");
let turnO = document.querySelector(".turn span:last-child");
let boxesSpan = Array.from(document.querySelectorAll(".xo .boxes span"));

boxesSpan.forEach((span) => {
    span.onclick = (e) => {
        e.currentTarget.innerHTML = turn.innerText;
        turnX.classList.toggle("visible");
        turnO.classList.toggle("visible");
        boxesSpan.forEach((e) => {
            if (e.innerText !== "") {
                e.classList.add("no-clicking")
            };
        });
        let left = document.querySelectorAll(".left");
        let right = document.querySelectorAll(".right");
        let top = document.querySelectorAll(".top");
        let bottom = document.querySelectorAll(".bottom");
        let middle = document.querySelectorAll(".middle");
        let normal = document.querySelectorAll(".normal");
        let slope_1 = document.querySelectorAll(".slope-1");
        let slope_2 = document.querySelectorAll(".slope-2");
        winner(right);
        winner(left);
        winner(top);
        winner(bottom);
        winner(middle);
        winner(normal);
        winner(slope_1);
        winner(slope_2);
        rePlay();
        }
    })

function winner(cards) {
    let cardsArr= Array.from(cards);
    let cardsX = cardsArr.every((e) => e.innerText=="X")
    let cardsO = cardsArr.every((e) => e.innerText=="O")
    if (cardsX == true || cardsO == true) {
        cardsArr.forEach((e) => e.classList.add("active"));
            boxesSpan.forEach((e) => {
                e.classList.add("no-clicking")
        });
    }
}

function rePlay() {
    let check = boxesSpan.every((e) => e.classList.contains("no-clicking"));
        if(check == true) {
            setTimeout(() => {
                boxesSpan.forEach((e) => {
                    e.innerHTML = "";
                    e.classList.remove("no-clicking","active");
                });
            },2000)
        }
}

// type writer

let typeWriter = 'Omar Essam Khatab';
let i=0;
let divWriter = document.querySelector(".writer")
let stopWriter = setInterval(()=> {
    divWriter.append(typeWriter[i]);
    i++;
    if (i == typeWriter.length) {
        clearInterval(stopWriter);
    }
},200);


// wach game

let spanImage = Array.from(document.querySelectorAll(".whac .square span")); 
console.log(spanImage);

let startGame = document.querySelector(".start-game span");
let stopWatch = document.querySelector(".stop-watch");
let resultSpan = document.querySelector(".whac .result span");

startGame.onclick = () => {
    startGame.parentElement.remove();
    let stop = setInterval(() => {
        stopWatch.innerHTML--;
        if (stopWatch.innerHTML == "0") {
            clearInterval(stop);
            alert(`Result is ${resultSpan.innerHTML}`);
        }
    },1000)
    setInterval(()=> {
        let random = spanImage[Math.floor(Math.random() * spanImage.length)]
        spanImage.forEach((e) => e.classList.remove("random-image"));
        random.classList.add("random-image");
},300)
};

spanImage.forEach((e) => {
    e.onclick = function () {
        if (this.classList.contains("random-image")) {
            resultSpan.innerHTML++;
        }
    }
});


let prop = document.querySelector(".prop")
let propPara = document.querySelector(".prop p")
let propSpan = document.querySelector(".prop span")

propSpan.onclick = (e) => {
    console.log("hello")
}