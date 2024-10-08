import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAuth } from '../hooks/useAuth';

const ProfileScreen: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <View>
      <Text>Email: {user?.email}</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
};

export default ProfileScreen;