let perfilAtual = 'aluno';

function selecionarPerfil(perfil) {
    perfilAtual = perfil;

    document.getElementById('btn-aluno').classList.remove('ativo');
    document.getElementById('btn-professor').classList.remove('ativo');

    document.getElementById('btn-' + perfil).classList.add('ativo');
}

function fazerLogin() {
    if (perfilAtual === 'professor') {
        window.location.href = './professor/dashboardProfessor.html';
    } else {
        window.location.href = './aluno/dashboardAluno.html';
    }
}