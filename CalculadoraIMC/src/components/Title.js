import { Text, StyleSheet } from 'react-native';

const Title = () => { // Cria um componente chamado 'Title', que é como um pedacinho da tela.
    return (
        // O 'Text' é o que vai mostrar o texto na tela.
        <Text style={styles.title}>Calculadora de IMC</Text>
    );
};

// Cria um objeto para guardar os estilos (aparência) do texto.
const styles = StyleSheet.create({
    title: { 
        fontSize: 32, 
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 24, 
    },
});

export default Title; // Diz que esse componente 'Title' pode ser usado em outras partes do aplicativo.