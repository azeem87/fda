import React from 'react';
import { Button, Layout, List, StyleService, Text, useStyleSheet } from '@ui-kitten/components';
import CartItem from '../components/cart-item.component';

const CartView = () => {
  const initialProducts = [{
    title: 'Pink Chair',
    category: 'Furniture',
    subtitle: 'Furniture',
    image: require('../assets/images/image-product-2.jpg'),
    price: 130,
    formattedPrice: 130,
    amount: 1
  }];

  const styles = useStyleSheet(themedStyle);
  const [products, setProducts] = React.useState(initialProducts);

 // const totalCost = () => products.reduce((acc, product) => acc + product.totalPrice, 0);

  const totalCost = () => 0;

  const onItemRemove = (product, index) => {
    products.splice(index, 1);
    setProducts([...products]);
  };

  const onItemChange = (product, index) => {
    products[index] = product;
    setProducts([...products]);
  };

  const renderFooter = () => (
    <Layout style={styles.footer}>
      <Text category="h5">Total Cost:</Text>
      <Text category="h5">{`$${totalCost()}`}</Text>
    </Layout>
  );

  const renderProductItem = (info) => (
    <CartItem
      style={styles.item}
      index={info.index}
      product={info.item}
      onProductChange={onItemChange}
      onRemove={onItemRemove}
    />
  );

  return (
    <Layout
      style={styles.container}
      level="1"
    >
      <List
        data={products}
        renderItem={renderProductItem}
        ListFooterComponent={renderFooter}
      />
      <Button
        style={styles.checkoutButton}
        size="giant"
      >
        CHECKOUT
      </Button>
    </Layout>
  );
};

const themedStyle = StyleService.create({
  container: {
    flex: 1
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: 'background-basic-color-3'
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 0.5,
    paddingVertical: 28,
    paddingHorizontal: 16
  },
  checkoutButton: {
    marginHorizontal: 16,
    marginVertical: 24
  }
});

export default CartView;
