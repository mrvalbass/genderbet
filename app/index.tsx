import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";
import { useFonts } from "expo-font";
import Login from "@/components/Login";
import RotatingBaby from "@/components/RotatingBaby";

export default function Index() {
  const [loaded, error] = useFonts({
    Edu: require("../assets/fonts/Edu-Variable.ttf"),
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!loaded || error) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [loaded, error]);

  if (loading)
    return (
      <SafeAreaView className="bg-orange-100 grow justify-center items-center">
        <Text className="text-xl pt-10">Loading ...</Text>
      </SafeAreaView>
    );
  return (
    <SafeAreaView className="bg-orange-100 justify-center grow">
      <KeyboardAvoidingView
        className="grow "
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          className="w-full "
          contentContainerStyle={{
            alignItems: "center",
            minHeight: "100%",
            justifyContent: "space-between",
            paddingVertical: 50,
          }}
        >
          <Text
            style={{ fontFamily: "Edu" }}
            className="text-4xl text-center pt-10"
          >
            Notre p'tit bébé
          </Text>
          <RotatingBaby />
          <Login />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
