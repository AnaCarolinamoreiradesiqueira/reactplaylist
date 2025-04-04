import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function UserProfile() {
  return (
    <ScrollView style={estilo.scrollView}>
      <View style={estilo.container}>
        
       
        <View style={estilo.profileCard}>
          <View style={estilo.profileHeader}>
            <Image source={require('../perfil.jpg')} style={estilo.profileImage} />
            <View style={estilo.profileInfo}>
              <Text style={estilo.profileName}>João Silva</Text>
              <Text style={estilo.profileAge}>Idade: 25 anos</Text>
              <Text style={estilo.profileEmail}>Email: joao.silva@email.com</Text>
            </View>
          </View>

         
          <View style={estilo.bioContainer}>
            <Text style={estilo.sectionTitle}>Sobre Mim</Text>
            <Text style={estilo.bioText}>
              Olá! Eu sou o João, um apaixonado por música, tecnologia e cultura pop. Desde pequeno, meu coração bate mais forte com boas músicas, especialmente os gêneros pop, hip-hop e R&B. 
              Além disso, sou estudante de Engenharia de Software e adoro explorar novas tecnologias, como inteligência artificial e realidade aumentada.
              Nas horas livres, gosto de jogar videogame, assistir séries e passar tempo com meus amigos. 🎮🎧
            </Text>
          </View>
        </View>

       
        <Text style={estilo.sectionTitle}>Suas Preferências de Playlist</Text>
        
        
        <View style={estilo.card}>
          <Image source={require('../a2.jpg')} style={estilo.imgArt} />
          <View style={estilo.cardContent}>
            <Text style={estilo.titulo}>7 Rings</Text>
            <Text style={estilo.artista}>Ariana Grande</Text>
            <Text style={estilo.letreco}>“I want it, I got it, I want it, I got it” 🎶</Text>
          </View>
        </View>

        <View style={estilo.card}>
          <Image source={require('../tra.webp')} style={estilo.imgArt} />
          <View style={estilo.cardContent}>
            <Text style={estilo.titulo}>SICKO MODE</Text>
            <Text style={estilo.artista}>Travis Scott</Text>
            <Text style={estilo.letreco}>“Astro, yeah, Sun is down, freezin' cold” ❄️</Text>
          </View>
        </View>

        <View style={estilo.card}>
          <Image source={require('../ken.jpeg')} style={estilo.imgArt} />
          <View style={estilo.cardContent}>
            <Text style={estilo.titulo}>HUMBLE.</Text>
            <Text style={estilo.artista}>Kendrick Lamar</Text>
            <Text style={estilo.letreco}>“Sit down, be humble” 💯</Text>
          </View>
        </View>

        <View style={estilo.card}>
          <Image source={require('../mike.webp')} style={estilo.imgArt} />
          <View style={estilo.cardContent}>
            <Text style={estilo.titulo}>Billie Jean</Text>
            <Text style={estilo.artista}>Michael Jackson</Text>
            <Text style={estilo.letreco}>“The kid is not my son” 👑</Text>
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
    padding: 20,
    alignItems: 'center',
  },

 
  profileCard: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    marginBottom: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },

  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
    borderWidth: 3,
    borderColor: '#ddd',
    backgroundColor: '#f9f9f9',
  },

  profileInfo: {
    flex: 1,
  },

  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },

  profileAge: {
    fontSize: 16,
    color: '#888',
  },

  profileEmail: {
    fontSize: 16,
    color: '#888',
    marginTop: 5,
  },

 
  bioContainer: {
    marginTop: 20,
  },

  bioText: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
    textAlign: 'justify',
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
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
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  imgArt: {
    width: 80,
    height: 80,
    borderRadius: 10,
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
});
