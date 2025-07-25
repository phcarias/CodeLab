let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

document.getElementById("btn-cadastrar").addEventListener("click", () => {
    document.getElementById("form-cadastrar").classList.toggle("aparecerTelaCadastrar");
});

document.getElementById("form-cadastrar-form").addEventListener("submit", (e) => {
    e.preventDefault();
    
    const novoUsuario = {
        usuario: document.getElementById("novo-usuario").value,
        senha: document.getElementById("nova-senha").value
    };

    usuarios.push(novoUsuario);
    
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    
    alert("Cadastro OK");
    document.getElementById("form-cadastrar").classList.remove("aparecerTelaCadastrar");
    document.getElementById("novo-usuario").value = "";
    document.getElementById("nova-senha").value = "";
});

document.getElementById("form-login").addEventListener("submit", (e) => {
    e.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    const usuariosSalvos = JSON.parse(localStorage.getItem('usuarios')) || [];
    
    const usuarioValido = usuariosSalvos.find(u => u.usuario === usuario && u.senha === senha);

    if (usuarioValido) {
        alert("Acesso autorizado!");
        window.open("index.html", "_self");
    } else {
        alert("Usuário ou senha inválidos!");
    }
});