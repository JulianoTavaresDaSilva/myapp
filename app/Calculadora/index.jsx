import React from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';


const App = () => {
  const [number, onChangeText] = React.useState('')
  const [number2, onChangeText2] = React.useState('')
  const [resultado, setResultado] = React.useState('')


  const soma = function() {
    setResultado(Number(number) + Number(number2))
    return number
  }
  const subtração = function() {
    setResultado(Number(number) - Number(number2))
    return number
  }
  const multiplicação = function() {
    setResultado(Number(number) * Number(number2))
    return number
  }
  const divisão = function() {
    setResultado(Number(number) / Number(number2))
    return number
  }
 


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Calculadora</Text>
      </View>
      <View style={styles.section}>
      <TextInput
        onChangeText={onChangeText}
        value={number}
        placeholder='Insira um número aqui'
        keyboardType='numeric'
      />
      <TextInput
        onChangeText={onChangeText2}
        value={number2}
        placeholder='Insira outro número aqui'
        keyboardType='numeric'
      />
      </View>
      <View style={styles.section2}>
      <Button
        title='+'
        onPress={() => soma()}
      />
      <Button
        title='-'
        onPress={() => subtração()}
      />
      <Button
        title='*'
        onPress={() => multiplicação()}
      />
      <Button
        title=':'
        onPress={() => divisão()}
      />
     
      <Text>o valor é {resultado} </Text>


    </View>
    </View>
  );
};


const styles = StyleSheet.create({
container: {
  backgroundColor: '#f0f0f0',
  flex: 1,
},
header: {
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '4%',
  height: 70,
  backgroundColor: '#007bff',
},
titulo: {
  fontSize: '200%',
  fontWeight: 'bold',
  color: 'white',
},
section: {
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '2%',
},
section2: {
  justifyContent: 'center',
  alignItems: 'center',
},
  text: {
  fontSize: 20,
  textAlign: 'center',
  margin: 10,
},
});


export default App;