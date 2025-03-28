function isScientificNumber(value) {
    const regex = /^[+-]?[0-9]+(\.[0-9]+)?[eE][+-]?[0-9]+$/;
    return regex.test(value);
}

function checkScientificNumber() {
    const input = document.getElementById('numberInput').value;
    const result = document.getElementById('result');

    if (isScientificNumber(input)) {
        result.textContent = 'Valid Scientific Number';
        result.style.color = 'green';
    } else {
        result.textContent = 'Not a Scientific Number';
        result.style.color = 'red';
    }
}

function handleMenu(option) {
    switch(option) {
        case 'file':
            alert('File: Save, Save As');
            break;
        case 'edit':
            alert('Edit: Copy, Paste');
            break;
        case 'run':
            checkScientificNumber();
            break;
        case 'about':
            alert('About Us: Maverick Yort Mamanua (231011060061)');
            break;
    }
}
console.log("Script terhubung!");
