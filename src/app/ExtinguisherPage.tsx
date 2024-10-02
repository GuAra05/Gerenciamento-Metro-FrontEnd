import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

export default function ExtinguisherPage() {
    const [patrimonio, setPatrimonio] = React.useState("");
    const [equipe, setEquipe] = React.useState("");
    const [tipo, setTipo] = React.useState("");
    const [capacidade, setCapacidade] = React.useState("");
    const [recarga, setRecarga] = React.useState("");

    return (
        <View>
            <Text style={styles.tittle}>Extintor</Text>
            <View style={styles.line} />
            <TextInput
                mode="outlined"
                label="Codigo de Patrimonio"
                style={styles.localInput}
                value={patrimonio}
                onChangeText={(patrimonio) => setPatrimonio(patrimonio)}
            />
            <TextInput
                mode="outlined"
                label="Codigo de Equipe"
                style={styles.localInput}
                value={equipe}
                onChangeText={(equipe) => setEquipe(equipe)}
            />
            <TextInput
                mode="outlined"
                label="Tipo de Extintor"
                style={styles.localInput}
                value={tipo}
                onChangeText={(tipo) => setTipo(tipo)}
            />
            <TextInput
                mode="outlined"
                label="Capacidade do Extintor"
                style={styles.localInput}
                value={capacidade}
                onChangeText={(capacidade) => setCapacidade(capacidade)}
            />
            <TextInput
                mode="outlined"
                label="Proxima Recarga / Manutenção"
                style={styles.localInput}
                value={recarga}
                onChangeText={(recarga) => setRecarga(recarga)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    tittle: {
        color: "black",
        fontSize: 30,
        alignSelf: "center"
    },
    line: {
        height: 1,
        backgroundColor: "black",
        marginTop: 10,
        width: "80%",
        alignSelf: "center"
    },
    localInput: {
        width: "80%",
        alignSelf: "center",
        marginTop: 20
    }
});
