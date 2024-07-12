function percentage() {
    let inp1 = parseInt(document.getElementById("label-1").value);
    let inp2 = parseInt(document.getElementById("label-2").value);
    let inp3 = parseInt(document.getElementById("label-3").value);
    let inp4 = parseInt(document.getElementById("label-4").value);
    let inp5 = parseInt(document.getElementById("label-5").value);
    let inp6 = parseInt(document.getElementById("label-6").value);
    let inp7 = parseInt(document.getElementById("label-7").value);
    if (isNaN(inp1) || isNaN(inp2) || isNaN(inp3) || isNaN(inp4) || isNaN(inp5) || isNaN(inp6) || isNaN(inp7)) {
        alert('You forget Enter valid marks any subject ');
    }
    else if (inp1 > 50 || inp2 > 50 || inp3 > 50 || inp4 > 50 || inp5 > 50 || inp6 > 50 || inp7 > 50) {
        alert('Enter the valid marks of related Subject');
    }
    else {
        let total = (inp1 + inp2 + inp3 + inp4 + inp5 + inp6 + inp7);
        document.getElementById("total").innerHTML = (total);
        let percent = (total / 350) * 100;
        result = percent.toPrecision(4);
        document.getElementById("percent").innerHTML = result;
    }
    if (isNaN(inp1) || isNaN(inp2) || isNaN(inp3) || isNaN(inp4) || isNaN(inp5) || isNaN(inp6) || isNaN(inp7)) {
        let remarks = document.getElementById('Remarks').innerHTML = ('');
    }
    else if (inp1 < 18 || inp2 < 18 || inp3 < 18 || inp4 < 18 || inp5 < 18 || inp6 < 18 || inp7 < 18) {
        let remarks = document.getElementById('Remarks').innerHTML = ('Fail');
    }
    else {
        let remarks = document.getElementById('Remarks').innerHTML = ('Pass');
    }
}
