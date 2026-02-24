import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTailwindColor } from "@/hooks/use-tailwind-color";
import Card from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function profile() {
  const primary = useTailwindColor("primary");
  const accentOrange = useTailwindColor("accentOrange");
  const accentGreen = useTailwindColor("accentGreen");

  return (
    <View className="bg-background flex-1">
      {/* header */}
      {/* profile */}
      <SafeAreaView edges={["top"]} className="bg-primary">
        <View className="p-4 w-full bg-primary flex-row gap-2 items-center"></View>
      </SafeAreaView>
      <ScrollView>
        <View className="bg-primary pb-12">
          <View className="flex-row gap-4 px-4">
            <View className="justify-center items-center bg-accent-red w-20 h-20 rounded-full border-2 border-primary-foreground">
              <Text className="text-primary-foreground text-4xl font-medium">
                A
              </Text>
            </View>
            <View className="gap-3">
              <View>
                <Text className="text-primary-foreground text-xl font-medium">
                  Azzam Mozarist
                </Text>
                <Text className="text-primary-foreground text-md">
                  0812•••••890
                </Text>
              </View>
              <View className="flex-row gap-1 items-center justify-center px-2 py-1 rounded-full border border-primary-foreground">
                <MaterialIcons name="qr-code-scanner" size={16} color="white" />
                <Text className="text-primary-foreground text-sm uppercase">
                  Tunjukkan QR saya
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* main content */}
        <View className="-top-5 w-full flex-1 gap-4 px-4">
          <Button variant="secondary">
            <Text className="uppercase">Verifikasi akun anda</Text>
          </Button>

          <Card>
            <View className="flex-row justify-between gap-3">
              <View className="flex-1 w-full border-r border-border">
                <View className="flex-row gap-3">
                  <View className="p-2 bg-accent-green/15 rounded-full">
                    <MaterialIcons
                      name="arrow-upward"
                      size={24}
                      color={accentGreen}
                    />
                  </View>
                  <View>
                    <Text className="text-sm text-muted">Uang Masuk</Text>
                    <Text className="text-md text-foreground font-medium">
                      Rp 200.000
                    </Text>
                  </View>
                </View>
              </View>
              <View className="flex-1 w-full">
                <View className="flex-row gap-3">
                  <View className="p-2 bg-accent-orange/15 rounded-full">
                    <MaterialIcons
                      name="arrow-downward"
                      size={24}
                      color={accentOrange}
                    />
                  </View>
                  <View>
                    <Text className="text-sm text-muted">Uang Keluar</Text>
                    <Text className="text-md text-foreground font-medium">
                      Rp 100.000
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <View className="flex-row flex-wrap py-2 border-t border-border">
              <View className="w-1/2 items-center mb-2">
                <View className="w-12 h-12 rounded-lg justify-center items-center bg-primary-foreground/10 mb-0">
                  <View className="bg-primary p-1.5 rounded-full">
                    <Ionicons name="wallet" size={20} color="white" />
                  </View>
                </View>
                <View className="gap-1">
                  <Text
                    className="text-center text-sm text-foreground font-medium"
                    numberOfLines={2}
                  >
                    Saldo
                  </Text>
                  <Text
                  className="text-center text-sm text-primary"
                  numberOfLines={2}
                >
                  Rp 100.000
                </Text>
                </View>
              </View>

              <View className="w-1/2 items-center mb-2">
                <View className="w-12 h-12 rounded-lg justify-center items-center bg-primary-foreground/10 mb-0">
                  <Image
                    source={require("@/assets/ui/goals.png")}
                    className="w-8 h-8"
                    resizeMode="contain"
                  />
                </View>
                <View className="gap-1">
                  <Text
                    className="text-center text-sm text-foreground font-medium"
                    numberOfLines={2}
                  >
                    DANA Goals
                  </Text>
                  <Text
                  className="text-center text-sm text-primary"
                  numberOfLines={2}
                >
                  Buat Impian!
                </Text>
                </View>
              </View>

              <View className="w-1/2 items-center mb-2">
                <View className="w-12 h-12 rounded-lg justify-center items-center bg-primary-foreground/10 mb-0">
                  <MaterialIcons name="credit-card" size={32} color={primary} />
                </View>
                <View className="gap-1">
                  <Text
                    className="text-center text-sm text-foreground font-medium"
                    numberOfLines={2}
                  >
                    Kartu Tersimpan
                  </Text>
                  <Text
                  className="text-center text-sm text-primary"
                  numberOfLines={2}
                >
                  Kartu-mu
                </Text>
                </View>
              </View>

              <View className="w-1/2 items-center mb-2">
                <View className="w-12 h-12 rounded-lg justify-center items-center bg-primary-foreground/10 mb-0">
                  <MaterialCommunityIcons
                    name="gold"
                    size={32}
                    color={accentOrange}
                  />
                </View>
                <View className="gap-1">
                  <Text
                    className="text-center text-sm text-foreground font-medium"
                    numberOfLines={2}
                  >
                    Emas
                  </Text>
                  <Text
                  className="text-center text-sm text-primary"
                  numberOfLines={2}
                >
                  Mulai Inves Yuk
                </Text>
                </View>
              </View>
            </View>
          </Card>

          <Card>
            <View className="flex-row justify-between pb-3 border-b border-border">
              <View className="flex-row items-center gap-4">
                <Ionicons name="receipt-sharp" size={28} color={accentOrange} />
                <Text className="text-foreground text-lg">
                  My Bills
                </Text>
              </View>
            </View>

            <View className="flex-row justify-between pb-3 border-b border-border">
              <View className="flex-row items-center gap-4">
                <MaterialIcons name="discount" size={28} color={accentOrange} />
                <Text className="text-foreground text-lg">
                  Voucher Promo
                </Text>
              </View>
            </View>

            <View className="flex-row justify-between pb-3 border-b border-border">
              <View className="flex-row items-center gap-4">
                <Ionicons name="settings-sharp" size={28} color={primary} />
                <Text className="text-foreground text-lg">
                  Pengaturan
                </Text>
              </View>
            </View>

            <View className="flex-row justify-between">
              <View className="flex-row items-center gap-4">
                <Ionicons name="information-circle" size={28} color={accentGreen} />
                <Text className="text-foreground text-lg">
                  Info Umum
                </Text>
              </View>
            </View>
          </Card>
        </View>

        {/* disclaimer */}
        <SafeAreaView edges={["bottom"]} className="px-4 py-6 justify-self-end">
          <Text className="text-center text-muted text-sm">
            Project by{" "}
            <Text className="text-primary font-medium">Mozarist</Text>
          </Text>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}
