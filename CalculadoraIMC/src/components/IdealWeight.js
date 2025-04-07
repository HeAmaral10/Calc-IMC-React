import React from 'react'; // Isso é como dar um "oi" para a biblioteca React, que ajuda a construir as telas do aplicativo.
import { Text, View, StyleSheet } from 'react-native'; // Aqui pegamos algumas ferramentas prontas do React Native:

export default function IdealWeight({ height }) {
  // Aqui a gente pega a altura que você digitou (que está em centímetros) e divide por 100 para transformar em metros.
  const heightInMeters = parseFloat(height) / 100;
  // Essa linha calcula o peso mínimo ideal. A gente usa um número mágico (18.5) que os médicos usam e multiplica pela altura em metros duas vezes. O '.toFixed(1)' deixa o resultado com só um número depois da vírgula.
  const minWeight = (18.5 * heightInMeters * heightInMeters).toFixed(1);
  // Essa linha faz a mesma coisa, mas para o peso máximo ideal. O número mágico aqui é 24.9.
  const maxWeight = (24.9 * heightInMeters * heightInMeters).toFixed(1);

  // Essa parte diz o que vai aparecer na tela quando esse bloquinho 'IdealWeight' for usado.
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Peso ideal: {minWeight} kg - {maxWeight} kg</Text>
    </View>
  );
}

// Essa parte é onde a gente define os estilos, como cores, tamanhos e bordas, para deixar o texto bonito.
const styles = StyleSheet.create({
  // Estilo para a caixa invisível ('View').
  container: {
    marginVertical: 10, // Isso cria um espaço em cima e embaixo da caixa, para não ficar grudado em outras coisas.
  },
  // Estilo para o texto ('Text').
  text: {
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