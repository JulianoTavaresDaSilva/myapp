import React, { useState } from 'react';
import { View, Text, Pressable, TextInput, StyleSheet, SafeAreaView } from 'react-native';

export default SignUp = () => {
    const [email, setEmail] = useState('')
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')
    
    const registrarUsuário = function () {
        if (!nome || !email || !senha){
        console.log(nome, email, senha)
        return
    }

    const resposta = fetch('https://taskhub-s37f.onrender.com/auth/signup',{
        method:'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify({name: nome, email: email, password: senha})

    })
        
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.titulo}>Área de Cadastro</Text>
            </View>
            <View>
                <Text style={styles.subtitulo}>Registre-se</Text>
            </View>
            <View>
                <TextInput
                    style={styles.input}
                    onChangeText= {(text) => setEmail(text)}
                    value={email}
                    placeholder='Insira seu Email'

                />
                <TextInput
                    style={styles.input}
                    onChangeText= {(text) => setNome(text)}
                    value={nome}
                    placeholder='Insira seu Nome'

                />
                <TextInput
                    style={styles.input}
                    onChangeText= {(text) => setSenha(text)}
                    value={senha}
                    placeholder='Insira sua Senha'
                    secureTextEntry={true}
                />
                
            </View>
            <View>
                <Pressable onPress={registrarUsuário}>
                    <Text style={styles.texto}>Cadastrar</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}  

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
    input:{
        width:'60%',
        height: 40,
        marginBottom: 15,
        margin:'auto',
        backgroundColor: '#007bff',
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 15,
    },
    titulo:{
        fontSize: '200%',
        fontWeight: 'bold',
        color: 'white',
    },
    subtitulo:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 20,
    },
    texto:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
    }
})