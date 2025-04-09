import React, { useState } from 'react'; 
import { View, TextInput, Button, StyleSheet } from 'react-native';
import Result from './Result';
import Classification from './Classification'; 
import IdealWeight from './IdealWeight'; 

// Cria um componente funcional chamado 'FormIMC'. É como um pedacinho da tela que faz alguma coisa específica.
export default function FormIMC() {
  // Usamos o 'useState' para criar "variáveis" que podem mudar e fazer a tela se atualizar quando mudam:
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [imc, setIMC] = useState(null);   

  // Esta função é chamada quando o botão 'Calcular IMC' é apertado.
  const calculateIMC = () => {
    if (!weight || !height) return;
    const heightInMeters = parseFloat(height) / 100;
    const imcValue = parseFloat(weight) / (heightInMeters * heightInMeters);
    setIMC(imcValue.toFixed(1));
  };

  // Isso é o que o componente 'FormIMC' vai mostrar na tela.
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input} 
        placeholder='Peso (kg)' 
        keyboardType='numeric'
        value={weight}
        onChangeText={setWeight} 
      />
      <TextInput
        style={styles.input}
        placeholder='Altura (cm)'
        keyboardType='numeric'
        value={height}
        onChangeText={setHeight}
      />
      {/*Botão para acionar a função de calcular imc*/}
      <Button title='Calcular IMC' onPress={calculateIMC} /> 
      {imc && <Result imc={imc} />}
      {imc && <Classification imc={imc} />}
      {imc && <IdealWeight height={height} />}
    </View>
  );
}

// Aqui definimos os estilos para os componentes visuais.
const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  input: {
    width: '80%', 
    padding: 10, 
    marginVertical: 10,
    borderWidth: 1, 
    borderColor: 'black',
    borderRadius: 5, 
    backgroundColor: '#e0f7fa',
}});