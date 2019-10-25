import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {
  View, TextInput, TouchableOpacity, Text, FlatList,
} from 'react-native';

// import { Container } from './styles';

export default function TechList() {
  const [techs, setTechs] = useState([]);
  const [newTech, setNewTech] = useState('');

  useEffect(async () => {
    const response = await AsyncStorage.getItem('@rn-testv1');

    if (response) setTechs(JSON.parse(response));
  }, []);

  useEffect(async () => {
    await AsyncStorage.setItem('@rn-testv1', JSON.stringify(techs));
  }, [techs]);


  function handleAdd() {
    setTechs([...techs, newTech]);
    setNewTech('');
  }

  return (
    <View>
      <FlatList
        data={techs}
        keyExtractor={(tech) => tech}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
      <TextInput testID="tech-input" value={newTech} onChangeText={setNewTech} />
      <TouchableOpacity onPress={handleAdd}>
        <Text>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
}
