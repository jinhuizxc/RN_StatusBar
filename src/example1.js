import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    StatusBar
} from 'react-native';

export default class RN_StatusBar extends Component {
    render() {
        return (
            <View>
                <TouchableHighlight
                    style={styles.wrapper}
                    onPress={() => {
                        StatusBar.setHidden(true);
                    }}>
                    <View style={styles.button}>
                        <Text>setHidden(true)</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.wrapper}
                    onPress={() => {
                        StatusBar.setHidden(false);
                    }}>
                    <View style={styles.button}>
                        <Text>setHidden(false)</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.wrapper}
                    onPress={() => {
                        StatusBar.setBackgroundColor('#ff00ff', true);
                    }}>
                    <View style={styles.button}>
                        <Text>setBackgroundColor('#ff00ff', true)</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.wrapper}
                    onPress={() => {
                        StatusBar.setBackgroundColor('#00ff00', true);
                    }}>
                    <View style={styles.button}>
                        <Text>setBackgroundColor('#00ff00', true)</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.wrapper}
                    onPress={() => {
                        StatusBar.setTranslucent(true);
                        StatusBar.setBackgroundColor('rgba(0, 0, 0, 0.4)', true);
                    }}>
                    <View style={styles.button}>
                        <Text>setTranslucent(true) and setBackgroundColor('rgba(0, 0, 0, 0.4)', true)</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.wrapper}
                    onPress={() => {
                        StatusBar.setTranslucent(false);
                        StatusBar.setBackgroundColor('black', true);
                    }}>
                    <View style={styles.button}>
                        <Text>setTranslucent(false) and setBackgroundColor('black', true)</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        borderRadius: 5,
        marginBottom: 5,
    },
    button: {
        borderRadius: 5,
        backgroundColor: '#eeeeee',
        padding: 10,
    },
    title: {
        marginTop: 16,
        marginBottom: 8,
        fontWeight: 'bold',
    }
});