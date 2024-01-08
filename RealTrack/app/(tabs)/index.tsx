import EditScreenInfo from '../../components/EditScreenInfo';
import { useState } from 'react';
import { Button,StyleSheet,Text,View ,FlatList, KeyboardAvoidingView, Platform} from 'react-native';
import Colors from '../../constants/Colors';
import { setBackgroundColorAsync } from 'expo-system-ui';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withLayoutContext } from 'expo-router';

class projectTest {
  name;
  break;
  timeTracked;
  timeGoal;
  Colors;

  constructor(Name: string,Break: string,TimeTracked: number,TimeGoal: number,Colors: string){
    this.name = Name;
    this.break = Break;
    this.timeTracked = TimeTracked;
    this.timeGoal = TimeGoal;
    this.Colors = Colors;
  }
}



export default function Home() {
  const[project,setProject] = useState({
    name: "Name",
    break: "breakteime",
    timeTracked : 0,
    timeGoal:0,
    Colors:'lightblue'
  }
  );

  const[projectItems,setProjectItems] = useState <projectTest[]> ([]) 
  function randHex(): string {
    var r = Math.random()*100%255;
    var g = Math.random()*100%255;
    var b = Math.random()*100%255;

    return "rgb("+(r-r%1)+","+(g-g%1)+","+(b-b%1)+")" ;
  }


  const handleAddProjects = () => {
     const test = new projectTest("project","break",1,1,randHex())
    setProjectItems([...projectItems,test])
    
    
  }
  return (
    <View style={styles.container}>
        <FlatList
        data= {projectItems}
        renderItem={({ item })=>(
          
          <TouchableOpacity>
          <Text style = {[styles.item,{backgroundColor: item.Colors}]} >
            {item.name}{"\n"}
            Break: {item.break} {"\n"}
            Hours: {item.timeTracked}h/{item.timeGoal}h
          </Text>
          
          
          </TouchableOpacity>
          
        )}
      />

    <KeyboardAvoidingView behavior={Platform.OS === "android" ? "padding":"height"} style={styles.addButtonWrapper}>
      
      <TouchableOpacity onPress={()=> handleAddProjects()}>
        <View style = {styles.addProject}>
          <Text style = {styles.addText}>+</Text>
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
    flexDirection:'column',
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
    marginTop : 20,
    padding : 20,
    backgroundColor: 'lightblue',
    fontSize : 32,
    textAlign: 'center',
    borderRadius: 20,

    borderColor: 'lightgrey',
    borderWidth: 1,
    
  },
  addButtonWrapper:{
    position: 'absolute',
    bottom : 50,
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
  addText:{

  }
});
