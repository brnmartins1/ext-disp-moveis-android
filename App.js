import React, { useState } from "react";
import { View, Text, TextInput, FlatList, StyleSheet } from "react-native";
import { Button, Card } from "react-native-paper";

export default function App() {
  const [perifericos, setPerifericos] = useState([]);
  const [nome, setNome] = useState("");
  const [usuario, setUsuario] = useState("");
  const [local, setLocal] = useState("");
  const [equipe, setEquipe] = useState("");

  const adicionarPeriferico = () => {
    if (nome && usuario && local && equipe) {
      setPerifericos([
        ...perifericos,
        {
          nome,
          usuario,
          local,
          equipe,
          status: "Troca Feita"
        }
      ]);
      setNome("");
      setUsuario("");
      setLocal("");
      setEquipe("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Controle de Troca de Periféricos</Text>

      <Card style={styles.card}>
        <TextInput
          style={styles.input}
          placeholder="Nome do Periférico"
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          style={styles.input}
          placeholder="Tecnico"
          value={usuario}
          onChangeText={setUsuario}
        />
        <TextInput
          style={styles.input}
          placeholder="Local da Troca"
          value={local}
          onChangeText={setLocal}
        />
        <TextInput
          style={styles.input}
          placeholder="Equipe"
          value={equipe}
          onChangeText={setEquipe}
        />
        <Button mode="contained" onPress={adicionarPeriferico}>
          Adicionar Periférico
        </Button>
      </Card>

      <FlatList
        data={perifericos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Card style={styles.item}>
            <Text>Nome: {item.nome}</Text>
            <Text>Usuário: {item.usuario}</Text>
            <Text>Local: {item.local}</Text>
            <Text>Equipe: {item.equipe}</Text>
            <Text>Status: {item.status}</Text>
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f5f5f5" },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center"
  },
  card: { padding: 15, marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5
  },
  item: { padding: 10, marginVertical: 5 }
});
