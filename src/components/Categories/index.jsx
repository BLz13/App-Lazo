import { CATEGORIES } from "../../assets/Data/index"
import CategoryItem from "./Item";
import { FlatList } from "react-native";
import React from "react";
import { styles } from "./styles";

const Categories = (props) => {

    // const {onHandleModal} = props;

    const onHandleModal = (category) => {};

    const renderItemList =  ({item}) => (
      <CategoryItem
        onHandleModal={onHandleModal}
        category={item}
      />
    );
    
    const keyExtractorList =  ( categoryItem ) => categoryItem.id;

    return (
        <FlatList
            style={styles.categoriesList}
            data={CATEGORIES}
            renderItem={renderItemList}
            keyExtractor={keyExtractorList}
        />
    )
}
export default Categories;