function buat_login() {
   
    var done = 0;
    var username = document.login.username.value;
    username = username.toLowerCase();
    var password = document.login.password.value;
    password = password.toLowerCase();
    if (username == "sosa" && password == "sosa") { 
        
        alert("selamat anda berhasil "); 
    } else if (done==0) { alert("Invalid login!");       

}