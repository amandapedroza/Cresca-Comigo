import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, Button, TextInput, Pressable, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation } from '@react-navigation/native';
import { css } from "../assets/css/TelaComprimentoStyle";
import api from '../auth/services/api';
import { useAuth } from '../auth/contexto/auth';


const TelaComprimento = () => { /*item de seleção para o resgistro*/
  const [selectedItem, setSelectedItem] = useState(null);
  const [open, setOpen] = useState(false);
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const {user} = useAuth();

  const navigation = useNavigation(); /*permite a navegação entra as telas*/

  const handleAdicionar = () => { /*funçao que faz parte do botao adicionar, registra os valores item, altura e peso, para quando eu adicionar ele salva*/
    console.log(user)
    const altuPeso = selectedItem == 'Peso' ? peso: altura
    try {
      api.patch(`/crianca/${user.Crianca.id_crianca}`,{
        peso: selectedItem == 'Peso' ? peso: undefined,
        altura: selectedItem == 'Altura' ? altura: undefined
      }).then(res => {console.log(res), navigation.goBack()})
    } catch (error) {
      console.error(error)
    }
  };

  const formatarAltura = (text) => { /*formatação do input, como vai aparecer para o registro*/ 
  const formattedText = text.replace(/\D/g, ''); /*\D/ signiica substitue por numeros */
    return formattedText;
  };

  const formatarPeso = (text) => { /*formatação do input, como vai aparecer para o registro*/ 
    const formattedText = text.replace(/[^0-9.]/g, ''); /*numeros de 0 ate 9, com . e g*/
    return formattedText;
  };


  

  return (

    <ImageBackground style={css.imagemFundo}
    source={require("../assets/img/fundomedidas.png")}
  >
    <View style={css.container}>
      <View style={css.iconContainer}>
        {/* Ícone de voltar */}
      <Icon name="arrow-left" size={20} color="#000" onPress={() => navigation.goBack()} style={css.iconBack} />
      </View>
    
      <View style={css.imageContainer}>
      <Image
    source={require('../assets/img/medida.png')}
    style={{ width: 80, height: 80, marginBottom: 100 }} //  largura e altura do imagem do icon
  />
      </View>

      <DropDownPicker
        items={[
          { label: 'Selecione', value: null },
          { label: 'Peso', value: 'Peso' },
          { label: 'Altura', value: 'Altura' }
        ]}
        defaultValue={null}
        placeholder="Selecione"
        containerStyle={css.dropdownContainer}
        style={css.dropdown}
        itemStyle={css.dropdownItem}
        dropDownStyle={css.dropdownMenu}
        open={open}
        setOpen={setOpen}
        value={selectedItem}
        setValue={(value) => {
          setSelectedItem(value);
        }}
        zIndex={2000}
        zIndexInverse={2000}
      />

      {selectedItem === 'Altura' && (
        <TextInput
          style={css.input}
          placeholder="Altura (cm)"
          value={altura}
          onChangeText={(text) => setAltura(formatarAltura(text))}
          keyboardType='decimal-pad'
          
        />
      )}

      {selectedItem === 'Peso' && (
        <TextInput
          style={css.input}
          placeholder="Peso (kg)"
          value={peso}
          onChangeText={(text) => setPeso(formatarPeso(text))}
          keyboardType='decimal-pad'
          
        />
      )}

      <View style={css.buttonContainer}>
        <Pressable style={css.buttonContainerButton} onPress={handleAdicionar}>
          <Text style={{color:'white'}}>Adicionar</Text>
        </Pressable>
      </View>
    </View>
    </ImageBackground>
  );
};

export default TelaComprimento;