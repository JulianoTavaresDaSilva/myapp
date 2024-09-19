import {View, StyleSheet, Text} from 'react-native';
import {Link} from 'expo-router'

export default function Page() {
    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.titulo}>Meu App</Text>
        </View>
        <View style={styles.section}>   
           <View>
            <Link style={styles.botao} href='/Banco'>Banco</Link>
            <Link style={styles.botao} href='/Cadastro'>Cadastro</Link>
            <Link style={styles.botao} href='/Calculadora'>Calculadora</Link>
            <Link style={styles.botao} href='/ListaTarefas'>Lista de tarefas</Link>
            <Link style={styles.botao} href='/Pokemon'>Pokemon</Link>
            <Link style={styles.botao} href='/SobreMim'>Sobre Mim</Link>
            <Link style={styles.botao} href='/SplashScreen'>Splash Screen</Link>
          </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f0f0f0', 
      flex: 1,
    },
    section: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f0f0', 
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
    botao: {
      backgroundColor: '#007bff', 
      color: '#fff',
      padding: 10, 
      borderRadius: 5,
      margin: 10,
    },
  });