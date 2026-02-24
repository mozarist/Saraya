import { Image, Text, View } from "react-native";
import { useTailwindColor } from "@/hooks/use-tailwind-color";
import { LinearGradient } from "expo-linear-gradient";
import React, { Component } from "react";
import { Button } from "@/components/ui/button";
import { router } from "expo-router";

export default function GetStarted() {
  const primary = useTailwindColor("primary");
  const accentRed = useTailwindColor("accentRed");

  return (
    <View className="flex-1 bg-background">
      <LinearGradient
        colors={[accentRed, primary]}
        className="bg-primary w-full overflow-hidden"
        style={{ borderBottomStartRadius: 200, height: 325 }}
      />

      <View
        className="absolute flex-1 justify-center items-center w-full h-full gap-8"
        style={{ paddingTop: 96 }}
      >
        <View className="gap-4">
          <View className="justify-center items-center bg-primary w-40 aspect-square border-4 border-primary-foreground rounded-full">
            <Image
              source={require("@/assets/ui/saraya-logo.png")}
              style={{ width: 110, height: 110 }}
              resizeMode="contain"
            />
          </View>

          <Text className="text-primary text-3xl text-center font-serif">
            Saraya
          </Text>
        </View>

        <Text
          className="text-foreground text-xl text-center"
          style={{ maxWidth: 250, textTransform: "capitalize" }}
        >
          Master finance, earn rewards, grow faster!
        </Text>

        <View className="w-full p-12">
          <Button size="lg" onPress={() => router.push("/login")}>
            Mulai Sekarang!
          </Button>
        </View>
      </View>
    </View>
  );
}
