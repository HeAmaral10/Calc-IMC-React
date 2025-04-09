import React from 'react'; 
import { Text, View, StyleSheet } from 'react-native'; 

export default function IdealWeight({ height }) {
  const heightInMeters = parseFloat(height) / 100;
  const minWeight = (18.5 * heightInMeters * heightInMeters).toFixed(1);
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
  container: {
    marginVertical: 10,
  },
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