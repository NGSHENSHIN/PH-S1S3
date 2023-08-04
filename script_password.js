function checkPassword() {
    var password = document.getElementById("password").value;

    // Replace 'your_password' with the actual password you want to use
    if (password === "ph-s1s3") {
        window.location.href = "https://drive.google.com/drive/mobile/folders/1nPsK86hsAwgr5qnciY0l7pzsByl36PpM";
    } else {
        var result = document.getElementById("result");
        result.style.display = "block";
        result.innerHTML = "Incorrect password. Please try again.";
    }
}
