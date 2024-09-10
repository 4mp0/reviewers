
import qsJSON from "./qs.json" with {type:"json"};
import ansJSON from "./ans.json" with {type:"json"};

if (window.onload = () => {
    var qsStringify = JSON.stringify(qsJSON.qs);
    var qsParse = JSON.parse(qsStringify);
    var ansStringify = JSON.stringify(ansJSON.ans);
    var ansParse = JSON.parse(ansStringify);

    const normal = document.getElementById("normal");
    const shuffle = document.getElementById("shuffle");

    let qs = document.getElementById("questions");    
    let mstks = document.getElementById("mistakes"); 
    let usrInput = document.getElementById("usrInput");
    let submitButton = document.getElementById("submit")
    document.body.style.backgroundColor = "rgb(8, 8, 8)"; document.body.style.color = "white";

    var i=0; var x=0; var y=0;
    qs.innerHTML="Question:";
    mstks.innerText="Mistakes: "+x;

    let rndm = (y) => {var ans = Math.ceil(Math.random()*ansParse.length); return y=ans;};

    normal.onclick = () => {
        qs.innerText="Question: " +qsParse[i];
        if (normal.checked==true) {shuffle.checked=false};
        submitButton.addEventListener("click", () => {
            if (usrInput.value == ansParse[i]) {
                console.log("correct");
                qs.innerHTML=qsParse[i+++1];
            } else if (usrInput.value == "") {alert("input your answer");   
            } else if (usrInput != ansParse[i]) { mstks.innerText="Mistakes: " +(x+++1)};
        });
    };
/*
    shuffle.onclick = () => {
        let n = rndm(y);
        console.log(qsParse[n],ansParse[n],n);
        console.log(n)
        if (shuffle.checked==true)
        {
            qs.innerHTML=qsParse[n];
            console.log(ansParse[n]);
            if (shuffle.checked==true) {normal.checked=false};           
            submitButton.addEventListener("click", () => {
                if (usrInput.value == ansParse[n]) {
                    rndm(y);
                    qs.innerHTML=qsParse[n];
                } else if (usrInput.value == "") {alert("input your answer");   
                } else if (usrInput.value != ansParse[n]) {console.log(qsParse[n]);mstks.innerText="Mistakes: "+(x+++1)};
            });
        }
        console.log(qsParse[n])
    };
    */
    console.log("Website Online!");
});