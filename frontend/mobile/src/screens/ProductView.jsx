import React from 'react';
import { Dimensions, ImageBackground, View } from 'react-native';
import { Button, Card, List, StyleService, Text, useStyleSheet, Icon } from '@ui-kitten/components';

export const CartIcon = (style, props) => (
  <Icon {...style} {...props} name="shopping-cart" />
);

const ProductView = ({ navigation }) => {
  const styles = useStyleSheet(themedStyles);

  const displayProducts = [{
    title: 'Pink Chair',
    category: 'Furniture',
    image: require('../assets/images/image-product-1.png'),
    price: 130,
    amount: 1
  },
  {
    title: 'Pink Chair',
    category: 'Furniture',
    image: require('../assets/images/image-product-2.jpg'),
    price: 130,
    amount: 1
  },
  {
    title: 'Pink Chair',
    category: 'Furniture',
    image: require('../assets/images/image-product-3.jpg'),
    price: 130,
    amount: 1
  },
  {
    title: 'Pink Chair',
    category: 'Furniture',
    image: require('../assets/images/image-product-1.png'),
    price: 130,
    amount: 1
  }];

  // eslint-disable-next-line no-unused-vars
  const onItemPress = (index) => {
    navigation && navigation.navigate('ProductDetails3');
  };

  // eslint-disable-next-line no-unused-vars
  const onItemCartPress = (index) => {
    navigation && navigation.navigate('ShoppingCart');
  };

  const renderItemFooter = (info) => (
    <View style={styles.itemFooter}>
      <Text category="s1">
        ${info.item.price}
      </Text>
      <Button
        style={styles.iconButton}
        size="small"
        accessoryLeft={CartIcon}
        onPress={() => onItemCartPress(info.index)}
      />
    </View>
  );

  const renderItemHeader = (info) => (
    <ImageBackground
      style={styles.itemHeader}
      source={info.item.image}
    />
  );

  const renderProductItem = (info) => (
    <Card
      style={styles.productItem}
      header={() => renderItemHeader(info)}
      footer={() => renderItemFooter(info)}
      onPress={() => onItemPress(info.index)}
    >
      <Text category="s1">
        {info.item.title}
      </Text>
      <Text
        appearance="hint"
        category="c1"
      >
        {info.item.category}
      </Text>
    </Card>
  );

  return (
    <List
      contentContainerStyle={styles.productList}
      data={displayProducts}
      numColumns={2}
      renderItem={renderProductItem}
    />
  );
};

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: 'background-basic-color-2'
  },
  productList: {
    paddingHorizontal: 8,
    paddingVertical: 8
  },
  productItem: {
    flex: 1,
    margin: 8,
    maxWidth: Dimensions.get('window').width / 2 - 24,
    backgroundColor: 'background-basic-color-1'
  },
  itemHeader: {
    height: 100
  },
  itemFooter: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  iconButton: {
    paddingHorizontal: 0
  }
});

export default ProductView;
