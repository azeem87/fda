import React from 'react';
import { Layout, Text, Button
} from '@ui-kitten/components';

const HomeView = ({ navigation }) => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category="h1">HOME</Text>
    <Button onPress={() => navigation.navigate('About')}>
      Go to About Screen
    </Button>
  </Layout>
);

export default HomeView;
