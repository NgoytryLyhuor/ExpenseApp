import React from 'react';
import { View, Text, Image } from 'react-native';

const Welcome = () => {
    return (
        <View className="flex-1 bg-gray-50 justify-center items-center px-4">
            <Image
                source={require('../../assets/welcome.png')}
                className="w-48 h-48"
                resizeMode="contain"
            />

            {/* App name and subtitle */}
            <View className="items-center mt-12">
                <Text className="text-6xl font-black text-black mb-2">lyhuor</Text>
                <Text className="text-gray-600 text-lg">your minimal budgeting app</Text>
            </View>
        </View>
    );
};

export default Welcome;