import React, {useState, useEffect} from 'react';
import { KeyboardAvoidingView, TextInput, Text, Image, View, TouchableOpacity, Platform} from 'react-native';
import { css } from '../assets/css/LoginStyle';
import { useAuth } from '../auth/contexto/auth';

export default function Login({navigation})
{

    const [display, setDisplay]=useState( initialState='none');

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const {signIn, loading} = useAuth()

    const handleLogin = (email, senha) =>{
        signIn(email, senha)
    }


    return(

        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={[css.container]}>

        

            <View>

                <Image style={css.logo__image} source={require('../assets/img/logo.png')}/>
               

            </View>


            <View>
              <Text style={css.login__msg(display)}>Usuário ou senha inválidos</Text>


            </View>

            <View style={css.login__form}>

                <Text style={css.text_form}>E-mail:</Text>
                <TextInput style={css.login__input} placeholder='exemplo@gmail.com' onChangeText={setEmail} />

                <Text  style={css.text_form}>Senha:</Text>
                <TextInput style={css.login__input} placeholder='Digite sua senha' secureTextEntry={true} onChangeText={setSenha}/>
               
                <TouchableOpacity style={css.login__button} onPress={() => handleLogin(email, senha)}>
                    <Text style={css.login__buttonText}>  Entrar  </Text>
                </TouchableOpacity>
             
           </View>

           <View>

           <TouchableOpacity style={css.login__cadastro} onPress={() => navigation.navigate('Registro', )}>
            <Text style={{ color: '#000', fontWeight:'bold' }}> {'Não possui cadastro? '}
            <Text style={{ color: '#00B8A1', textDecorationLine: 'underline' }}>Cadastre-se aqui.</Text>
            </Text>
             </TouchableOpacity> 


           </View>
           
        </KeyboardAvoidingView>
    )

}