import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Button } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function ModalScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Imprint</Text>
      <Text style={styles.textCentered}>
        {"\n"}
        RealTrack GmbH{"\n"}
        Examplestreet 5{"\n"}
        D-46236 Bottrop{"\n"}
        {"\n"}
        Telephone number: +49 2041 123456{"\n"}
        Email: anyone@example.com{"\n"}
      </Text>
      <Text style={styles.title}>Managing Directors</Text>
      <Text style={styles.textCentered}>
      {"\n"}
        Robin Böllhoff and Timur Dag{"\n"}
      </Text>
      <Text style={styles.title}>Chairman of the Supervisory Board:</Text>
      <Text style={styles.textCentered}>
      {"\n"}
      Max Mustermann{"\n"}
      {"\n"}
      Register court: Amtsgericht Bottrop{"\n"}
      Register number: ABC 123456{"\n"}
      {"\n"}
      Sales tax identifiaction number according to{"\n"}§ 27a UStG: DE 123 456 789{"\n"}{"\n"}
      Responsible for content within the meaning of{"\n"}§ 18 Abs. 2 MStV: Robin Böllhoff, Timur Dag{"\n"}
      {"\n"}
      RealTrack GmbH{"\n"}
      Examplestreet 5{"\n"}
      D-46236 Bottrop{"\n"}
      </Text>


    </View>

    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  text: {
    fontSize: 15,
    textAlign: "left"
  },
  textCentered: {
    fontSize: 15,
    textAlign: "center",
  }
});
