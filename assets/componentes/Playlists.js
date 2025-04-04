import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';

export default function Playlist() {
  return (
    <ScrollView style={estilo.scrollView}>
      <View style={estilo.container}>

        {/* Título "PLAYLIST MÚSICAS MAIS TOCADAS" com o mesmo estilo do título "Artistas" */}
        <Text style={estilo.title}>PLAYLIST MÚSICAS MAIS TOCADAS</Text>

        {/* Card de "7 Rings" */}
        <View style={estilo.card}>
          <Image source={require('../a2.jpg')} style={estilo.imgArt} />
          <View style={estilo.cardContent}>
            <Text style={estilo.titulo}>7 Rings</Text>
            <Text style={estilo.artista}>Ariana Grande</Text>
            <Text style={estilo.letreco}>
              "I want it, I got it, I want it, I got it" 🎶
            </Text>
            <View style={estilo.audioIconContainer}>
              <Text style={estilo.audioIcon}>🎧</Text>
              <Text style={estilo.audioText}>Audio</Text>
            </View>
          </View>
        </View>

        {/* Card de "SICKO MODE" */}
        <View style={estilo.card}>
          <Image source={require('../tra.webp')} style={estilo.imgArt} />
          <View style={estilo.cardContent}>
            <Text style={estilo.titulo}>SICKO MODE</Text>
            <Text style={estilo.artista}>Travis Scott</Text>
            <Text style={estilo.letreco}>
              "Astro, yeah, Sun is down, freezin' cold" ❄️
            </Text>
            <View style={estilo.audioIconContainer}>
              <Text style={estilo.audioIcon}>🎧</Text>
              <Text style={estilo.audioText}>Audio</Text>
            </View>
          </View>
        </View>

        {/* Card de "HUMBLE." */}
        <View style={estilo.card}>
          <Image source={require('../ken.jpeg')} style={estilo.imgArt} />
          <View style={estilo.cardContent}>
            <Text style={estilo.titulo}>HUMBLE.</Text>
            <Text style={estilo.artista}>Kendrick Lamar</Text>
            <Text style={estilo.letreco}>
              "Sit down, be humble" 💯
            </Text>
            <View style={estilo.audioIconContainer}>
              <Text style={estilo.audioIcon}>🎧</Text>
              <Text style={estilo.audioText}>Audio</Text>
            </View>
          </View>
        </View>

        {/* Card de "Billie Jean" */}
        <View style={estilo.card}>
          <Image source={require('../mike.webp')} style={estilo.imgArt} />
          <View style={estilo.cardContent}>
            <Text style={estilo.titulo}>Billie Jean</Text>
            <Text style={estilo.artista}>Michael Jackson</Text>
            <Text style={estilo.letreco}>
              "The kid is not my son" 👑
            </Text>
            <View style={estilo.audioIconContainer}>
              <Text style={estilo.audioIcon}>🎧</Text>
              <Text style={estilo.audioText}>Audio</Text>
            </View>
          </View>
        </View>

      </View>
    </ScrollView>
  );
}

const estilo = StyleSheet.create({
  scrollView: {
    backgroundColor: '#f4f4f4',
  },
  container: {
    flex: 1,
    padding: 15,
    paddingTop: 20,
    alignItems: 'center',
  },

  // Estilo do título "PLAYLIST MÚSICAS MAIS TOCADAS"
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.2)', // Sombra suave no título
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 6,
  },

  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },

  imgArt: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginRight: 15,
    backgroundColor: '#ddd',
    shadowColor: 'blue',
    elevation: 10,
  },

  cardContent: {
    flex: 1,
  },

  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },

  artista: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
  },

  letreco: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5,
    fontStyle: 'italic',
  },

  audioIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },

  audioIcon: {
    fontSize: 24,
    color: '#1e90ff',
    marginRight: 8,
  },

  audioText: {
    fontSize: 16,
    color: '#555',
    fontWeight: 'bold',
  },
});

