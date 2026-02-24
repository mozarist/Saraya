import Card from "@/components/ui/card";
import { useTailwindColor } from "@/hooks/use-tailwind-color";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React from "react";
import { Image, ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function activities() {
  const accentOrange = useTailwindColor("accentOrange");
  const success = useTailwindColor("success");
  const danger = useTailwindColor("danger");

  return (
    <SafeAreaView edges={["top"]} className="flex-1 bg-primary gap-4">
      <View className="gap-2 px-4 py-2">
        <View className="flex-row justify-between items-center w-full">
          <Text className="text-primary-foreground text-2xl font-medium">
            Aktivitas Transaksi
          </Text>
          <View className="justify-center items-center w-7 h-7 aspect-square border border-primary-foreground/50 rounded-md">
            <FontAwesome6 name="arrow-up-from-bracket" size={14} color="white" />
          </View>
        </View>

        <TextInput
          className="bg-background border border-border rounded-md p-2 h-12"
          placeholder="Cari jejak transaksi"
        />
      </View>
      <ScrollView className="flex-1 bg-background gap-2 p-4 rounded-t-2xl">
        <View className="gap-4">
          <View className="flex-row justify-between items-center">
            <Text className="text-foreground text-lg font-medium">
              Februari 2026
            </Text>
            <View className="flex-row gap-2 items-center">
              <Text className="text-primary text-lg">
                -Rp100.000
              </Text>
              <View className="justify-center items-center bg-primary w-6 aspect-square rounded-full">
                <FontAwesome6 name="chevron-right" size={8} color="white" />
              </View>
            </View>
          </View>

          <View className="gap-2 pb-16">
            <Card>
              <View className="flex-row justify-between items-center">
                <View className="flex-row gap-3 items-center">
                  <View className="w-12 justify-center items-center">
                    <Image source={require('@/assets/ui/lazada.png')} style={{ width: 36, height: 36 }} />
                  </View>
                  <View className="gap-1">
                    <Text className="text-foreground text-lg">Lazada Payment</Text>
                    <Text className="text-muted text-sm">
                      22 Februari 2026 - 13:21
                    </Text>
                  </View>
                </View>
                <Text className="text-lg text-danger font-medium">-Rp20.000</Text>
              </View>
            </Card>

            <Card>
              <View className="flex-row justify-between items-center">
                <View className="flex-row gap-3 items-center">
                  <View className="w-12 justify-center items-center">
                    <MaterialCommunityIcons name="bank-transfer-out" size={32} color={danger} />
                  </View>
                  <View className="gap-1">
                    <Text className="text-foreground text-lg">Transfer Keluar</Text>
                    <Text className="text-muted text-sm">
                      20 Februari 2026 - 10:30
                    </Text>
                  </View>
                </View>
                <Text className="text-lg text-danger font-medium">-Rp20.000</Text>
              </View>
            </Card>

            <Card>
              <View className="flex-row justify-between items-center">
                <View className="flex-row gap-3 items-center">
                  <View className="w-12 justify-center items-center">
                    <MaterialCommunityIcons name="bank-transfer-in" size={32} color={success} />
                  </View>
                  <View className="gap-1">
                    <Text className="text-foreground text-lg">Transfer Masuk</Text>
                    <Text className="text-muted text-sm">
                      20 Februari 2026 - 09:00
                    </Text>
                  </View>
                </View>
                <Text className="text-lg text-success font-medium">Rp75.000</Text>
              </View>
            </Card>

            <Card>
              <View className="flex-row justify-between items-center">
                <View className="flex-row gap-3 items-center">
                  <View className="w-12 justify-center items-center">
                    <MaterialCommunityIcons name="bank-transfer-in" size={32} color={success} />
                  </View>
                  <View className="gap-1">
                    <Text className="text-foreground text-lg">Transfer Masuk</Text>
                    <Text className="text-muted text-sm">
                      19 Februari 2026 - 18:12
                    </Text>
                  </View>
                </View>
                <Text className="text-lg text-success font-medium">Rp50.000</Text>
              </View>
            </Card>

            <Card>
              <View className="flex-row justify-between items-center">
                <View className="flex-row gap-3 items-center">
                  <View className="w-12 justify-center items-center">
                    <Image source={require('@/assets/ui/lazada.png')} style={{ width: 36, height: 36 }} />
                  </View>
                  <View className="gap-1">
                    <Text className="text-foreground text-lg">Lazada Payment</Text>
                    <Text className="text-muted text-sm">
                      19 Februari 2026 - 16:45
                    </Text>
                  </View>
                </View>
                <Text className="text-lg text-danger font-medium">-Rp25.000</Text>
              </View>
            </Card>

            <Card>
              <View className="flex-row justify-between items-center">
                <View className="flex-row gap-3 items-center">
                  <View className="w-12 justify-center items-center">
                    <MaterialCommunityIcons name="bank-transfer-in" size={32} color={success} />
                  </View>
                  <View className="gap-1">
                    <Text className="text-foreground text-lg">
                      Transfer Masuk
                    </Text>
                    <Text className="text-muted text-sm">
                      19 Februari 2026 - 12:40
                    </Text>
                  </View>
                </View>
                <Text className="text-lg text-success font-medium">Rp25.000</Text>
              </View>
            </Card>

            <Card>
              <View className="flex-row justify-between items-center">
                <View className="flex-row gap-3 items-center">
                  <View className="w-12 justify-center items-center">
                    <FontAwesome5 name="google-pay" size={32} color="black" />
                  </View>
                  <View className="gap-1">
                    <Text className="text-foreground text-lg">Google Pay</Text>
                    <Text className="text-muted text-sm">
                      18 Februari 2026 - 08:20
                    </Text>
                  </View>
                </View>
                <Text className="text-lg text-danger font-medium">-Rp15.000</Text>
              </View>
            </Card>

            <Card>
              <View className="flex-row justify-between items-center">
                <View className="flex-row gap-3 items-center">
                  <View className="w-12 justify-center items-center">
                    <FontAwesome5 name="sim-card" size={24} color={accentOrange} />
                  </View>
                  <View className="gap-1">
                    <Text className="text-foreground text-lg">Tagihan Pulsa</Text>
                    <Text className="text-muted text-sm">
                      17 Februari 2026 - 20:00
                    </Text>
                  </View>
                </View>
                <Text className="text-lg text-danger font-medium">-Rp10.000</Text>
              </View>
            </Card>

            <Card>
              <View className="flex-row justify-between items-center">
                <View className="flex-row gap-3 items-center">
                  <View className="w-12 justify-center items-center">
                    <FontAwesome5 name="google-pay" size={32} color="black" />
                  </View>
                  <View className="gap-1">
                    <Text className="text-foreground text-lg">Google Pay</Text>
                    <Text className="text-muted text-sm">
                      17 Februari 2026 - 11:15
                    </Text>
                  </View>
                </View>
                <Text className="text-lg text-danger font-medium">-Rp10.000</Text>
              </View>
            </Card>

            <Card>
              <View className="flex-row justify-between items-center">
                <View className="flex-row gap-3 items-center">
                  <View className="w-12 justify-center items-center">
                    <MaterialCommunityIcons name="bank-transfer-in" size={32} color={success} />
                  </View>
                  <View className="gap-1">
                    <Text className="text-foreground text-lg">
                      Transfer Masuk
                    </Text>
                    <Text className="text-muted text-sm">
                      16 Februari 2026 - 21:05
                    </Text>
                  </View>
                </View>
                <Text className="text-lg text-success font-medium">Rp50.000</Text>
              </View>
            </Card>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
