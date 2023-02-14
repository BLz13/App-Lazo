import { Text, TouchableOpacity } from 'react-native'

import React from "react";
import { styles } from './styles';

const CategoryItem = (props) => {

  const { onPressCategory, category } = props;

    return (
      <TouchableOpacity
        style={styles.listCategoryContainer}
        onPress={ () => onPressCategory(category) }
      >
        <Text style={styles.categoryTitle} >
          {category.name}
        </Text>
        <Text style={styles.categoryDescription} >
          {category.description}
        </Text>
      </TouchableOpacity>
    )
}

export default CategoryItem;