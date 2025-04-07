import React, { useState } from 'react'; // Importa as ferramentas necessárias do React:
import { View, TextInput, Button, StyleSheet } from 'react-native'; // Importa componentes visuais do React Native:
import Result from './Result'; // Importa o componente 'Result' de um arquivo chamado 'Result.js' (provavelmente mostra o valor do IMC).
import Classification from './Classification'; // Importa o componente 'Classification' de um arquivo chamado 'Classification.js' (provavelmente diz se está abaixo do peso, normal, etc.).
import IdealWeight from './IdealWeight'; // Importa o componente 'IdealWeight' de um arquivo chamado 'IdealWeight.js' (provavelmente calcula o peso ideal).

// Cria um componente funcional chamado 'FormIMC'. É como um pedacinho da tela que faz alguma coisa específica.
export default function FormIMC() {
  // Usamos o 'useState' para criar "variáveis" que podem mudar e fazer a tela se atualizar quando mudam:
  const [weight, setWeight] = useState(''); // 'weight' guarda o peso digitado e 'setWeight' é a função para mudar esse valor. Começa vazio ('').
  const [height, setHeight] = useState(''); // 'height' guarda a altura digitada e 'setHeight' é a função para mudar esse valor. Começa vazio ('').
  const [imc, setIMC] = useState(null);   // 'imc' guarda o resultado do cálculo do IMC e 'setIMC' é a função para mudar esse valor. Começa como 'null' (nada).

  // Esta função é chamada quando o botão 'Calcular IMC' é apertado.
  const calculateIMC = () => {
    // Primeiro, verifica se o peso e a altura foram digitados. Se não, ela não faz nada (o 'return' para a função).
    if (!weight || !height) return;
    // Converte a altura de centímetros para metros dividindo por 100. 'parseFloat' transforma o texto em número decimal.
    const heightInMeters = parseFloat(height) / 100;
    // Calcula o IMC usando a fórmula: peso (kg) / (altura (m) * altura (m)). 'parseFloat' garante que o peso seja um número.
    const imcValue = parseFloat(weight) / (heightInMeters * heightInMeters);
    // Atualiza o valor do 'imc' com o resultado do cálculo, arredondado para uma casa decimal usando 'toFixed(1)'.
    setIMC(imcValue.toFixed(1));
  };

  // Isso é o que o componente 'FormIMC' vai mostrar na tela.
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input} // Aplica os estilos definidos abaixo para esta caixa de texto.
        placeholder='Peso (kg)' // Texto que aparece dentro da caixa antes de o usuário digitar.
        keyboardType='numeric' // Diz ao teclado para mostrar apenas números.
        value={weight} // Conecta o valor digitado a nossa variável 'weight'.
        onChangeText={setWeight} // Quando o texto muda, essa função atualiza o valor de 'weight'.
      />
      <TextInput
        style={styles.input}
        placeholder='Altura (cm)'
        keyboardType='numeric'
        value={height}
        onChangeText={setHeight}
      />
      <Button title='Calcular IMC' onPress={calculateIMC} /> {/* Quando apertado, chama a função 'calculateIMC'. */}
      {/* Se o valor de 'imc' não for 'null' (ou seja, se o IMC já foi calculado), mostra o componente 'Result'. */}
      {imc && <Result imc={imc} />}
      {/* Se o IMC foi calculado, mostra o componente 'Classification' para dizer a categoria de peso. */}
      {imc && <Classification imc={imc} />}
      {/* Se o IMC foi calculado, mostra o componente 'IdealWeight' para mostrar o peso ideal (baseado na altura). */}
      {imc && <IdealWeight height={height} />}
    </View>
  );
}

// Aqui definimos os estilos para os componentes visuais.
const styles = StyleSheet.create({
  // Estilos para o container principal ('View').
  container: {
    width: '100%', // Faz o container ocupar toda a largura da tela.
    alignItems: 'center', // Centraliza os elementos dentro do container horizontalmente.
  },
  // Estilos para as caixas de texto ('TextInput').
  input: {
    width: '80%', // Faz a caixa de texto ocupar 80% da largura do container.
    padding: 10, // Adiciona um espaço interno de 10 unidades ao redor do texto.
    marginVertical: 10, // Adiciona uma margem vertical (espaço acima e abaixo) de 10 unidades.
    borderWidth: 1, // Adiciona uma borda de 1 unidade de largura.
    borderColor: 'black', // Define a cor da borda para preto.
    borderRadius: 5, // Arredonda as bordas da caixa de texto em 5 unidades.
    backgroundColor: '#e0f7fa', // Define a cor de fundo da caixa de texto para um azul claro.
  },
});