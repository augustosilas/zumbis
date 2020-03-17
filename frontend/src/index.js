import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import PageHome from './pages/PageHome';
import PageArma from './pages/Arma/PageArma';
import PageArmadura from './pages/Armadura/PageArmadura';
import PageZumbi from './pages/Zumbi/PageZumbi';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={PageHome} />
        <Stack.Screen name="Arma" component={PageArma} />
        <Stack.Screen name="Armadura" component={PageArmadura} />
        <Stack.Screen name="Zumbi" component={PageZumbi} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

// export default class HelloWorldApp extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       nome: '',
//       calibri: '',
//       dano: '',
//     };
//   }
//   render() {
//     return (
//       <View>
//         <View>
//           <View>
//             <TextInput
//               style={{height: 40, borderColor: 'gray'}}
//               placeholder="Nome"
//               onChangeText={nome => this.setState({nome})}
//               value={this.state.nome}
//             />
//           </View>
//           <View>
//             <TextInput
//               style={{height: 40, borderColor: 'gray'}}
//               placeholder="calibri"
//               onChangeText={calibri => this.setState({calibri})}
//               value={this.state.calibri}
//             />
//           </View>
//           <View>
//             <TextInput
//               style={{height: 40, borderColor: 'gray'}}
//               placeholder="Dano"
//               onChangeText={dano => this.setState({dano})}
//               value={this.state.dano}
//             />
//           </View>
//         </View>
//         <View>
//           <Button onPress={() => {}} title="Cadastrar" />
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   textInput: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//   },
// });

// import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// const App: () => React$Node = () => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={styles.scrollView}>
//           <Header />
//           {global.HermesInternal == null ? null : (
//             <View style={styles.engine}>
//               <Text style={styles.footer}>Engine: Hermes</Text>
//             </View>
//           )}
//           <View style={styles.body}>
//             {/* <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Step One</Text>
//               <Text style={styles.sectionDescription}>
//                 Edit <Text style={styles.highlight}>App.js</Text> to change this
//                 screen and then come back to see your edits.
//               </Text>
//             </View> */}
//             {/* <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>See Your Changes</Text>
//               <Text style={styles.sectionDescription}>
//                 <ReloadInstructions />
//               </Text>
//             </View> */}
//             {/* <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Debug</Text>
//               <Text style={styles.sectionDescription}>
//                 <DebugInstructions />
//               </Text>
//             </View> */}
//             {/* <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Learn More</Text>
//               <Text style={styles.sectionDescription}>
//                 Read the docs to discover what to do next:
//               </Text>
//             </View> */}
//             {/* <LearnMoreLinks /> */}
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

// export default App;