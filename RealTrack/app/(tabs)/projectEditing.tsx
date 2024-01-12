import { Button, KeyboardAvoidingView, Pressable, StyleSheet, TouchableOpacity, Vibration } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';

//Functions for pressing the add buttons (placeholders)

function onPressGps() {
  console.log("Gps pressed");
}
function onPressWlan() {
  console.log("Wlan pressed");
}

export default function ProjectEditingScreen() {

  const [name, setName] = useState("projectname");
  const [gps, setGps] = useState();
  const [wlan, setWlan] = useState();
  const [pause, setPause] = useState("14:00");
  const [timeCount, setTimeCount] = useState();
  const [goal, setGoal] = useState("200");


  return (
    //Visualisation of in and outputs for a project
    <View style={styles.container}>

      <Text style={styles.text}>Projectname: {name}</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={(val) => setName(val)}
      />

      <Text style={styles.text}>Gps: {gps}
        <Button
          title="add Gps"
          onPress={onPressGps}
        />

      </Text>
      <Text style={styles.text}>Wlan : {wlan}
        <Button
          title="add Wlan"
          onPress={onPressWlan}
        />
      </Text>
      <Text style={styles.text}>Breaktime: {pause}</Text>
      <TextInput
        style={styles.input}
        placeholder="Breaktime"
        onChangeText={(val) => setPause(val)}
      />

      <Text style={styles.text}>Timegoal: {goal} Hours</Text>
      <TextInput
        keyboardType='decimal-pad'
        style={styles.input}
        placeholder="Timegoal"
        onChangeText={(val) => setGoal(val)}
      />
      <KeyboardAvoidingView style={styles.addButtonWrapper} >
        {/*Using the vibrate function to give feedback on a pressed button*/}
        <TouchableOpacity onPress={() => Vibration.vibrate(100)} >
          <View style={styles.addProject}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>

      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E8EAED',
    height: '100%',
    flexDirection: 'column',

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
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 8,
    margin: 10,
  },
  text: {
    fontSize: 32,
    color: 'black',

  },
  addProject: {
    width: 60,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'lightgrey',
    borderWidth: 1,


  },
  addText: {
    fontSize: 32,
    color: 'black',
  },
  addButtonWrapper: {
    position: 'absolute',
    bottom: 10,
    right: 50
  }

});
