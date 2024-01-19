function clearScreen() {
    document.getElementById("result").value = "";
}
function display(value) {
    document.getElementById("result").value += value;
}
function calculate() {
    try {
        document.getElementById('result').value = eval(document.getElementById('result').value);
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}
function deleteLast() {
    var r = document.getElementById('result').value;
    document.getElementById('result').value = r.slice(0, -1);
}