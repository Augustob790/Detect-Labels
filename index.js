//Aplicação Node que Detectar Rotulos de uma Imagem usando a Google Api Vision
//Para Poder Executar essa Aplicação e necessario ter uma chave de acesso do Google Vision
//Ter Instalado o Node.js, Npm e de preferencia um editor de codigo
//Ter instalado como Dependencia Google Cloud Vision, Express e Nodemon

const express = require ('express')
const app = express();

    // Importando a Google Cloud client library
    const vision = require('@google-cloud/vision');
  
    // Criando um cliente
    const client = new vision.ImageAnnotatorClient({
        //Chave de acesso da api
        keyFilename: 'key.json'
    });
  
    //cliente
    client
        //Componente da Api que detecta rotulos da imagem e classficia todos com o Label Annoations
        .labelDetection('./image/carro.jpg')
        .then(results => {
            const labels = results[0].labelAnnotations;

            
            //Exibindo os rotulos capturadas da imagem 
            //usando o componente description da Api Vision
            console.log('Rotulos Encontrados: \n');
            labels.forEach(label => console.log(label.description));

        })
        .catch(err => {
            //Mensagem a exibir caso não haja detecção
            console.error('ERROR:' , err);
        });
    
  
//Executando o servidor na porta 5000 no IP 127.0.0.1
  app.listen(5000, '127.0.0.1', ()=> console.log('Server Running'))