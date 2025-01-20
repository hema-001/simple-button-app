import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

export default function App() {
    const [message, setMessage] = useState('');

    return (
        <View style={styles.container}>
            <Button title="Press me!" onPress={() => setMessage('Hello, World!')} />
            {message ? <Text style={styles.message}>{message}</Text> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    message: { marginTop: 20, fontSize: 18 },
});
