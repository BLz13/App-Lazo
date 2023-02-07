import { OptionsMenuBtn } from '../../components/index'
import { View } from 'react-native';
import { styles } from './styles';

const Menu = ({navigation}) => {

    return (
        <View style={styles.appContainer}>
            <OptionsMenuBtn
                onPress={() => navigation.navigate("General")}
                btnText="General Notes"
            />
        </View>
    );
};

export default Menu;