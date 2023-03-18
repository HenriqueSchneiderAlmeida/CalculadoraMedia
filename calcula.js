const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./aprovado.png" alt="emoji festejando">';
const imgReprovado = '<img src="./reprovado.png" alt="emoji triste">';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="aprovado">Aprovado</span>';
const spanReprovado = '<span class="reprovado">Reprovado</span>';
const notaCorte = parseFloat(prompt("Digite a nota de corte:"))

document.getElementById('Nota-Corte').innerHTML = `A nota de corte é: ${notaCorte}`;

let linhas ='';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinhas();
    atualizaTabela();
    atualizaMediaFinal();
});

function adicionaLinhas() {
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
        linha += `<td>${inputNotaAtividade.value >= notaCorte ? imgAprovado : imgReprovado}</td>`;   
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

   document.getElementById('mediaFinal').innerHTML = Media.toFixed(2);
   document.getElementById('resultadoFinal').innerHTML = Media >= notaCorte ? spanAprovado : spanReprovado;
}

function CalculaMedia (){
    let SomaNotas = 0;
    for (let i = 0; i < notas.length; i++){
        SomaNotas += notas[i];
    }
    return SomaNotas / notas.length;
}