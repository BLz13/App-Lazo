import { Categories } from '../../components/index'
import { View } from 'react-native';
import { styles } from './styles';

const Menu = ({navigation}) => {

    const onPressCategory = (category) => {
        navigation.navigate(category.id,{
          categoryId: category.id,
          categoryName: category.name
        })
     };

    return (
        <View style={styles.appContainer}>
            <Categories onPressCategory={onPressCategory} />
        </View>
    );
};

export default Menu;