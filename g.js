let paper = document.querySelector(".ic1");
let rock = document.querySelector(".ic2");
let scissor = document.querySelector(".ic3");
let comp;
let re=document.querySelector(".re");
let con=document.querySelector(".con");
let result=document.querySelector(".result");
function ic1() {
    let rand = Math.floor(Math.random() * 3);

    if (rand == 0) {
        comp = "paper";
        re.innerHTML = "Draw";

        con.innerHTML = `
            You: <i class="fa-solid fa-hand"></i>
            Computer: <i class="fa-solid fa-hand"></i>
        `;
    }

    else if (rand == 1) {
        comp = "rock";
        re.innerHTML = "You Win";

        con.innerHTML = `
            You: <i class="fa-solid fa-hand"></i>
            Computer: <i class="fa-solid fa-hand-back-fist"></i>
        `;
    }

    else {
        comp = "scissor";
        re.innerHTML = "You Lose";

        con.innerHTML = `
            You: <i class="fa-solid fa-hand"></i>
            Computer: <i class="fa-solid fa-hand-peace"></i>
        `;
    }
    up();
}
function ic2() {
    let rand = Math.floor(Math.random() * 3);

    if (rand == 0) {
        re.innerHTML = "You Lose";
        con.innerHTML = `You: <i class="fa-solid fa-hand-back-fist"></i> Computer: <i class="fa-solid fa-hand"></i>`;
    }
    else if (rand == 1) {
        re.innerHTML = "Draw";
        con.innerHTML = `You: <i class="fa-solid fa-hand-back-fist"></i> Computer: <i class="fa-solid fa-hand-back-fist"></i>`;
    }
    else {
        re.innerHTML = "You Win";
        con.innerHTML = `You: <i class="fa-solid fa-hand-back-fist"></i> Computer: <i class="fa-solid fa-hand-peace"></i>`;
    }
    up();
}
function ic3() {
    let rand = Math.floor(Math.random() * 3);

    if (rand == 0) {
        re.innerHTML = "You Win";
        con.innerHTML = `You: <i class="fa-solid fa-hand-peace"></i> Computer: <i class="fa-solid fa-hand"></i>`;
    }
    else if (rand == 1) {
        re.innerHTML = "You Lose";
        con.innerHTML = `You: <i class="fa-solid fa-hand-peace"></i> Computer: <i class="fa-solid fa-hand-back-fist"></i>`;
    }
    else {
        re.innerHTML = "Draw";
        con.innerHTML = `You: <i class="fa-solid fa-hand-peace"></i> Computer: <i class="fa-solid fa-hand-peace"></i>`;
    }
    up();
}

let ob={
    win :0,
    lose :0,
    draw :0
}
let res=document.querySelector(".re");
function up() {
    if (re.innerHTML == "You Win") {
        ob.win += 1;
    }
    else if (re.innerHTML == "You Lose") {
        ob.lose += 1;
    }
    else {
        ob.draw += 1;
    }

    result.innerHTML = `Win: ${ob.win} Lose: ${ob.lose} Draw: ${ob.draw}`;
}
