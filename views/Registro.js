import React, {useState, useEffect} from 'react';
import { KeyboardAvoidingView, TextInput, Text, Image, View, TouchableOpacity, Platform, Button, StatusBar} from 'react-native';
import { css } from '../assets/css/RegistroStyle';
import { useAuth } from '../auth/contexto/auth';


export default function Registro()
{

    const [nome, setNome] = useState('')
    const [data, setData] = useState('01/01/2000')
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const {signUp, loading} = useAuth()

    const handleRegister = (email, senha, nome ,data) =>{
        signUp(email, senha, nome, data)
    }

    return(
    
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={[css.container, css.darkbg]}> 
      
        <View>
            <Image style={css.logo__image} source={require('../assets/img/logomenor.png')}/>
        </View>


        <View style={css.login__form}> 

        <Text style={css.text_form}> Seu E-mail:</Text>
        <TextInput style={css.login__input} placeholder='exemplo@gmail.com' keyboardType='email-address' onChangeText={setEmail}/>

        <Text  style={css.text_form}>Crie uma senha:</Text>
        <TextInput style={css.login__input} placeholder='Abcd1234' onChangeText={setSenha} secureTextEntry={true}/>

        <Text style={{alignSelf:'flex-start', marginTop: 30}}> Dados do(a) bebê:</Text>

        <Text  style={css.text_form}>Nome:</Text>
        <TextInput style={css.login__input} placeholder='Digite o nome do(a) bebê' onChangeText={setNome}/>

        <Text  style={css.text_form}>Data de nascimento:</Text>
        <TextInput style={css.login__input} placeholder='dd/mm/aaaa' keyboardType='numbers-and-punctuation' onChangeText={setData} />
         
    
                <TouchableOpacity style={css.cadastrar__button} onPress={() => handleRegister(email, senha, nome, data)}>
                    <Text style={css.login__buttonText}>Cadastrar</Text>
                </TouchableOpacity>
             
           </View>
           
        </KeyboardAvoidingView>
         
    )
}