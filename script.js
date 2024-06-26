function checkKhodam() {
    const name = document.getElementById('nameInput');
    const resultDiv = document.getElementById('result');

    if (name === "") {
        resultDiv.innerHTML = "<P style='color: red;'>Nama tidak boleh kosong</P>";
        return;
    }

    const khodamNames = [
        "KAI ZEUS",
        "PRINCES KALA",
        "TUYUL MULET",
        "KOBOY RUNGKAD",
        "AMAT RUNGKAD",
        "POCONG PINCANG",
        "BANTENG MERAH",
        "CINA BAIK",
        "NAGA CINA"
    ];

    const khodamPresent = Math.random() > 0.5;

    if (khodamPresent) {
        const randomIndex = [Math.floor(Math.random() * khodamNames.length)];
        const khodamTerpilih = khodamNames[randomIndex]
        resultDiv.innerHTML =`<p style='color: green;'> Anda memiliki khodam ${khodamTerpilih} didalam diri anda  </p>`;
    } else {
        resultDiv.innerHTML = `<p style='color: red;'> maaf, nyawa balum MENDEPO makanya kdd bisi khodam. </p>`;
    }
}