const openModal = () => {
    document.getElementById('modal').classList.add('active');
}

const closeModal = () => {
    document.getElementById('modal').classList.remove('active');
}

const salvarDados = () => {
    // Obter os valores dos campos do formulário dentro do modal
    const nome = document.querySelector('.modal-field[placeholder="Nome"]').value;
    const email = document.querySelector('.modal-field[placeholder="E-mail"]').value;
    const celular = document.querySelector('.modal-field[placeholder="Celular"]').value;
    const cidade = document.querySelector('.modal-field[placeholder="Cidade"]').value;

    // Armazenar os valores em algum lugar (por exemplo, em um objeto)
    const dados = {
        nome: nome,
        email: email,
        celular: celular,
        cidade: cidade
    };

    // Você pode fazer algo com esses dados aqui, como enviá-los para o servidor

    // Fechar o modal após salvar os dados
    closeModal();
}

document.getElementById('cadastrarUsuario').addEventListener('click', openModal);
document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('editar').addEventListener('click', closeModal);
document.getElementById('excluir').addEventListener('click', closeModal);

document.querySelector('.modal-footer .button.green').addEventListener('click', salvarDados);
document.querySelector('.modal-footer .button.blue').addEventListener('click', closeModal);

//clicar no botão
//abrir o modal
//setar os campos com os valores do usuário do localStorage
//trocar o botão salvar para atualizar
//salvar as informações no localStorage
// fechar o modal
//recarregar a página

//LÓGICA DE CADASTRO
//abrir modal
//inserir informações
//clicar no botão salvar
//