import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6";

export default function Login() {
  return (
    <ScrollView
      horizontal
      pagingEnabled
      className=" grow-0"
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ width: "200%" }}
    >
      <View className="w-1/2 items-center">
        <Text className="w-3/4 font-bold text-lg mb-5 ">
          Première connexion
        </Text>
        <View className="w-3/4  relative">
          <TextInput
            placeholder="Nom"
            className="bg-slate-50 w-full rounded-md px-5 py-2 mb-5"
          />
          <TextInput
            placeholder="Email"
            className="bg-slate-50 w-full rounded-md px-5 py-2 mb-5"
          />
          <Pressable className="bg-[#ef7c51] rounded-lg">
            <Text className="text-lg font-bold text-center px-5 py-2 text-orange-100">
              Connexion
            </Text>
          </Pressable>
          <View className="absolute -right-10 h-full justify-center">
            <Icon
              name="chevron-right"
              size={32}
              onPress={() => console.log("test")}
            />
          </View>
        </View>
      </View>
      <View className="w-1/2 items-center">
        <Text className="w-3/4 mb-5 text-end font-bold text-lg">
          Se connecter
        </Text>
        <View className=" w-3/4 grow relative">
          <View className="w-full grow justify-center">
            <TextInput
              placeholder="Email"
              className="bg-slate-50 w-full rounded-md px-5 py-2 mb-5"
            />
          </View>
          <Pressable className="bg-[#ef7c51] rounded-lg w-full">
            <Text className="text-lg font-bold text-center px-5 py-2 text-orange-100">
              Connexion
            </Text>
          </Pressable>
          <View className="absolute -left-10 h-full justify-center">
            <Icon
              name="chevron-left"
              size={32}
              onPress={() => console.log("test")}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
