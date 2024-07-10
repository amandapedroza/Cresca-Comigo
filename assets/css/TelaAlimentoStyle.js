import { StyleSheet } from "react-native";

export const css = StyleSheet.create({


    container: {
      flex: 1,
      padding: 16,
      justifyContent: 'center',
      alignItems: 'center',
      

    },

    imagemFundo:{

 
      width:'100%',
      height:'100%',
      resizeMode: 'cover'
    },
  


    titulo: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20, // Margem inferior do título
      marginTop: -300, // Margem superior do título, ajustada para alinhar com a borda superior
    },


    dropdownContainer: {
      width: '80%',
      marginBottom: 20,
    },


    dropdown: {
      height: 50,
      borderColor: 'gray',
      backgroundColor: '#fff', /*cor no botao selecione */
      borderWidth: 0.5,
      borderRadius: 15,
      paddingHorizontal: 8,
    },


    dropdownItem: {
      justifyContent: 'flex-start',
      paddingHorizontal: 10,
      
    },


    dropdownMenu: {
      marginTop: 2,
    },


    inputContainer: {
      flexDirection: 'row',
      justifyContent: 'center', // Centralizar os elementos na horizontal
      width: '80%',
      marginBottom: 20,
     
    },

    
    input: {
       backgroundColor: '#FFF',
      width: '48%',
      height: 40,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 15,
      paddingHorizontal: 10,
      marginBottom: 10, // Adicionar um espaçamento inferior
      
    },


    buttonContainer: { /*botao adicionar*/
      width: '60%',
      marginBottom: 20, // Ajuste a margem inferior conforme necessário
      marginTop: 70, // Mover o botão "Adicionar" um pouco para cima
      borderRadius: 5,
      overflow: 'hidden',
      backgroundColor: '#30cfa9',
      color: '#fff'
     
    },


    iconBack: { // ícone de voltar
      position: 'absolute', // Posicionamento absoluto
      top: 95, // Distância do topo
      left: 16, // Distância da esquerda
     
    },

    

    
  });
  
