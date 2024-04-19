import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TextInput } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.fundo}>
      <View style={styles.botaoVoltar}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.textoVoltar}>Back</Text>
      </View>

      <View style={styles.fundoLogo}>
        <Image
          source={require('./src/logo.png')}
          style={styles.imagem}
        />
      </View>

      <View style={styles.textos}>
        <Text style={styles.proceed}>Proceed with your</Text>
        <Text style={[styles.negrito]}>Login</Text>
      </View>

      <View style={styles.sla}>
        <TextInput
          style={styles.input}
          label="Username"
          autoCorrect={false}
          right={<TextInput.Icon icon="account" />}
        />
        <TextInput
          style={styles.input}
          label="Password"
          autoCorrect={false}
          secureTextEntry
          right={<TextInput.Icon icon="eye" /> }
        />  
        <TouchableOpacity style={styles.login}>
          <Text style={styles.textoLogin}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.esqueceuSenha}>
          <Text style={styles.textoSenha}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },
  botaoVoltar: {
    position: 'absolute',
    top: 20,
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
  },
  textoVoltar: {
    fontSize: 16,
    marginLeft: 5,
  },
  fundoLogo: {
    position: 'absolute',
    left: 20,
    top: 50,
    alignItems: 'flex-start',
    marginTop: 30,
  },
  imagem: {
    width: 170,
    height: 170,
  },
  sla: {
    alignItems: "center",
    justifyContent: "center",
    width: "80%",   
    marginTop: 90,
  },
  input: {
    backgroundColor: "white",
    width: "80%",
    marginBottom: 15,
    fontSize: 17,
    padding: 2,
    color: "black",
  },
  login: {
    backgroundColor: "#e20030",
    width: "78%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
  },
  textoLogin: {
    color: "white",
    fontSize: 15,
  },
  esqueceuSenha: {
    marginTop: 15,
  },
  textoSenha: {
    color: "#000000",
  },
  textos: {
    position: 'absolute',
    left: 20,
    top: 270, 
  },
  proceed: {
    fontSize: 20,
  },
  negrito: {
    fontWeight: "bold",
    fontSize: 30,
  },

});
