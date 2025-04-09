import React from 'react'; 
import { Text, StyleSheet } from 'react-native'; 

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
    result: {
        marginTop: 20,      
        fontSize: 18,       
        textAlign: 'center', 
        color: 'blue',      
        fontWeight: 'bold', 
        backgroundColor: 'lightyellow',
        padding: 10,        
        borderRadius: 10,   
        borderWidth: 2,     
    },
});

// Essa linha diz que esse bloquinho 'Result' pode ser usado em outras partes do seu aplicativo.
export default Result;