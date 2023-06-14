import * as React from 'react';
import { ImageBackground, Text, View, Image, ScrollView, SafeAreaView, Pressable, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './components/styles/safeArea';


export default function App() {

  function press(ev) {

    console.log(nombreRef.current.style)
  }
  const nombreRef = React.useRef(null);



  return (
    <SafeAreaView style={styles.container}>
      <View className='container justify-center items-center'>
        <ImageBackground source={require('./assets/imgs/spider-miles.jpg')} className='h-full w-full justify-center items-center'>
          <Text className='mb-4 text-xl font-semibold text-red-500 border rounded-md bg-slate-50 p-2'> Spider-man: Across the spider-verse</Text>
          <ScrollView horizontal={true}>

            <View
              className=' bg-white rounded-xl w-full max-w-xs'
              style={[
                {
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 5,
                },
              ]}
            >
              <Image
                source={require("./assets/imgs/milesMorales.webp")}
                className='w-full h-64 rounded-t-xl'
                resizeMode="cover"
              />
              <View className='p-6'>
                <Text className='text-slate-900 text-lg font-bold'>
                  Miles Morales (Tierra-1610B)
                </Text>
              </View>
            </View>

            <View
              className=' bg-white my-1 rounded-xl w-full max-w-xs'
              style={[
                {
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 5,
                },
              ]}
            >
              <Image
                source={require("./assets/imgs/spider-gwen.jpg")}
                className='w-full h-64 rounded-t-xl'
                resizeMode="cover"
              />
              <View className='p-6'>
                <Text className='text-slate-900 text-lg font-bold'>
                  Gwen Stacy (Tierra-65B)
                </Text>
              </View>
            </View>
            
            <View
              //onPress={()=> }
              className=' bg-white my-1 rounded-xl w-full max-w-xs'
              style={[
                {
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 5,
                },
              ]}
            >
              <Image
                source={require("./assets/imgs/miguel-spider-man-2099.webp")}
                className='w-full h-64 rounded-t-xl'
                resizeMode="cover"
              />
              <View className='p-6'>
                <Text className='text-slate-900 text-lg font-bold'>
                  Miguel O'hara (Tierra-928B)
                </Text>
              </View>
            </View>
          </ScrollView>
          <Text onPress={() => Alert.alert('Aplicaciones Moviles C-913 :)')} className=' text-xl font-semibold  border rounded-md bg-slate-50 p-2'> Fabian Silva V-28.146.771</Text>


        </ImageBackground>


      </View>
    </SafeAreaView>
  );
}