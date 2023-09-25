import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const WelcomeScreen = () => {
  return (
 <SafeAreaView className='flex-1 flex justify-around bg-white'>
<View className= "space-y-2">
    <Text className = "text-center font-bold text-gray-700">
      Jarvis
    </Text>
<Text className="text-center tracking-wider text-gray-600 font-semibold">
  The future is here, powered by ai
</Text >
</View>
<View className="flex-row justify-center">
<Image source={require('../../assets/images/welcome.png')} className="w-72 h-72"/>
</View>
<TouchableOpacity className = "bg-emerald-600 mx-5 p-4 rounded-2xl">
<Text className="text-center font-bold text-2xl">
Get Started
</Text>
</TouchableOpacity>
 </SafeAreaView>
  )
}

export default WelcomeScreen