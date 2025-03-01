// Array que armazena os nomes dos amigos

const amigos = [];
let sorteioFinalizado = false;

// Função que adiciona um amigo à lista

function adicionarAmigo() {
    if (sorteioFinalizado) {
        alert('O sorteio já foi finalizado. Não é possível adicionar mais amigos.');
        return;
    }

    const nomeInput = document.getElementById('amigo').value.trim().toLowerCase();

    if (nomeInput !== '') {
        if (amigos.includes(nomeInput)) {
            alert('Esse nome já foi incluído, inclua outro nome ou apelido.');
            return;
        }
        amigos.push(nomeInput);

        const novoItem = document.createElement('li');
        novoItem.textContent = nomeInput;

        const listaAmigos = document.getElementById('listaAmigos');
        listaAmigos.appendChild(novoItem);

        document.getElementById('amigo').value = '';
        document.getElementById('amigo').focus(); // Focar no input após adicionar
    } else {
        alert('Por favor, digite um nome!');
    }
}

// Usando a tecla "Enter" para acrescentar amigos à lista

document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        adicionarAmigo();
    }
});

// Função que sorteia amigo secreto

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione amigos antes de sortear!');
        return;
    }
    if (sorteioFinalizado) {
        alert('Você já sorteou! Reinicie o sorteio para sortear novamente.');
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>Você sorteou: ${amigoSorteado}</li>`;

// O codigo foi escrito de modo que permita apenas um sorteio por lista. Caso seja acionada a opção de reinicio do sorteio, esta função evita que o mesmo nome seja escolhido varias vezes

    amigos.splice(indiceSorteado, 1);
    sorteioFinalizado = true;
}

// Função que reinicia o sorteio

function reiniciarSorteio() {
    amigos.length = 0;
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
    sorteioFinalizado = false;
    alert('O sorteio foi reiniciado! Você pode adicionar novos amigos.');
}