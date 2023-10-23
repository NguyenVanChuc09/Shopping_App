import React from 'react';
import { useMemo } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { DefaultTheme, NavigationContainer, Theme } from '@react-navigation/native';
import RootNavigator from './src/navigators/RootNavigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {

  React.useEffect(() => {
    StatusBar.setBackgroundColor('#FF573300');
    StatusBar.setTranslucent(true)
  }, []);

  const theme: Theme = useMemo(
    () => ({
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        background: "#F5F5F5",
        text: "#191919",
        border: "#d5d5d5",
        primary: "#191919",
      },
    }),
    []
  );

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <GestureHandlerRootView style={styles.container}>

        <NavigationContainer theme={theme}>
          <BottomSheetModalProvider>
            <RootNavigator />
          </BottomSheetModalProvider>
          <StatusBar barStyle={'dark-content'} />
        </NavigationContainer>

      </GestureHandlerRootView>
    </SafeAreaProvider>



  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
