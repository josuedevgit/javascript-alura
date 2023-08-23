async function buscaEndereco() {
    try {
        var consultarCEP = await fetch("https://viacep.com.br/ws/01001250/json/");
        var consultaCEPConvertida = await consultarCEP.json();

        if(consultaCEPConvertida.erro) {
            throw Error("CEP não existente!");
        }
    
        console.log(consultaCEPConvertida);
    } catch(erro) {
        console.log(erro);
    }
}

buscaEndereco();