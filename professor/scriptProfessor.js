const alunosDB = {
    "Pedro": {
        idade: 22,
        telefone: "(11) 98888-7777",
        fonePais: "(11) 96666-5555",
        nivel: "Iniciante",
        status: "Ativo",
        horarios: "Segunda 14:00, Quinta 14:00",
        historico: [
            { data: "13/04", presenca: "Presente", conteudo: "Escala Pentatônica Am" },
            { data: "06/04", presenca: "Presente", conteudo: "Acordes Maiores (C, G, D)" }
        ],
        documentos: ["Apostila_Basica.pdf", "Cifra_Wish_You_Were_Here.pdf"]
    },
    "Ana": {
        idade: 16,
        telefone: "(11) 99999-1111",
        fonePais: "(11) 97777-2222",
        nivel: "Intermediário",
        status: "Ativo",
        horarios: "Terça 16:00",
        historico: [
            { data: "14/04", presenca: "Presente", conteudo: "Técnica de Bends e Vibrato" }
        ],
        documentos: ["Solo_Hotel_California.pdf"]
    }
};

function mudarAba(id, elemento) {
    document.querySelectorAll('.aba-conteudo').forEach(s => s.style.display = 'none');
    document.getElementById(id).style.display = 'block';

    document.querySelectorAll('.sidebarNav a').forEach(a => {
        a.classList.remove('ativo');
        a.style.background = ''; 
    });
    elemento.classList.add('ativo');
}

function abrirPerfil(nome) {
    const dados = alunosDB[nome];
    if (!dados) return;

    document.getElementById('p-nome').innerText = "Perfil: " + nome;
    document.getElementById('p-idade').innerText = dados.idade || "N/A";
    document.getElementById('p-nivel').innerText = dados.nivel;
    document.getElementById('p-status').innerText = dados.status;
    document.getElementById('p-tel').innerText = dados.telefone || "Não cadastrado";
    document.getElementById('p-tel-pais').innerText = dados.fonePais || "Não cadastrado";
    document.getElementById('p-horarios').innerText = dados.horarios;

    const histDiv = document.getElementById('lista-historico');
    histDiv.innerHTML = dados.historico.map(h => `
                <div class="historico-item">
                    <span class="badge-presenca">${h.presenca}</span>
                    <strong>${h.data}</strong>: ${h.conteudo}
                </div>
            `).join('');

    const docsDiv = document.getElementById('lista-docs');
    docsDiv.innerHTML = dados.documentos.map(d => `
                <div class="doc-item">📄 ${d}</div>
            `).join('');

    document.getElementById('modalPerfil').classList.add('ativo');
}

function fecharModal() {
    document.getElementById('modalPerfil').classList.remove('ativo');
}

function iniciarEdicao() {}

function switchTab(tabId, btn) {
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    btn.classList.add('active');
}

function abrirModalCadastro() {
    document.getElementById('modalCadastro').classList.add('ativo');
}

function fecharModalCadastro() {
    document.getElementById('modalCadastro').classList.remove('ativo');
}

function salvarAluno(event) {
    event.preventDefault();
    const nomeDigitado = document.getElementById('cad-nome').value;

    event.target.reset();
    fecharModalCadastro();
}

function abrirModalNovaAula() {
    document.getElementById('modalNovaAula').classList.add('ativo');
}

function fecharModalNovaAula() {
    document.getElementById('modalNovaAula').classList.remove('ativo');
}

function salvarNovaAula(event) {
    event.preventDefault();

    const aluno = document.getElementById('aula-aluno').value;
    const data = document.getElementById('aula-data').value;
    const hora = document.getElementById('aula-hora').value;

    const selectRecorrencia = document.getElementById('aula-recorrencia');
    const textoRecorrencia = selectRecorrencia.options[selectRecorrencia.selectedIndex].text;

    const dataFormatada = data.split('-').reverse().join('/');

    event.target.reset();
    fecharModalNovaAula();
}