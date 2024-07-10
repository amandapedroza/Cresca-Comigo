import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import api from '../../auth/services/api';

const icone = {
  '1': require('../../assets/img/vacina.png'),
  '2': require('../../assets/img/consulta.png'),
  '3': require('../../assets/img/medicamento.png'),
  '4': require('../../assets/img/lua.png')
}

  

  const EventosView = ({ eventos, reloadEventos }) => {


    async function eventDelete(id){
  
      const req = await api.delete(`crianca/evento/${id}`)
      console.log(req.data)
      reloadEventos()
      return req
    } 
  return (
    <View style={styles.container}>
      {eventos.length > 0 ? (
        eventos.map((evento, index) => (
          <View key={index} style={[
            styles.eventoContainer,
            evento.Detalhes.tipo_id === 4 && { backgroundColor: 'rgba(63, 129, 204, 0.42)', borderColor:'rgba(36, 111, 197, 0.5)'}, // Altera a cor de fundo para azul se o tipo for 4
            evento.Detalhes.tipo_id === 4 && evento.Detalhes.descricao.length > 15 && {backgroundColor: 'rgba(255, 237, 109, 0.42)', borderColor:'rgba(255, 235, 88, 0.5)'}
          ]}>
            <Image
  source={
    evento.Detalhes.tipo_id === 4 && evento.Detalhes.descricao.length > 15
      ? require('../../assets/img/mamadeira.png') // Ícone alternativo para descrição longa do tipo 4
      : icone[evento.Detalhes.tipo_id] || icone[1] // Ícone padrão baseado no tipo_id
  }
  style={styles.eventoImagem} ></Image>
            <Text style={styles.eventoNome}>{evento.Detalhes.descricao}</Text>
            <View style={styles.iconContainer}>
             <Pressable onPress={() => eventDelete(evento.id_evento)}>
              <Entypo name="trash" size={25} color="#000" style={styles.icon} />
              </Pressable>
            </View>
          </View>
          //trash ==== lixo 
        ))
      ) : (
        <Text style={styles.semEventosTexto}>Adicione eventos usando o seletor</Text>
      )}
    </View>
  );
};



const styles = StyleSheet.create({
  eventoImagem: {
    resizeMode: 'contain',
    width: 24,
    height: 24,
    marginRight: 15,
    marginLeft: 5
  },
  container: {
    borderWidth: 1,
    borderColor: '#E2F7F3',
    padding: 15
  },
  eventoContainer: { //aqui edita os itens (vacina, consulta, o lixo e editar)
    padding: 8,
    borderRadius: 40,
    borderColor: '#B1FF96',
    borderWidth: 2,
    backgroundColor: 'rgba(206, 255, 189, 0.42)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // aqui os itens ficam separados, assim não ficam todos juntos
    marginBottom: 10
  },
  eventoNome: {
    color: 'black',
    fontSize: 18,
    flex: 1 // Ocupa o espaço restante
  },
  iconContainer: {
    flexDirection: 'row', // ícones na horizontal
    alignItems: 'center' // Alinha os ícones ao centro verticalmente
  },
  icon: {
    marginHorizontal: 10 // Espaço entre os ícones, para ficar padrao
  },
  semEventosTexto: {
    color: 'black',
    textAlign: 'center'
  },
});

export default EventosView;
