import { View, Text } from "react-native";
import React from "react";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function pay() {
  return (
    <View className="bg-primary-foreground flex-1 items-center justify-center gap-4">
      <Text className="text-primary text-2xl font-medium">QRIS Indonesia</Text>
      <View className="bg-foreground/75 p-8 rounded-xl">
        <MaterialIcons name="qr-code-scanner" size={250} color="white" />
      </View>
    </View>
  );
}
