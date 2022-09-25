import {StyleSheet} from 'react-native;'

function goalItem()
{
    return (
    <View style={styles.goalItem}>
    <Text style={styles.goalText}> {goal}</Text>
    </View>
    );
}

export default goalItem;

const styles = StyleSheet.create({});