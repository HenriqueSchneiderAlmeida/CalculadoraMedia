const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./aprovado.png" alt="emoji festejando">';
const imgReprovado = '<img src="./reprovado.png" alt="emoji triste">';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="aprovado">Aprovado</span>';
const spanReprovado = '<span class="reprovado">Reprovado</span>';

let linhas ='';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinhas();
    atualizaTabela();
    atualizaMediaFinal();
});

function adicionaLinhas() {
    const notaCorte = document.getElementById('nota-de-corte');
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');
    
    if (atividades.includes(inputNomeAtividade.value)) {
        alert (`A atividade: ${inputNomeAtividade.value} já foi incluida`);
    } else {
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`; 
        linha += `<td>${inputNotaAtividade.value}</td>`;   
        linha += `<td>${inputNotaAtividade.value >= notaCorte.value ? imgAprovado : imgReprovado}</td>`; 
        linha += '</tr>';
        linhas+= linha;
    }
    inputNotaAtividade.value = '';
    inputNomeAtividade.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal(){
    const Media = CalculaMedia();
    const notaCorte = document.getElementById('nota-de-corte');

    document.getElementById('mediaFinal').innerHTML = Media.toFixed(3);
    document.getElementById('resultadoFinal').innerHTML = Media >= notaCorte.value ? spanAprovado : spanReprovado;
    document.getElementById("nota-de-corte").disabled = true;
}

function CalculaMedia (){
    const notaCorte = document.getElementById('nota-de-corte');
    let SomaNotas = 0;
    for (let i = 0; i < notas.length; i++){
        SomaNotas += notas[i];
    }
    return SomaNotas / notas.length;
}