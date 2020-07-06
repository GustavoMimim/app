import React from 'react';
import { SafeAreaView, View, StyleSheet, StatusBar, Alert, FlatList } from 'react-native';
import { Text, Card, ListItem } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { SwipeListView } from 'react-native-swipe-list-view';

const technical = [
    {
      name: 'Gustavo B. Mimim',
      avatar: 'https://image.flaticon.com/icons/png/512/306/306473.png',
      tarefas: 6
    },
    {
      name: 'Renan L. R. da Silva',
      avatar: 'https://image.flaticon.com/icons/png/512/306/306473.png',
      tarefas: 4
    },
    {
      name: 'Vinicius A. Ribeiro',
      avatar: 'https://image.flaticon.com/icons/png/512/306/306473.png',
      tarefas: 3
    },
    {
        name: 'Adriano P. Souza',
        avatar: 'https://image.flaticon.com/icons/png/512/306/306473.png',
        tarefas: 1
    },
    {
        name: 'Márcio F. Freitas',
        avatar: 'https://image.flaticon.com/icons/png/512/306/306473.png',
        tarefas: 1
    },
  ]

  const technicalIndisponiveis = [
    {
      name: 'Lucas B. Moura',
      avatar: 'https://img.icons8.com/cotton/2x/cancel-2--v2.png',
      tarefas: 0
    },
    {
      name: 'Aline O. Pereira',
      avatar: 'https://img.icons8.com/cotton/2x/cancel-2--v2.png',
      tarefas: 4
    },
    {
      name: 'João A. Gomes',
      avatar: 'https://img.icons8.com/cotton/2x/cancel-2--v2.png',
      tarefas: 3
    },
    {
        name: 'Guilherme P. Cardoso',
        avatar: 'https://img.icons8.com/cotton/2x/cancel-2--v2.png',
        tarefas: 1
    },
    {
        name: 'Thainá T. Romero',
        avatar: 'https://img.icons8.com/cotton/2x/cancel-2--v2.png',
        tarefas: 1
    },
  ]

  export default function Tecnicos () {

  
    return (
      <View>
  
        <StatusBar barStyle="dark-content" backgroundColor='white' translucent />
  
        <ScrollView>
  
          
          <View>
            <Card
              title='Técnicos disponíveis'
            >
              {
                technical.map((u, i) => {
                  return (
                    <ListItem
                      button onPress={() => {Alert.alert(u.name + ' possui ' + u.tarefas + ' tarefa(s)')}}
                      key={i}
                      roundAvatar
                      title={u.name}
                      leftAvatar={{ source: { uri: u.avatar } }}
                      containerStyle={{ height: 60 }}
                      bottomDivider
                      chevron={{ color: 'gray' }}
                      badge={{ value: u.tarefas, textStyle: { color: 'white' }, containerStyle: { marginTop: 0 } }}
                    />
                  );
                })
              }
            </Card>

            <Card
              title='Técnicos indisponíveis'
              titleStyle={{color: 'gray'}}
              containerStyle={{backgroundColor: "#eee"}}
            >
              {
                technicalIndisponiveis.map((u, i) => {
                  return (
                    <ListItem
                      button onPress={() => {Alert.alert(u.name + ' não possui possui tarefas no momento.')}}
                      key={i}
                      roundAvatar
                      title={u.name}
                      titleStyle={{color: '#aaa'}}
                      leftAvatar={{ source: { uri: u.avatar } }}
                      containerStyle={{ height: 60 }}
                      bottomDivider
                      chevron
                      containerStyle={{backgroundColor: "#eee"}}
                    />
                  );
                })
              }
            </Card>
          </View>
             
        </ScrollView>
      </View>
  
  
    );
  }