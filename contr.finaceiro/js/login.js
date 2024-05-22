function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "admin" && senha == "admin"){
        window.alert('sucesso');
        location.href="home.html";  
    }else{
        window.alert('Usuario ou senha incorretos');
    }

    function registrar(){
        var login = document.getElementById('registra-se').value;
        location.href="registra-se.html"
    }



}