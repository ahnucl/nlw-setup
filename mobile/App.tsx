import { StyleSheet, Text, View, StatusBar } from 'react-native'
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
} from '@expo-google-fonts/inter'
import { Loading } from './src/components/Loading'

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
  })

  // Garantir carregamento das fontes
  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Olá</Text>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor="transparent"
        translucent
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a09',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 50,
    color: 'green',
    backgroundColor: 'yellow',
    fontFamily: 'Inter_400Regular',
  },
})