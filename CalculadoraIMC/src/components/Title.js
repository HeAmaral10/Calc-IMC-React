import { Text, StyleSheet } from 'react-native'; // Importa as ferramentas para mostrar texto e criar estilos visuais.

const Title = () => { // Cria um componente chamado 'Title', que é como um pedacinho da tela.
    return (
        // O 'Text' é o que vai mostrar o texto na tela.
        <Text style={styles.title}>Calculadora de IMC</Text>
    );
};

const styles = StyleSheet.create({ // Cria um objeto para guardar os estilos (aparência) do texto.
    title: { // Estilos específicos para o texto do título.
        fontSize: 32, // Define o tamanho da letra para 32 (bem grandão para ser um título!).
        fontWeight: 'bold', // Deixa a letra mais grossa, em negrito, para destacar.
        textAlign: 'center', // Centraliza o título na tela.
        marginBottom: 24, // Coloca um espaço de 24 unidades embaixo do título, para não ficar grudado em outras coisas.
    },
});

export default Title; // Diz que esse componente 'Title' pode ser usado em outras partes do aplicativo.