import React from 'react'; // Isso aqui é como dar um "oi" para a biblioteca React, que ajuda a construir as coisas que aparecem na tela do seu aplicativo.
import { Text, StyleSheet } from 'react-native'; // Aqui a gente pega algumas ferramentas prontas do React Native:

// Essa parte cria um componente chamado 'Result'. Pensa nele como um bloquinho de montar que vai mostrar o resultado do seu IMC.
// Ele recebe uma informação importante chamada 'imc' (que é o valor do seu Índice de Massa Corporal).
const Result = ({ imc }) => {
    // Essa parte diz o que vai aparecer na tela quando esse bloquinho 'Result' for usado.
    return (
        <Text style={styles.result}>Seu IMC é: {imc}</Text>
    );
};

// Essa parte é onde a gente define os estilos, como cores, tamanhos e bordas, para deixar o resultado bonito.
const styles = StyleSheet.create({
    // Estilo para o texto que mostra o resultado do IMC.
    result: {
        marginTop: 20,      // Isso cria um espaço em cima do resultado, para não ficar grudado em outras coisas.
        fontSize: 18,       // Define o tamanho da letra para 18 (um tamanho bom para ler).
        textAlign: 'center', // Centraliza o texto na tela.
        color: 'blue',      // Deixa a cor do texto azul.
        fontWeight: 'bold', // Deixa a letra mais grossa, em negrito.
        backgroundColor: 'lightyellow', // Pinta o fundo do texto de amarelo clarinho.
        padding: 10,        // Cria um espaço dentro da caixa do texto, para não ficar colado nas bordas.
        borderRadius: 10,   // Arredonda os cantinhos da caixa do texto.
        borderWidth: 2,     // Desenha uma linha ao redor da caixa do texto com uma largura de 2.
    },
});

// Essa linha diz que esse bloquinho 'Result' pode ser usado em outras partes do seu aplicativo.
export default Result;