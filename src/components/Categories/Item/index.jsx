import { Text, TouchableOpacity } from 'react-native'

import React from "react";
import { styles } from './styles';

const CategoryItem = (props) => {

  const { onHandleModal, category } = props;

    return (
      <TouchableOpacity
        style={styles.listCategoryContainer}
        onPress={ () => onHandleModal(item) }
      >
        <Text style={styles.categoryItem} >
          {category.name}
        </Text>
      </TouchableOpacity>
    )
}

export default CategoryItem;