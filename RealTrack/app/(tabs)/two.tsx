import { Alert, StyleSheet, Button} from 'react-native';
import { useState } from 'react';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View} from '../../components/Themed';
import { Calendar, LocaleConfig, CalendarListProps } from "react-native-calendars";

export default function TabTwoScreen() {

  const [selected, setSelected] = useState('');
  const marked = {
    "24-01-07": {marked: true}
  };

  return (
    <View style={styles.container}>
      <Calendar
        onDayPress={day=> {setSelected(day.dateString);
        }}
        markedDates={{
          [selected]: {selected: true, disableTouchEvent:true, selectedTextColor: "white", selectedColor: "green"}
        }}
        style={{
          borderWidth: 2,
          borderColor: "gray",
        }}
        theme={{
          todayTextColor: "green",
          arrowColor: "green"

        }}
        firstDay={1}
        markingType='multi-dot'
      />

      

      <Button title="Home" onPress={() => Alert.alert("This is a test!")}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});
