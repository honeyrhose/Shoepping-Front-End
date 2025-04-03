import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashPage from './pages/splashPage'; // Import the Splash Page
import DiscoverPage from './pages/discoverPage'; // Import the Discover Page
import DashboardPage from './pages/dashboardPage'; // Import the Dashboard Page
import ExplorePage from './pages/explorePage'; // Import Explore Page
import HeartPage from './pages/heartPage'; // Import the Heart Page
import NotificationPage from './pages/notificationPage'; // Import the Notification
import ProductPage from './pages/productPage'; // Import the Product Page
import CartPage from './pages/cartPage'; // Import the Cart Page
import LoginPage from './pages/loginPage'; // Import the Login Page
import RegisterPage from './pages/registerPage'; // Import the Register Page
import ProfilePage from './pages/profilePage'; // Import the Profile Page


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}> 
        <Stack.Screen name="Splash" component={SplashPage} />
        <Stack.Screen name="Discover" component={DiscoverPage} />
        <Stack.Screen name="Dashboard" component={DashboardPage} />
        <Stack.Screen name="Explore" component={ExplorePage} />
        <Stack.Screen name="Heart" component={HeartPage} />
        <Stack.Screen name="Notification" component={NotificationPage} />
        <Stack.Screen name="ProductDetails" component={ProductPage} />
        <Stack.Screen name="Cart" component={CartPage} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Register" component={RegisterPage} />
        <Stack.Screen name="Profile" component={ProfilePage} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}