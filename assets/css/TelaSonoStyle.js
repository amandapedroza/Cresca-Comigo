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
          marginTop: -250, // Margem superior do título, ajustada para alinhar com a borda superior
        },
       
        inputContainer: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '80%',
          marginBottom: 20,
        },
        input: {
          backgroundColor: '#fff',
          width: '48%',
          height: 40,
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 5,
          paddingHorizontal: 10,
        },
        buttonContainer: { /*botao adicionar*/
          width: '80%',
          marginBottom: 20, // Ajuste a margem inferior conforme necessário
          marginTop: 70, // Mover o botão "Adicionar" um pouco para cima
          borderRadius: 5,
          overflow: 'hidden',
          backgroundColor: '#30cfa9',
        },
        iconBack: { // ícone de voltar
          position: 'absolute', // Posicionamento absoluto
          top: 55, // Distância do topo
          left: 16, // Distância da esquerda
        },
      });