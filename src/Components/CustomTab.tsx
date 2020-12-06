import React from 'react';
import {Button, Footer, Icon, FooterTab} from 'native-base';
import {Actions} from 'react-native-router-flux';
import {StyleSheet} from 'react-native';

const CustomTab = () => {
  return (
    <Footer>
      <FooterTab>
        <Button
          block
          style={styles.buttonStyle}
          onPress={() => {
            Actions.home();
          }}>
          <Icon name="home" />
        </Button>
        <Button
          block
          style={styles.buttonStyle}
          onPress={() => {
            Actions.info();
          }}>
          <Icon name="person" />
        </Button>
      </FooterTab>
    </Footer>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    flex: 1,
  },
});

export default CustomTab;
