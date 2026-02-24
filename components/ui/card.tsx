import { View, Text } from "react-native";
import React, { Children } from "react";

export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <View className="gap-3 bg-card w-full p-3 border border-border rounded-lg">
        {children}
    </View>
  );
}
