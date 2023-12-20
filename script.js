let password = document.getElementById("password");
checkbox.onclick = () => {
    if (password.type == "password") {
        password.type = "text"
    }
    else {
        password.type = "password"
    }
}

// ------------------------------------------------------------- Math operation ---------------------------------------


let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let result = document.getElementById("result")
let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let btn4 = document.getElementById("btn4")
let btn5 = document.getElementById("btn5")


btn1.addEventListener("click", () => {
    result.innerHTML = parseInt(num1.value) + parseInt(num2.value);
});

btn2.addEventListener("click", () => {
    result.innerHTML = parseInt(num1.value) - parseInt(num2.value);
});
btn3.addEventListener("click", () => {
    result.innerHTML = parseInt(num1.value) * parseInt(num2.value);
});
btn4.addEventListener("click", () => {
    result.innerHTML = parseInt(num1.value) / parseInt(num2.value);
});
btn5.addEventListener("click", () => {
    result.innerHTML = `${num1.value / num2.value * 100}%`;
});


// ------------------------------------------------------------- marksheet ---------------------------------------


function calculate() {
    let csub = document.getElementById("csub").value
    let csubb = document.getElementById("csubb").value
    let database = document.getElementById("database").value
    let htm = document.getElementById("htm").value
    let cs = document.getElementById("cs").value
    let ph = document.getElementById("ph").value
    let corejava = document.getElementById("corejava").value

    let total = parseFloat(csub) + parseFloat(csubb) + parseFloat(database) + parseFloat(htm) + parseFloat(cs) + parseFloat(ph) + parseFloat(corejava);
    if (csub > 100 || csubb > 100 || database > 100 || htm > 100 || cs > 100 || ph > 100 || corejava > 100) {
        alert("enter valid marks")
    }
    else {
        obt.innerHTML = `Total is:${total}/700`;
    }

    let percentage = parseFloat(total / 700) * 100;
    showdata.innerHTML = `percentage is: ${percentage}%`;
}

// ------------------------------------------------------------- slider ---------------------------------------


let slideimg = document.querySelectorAll(".slide-img")
console.log(slideimg);

let count = 0

slideimg.forEach((img, index) => {
    img.style.left = `${index * 100}%`
});

function slide() {
    slideimg.forEach(img => {
        img.style.transform = `translatex(${-count * 100}%)`
    });
}


let prev = () => {
    count--
    if (count <= -1) {
        count = 3
    }
    slide()
}
let next = () => {
    count++
    if (count >= slideimg.length) {
        count = 0
    }
    slide()
}