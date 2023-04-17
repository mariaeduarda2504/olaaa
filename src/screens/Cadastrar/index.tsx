import React from "react";
import { View, Text, KeyboardAvoidingView, TextInput } from "react-native"
import {styles} from "./styles"
import { MaterialCommunityIcons, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { colors } from "../../styles/colors";
import { ComponentButtonInterface } from "../../components";

export function Cadastrar() {
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView>
                <Text style={styles.title}>Cadastrar</Text>
                <View style={styles.formRow}>
                <MaterialIcons name="person" size={24} color="black" />
                <TextInput
                    placeholder="Nome"
                    placeholderTextColor={colors.black}
                    style={styles.input}
                    />
                </View>
                <View style={styles.formRow}>
                <MaterialCommunityIcons name="email" size={24} color="black" />
                <TextInput
                    placeholder="E-mail"
                    placeholderTextColor={colors.black}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    style={styles.input}
                    />
                </View>
                <View style={styles.formRow}>
                <Ionicons name="key" size={24} color="black" />
                <TextInput
                    placeholder="Senha"
                    placeholderTextColor={colors.black}
                    secureTextEntry={true}
                    autoCapitalize="none"
                    style={styles.input}
                    />
                </View>
                <ComponentButtonInterface title="Salvar" type="primary" onPressI={()=>console.log("cadastrar")}/>
                <ComponentButtonInterface title="Voltar" type="primary" onPressI={()=>console.log("Login")}/>
            </KeyboardAvoidingView>
        </View>
    )
}