import pegaArquivo from "./index.js";
import chalk from 'chalk'
import validaURL from "./http-validacao.js";
import leituraURL from "./leitura.js";

const caminho = process.argv;

async function processaTexto(caminhoDoArquivo){
    const resultado = await pegaArquivo(caminhoDoArquivo[2]);

        if(caminho[3] === "leitura"){
        console.log(chalk.bgYellow.black('Lista de Leitura:'), await leituraURL(resultado));
        }
        else if(caminho[3] === "validar"){
            console.log(chalk.bgYellow.black('Lista de Validados:'), await validaURL(resultado));
        }
        else{
            console.log (chalk.bgYellow.black('Lista de Links:'), resultado);
        }
}

processaTexto(caminho);