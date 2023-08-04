function checkPassword() {
    var password = document.getElementById("password").value;

    // Replace 'your_password' with the actual password you want to use
    if (password === "123") {
        window.location.href = "https://drive.google.com/drive/folders/1Voq4Uvc4UVvaFXbHpuZDPo-A_oaBadJ_?usp=sharing";
    } else {
        var result = document.getElementById("result");
        result.style.display = "block";
        result.innerHTML = "Incorrect password. Please try again.";
    }
}
