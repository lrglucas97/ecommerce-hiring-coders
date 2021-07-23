const itens = [
    {
        codigo: 0,
        nome: 'Camiseta Sport - Beast 82',
        img: 'assets/82.jpg',
        qtd: 0
    },
    {
        codigo: 1,
        nome: 'Camiseta Sport - Mind 83',
        img: 'assets/83.jpg',
        qtd: 0
    },
    {
        codigo: 2,
        nome: 'Camiseta Sport - Slave 84',
        img: 'assets/84.jpg',
        qtd: 0
    },
    {
        codigo: 3,
        nome: 'Camiseta Sport - Time 86',
        img: 'assets/86.jpg',
        qtd: 0
    },
    {
        codigo: 4,
        nome: 'Camiseta Sport - Seventh 88',
        img: 'assets/88.jpg',
        qtd: 0
    },
    {
        codigo: 5,
        nome: 'Camiseta Sport - Prayer 90',
        img: 'assets/90.jpg',
        qtd: 0
    }
]

iniciarLoja = () => {
    var listaProdutos = document.getElementById('vitrine');
    itens.map((val) => {
        listaProdutos.innerHTML += `
                <div class="produto-camisa">
                <img src="`+ val.img + `"/>
                <p>`+ val.nome + `</p>
                <a key="`+ val.codigo + `" href="#">Adicionar ao carrinho</a>
                </div>`
    })
}

iniciarLoja();

atualizarCarrinho = () => {
    var listaCarrinho = document.getElementById('carrinho');
    listaCarrinho.innerHTML = "";
    itens.map((val) => {
        if (val.qtd > 0) {
            localStorage.setItem(val.nome, val.qtd)
            listaCarrinho.innerHTML += `
        <div id="infoCarrinho">
        <p style="float: left;">`+ val.nome + `</p>
        <p style="float: right;">`+ val.qtd + `</p>
        <div style="clear: both"></div>
        
        <hr>
        </div>

        `;
        }

    })
}

var links = document.getElementsByTagName('a');
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function () {
        let key = this.getAttribute('key');
        itens[key].qtd++;
        atualizarCarrinho();


        return false;
    })
}

const form = document.getElementById('conteudoform')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let dados = {
        nome,
        email,
        telefone,
    }
    let converterDados = JSON.stringify(dados);
    localStorage.setItem('lead', converterDados);

    let conteudoform = document.getElementById('conteudoform');

    let loading = `<p><img src="assets/loader.gif" alt="Carregando..." align="middle"> </p>`

    let loaded = `<p>Dados enviados!</p>`

    conteudoform.innerHTML = loading


    setTimeout(() => {
        conteudoform.innerHTML = loaded
    }, 3000)

})

