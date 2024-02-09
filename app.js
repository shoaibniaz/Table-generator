function generateTAble() {

    let putvalue = document.getElementById("table").value;
    let times = document.getElementById("times").value
    let genvalue = document.getElementById("divResult");


    let i, temp;

    genvalue.innerHTML = ``
    for (let i = 1; i <= Number(times); i++) {
        genvalue.innerHTML += `${putvalue} X ${i} = ${putvalue * i} <br>`;
    }
}