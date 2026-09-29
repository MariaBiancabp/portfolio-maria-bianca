const anoAtual = new Date().getFullYear();

document.getElementById('ano').textContent = `© ${anoAtual}`;


const botaoAbrirModal = document.getElementById('abrir-modal-email');
const modalEmail = document.getElementById('modal-email');
const botaoFecharModal = document.getElementById('fechar-modal');
const botaoCopiarEmail = document.getElementById('copiar-email');
const mensagemCopia = document.getElementById('mensagem-copia');

const email = 'Bianca.pecanha@yahoo.com';


botaoAbrirModal.addEventListener('click', function (event) {
    event.preventDefault();

    modalEmail.classList.add('ativo');
});


botaoFecharModal.addEventListener('click', function () {
    modalEmail.classList.remove('ativo');
});


modalEmail.addEventListener('click', function (event) {
    if (event.target === modalEmail) {
        modalEmail.classList.remove('ativo');
    }
});


document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        modalEmail.classList.remove('ativo');
    }
});


botaoCopiarEmail.addEventListener('click', async function () {
    try {
        await navigator.clipboard.writeText(email);

        mensagemCopia.textContent = 'E-mail copiado ✓';

        setTimeout(() => {
            mensagemCopia.textContent = '';
        }, 2000);

    } catch (erro) {
        mensagemCopia.textContent = 'Não foi possível copiar o e-mail.';
    }
});