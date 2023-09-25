import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const WelcomeScreen = () => {
  return (
 <SafeAreaView className='flex-1 flex justify-around bg-white'>
<View className= "space-y-2">
    <Text className = "text-center font-bold text-gray-700">
      Jarvis
    </Text>
<Text className="text-center tracking-wider text-gray-700 font-semibold">
  The future is here, powered by ai
</Text >
</View>
 </SafeAreaView>
  )
}

export default WelcomeScreen