import { Text, View, StyleSheet } from "react-native"

export const RedditItem = ({ item }) => (

    <View style={styles.item}>
        <Text>{item.data.title}</Text>
    </View>
);


const styles = StyleSheet.create({
    item: {
        backgroundColor: '#cecece',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    }
});