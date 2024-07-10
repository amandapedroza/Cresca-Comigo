import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, Button, TextInput, ImageBackground, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import { css } from "../assets/css/TelaSonoStyle";
import api from '../auth/services/api';


const TelaSono = () => {
  const [selectedItem1, setSelectedItem1] = useState(null);
  const [open1, setOpen1] = useState(false);
  const [inicio, setInicio] = useState('');
  const [fim, setFim] = useState('');

  const navigation = useNavigation();  /*permite a navegação entra as telas*/

  const handleAdicionar = () => { /*quando clicar na botao adicionar*/
    console.log(inicio, fim)

    const date = new Date().toLocaleDateString()
    api.post('/crianca/evento',{
      tipo: 4,
      descricao: `${inicio} até ${fim}`,
      data: date
    }).then(navigation.navigate('Perfil'))
  };


  // Função para formatar a entrada de horas e minutos
  const formatarHoraMinuto = (text) => {
    // Remover caracteres não numéricos
    const formattedText = text.replace(/\D/g, '');
    // Adicionar ":" entre os dois primeiros dígitos, se necessário
    if (formattedText.length > 2) {
      return `${formattedText.slice(0, 2)}:${formattedText.slice(2, 4)}`;
    } else {
      return formattedText;
    }};


    
      return (
      
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <ImageBackground style={css.imagemFundo}
    source={require("../assets/img/fundosono.png")}
  >

    <View style={css.container}>
     {/* Ícone de voltar */}
     <Icon name="arrow-left" size={20} color="#000" onPress={() => navigation.goBack()} style={css.iconBack} />
       
      <View>
      <Image
    source={require('../assets/img/sono.png')}
    style={{ width: 120, height: 120, marginBottom: 100 }} //  largura e altura do imagem do icon
  />
      </View>

      <Text style={{marginBottom: 15, marginRight: 5, fontWeight: 'bold', color: 'gray'}}>Preencha com os horários de sono do bebê:</Text>

      <View style={css.inputContainer}>
        
        <TextInput
          style={css.input}
          placeholder="Início (hh:mm)"
          value={inicio}
          onChangeText={(text) => setInicio(formatarHoraMinuto(text))}  /*CAMPO PARA INSERIR A VALOR DE INICIO COM HORA E MINU*/
          keyboardType="numeric"
          maxLength={5}
        />
        <TextInput
          style={css.input}
          placeholder="Fim (hh:mm)"
          value={fim}
          onChangeText={(text) => setFim(formatarHoraMinuto(text))} /*CAMPO PARA INSERIR A VALOR DE FIM COM HORA E MINU*/
          keyboardType='numeric'
          maxLength={5} /*COMPRIMENTO MAXIMO DE CARACTER*/
        />
      </View>

      <View style={css.buttonContainer}>
        <Button
          title="Adicionar"
          color='#30cfa9'
          onPress={handleAdicionar}
        />
      </View>
    </View>
    </ImageBackground>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  
  );
};



export default TelaSono;