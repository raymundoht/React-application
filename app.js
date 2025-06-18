import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Home, Info, Settings, User } from 'lucide-react-native';
import { Dimensions } from 'react-native';

// Importa tus pantallas:
import AboutScreen from './screens/AboutScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';

// Inicializa el navegador de pestañas
const Tab = createBottomTabNavigator();

// Componente principal de la aplicación
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let IconComponent;
            if (route.name === 'Home') IconComponent = Home;
            else if (route.name === 'Settings') IconComponent = Settings;
            else if (route.name === 'Profile') IconComponent = User;
            else if (route.name === 'About') IconComponent = Info;
            return <IconComponent size={size} color={color} />;
          },
          tabBarActiveTintColor: '#6200EE',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: '#ffffff',
            borderTopWidth: 1,
            borderTopColor: '#f0f0f0',
            height: Dimensions.get('window').height * 0.08,
            paddingBottom: Dimensions.get('window').height * 0.01,
            paddingTop: Dimensions.get('window').height * 0.01,
          },
          tabBarLabelStyle: {
            fontSize: Dimensions.get('window').width * 0.03,
            fontWeight: '600',
          },
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
