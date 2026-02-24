import { Button } from "@/components/ui/button";
import Card from "@/components/ui/card";
import { useTailwindColor } from "@/hooks/use-tailwind-color";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useState } from "react";
import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { SafeAreaView } from "react-native-safe-area-context";

const width = Dimensions.get("window").width;
const CARD_WIDTH = width * 0.85;

export default function HomeScreen() {
  const primary = useTailwindColor("primary");
  const muted = useTailwindColor("muted");

  const banner = [
    require("@/assets/images/ads1.png"),
    require("@/assets/images/ads2.png"),
    require("@/assets/images/ads3.png"),
  ];

  const [isHidden, setIsHidden] = useState(true);

  return (
    <View className="bg-background flex-1">
      {/* header */}
      {/* account balance */}
      <SafeAreaView edges={["top"]} className="bg-primary">
        <View className="p-4 w-full bg-primary flex-row gap-2 items-center">
          <Ionicons name="wallet" size={24} color="white" />
          <View className="flex-row gap-1 items-center">
            <Text className="text-primary-foreground/75 font-semibold">Rp</Text>
            <Text className="text-2xl text-primary-foreground font-medium">
              {isHidden ? "•••" : "100.000"}
            </Text>
          </View>
          <Pressable onPress={() => setIsHidden((h) => !h)}>
            <Ionicons
              name={isHidden ? "eye" : "eye-off"}
              size={14}
              color="white"
            />
          </Pressable>
        </View>
      </SafeAreaView>
      <ScrollView>
        <View className="bg-primary pb-12">
          <View className="gap-5 px-4">
            <View className="flex-row justify-evenly items-center">
              <View className="gap-2 items-center">
                <View className="flex justify-center items-center px-3 py-2 border-2 border-primary-foreground/25 rounded-lg">
                  <FontAwesome6 name="plus" size={24} color="white" />
                </View>
                <Text className="text-primary-foreground font-semibold">
                  Isi Saldo
                </Text>
              </View>

              <View className="gap-2 items-center">
                <View className="flex justify-center items-center px-3 py-2 border-2 border-primary-foreground/25 rounded-lg">
                  <Ionicons
                    name="arrow-redo-sharp"
                    size={24}
                    color="white"
                    className="rotate-180"
                  />
                </View>
                <Text className="text-primary-foreground font-semibold">
                  Minta
                </Text>
              </View>

              <View className="gap-2 items-center">
                <View className="flex justify-center items-center px-3 py-2 border-2 border-primary-foreground/25 rounded-lg">
                  <FontAwesome6 name="paper-plane" size={24} color="white" />
                </View>
                <Text className="text-primary-foreground font-semibold">
                  Kirim
                </Text>
              </View>

              <View className="gap-2 items-center">
                <View className="flex justify-center items-center px-3 py-2 border-2 border-primary-foreground/25 rounded-lg">
                  <Ionicons name="mail" size={24} color="white" />
                </View>
                <Text className="text-primary-foreground font-semibold">
                  Pesan
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* main content */}
        <View className="-top-8 w-full flex-1 gap-2">
          <View className="px-4 gap-2">
            <Card>
              <View className="flex-row flex-wrap py-2">
                <View className="w-1/4 items-center mb-2">
                  <View className="w-12 h-12 rounded-lg justify-center items-center bg-primary-foreground/10 mb-0">
                    <Image
                      source={require("@/assets/ui/rewards.png")}
                      className="w-8 h-8"
                      resizeMode="contain"
                    />
                  </View>
                  <Text
                    className="text-center text-sm text-foreground"
                    numberOfLines={2}
                  >
                    Rewards
                  </Text>
                </View>

                <View className="w-1/4 items-center mb-2">
                  <View className="w-12 h-12 rounded-lg justify-center items-center bg-primary-foreground/10 mb-0">
                    <Image
                      source={require("@/assets/ui/emas.png")}
                      className="w-8 h-8"
                      resizeMode="contain"
                    />
                  </View>
                  <Text
                    className="text-center text-sm text-foreground"
                    numberOfLines={2}
                  >
                    Emas
                  </Text>
                </View>

                <View className="w-1/4 items-center mb-2">
                  <View className="w-12 h-12 rounded-lg justify-center items-center bg-primary-foreground/10 mb-0">
                    <Image
                      source={require("@/assets/ui/dana-kaget.png")}
                      className="w-8 h-8"
                      resizeMode="contain"
                    />
                  </View>
                  <Text
                    className="text-center text-sm text-foreground"
                    numberOfLines={2}
                  >
                    Dana Kaget
                  </Text>
                </View>

                <View className="w-1/4 items-center mb-2">
                  <View className="w-12 h-12 rounded-lg justify-center items-center bg-primary-foreground/10 mb-0">
                    <Image
                      source={require("@/assets/ui/saldo-digital.png")}
                      className="w-8 h-8"
                      resizeMode="contain"
                    />
                  </View>
                  <Text
                    className="text-center text-sm text-foreground"
                    numberOfLines={2}
                  >
                    Saldo Digital
                  </Text>
                </View>

                <View className="w-1/4 items-center mb-2">
                  <View className="w-12 h-12 rounded-lg justify-center items-center bg-primary-foreground/10 mb-0">
                    <Image
                      source={require("@/assets/ui/dana-deals.png")}
                      className="w-8 h-8"
                      resizeMode="contain"
                    />
                  </View>
                  <Text
                    className="text-center text-sm text-foreground"
                    numberOfLines={2}
                  >
                    DANA Deals
                  </Text>
                </View>

                <View className="w-1/4 items-center mb-2">
                  <View className="w-12 h-12 rounded-lg justify-center items-center bg-primary-foreground/10 mb-0">
                    <Image
                      source={require("@/assets/ui/games.png")}
                      className="w-8 h-8"
                      resizeMode="contain"
                    />
                  </View>
                  <Text
                    className="text-center text-sm text-foreground"
                    numberOfLines={2}
                  >
                    Games
                  </Text>
                </View>

                <View className="w-1/4 items-center mb-2">
                  <View className="w-12 h-12 rounded-lg justify-center items-center bg-primary-foreground/10 mb-0">
                    <Image
                      source={require("@/assets/ui/goals.png")}
                      className="w-8 h-8"
                      resizeMode="contain"
                    />
                  </View>
                  <Text
                    className="text-center text-sm text-foreground"
                    numberOfLines={2}
                  >
                    DANA Goals
                  </Text>
                </View>

                <View className="w-1/4 items-center mb-2">
                  <View className="w-12 h-12 rounded-lg justify-center items-center bg-primary-foreground/10 mb-0">
                    <MaterialIcons name="grid-view" size={24} color="black" />
                  </View>
                  <Text
                    className="text-center text-sm text-foreground"
                    numberOfLines={2}
                  >
                    Lihat semua
                  </Text>
                </View>
              </View>
            </Card>

            <Card>
              <ScrollView
                className="h-32 w-full"
                showsVerticalScrollIndicator={true}
                nestedScrollEnabled={true}
                scrollEnabled={true}
              >
                <View className="gap-1">
                  <View className="flex-row gap-2 items-center w-full">
                    <View className="w-8 h-8 rounded-lg justify-center items-center bg-primary-foreground/10 mb-0">
                      <View className="bg-primary p-1.5 rounded-full">
                        <Ionicons name="wallet" size={16} color="white" />
                      </View>
                    </View>

                    <View className="flex-row gap-0 flex-wrap">
                      <Text className="font-medium text-foreground">DANA </Text>
                      <Text className="text-muted">berbagi kabar</Text>
                    </View>
                  </View>
                  <View className="flex-row gap-2 items-center w-full">
                    <Image
                      source={require("@/assets/ui/avatar-placeholder.png")}
                      className="w-8 h-8 rounded"
                    />

                    <Text
                      numberOfLines={1}
                      className="flex-row gap-0 flex-wrap"
                    >
                      <Text className="font-medium text-foreground">
                        Temanmu{" "}
                      </Text>
                      <Text className="text-muted">dapat voucher dari </Text>
                      <Text className="text-accent-orange">DANA Kaget</Text>
                    </Text>
                  </View>
                  <View className="flex-row gap-2 items-center w-full">
                    <Image
                      source={require("@/assets/ui/lazada.png")}
                      className="w-8 h-8 rounded-full"
                    />

                    <View className="flex-row gap-0 flex-wrap">
                      <Text className="font-medium text-foreground">
                        Lazada{" "}
                      </Text>
                      <Text className="text-muted">
                        mengajakmu ikut 8.8 sale!{" "}
                      </Text>
                    </View>
                  </View>
                  <View className="flex-row gap-2 items-center w-full">
                    <View className="w-8 h-8 rounded-lg justify-center items-center bg-primary-foreground/10 mb-0">
                      <View className="bg-primary p-1.5 rounded-full">
                        <Ionicons name="wallet" size={16} color="white" />
                      </View>
                    </View>

                    <View className="flex-row gap-0 flex-wrap">
                      <Text className="font-medium text-foreground">DANA </Text>
                      <Text className="text-muted">berbagi kabar</Text>
                    </View>
                  </View>

                  <View className="flex-row gap-2 items-center w-full">
                    <View className="w-8 h-8 rounded-lg justify-center items-center bg-primary-foreground/10 mb-0">
                      <View className="bg-primary p-1.5 rounded-full">
                        <Ionicons name="wallet" size={16} color="white" />
                      </View>
                    </View>

                    <View className="flex-row gap-0 flex-wrap">
                      <Text className="font-medium text-foreground">DANA </Text>
                      <Text className="text-muted">berbagi kabar</Text>
                    </View>
                  </View>

                  <View className="flex-row gap-2 items-center w-full">
                    <View className="w-8 h-8 rounded-lg justify-center items-center bg-primary-foreground/10 mb-0">
                      <View className="bg-primary p-1.5 rounded-full">
                        <Ionicons name="wallet" size={16} color="white" />
                      </View>
                    </View>

                    <View className="flex-row gap-0 flex-wrap">
                      <Text className="font-medium text-foreground">DANA </Text>
                      <Text className="text-muted">berbagi kabar</Text>
                    </View>
                  </View>

                  <View className="flex-row gap-2 items-center w-full">
                    <View className="w-8 h-8 rounded-lg justify-center items-center bg-primary-foreground/10 mb-0">
                      <View className="bg-primary p-1.5 rounded-full">
                        <Ionicons name="wallet" size={16} color="white" />
                      </View>
                    </View>

                    <View className="flex-row gap-0 flex-wrap">
                      <Text className="font-medium text-foreground">DANA </Text>
                      <Text className="text-muted">berbagi kabar</Text>
                    </View>
                  </View>

                  <View className="flex-row gap-2 items-center w-full">
                    <View className="w-8 h-8 rounded-lg justify-center items-center bg-primary-foreground/10 mb-0">
                      <View className="bg-primary p-1.5 rounded-full">
                        <Ionicons name="wallet" size={16} color="white" />
                      </View>
                    </View>

                    <View className="flex-row gap-0 flex-wrap">
                      <Text className="font-medium text-foreground">DANA </Text>
                      <Text className="text-muted">berbagi kabar</Text>
                    </View>
                  </View>

                  <View className="flex-row gap-2 items-center w-full">
                    <View className="w-8 h-8 rounded-lg justify-center items-center bg-primary-foreground/10 mb-0">
                      <View className="bg-primary p-1.5 rounded-full">
                        <Ionicons name="wallet" size={16} color="white" />
                      </View>
                    </View>

                    <View className="flex-row gap-0 flex-wrap">
                      <Text className="font-medium text-foreground">DANA </Text>
                      <Text className="text-muted">berbagi kabar</Text>
                    </View>
                  </View>

                  <View className="flex-row gap-2 items-center w-full">
                    <View className="w-8 h-8 rounded-lg justify-center items-center bg-primary-foreground/10 mb-0">
                      <View className="bg-primary p-1.5 rounded-full">
                        <Ionicons name="wallet" size={16} color="white" />
                      </View>
                    </View>

                    <View className="flex-row gap-0 flex-wrap">
                      <Text className="font-medium text-foreground">DANA </Text>
                      <Text className="text-muted">berbagi kabar</Text>
                    </View>
                  </View>
                </View>
              </ScrollView>
            </Card>
          </View>

          <Carousel
            width={CARD_WIDTH}
            height={140}
            style={{ width }}
            loop
            autoPlay
            autoPlayInterval={2900}
            scrollAnimationDuration={800}
            data={banner}
            renderItem={({ item }) => (
              <View className="translate-x-11 mr-4 rounded-md overflow-hidden">
                <Image source={item} className="w-full h-full" />
              </View>
            )}
          />

          <View className="gap-2 px-4">
            <Card>
              <View className="flex-row justify-between items-center">
                <View>
                  <Text className="text-2xl text-foreground font-medium">
                    Terbaru Untukmu
                  </Text>
                  <Text className="text-sm text-muted">
                    Kabar terbaik minggu ini!
                  </Text>
                </View>
                <Button variant="outline" size="sm">
                  Lihat Semua
                </Button>
              </View>

              {/* news content */}
              <View className="gap-4 w-full px-4">
                <View className="flex-row gap-4 items-center w-full">
                  <Image
                    source={require("@/assets/ui/gold-coin.png")}
                    className="w-8 h-8 rounded"
                  />

                  <View className="flex-col">
                    <Text className="font-medium text-foreground">
                      Borong eMAS di DANA{" "}
                    </Text>
                    <Text className="text-muted">
                      Menangkan gadget & hadiah lainnya
                    </Text>
                  </View>
                </View>
                <View className="flex-row gap-4 items-center w-full">
                  <Image
                    source={require("@/assets/ui/share-to-group.png")}
                    className="w-8 h-8 rounded"
                  />

                  <View className="flex-col">
                    <Text className="font-medium text-foreground">
                      Kirim ke grup
                    </Text>
                    <Text className="text-muted">
                      Transfer praktis langsung ke banyak orang
                    </Text>
                  </View>
                </View>
                <View className="flex-row gap-4 items-center w-full">
                  <Image
                    source={require("@/assets/ui/lazada.png")}
                    className="w-8 h-8 rounded-full"
                  />

                  <View className="flex-col">
                    <Text className="font-medium text-foreground">
                      Serbu diskon Lazada
                    </Text>
                    <Text className="text-muted">
                      Pakai DANA Diskon s/d Rp40Rb!
                    </Text>
                  </View>
                </View>
              </View>
            </Card>

            <Card>
              <View className="flex-row justify-between items-center">
                <View className="flex-row items-center gap-3">
                  <Ionicons name="shield-checkmark" size={46} color={primary} />
                  <Text className="w-32 text-xl text-primary font-semibold uppercase">
                    Dana Protection
                  </Text>
                </View>

                <Button variant="outline" size="sm">
                  Pelajari
                </Button>
              </View>

              <Text className="text-muted text-sm">
                Dana Protection hadir untuk memberikan perlindungan ekstra bagi
                setiap transaksi yang kamu lakukan.
              </Text>

              <View className="flex-row justify-between">
                <View className="flex-row gap-1 items-center w-1/3">
                  <Ionicons name="card-outline" size={22} color={primary} />
                  <Text className="w-24 text-primary text-xs font-medium">Jaminan Uang Kembali</Text>
                </View>

                <View className="flex-row gap-1 items-center w-1/3">
                  <MaterialCommunityIcons
                    name="shield-account-variant"
                    size={22}
                    color={primary}
                  />
                  <Text className="w-24 text-primary text-xs font-medium">Transaksi Aman & Privasi</Text>
                </View>

                <View className="flex-row gap-1 items-center w-1/3">
                  <MaterialIcons
                    name="mark-chat-read"
                    size={22}
                    color={primary}
                  />
                  <Text className="w-24 text-primary text-xs font-medium">Layanan Bantu 24/7 jam</Text>
                </View>
              </View>
            </Card>
          </View>
        </View>

        {/* disclaimer */}
        <SafeAreaView edges={["bottom"]} className="px-4 py-6">
          <Text className="text-center text-muted text-sm">
            Aplikasi ini{" "}
            <Text className="text-foreground font-medium">
              tidak ada hubungan dengan Dana Indonesia,
            </Text>{" "}
            melainkan hanya ditujukan sebagai latihan pengembangan mobile app
            saja.
          </Text>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}
