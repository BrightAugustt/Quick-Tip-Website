function formatmoney(value) {
    value = Math.ceil(value * 100) / 100;
    value = value.toFixed(2);
    return "$" + value;
}

function formatsplit(value) {
    if (value === "1") return value + "Person";
    return value + "People";
}

function update() {
    let bill = Number(document.getElementById("yourbill").value);
    let tipPercent = document.getElementById("tipInput").value;
    let split = document.getElementById("splitInput").value;

    let tipvalue = bill * (tipPercent / 100);
    let tipEach = tipvalue / split;
    let newBillEach = (bill + tipvalue) / split;


    document.getElementById("tipPercent").innerHTML = tipPercent + "%";
    document.getElementById("tipvalue").innerHTML = formatmoney(tipvalue);
    document.getElementById("totalwithtip").innerHTML = formatmoney(bill + tipvalue);
    document.getElementById("splitvalue").innerHTML = formatsplit(split);
    document.getElementById("billEach").innerHTML = formatmoney(newBillEach);
    document.getElementById("tipEach").innerHTML = formatmoney(tipEach);
}

let container = document.getElementById("container");
container.addEventListener("input", update);