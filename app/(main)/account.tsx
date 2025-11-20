import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Account = () => {
  return (
    <SafeAreaView className='flex-1'>
      <View>
        <Image source={require('../../assets/images/personal-pics.png')} className='w-10 h-10 rounded-full' resizeMode='contain' />
      </View>

      <View>

      </View>

      <View className='w-full items-center bottom-o'>
        <TouchableOpacity className='bg-[#F2F3F2] border '>
          <Text className='text-[#53B175]'>Log Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Account