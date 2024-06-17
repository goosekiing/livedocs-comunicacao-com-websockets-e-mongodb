const socket = io();

function emitirCadastrarUsuario(dados) {
  socket.emit("cadastrar-usuario", dados);
}

socket.on("cadastro_sucesso", () => alert("Cadastro realizado com sucesso"));
socket.on("cadastro_erro", () => alert("ERRO! Cadastro não realizado"));
socket.on("usuario_ja_existente", () => alert("ATENÇÃO! Nome de usuario já cadastrado no sistema!"));

export { emitirCadastrarUsuario };
