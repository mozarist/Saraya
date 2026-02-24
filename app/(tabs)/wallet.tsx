import { useTailwindColor } from "@/hooks/use-tailwind-color";
import FontAwesome6 from "@expo/vector-icons/build/FontAwesome6";
import Ionicons from "@expo/vector-icons/build/Ionicons";
import { LinearGradient } from 'expo-linear-gradient';
import React from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Wallet() {
  const primary = useTailwindColor("primary");
  const primaryForeground = useTailwindColor("primaryForeground");
  const accentBlue = useTailwindColor("accentBlue");

  return (
    <SafeAreaView edges={["top"]} className="flex-1 bg-primary gap-4">
      <View className="gap-4 px-4 py-2 pb-6">
        <View className="flex-row justify-between items-center">
          <View className="absolute flex-row items-center gap-1">
            <Ionicons name="shield-checkmark" size={20} color={primaryForeground} />
            <Text className="w-24 text-sm/4 text-primary-foreground font-semibold uppercase">
              Dana Protection
            </Text>
          </View>

          <View>
            <Text className="text-3xl font-bold text-primary/0">
              R
            </Text>
          </View>

          <Text className="text-primary-foreground text-2xl font-medium">
            Dompet
          </Text>

          <View className="justify-center items-center w-6 bg-primary-foreground aspect-square rounded-full">
            <FontAwesome6 name="plus" size={16} color={primary} />
          </View>
        </View>
      </View>
      <View className="flex-1 bg-background gap-4 rounded-t-2xl">
        <View className="relative -top-10 gap-6 p-4">
          <TextInput
            className="bg-background border border-border rounded-md p-2 h-12"
            placeholder="Lagi cari apa di Dompet?"
          />

          <View className="gap-2">
            <View className="flex-row justify-between items-center">
              <Text className="text-muted text-sm font-medium uppercase">
                Metode Pembayaran
              </Text>
              <Text className="text-muted text-sm uppercase">
                Belum ada kartu*
              </Text>
            </View>

            <LinearGradient colors={[primary, accentBlue]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} className="bg-primary w-full p-4 border border-border rounded-xl overflow-hidden">
              <View className="justify-center items-center bg-primary-foreground w-14 aspect-square rounded-full">
                <Ionicons name="wallet" size={36} color={primary} />
              </View>
            </LinearGradient>

            <View className="relative -top-8 bg-card w-full p-4 pb-16 gap-2 border border-border rounded-xl overflow-hidden">
              <View className="flex-row justify-between items-center">
                <Text className="text-muted text-xl font-medium">
                  Simpan kartu bank!
                </Text>

                <Pressable className="flex-row gap-1 bg-transparent rounded-full justify-center items-center px-3 py-1 border border-border">
                  <FontAwesome6 name="plus" size={12} color={primary} />
                  <Text className="text-primary font-medium">Tambah</Text>
                </Pressable>
              </View>

              <Text className="text-sm text-muted">
                Transaksi bebas ribet dengan berbagai pilihan pembayaran.
              </Text>
            </View>

          </View>
        </View>
        <View style={{ top: -120 }} className="relative justify-center items-center bg-background p -2 border-t border-border">
          <View
            className="w-full py-2 border-t border-border" style={{ borderStyle: "dashed" }}>
            <Text className="text-lg text-muted text-center font-medium uppercase">
              Wallet
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
