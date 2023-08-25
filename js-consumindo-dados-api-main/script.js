async function buscaEndereco(cep) {
    let mensagemErro = document.querySelector("#erro");
    mensagemErro.innerHTML = "";
    try {
        var consultarCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCEPConvertida = await consultarCEP.json();

        let endereco = document.querySelector("#endereco");
        let cidade = document.querySelector("#cidade");
        let estado = document.querySelector("#estado");
        let bairro = document.querySelector("#bairro");

        endereco.value = consultaCEPConvertida.logradouro;
        cidade.value = consultaCEPConvertida.localidade;
        estado.value = consultaCEPConvertida.uf;
        bairro.value = consultaCEPConvertida.bairro;

        if(consultaCEPConvertida.erro) {
            throw Error("CEP não existente!");
        }
    
        console.log(consultaCEPConvertida);

        return consultaCEPConvertida;
    } catch(erro) {
        let campoCep = document.querySelector("#cep");
        if(campoCep.value == "") {
            mensagemErro.innerHTML = "";
            endereco.value = "";
            cidade.value = "";
            estado.value = "";
            bairro.value = "";
        } else {
            mensagemErro.innerHTML = `<p>CEP inválido! Tente novamente.</p>`;
            mensagemErro.style.color = "red";
            mensagemErro.style.marginLeft = "5px";
            mensagemErro.style.padding = "5px";
        }
        
        console.log(erro);
    }
}

let cep = document.querySelector("#cep");
cep.addEventListener("focusout", () => buscaEndereco(cep.value));