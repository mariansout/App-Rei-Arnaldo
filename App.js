import React, { useState } from "react";
  import { View, Text, Button, StyleSheet } from "react-native";
  
  
  
  const App = () => {
  
    return (
      <View>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text style={styles.Title}> Arnaldão, o Brabo</Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text style={styles.Text}>Rei Arnaldo I, mais conhecido como Arnaldão, o Brabo, tem suas origens na mais conhecida Brabolândia. Terra dos brabos, em que o menos brabos se chama brabinho, Arnaldo sempre teve um grande poder: todos aqueles que tocavam sua mão, automaticamente tornavam-se Arnaldos também.</Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text style={styles.Text2}>Vire um Arnaldo também!</Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text style={styles.Text3}>Clique no botão abaixo e torne-se um de nós!
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        </Text>
        <Button style={styles.Button} title="Seja um Arnaldo!"
                color="#2935A6" />
        <Text></Text>
        <View style={styles.Container}>
          <Button
          onPress={onButtonPress}
          title="Assiste série comigo??"
          color= "#2414b5"
          accessibilityLabel="Learn more about this blue button"
          />
        </View> 
       </View>
    );  
  };
  
  export default App;

const styles = StyleSheet.create({
  Title: {backgroundColor: "#2935A6", color: "#FFE68C", fontSize: 24 },
  Button: {borderColor: "#F2D56D", backgroundColor: "#2935A6"},
  Text: {color: "grey", textAlign: "center", fontWeight: "bold"},
  Text2: {color: "#FFE68C", textAlign: "center", borderColor: "blue", borderWidth: 1, borderRadius: 10, fontWeight: "bold"},
  Text3: {color: "#FFE68C", textAlign: "center", fontWeight: "bold"},
  Container: {flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#F5FCFF"},
});

//eu n sei o que essa parte de baixo significa, mas espero que vc entenda!

const onButtonPress = () => {
  Alert.alert("Button foi pressionado!");


};
  
