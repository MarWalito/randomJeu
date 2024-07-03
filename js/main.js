function compareInputs() {
    const input1 = parseFloat(document.getElementById('input1').value);
    const input2 = parseFloat(document.getElementById('input2').value);
    if (isNaN(input1) || isNaN(input2)) {
        document.getElementById('result').innerText = 'Veuillez entrer des nombres valides.';
        return;
    }
    const randomNum = Math.floor(Math.random() * 501);
    const diff1 = Math.abs(randomNum - input1);
    const diff2 = Math.abs(randomNum - input2);

    let resultText = `Nombre aléatoire: ${randomNum.toFixed(0)}\n`;
    if (diff1 < diff2) {
        resultText += 'Théo est plus proche. \n🎆 C\'est donc Geran qui paie !! 🎆';
    } else if (diff2 < diff1) {
        resultText += 'Geran est plus proche. \n🎆 C\'est donc Théo qui paie !! 🎆';
    } else {
        resultText += 'Les deux saisies sont à égale distance.';
    }

    document.getElementById('result').innerText = resultText;
    document.getElementById('gif').style.display = 'block';
}