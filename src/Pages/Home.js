import React, { useState, useEffect } from 'react';

import {
    View,
    FlatList,
    Text,
    TextInput,
    StyleSheet,
    Platform,
} from 'react-native';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

export function Home() {
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState([]);
    const [greeting, setGreeting] = useState('');

    function handleAddNewSkill() {
        setMySkills([...mySkills, newSkill]);
    }

    useEffect(() => {
        const currentHour = new Date().getHours();

        if (currentHour >= 0 && currentHour < 12) {
            setGreeting('Good Morning!');
        } else if (currentHour >= 12 && currentHour < 18) {
            setGreeting('Good Afternoon!');
        } else if (currentHour >= 18 && currentHour < 24) {
            setGreeting('Good Night!');
        }
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome, Murilo</Text>
            <Text style={styles.greetings}>{greeting}</Text>

            <TextInput
                style={styles.input}
                placeholder="New skill..."
                placeholderTextColor="#555"
                onChangeText={setNewSkill}
            />

            <Button onPress={handleAddNewSkill} />

            <Text style={[styles.title, { marginVertical: 50 }]}>MySkills</Text>

            <FlatList
                data={mySkills}
                keyExtractor={item => item}
                renderItem={({ item }) => <SkillCard skill={item} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    input: {
        backgroundColor: '#1F1E25',
        color: '#fff',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7,
    },
    greetings: {
        color: '#fff',
    },
});
