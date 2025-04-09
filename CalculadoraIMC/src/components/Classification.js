import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Classification({ imc }) {
  // Esta função, 'getClassification', recebe o valor de 'imc' como entrada.
  const getClassification = (imc) => {
    if (imc < 18.5) return 'Abaixo do peso'; 
    if (imc < 24.9) return 'Peso normal';   
    if (imc < 29.9) return 'Sobrepeso';     
    if (imc < 34.9) return 'Obesidade grau 1'; 
    if (imc < 39.9) return 'Obesidade grau 2'; 
    return 'Obesidade grau 3';              
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
    marginVertical: 10
  },
  // Estilo para o componente 'Text' que mostra a classificação.
  text: {
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