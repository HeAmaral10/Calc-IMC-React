import React from 'react'; // Importa a biblioteca React, que é essencial para construir interfaces de usuário com o React Native.
import { Text, View, StyleSheet } from 'react-native'; // Importa componentes específicos da biblioteca React Native:

export default function Classification({ imc }) {
  // Esta função, 'getClassification', recebe o valor de 'imc' como entrada.
  const getClassification = (imc) => {
    // Ela usa uma série de comandos 'if' para determinar a classificação de peso com base no valor do 'imc'.
    if (imc < 18.5) return 'Abaixo do peso'; // Se o IMC for menor que 18.5, retorna 'Abaixo do peso'.
    if (imc < 24.9) return 'Peso normal';   // Se o IMC for menor que 24.9 (mas não menor que 18.5), retorna 'Peso normal'.
    if (imc < 29.9) return 'Sobrepeso';     // Se o IMC for menor que 29.9 (mas não menor que 24.9), retorna 'Sobrepeso'.
    if (imc < 34.9) return 'Obesidade grau 1'; // Se o IMC for menor que 34.9 (mas não menor que 29.9), retorna 'Obesidade grau 1'.
    if (imc < 39.9) return 'Obesidade grau 2'; // Se o IMC for menor que 39.9 (mas não menor que 34.9), retorna 'Obesidade grau 2'.
    return 'Obesidade grau 3';              // Se nenhuma das condições acima for verdadeira (IMC é 39.9 ou maior), retorna 'Obesidade grau 3'.
  };

  // Este é o que o componente vai mostrar na tela.
  return (
    <View style={styles.container}>
      {
          //Ele chama a função 'getClassification' com o valor de 'imc' para obter o texto correto da classificação.
      <Text style={styles.text}>Classificação: {getClassification(imc)}</Text>
      }
    </View>
  );
}

// Esta seção define os estilos para os componentes que estão sendo usados neste arquivo.
const styles = StyleSheet.create({
  // Estilo para o container principal 'View'.
  container: {
    marginVertical: 10, // Adiciona uma margem vertical (espaço acima e abaixo) de 10 unidades.
  },
  // Estilo para o componente 'Text' que mostra a classificação.
  text: {
    fontSize: 18,       // Define o tamanho da fonte para 18.
    textAlign: 'center', // Centraliza o texto horizontalmente dentro do seu container.
    color: 'blue',      // Define a cor do texto para azul.
    fontWeight: 'bold', // Deixa o texto em negrito.
    backgroundColor: 'lightyellow', // Define a cor de fundo do texto para amarelo claro.
    padding: 10,        // Adiciona um preenchimento (espaço ao redor do texto) de 10 unidades dentro da caixa de texto.
    borderRadius: 10,   // Arredonda as bordas da caixa de texto em 10 unidades.
    borderWidth: 2,     // Adiciona uma borda ao redor da caixa de texto com uma largura de 2 unidades.
  },
});