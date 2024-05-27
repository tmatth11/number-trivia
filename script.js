let getNumFactBtn = document.getElementById("get-num-fact-btn");
let ranNumBtn = document.getElementById("ran-num-btn");

let getDateFactBtn = document.getElementById("get-date-fact-btn");
let ranDateBtn = document.getElementById("ran-date-btn");

let fact = document.querySelector(".fact");
let url = "http://numbersapi.com/";

let fetchNumFact = (num) => {
    let finalUrl = url + num;
    fetch(finalUrl)
        .then((response) => response.text())
        .then((data) => {
            fact.style.display = "block";
            fact.innerHTML = `
                <h2>${num}</h2>
                <p>${data}</p> 
           `;
            document.querySelector(".container").append(fact);
        });
};

let getNumFact = () => {
    let num = document.getElementById("num").value;
    if (num) {
        if (num >= 0 && num <= 300) {
            fetchNumFact(num);
        }
        else {
            fact.style.display = "block";
            fact.innerHTML = `<p class="msg"> Please enter a number between 0 to 300.</p>`;
        }
    }
    else {
        fact.style.display = "block";
        fact.innerHTML = `<p class="msg">The input field cannot be empty</p>`;
    }
};

let getRandomNumFact = () => {
    let num = Math.floor(Math.random() * 301);
    fetchNumFact(num);
}

let fetchDateFact = (month, day) => {
    let finalUrl = `${url}${month}/${day}/date`;
    fetch(finalUrl)
        .then((response) => response.text())
        .then((data) => {
            fact.style.display = "block";
            fact.innerHTML = `
                <h2>${month}/${day}</h2>
                <p>${data}</p> 
           `;
            document.querySelector(".container").append(fact);
        });
};

let getDateFact = () => {
    let date = document.getElementById("date").value;
    if (date) {
        let [month, day] = date.split("/");
        if (month >= 1 && month <= 12 && day >= 1 && day <= 31) {
            fetchDateFact(month, day);
        }
        else {
            fact.style.display = "block";
            fact.innerHTML = `<p class="msg"> Please enter a valid date in the format MM/DD.</p>`;
        }
    }
    else {
        fact.style.display = "block";
        fact.innerHTML = `<p class="msg">Please enter a date in the format MM/DD.</p>`;
    }
};

let getRandomDateFact = () => {
    let month = Math.floor(Math.random() * 12) + 1;
    let day = Math.floor(Math.random() * 31) + 1;
    fetchDateFact(month, day);
}

getNumFactBtn.addEventListener("click", getNumFact);
ranNumBtn.addEventListener("click", getRandomNumFact);

getDateFactBtn.addEventListener("click", getDateFact);
ranDateBtn.addEventListener("click", getRandomDateFact);

window.addEventListener("load", getRandomNumFact);
