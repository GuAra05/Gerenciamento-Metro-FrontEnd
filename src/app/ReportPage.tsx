import React, { useState } from "react";
import { ScrollView, View, Text, Button } from "react-native";
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";

import PuxarExtintoresPorEstacao from "@/api/PuxarExtintoresPorEstacao";

export default function Report() {
    const [selectedReport, setSelectedReport] = useState(null);

    const quantidadeExtintores = [
        { month: "Jabaquara", value: PuxarExtintoresPorEstacao(1) },
        { month: "Tucuruvi", value: PuxarExtintoresPorEstacao(2) }
    ];

    const StatusExtintor = [
        { month: "Jan", value: 300 },
        { month: "Fev", value: 200 },
        { month: "Mar", value: 400 },
        { month: "Abr", value: 500 },
        { month: "Mai", value: 350 },
        { month: "Jun", value: 450 },
        { month: "Jul", value: 380 },
        { month: "Ago", value: 640 },
        { month: "Set", value: 710 },
        { month: "Out", value: 520 },
        { month: "Nov", value: 490 },
        { month: "Dez", value: 600 }
    ];

    const dataExtintores = [
        { month: "Jan", value: 230 },
        { month: "Fev", value: 450 },
        { month: "Mar", value: 680 },
        { month: "Abr", value: 390 },
        { month: "Mai", value: 780 },
        { month: "Jun", value: 320 },
        { month: "Jul", value: 520 },
        { month: "Ago", value: 610 },
        { month: "Set", value: 830 },
        { month: "Out", value: 740 },
        { month: "Nov", value: 560 },
        { month: "Dez", value: 670 }
    ];

    const renderChart = (data: readonly any[] | undefined) => (
        <VictoryChart theme={VictoryTheme.material}>
            <VictoryBar
                data={data}
                x="month"
                y="value"
                style={{ data: { fill: "#c43a31" } }}
            />
        </VictoryChart>
    );

    return (
        <ScrollView>
            <View style={{ alignItems: "center", marginTop: 20 }}>
                <View
                    style={{
                        borderWidth: 2,
                        borderColor: "#0072bc",
                        borderRadius: 10,
                        padding: 15,
                        width: "90%"
                    }}
                >
                    <Text
                        style={{
                            fontSize: 20,
                            marginBottom: 20,
                            textAlign: "center"
                        }}
                    >
                        Relatório
                    </Text>

                    <View
                        style={{
                            borderWidth: 1,
                            borderColor: "#005f99",
                            padding: 10,
                            borderRadius: 5,
                            backgroundColor: "#e6f7ff"
                        }}
                    >
                        <Button
                            title=" Relatório de Trocas"
                            onPress={() => setSelectedReport("trocas")}
                        />
                        <View style={{ marginVertical: 10 }} />

                        <Button
                            title=" Relatório de Vencimentos"
                            onPress={() => setSelectedReport("vencimentos")}
                        />
                        <View style={{ marginVertical: 10 }} />

                        <Button
                            title=" Relatório de Extintores"
                            onPress={() => setSelectedReport("extintores")}
                        />
                    </View>
                </View>

                <View style={{ marginTop: 30, width: "90%" }}>
                    {selectedReport === "trocas" &&
                        renderChart(quantidadeExtintores)}
                    {selectedReport === "vencimentos" &&
                        renderChart(StatusExtintor)}
                    {selectedReport === "extintores" &&
                        renderChart(dataExtintores)}
                </View>
            </View>
        </ScrollView>
    );
}
