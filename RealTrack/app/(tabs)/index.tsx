import EditScreenInfo from '../../components/EditScreenInfo';
import { useState } from 'react';
import { Button, StyleSheet, Text, View, FlatList, KeyboardAvoidingView, Platform, Vibration } from 'react-native';
import Colors from '../../constants/Colors';
import { setBackgroundColorAsync } from 'expo-system-ui';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withLayoutContext } from 'expo-router';

//Our project class except for Gps and Wlan data (will be added later)
class projectTest {
  name;
  break;
  timeTracked;
  timeGoal;
  Colors;

  constructor(Name: string, Break: string, TimeTracked: number, TimeGoal: number, Colors: string) {
    this.name = Name;
    this.break = Break;
    this.timeTracked = TimeTracked;
    this.timeGoal = TimeGoal;
    this.Colors = Colors;
  }
}




export default function Home() {
  const [projectItems, setProjectItems] = useState<projectTest[]>([])
  //Creating a new project object
  const handleAddProjects = () => {
    Vibration.vibrate(100);
    const test = new projectTest("Projectname", "Breaktime", 0, 0, randHex())
    setProjectItems([...projectItems, test])
    {/*Function to create a bright color in rgb colorspace and return it, that is suppost to be editable in project screen*/ }
    function randHex() {
      var r = Math.floor(Math.random() * 1000 % 55 + 200);
      var g = Math.floor(Math.random() * 1000 % 55 + 200);
      var b = Math.floor(Math.random() * 1000 % 55 + 200);
      return "rgb(" + (r) + "," + (g) + "," + (b) + ")";
    }

  }
  return (
    <View style={styles.container}>
      <FlatList
        data={projectItems}
        renderItem={({ item }) => (
          //On touch this should send the data from the coresponding project to the editing screen and should be editable
          <TouchableOpacity>
            <Text style={[styles.item, { backgroundColor: item.Colors }]} onPress={() => console.log(item)} >
              {item.name}{"\n"}
              Break: {item.break} {"\n"}
              Hours: {item.timeTracked}h/{item.timeGoal}h
            </Text>


          </TouchableOpacity>

        )}
      />

      <KeyboardAvoidingView behavior={Platform.OS === "android" ? "padding" : "height"} style={styles.addButtonWrapper}>

        <TouchableOpacity onPress={() => handleAddProjects()}>
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
    alignItems: 'center',
    justifyContent: 'center',
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
    flex: 1,
    color: 'white',
    fontSize: 32
  },
  item: {
    marginTop: 20,
    padding: 20,
    backgroundColor: 'lightblue',
    fontSize: 32,
    textAlign: 'center',
    borderRadius: 20,

    borderColor: 'lightgrey',
    borderWidth: 1,

  },
  addButtonWrapper: {
    position: 'absolute',
    bottom: 50,
    right: 50

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
  }
});
