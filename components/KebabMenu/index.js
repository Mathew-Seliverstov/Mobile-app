import React from 'react';
import {View} from 'react-native'
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import { Octicons } from '@expo/vector-icons';

const KebabMenu = (props) => {
  const { setVisible, visible, navigation, clearLogin, deleteAcc } = props;

  function logout() {
    clearLogin();
    setVisible(false);
  }

  function deleteAccount() {
    deleteAcc();
    setVisible(false);
  }

  return (
    <Menu
      visible={visible}
      anchor={
        <Octicons
          name="kebab-vertical"
          size={24}
          color="black"
          onPress={() => setVisible(true)}
          style={{  width: 40, height: '100%',  padding: 15 }}
        /> 
      }
      onRequestClose={() => setVisible(false)}
    >
      <MenuItem onPress={() => deleteAccount()}>Удалить аккаунт</MenuItem>
      <MenuDivider />
      <MenuItem onPress={() => logout()}>Выйти</MenuItem>
    </Menu>
  );
};

export default KebabMenu;
