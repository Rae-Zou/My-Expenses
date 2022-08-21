import * as React from 'react';
import { ScrollView, Text } from 'react-native';
import { ListItem } from "components";

export default function ForecastScreen({ navigation }) {
    const rowItems = [
        {
          title: ("🏠 Rent  $" + costDict["Rent"] ),
          onPress: navigator.openRentData,
        },
        {
          title: ("🍴 Food  $" + costDict["Food"]),
          onPress: navigator.openFoodData,
        },
        {
          title: ("💡 Power  $" + costDict["Power"]),
          onPress: navigator.openPowerData,
        },
        {
          title: ("🚌 Transport  $" + costDict["Transport"]),
          onPress: navigator.openTransData,
        },
        {
          title: ("Other  $" + costDict["Other"]),
          onPress: navigator.openOtherData,
        },
    
    ];
      
    return (
        <ScrollView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Forecast Screen</Text>

            {rowItems.map((item, index) => (
                <ListItem
                key={index}
                showBottomLine={index !== rowItems.length - 1}
                onPress={item.onPress}
                title={item.title}
                />
            ))}
        </ScrollView>
    );
}