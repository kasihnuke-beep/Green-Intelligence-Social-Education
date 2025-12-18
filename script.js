function login() {
    let user = document.getElementById("username").value;
    if (user === "") {
        alert("Masukkan username!");
    } else {
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("dashboard").style.display = "block";
    }
}

function analyze() {
    let resultDiv = document.getElementById("result");

    // Simulasi AI
    let classifications = [
        "Lingkungan Bersih 🌿",
        "Lingkungan Tercemar 🗑️",
        "Lingkungan Hijau 🌳"
    ];

    let randomResult = classifications[Math.floor(Math.random() * classifications.length)];

    let education = "";
    if (randomResult.includes("Tercemar")) {
        education = "Edukasi: Kurangi sampah, lakukan daur ulang, dan kerja bakti.";
    } else {
        education = "Edukasi: Pertahankan kebersihan dan kelestarian lingkungan.";
    }

    resultDiv.innerHTML = `
        <h3>Hasil Klasifikasi</h3>
        <p><b>${randomResult}</b></p>
        <p>${education}</p>
    `;
}

function logout() {
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("loginPage").style.display = "block";
}
