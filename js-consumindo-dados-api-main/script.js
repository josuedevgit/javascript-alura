async function buscaEndereco(cep) {
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
        console.log(erro);
    }
}

let cep = document.querySelector("#cep");
cep.addEventListener("focusout", () => buscaEndereco(cep.value));