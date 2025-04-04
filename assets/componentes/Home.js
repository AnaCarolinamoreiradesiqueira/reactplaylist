import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';

export default function Home() {
  return (
    <ScrollView>
      <View style={estilo.container}>

        {/* Título "Artistas" */}
        <Text style={estilo.title}>ARTISTAS</Text>

        <View style={estilo.card2}>
          <View style={estilo.card1}>
            <Image source={require('../a2.jpg')} style={estilo.imgArt} />
            <Text style={estilo.titulo}>Ariana Grande</Text>
          </View>
          <View style={estilo.textContainer}>
            <Text style={estilo.txt}>
              Ariana Grande é uma cantora e atriz norte-americana, famosa por sua voz poderosa e sucessos como "Thank U, Next" e "7 Rings". Além da música, apoia causas sociais e é um ícone do pop atual. 🎤✨
            </Text>
          </View>
        </View>

        <View style={estilo.card2}>
          <View style={estilo.card1}>
            <Image source={require('../tra.webp')} style={estilo.imgArt} />
            <Text style={estilo.titulo}>Travis Scott</Text>
          </View>
          <View style={estilo.textContainer}>
            <Text style={estilo.txt}>
              Travis Scott é um rapper e produtor famoso por hits como "SICKO MODE" e "Goosebumps". Seu estilo único o tornou um dos maiores nomes do rap. 🎤🔥
            </Text>
          </View>
        </View>

        <View style={estilo.card2}>
          <View style={estilo.card1}>
            <Image source={require('../ken.jpeg')} style={estilo.imgArt} />
            <Text style={estilo.titulo}>Kendrick Lamar</Text>
          </View>
          <View style={estilo.textContainer}>
            <Text style={estilo.txt}>
              Kendrick Lamar é um rapper, compositor e produtor musical conhecido por suas letras impactantes e álbuns aclamados como *DAMN.* e *To Pimp a Butterfly*. Ele é considerado um dos maiores artistas do hip-hop. 🎤🔥
            </Text>
          </View>
        </View>

        <View style={estilo.card2}>
          <View style={estilo.card1}>
            <Image source={require('../mike.webp')} style={estilo.imgArt} />
            <Text style={estilo.titulo}>Michael Jackson</Text>
          </View>
          <Text style={estilo.txt}>
            Michael Jackson foi um dos artistas mais influentes e icônicos da história da música. Conhecido como "O Rei do Pop", sua carreira atravessou várias décadas e gerou uma imensa legião de fãs ao redor do mundo. Com hits como "Billie Jean", "Thriller" e "Beat It", ele inovou com sua dança, estilo e vídeos musicais, transformando a indústria. Seu legado continua vivo através de suas músicas e da contribuição para a cultura pop, apesar de sua morte em 2009.
          </Text>
        </View>

      </View>
    </ScrollView>
  );
}

const estilo = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#b8393',
    padding: 10,
    paddingTop: 20,
    alignItems: 'center', 
  },

  // Estilo do título "Artistas"
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },

  card1: {
    flexDirection: 'row', 
    alignItems: 'center', 
    width: '100%',
    borderRadius: 23,
    backgroundColor: '#dbdbdb',
    paddingLeft: 10,
    paddingRight: 10,
    padding: 5,
    marginBottom: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 5, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 15,
  },

  card2: {
    width: 370,
    borderRadius: 23,
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 6,
  },

  imgArt: {
    borderRadius: 40, 
    height: 80,
    width: 80,
    marginRight: 15,
    shadowColor: 'blue',
    elevation: 10, 
    backgroundColor: 'white', 
  },

  textContainer: {
    flex: 1,
  },

  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: "sans-serif",
    textShadowColor: 'rgba(94, 94, 255, 0.3)', // Azul com transparência
    textShadowOffset: { width: 2, height: 2 }, // Direção da sombra
    textShadowRadius: 10, // Suavização da sombra
  },

  txt: {
    fontSize: 16,
    textAlign: 'justify',
    fontFamily: "sans-serif",
    fontWeight: 'bold',
    fontStyle: 'normal',
  },
});
