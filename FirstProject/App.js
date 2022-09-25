import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.testText}> Hi Kohin </Text>
//       <Text style={{margin: 10}}>Bye Kohin</Text>
//       <Button title='Submit'/>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   testText:
//   {
//     margin: 15,
//     borderWidth: 3, 
//     borderColor: 'green',
//     padding: 15
//   }

// });

export default function App() {

  const [inputText, setText] = useState('');
  const [courseGoal, setCourse] = useState([]);

  function goalInput(inputText) {
    setText(inputText);
  
  }

  function addGoal() {
    setCourse(currentCourse => [...currentCourse, inputText]);
  }


  return (
    <View style={styles.container}>
          <View style={styles.inputContainer}>
            <TextInput style={styles.textInput}  placeholder='Your course goal' onChangeText={goalInput}/>
            <Button title='Add Goal' onPress={addGoal}/>
    </View>
    <View style={styles.goals}>
    <ScrollView>
           {courseGoal.map((goal)=> (
           <View key={goal} style={styles.goalItem}>
           <Text style={styles.goalText}>{goal}</Text>
           </View>))}
            </ScrollView>
            </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: 
  {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer:
  {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', 
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput:
  {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8 
  },
  goals:
  {
    flex: 5
  },
  goalItem: 
  {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e08cc',
    padding: 8,
  },
  goalText:
  {
    color: 'white'
  }
});
