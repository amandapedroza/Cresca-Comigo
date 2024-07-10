import { Text, View, Image } from "react-native";
import { css } from "../assets/css/CalendarioStyle";
import { ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';



export default function Calendario({ navigation }) {
    return (
        <ScrollView>

<View>
     
     <Icon name="arrow-left" size={20} color="#000" onPress={() => navigation.goBack()} style={css.iconBack} />

</View>


<View >

      <Image
    source={require('../assets/img/calendario.png')}
    style={{ width: 120, height: 120, marginTop: 70, flex:1, alignSelf:'center' }} //  largura e altura do imagem do icon
  />
      </View>
<View style={css.container}>
    
    <Text style={css.titulo}>
    Ao nascer
    </Text>

    <Text style={css.vacina}>Vacina BCG (Dose única)   </Text>

    <Text> Doenças evitadas: formas graves da tuberculose (miliar e meníngea) </Text>
    <Text style={css.vacina} > Vacina Hepatite B (recombinante HB) </Text> 
    <Text> Doenças evitadas: Hepatite B </Text>
    

    <Text style={css.titulo}>
        2 meses
    </Text>


<Text style={css.vacina}>Vacina adsorvida Difteria, Tétano, Pertussis, Hepatite B (recombinante) e Haemophilus influenzae B (conjugada) - (Penta) (1ª dose)</Text>   
<Text>Doenças evitadas: Difteria, Tétano, Coqueluche, Hepatite B e infecções causadas pelo Haemophilus influenzae B </Text>
<Text style={css.vacina}>Vacina poliomielite 1, 2 e 3 (inativada) - (VIP) (1ª dose)</Text>
<Text>Doenças evitadas: Poliomielite</Text>
<Text style={css.vacina}>Vacina pneumocócica 10-valente (Conjugada) - (Pneumo 10) (1ª dose)</Text>
<Text>Doenças evitadas: infecções invasivas (como meningite e pneumonia) e otite média aguda, causadas pelos 10 sorotipos de Streptococus pneumonia</Text>
<Text style={css.vacina}>Vacina rotavírus humano G1P1 [8] (atenuada) - (VRH) (1ª dose)</Text>
<Text>Doenças evitadas: diarreia por rotavírus (Gastroenterites) </Text>

    <Text style={css.titulo} >
        3 meses
    </Text>

 <Text style={css.vacina}>Vacina meningocócica C (conjugada) - (Meningo C) (1ª dose)</Text>
<Text>Doenças evitadas: doença invasiva causada pela Neisseria meningitidis do sorogrupo C</Text>



    <Text style={css.titulo}>
        4 meses
    </Text>

    
<Text style={css.vacina}>  Vacina adsorvida Difteria, Tétano, pertussis, Hepatite B (recombinante) e Haemophilus influenzae B (conjugada) - (Penta) (2ª dose) </Text>
<Text> Doenças evitadas: Difteria, Tétano, Coqueluche, Hepatite B e infecções causadas pelo Haemophilus influenzae B </Text>
<Text style={css.vacina}> Vacina poliomielite 1, 2 e 3 (inativada) - (VIP) (2ª dose) </Text>
<Text>Doenças evitadas: Poliomielite</Text>
<Text style={css.vacina}>Vacina pneumocócica 10-valente (Conjugada) - (Pneumo 10) (2ª dose)</Text>
<Text>Doenças evitadas: infecções invasivas (como meningite e pneumonia ) e otite média aguda, causadas pelos 10 sorotipos Streptococus pneumoniae</Text>
<Text style={css.vacina}>Vacina rotavírus humano G1P1 [8] (atenuada) - (VRH) (2ª dose)</Text>
<Text>Doenças evitadas: diarreia por rotavírus (Gastroenterites)</Text>
    
    <Text style={css.titulo}>
        5 meses
    </Text>

    
        
    <Text style={css.vacina}>Vacina meningocócica C (conjugada) - (Meningo C) (2ª dose)</Text>
    <Text>Doenças evitadas: doença invasiva causada pela Neisseria meningitidis do sorogrupo C</Text>

    <Text style={css.titulo}>
        6 meses
    </Text>

    
<Text style={css.vacina}>Vacina adsorvida Difteria, Tétano, pertussis, Hepatite B (recombinante) e Haemophilus influenzae B (conjugada) - (Penta) (3ª dose)</Text>
<Text>Doenças evitadas: Difteria, Tétano, Coqueluche, Hepatite B e infecções causadas pelo Haemophilus influenzae B</Text>
<Text style={css.vacina}>Vacina poliomielite 1, 2 e 3 (inativada) - (VIP) (3ª dose)</Text>
<Text>Doenças evitadas: Poliomielite</Text>
<Text style={css.vacina}>Vacina Influenza (1 ou 2 doses (anual))</Text>
<Text>Doenças evitadas: infecções pelo vírus influenza</Text>
<Text style={css.vacina}>Vacina Covid-19 (1ª dose)</Text>
<Text>Doenças evitadas: as formas graves e complicações pela covid-19 </Text>

<Text style={css.titulo}>
    7 meses
</Text>


<Text style={css.vacina}>Vacina Covid-19 (2ª dose)</Text>
<Text>Doenças evitadas: as formas graves e complicações pela covid-19</Text>

<Text style={css.titulo}>
    9 meses
</Text>

<Text style={css.vacina}>Vacina Febre Amarela (atenuada) - (FA) (1 dose)</Text>
<Text>Doenças evitadas: Febre Amarela</Text>
<Text style={css.vacina}>Vacina Covid-19 (3ª dose)</Text>
<Text>Doenças evitadas: as formas graves e complicações pela covid-19</Text>

<Text style={css.titulo}>
    12 meses
</Text>

<Text style={css.vacina}>Vacina pneumocócica 10-valente (Conjugada) - (Pneumo 10) (Reforço)</Text>
<Text>Doenças evitadas: infecções invasivas (como meninigite, pneumonia e otite média aguda), causadas pelos 10 sorotipos Streptococus pneumoniae</Text>
<Text style={css.vacina}>Vacina meningocócica C (conjugada) - (Meningo C) (Reforço)</Text>
<Text>Doenças evitadas: doença invasiva causada pela Neisseria meningitidis do sorogrupo C</Text>
<Text style={css.vacina}>Vacina Sarampo, Caxumba, Rubéola (Tríplice viral) (1ª dose)</Text>
<Text>Doenças evitadas: Sarampo, Caxumba e Rubéola</Text>

<Text style={css.titulo}>
    15 meses
</Text>

<Text style={css.vacina}>Vacina adsorvida Difteria, Tétano e pertussis (DTP) (1º reforço)</Text>
<Text>Doenças evitadas: Difteria, Tétano, Coqueluche</Text>
<Text style={css.vacina}>Vacina poliomielite 1 e 3 (atenuada) - (VOPb) (1º reforço)</Text>
<Text>Doenças evitadas: Poliomielite</Text>
<Text style={css.vacina}>Vacina adsorvida Hepatite A (HA - inativada) (1 dose)</Text>
<Text>Doenças evitadas: Hepatite A</Text>
<Text style={css.vacina}>Vacina Tetra viral (1 dose)</Text>
<Text>Doenças evitadas: Sarampo, Caxumba, Rubéola e varicela</Text>

<Text style={css.titulo}>
    4 anos
</Text>

<Text style={css.vacina}>Vacina adsorvida Difteria, Tétano e pertussis (DTP) (2º reforço)</Text>
<Text>Doenças evitadas: Difteria, Tétano, Coqueluche</Text>
<Text style={css.vacina}>Vacina Febre Amarela (atenuada) (Reforço)</Text>
<Text>Doenças evitadas: Febre Amarela</Text>
<Text style={css.vacina}>Vacina poliomielite 1 e 3 (atenuada) - (VOPb) (2º reforço)</Text>
<Text>Doenças evitadas: Poliomielite</Text>
<Text style={css.vacina}>Vacina varicela (monovalente) - (Varicela) (1 dose)</Text>
<Text>Doenças evitadas: Varicela</Text>

<Text style={css.titulo}>
    5 anos
</Text>

<Text style={css.vacina}>Vacina Febre Amarela (atenuada) - (FA) (1 dose, caso a criança não tenha recebido as 2 doses recomendadas antes de completar 5 anos)</Text>
<Text>Doenças evitadas: Febre Amarela</Text>
<Text style={css.vacina}>Vacina pneumocócica 23-valente - (Pneumo 23) (1 dose)</Text>
<Text>Doenças evitadas: infecções invasivas pelo pneumococo na população indígena</Text>

<Text style={css.titulo}>
    9 e 10 anos
</Text>

<Text style={css.vacina}>Vacina HPV Papilomavírus humano 6, 11, 16 e 18 (HPV4 - recombinante) (Dose única)</Text>
<Text>Doenças evitadas: Papilomavírus Humano 6, 11, 16 e 18</Text>


</View>
</ScrollView>

    )
};