import React, { useCallback, useEffect, useState } from 'react';
import { View, Image, Text, Button, StyleSheet, StatusBar,ImageBackground, TouchableOpacity, Pressable, Alert } from 'react-native';
import Botaomenu,{Aa}  from './componentes/Botaomenu';
import { css } from '../assets/css/PerfilStyle';
import {Entypo, MaterialIcons} from '@expo/vector-icons'
import EscolherImagem from './componentes/EscolherImagemPerfil';
import ImageViewer from './componentes/ImagemPerfil';
import { useAuth } from '../auth/contexto/auth';
import api from '../auth/services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import { calcularIdade } from './componentes/CalcularIdade';
import EventosView from './componentes/EventosView';




 export default  Perfil = ({navigation}) => {

  const [imgSelecionada, setImgSelecionada] = useState(null)/*guardando a imagem de perfil*/ 
  const {user, setUpdateDados, signOut} = useAuth();
  const [idade, setIdade] = useState({ meses: 0, dias: 0})
  const [eventos, setEventos] = useState([]);

  const atualizarDados = useCallback(async () => {
    try {
      const res = await api.get(`/crianca/${user.id_cliente}`);
      setUpdateDados(res.data.user);
    } catch (error) {
      console.error('Erro ao atualizar os dados:', error);
    }
  }, [user.id_cliente, setUpdateDados]);

  const buscarEventos = useCallback(async () => {
    try {
      const resEventos = await api.get(`/crianca/eventos`);
      setEventos(resEventos.data);
    } catch (error) {
      console.error('Erro ao buscar eventos:', error);
    }
  }, []);

  useEffect(() => {
    if (user?.Crianca?.datanasc) {
      const idadeCalculada = calcularIdade(user?.Crianca?.datanasc);
      setIdade(idadeCalculada);
    }
  }, [user?.Crianca]);

  const reloadEventos = useCallback(() => {
    buscarEventos(); // Chama a função para buscar os eventos novamente após a exclusão
  }, []);

  // Função para atualizar os dados e buscar eventos
  const atualizarPaginaDuasVezes = async () => {
    await atualizarDados();
    await buscarEventos();
  };

  useFocusEffect(
    useCallback(() => {
      atualizarPaginaDuasVezes(); // Chama a função ao focar no componente
    }, [])
  );


  return (

    <ImageBackground style={css.login__imageback}  /*imagem da nuvem*/
    source={require('../assets/img/fundonuvem.png')}>

    <View style={css.containerPerfil}>
      <View>
        <View style={css.buttonsup}>
        <Pressable onPress={() => signOut()}>
          <Entypo style={{transform: 'scaleX(-1)'}} name="log-out" size={26} color="#000"/></Pressable>
          <Pressable  onPress={() => navigation.navigate('Calendario')} >
            <Entypo style={{transform: 'scaleX(-1)'}} name="calendar" size={26} color="#000"/>
          </Pressable>
        </View>
        <Pressable onPress={() => EscolherImagem(setImgSelecionada)}>
          <ImageViewer imagemPadrao={require('../assets/img/camera.png')} imagemSelecionada={imgSelecionada} style={css.foto_perfil}/>
        </Pressable>
      </View>
      <Text style={css.nome_perfil}>{`${(user?.Crianca?.nome_cri)?.charAt(0).toUpperCase() + (user?.Crianca.nome_cri)?.slice(1)}`}</Text>
      <Text style={css.data_perfil}>{`${idade.meses} meses e ${idade.dias} dias`}</Text>
      <View style={css.row}>

      <TouchableOpacity style={css.medidas_button} onPress={() => navigation.navigate('TelaComprimento')}>
      <Text style={css.medidas_texto}>{`${user?.Crianca?.altura || ' Altura + '}`}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={css.medidas_button} onPress={() => navigation.navigate('TelaComprimento')}>
          <Text style={css.medidas_texto}>{`${user?.Crianca?.peso || ' Peso + '}`}</Text>
        </TouchableOpacity>
      </View>
      <EventosView eventos={eventos} reloadEventos={reloadEventos} />

     

      <View style={css.viewButtom}>
        {/* coloca a propriedade de navegação dentro do botão */}
        <Botaomenu style={css.botao_menu} navigation={navigation} /> 
      </View>

        
        </View>

      </ImageBackground>
       
        );
};