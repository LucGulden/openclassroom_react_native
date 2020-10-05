import React from 'react';
import { Image, StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NativeAppEventEmitter } from 'react-native';
import Search from '../components/Search';
import FilmDetail from '../components/FilmDetail';
import Favorites from '../components/Favorites';

const SearchStackNavigator = createStackNavigator();
const FavoritesStackNavigator = createStackNavigator();
const MoviesTabNavigator = createBottomTabNavigator();

function _searchStackNavigator(){
    return(
            <SearchStackNavigator.Navigator>
                <SearchStackNavigator.Screen name="Search" component={Search} options={{ title: 'Rechercher' }}/>
                <SearchStackNavigator.Screen name="FilmDetail" component={FilmDetail} options={{title: ''}}/>
            </SearchStackNavigator.Navigator>
    )
}

function _favoritesStackNavigator(){
    return(
            <FavoritesStackNavigator.Navigator>
                <FavoritesStackNavigator.Screen name="Favorites" component={Favorites} options={{ title: 'Favoris' }}/>
                <FavoritesStackNavigator.Screen name="FilmDetail" component={FilmDetail} options={{title: ''}}/>
            </FavoritesStackNavigator.Navigator>
    )
}

function _moviesStackNavigator(){
    return(
        <MoviesTabNavigator.Navigator tabBarOptions={{
            activeBackgroundColor:'#DDDDDD',
            inactiveBackgroundColor:'#FFFFFF',
            showLabel: false,
        }}>
            <MoviesTabNavigator.Screen name="Search" component={_searchStackNavigator} options={
                { title: 'Rechercher',
                tabBarIcon: () => 
                    { return <Image
                        source={require('../images/ic_search.png')}
                        style={styles.icon}/> // On applique un style pour les redimensionner comme il faut
                    }
                }
            }/>
            <MoviesTabNavigator.Screen name="Favorites" component={_favoritesStackNavigator} options={
                {title: 'Favoris',
                 tabBarIcon: () => 
                    { return <Image
                        source={require('../images/ic_favorite.png')}
                        style={styles.icon}/> // On applique un style pour les redimensionner comme il faut
                    }
                }
            }/>
        </MoviesTabNavigator.Navigator>
    )
}

class Navigation extends React.Component {
    render(){
        return(
            <NavigationContainer>
                {_moviesStackNavigator()}
            </NavigationContainer>
        )
    }
}

const styles = StyleSheet.create({
    icon: {
      width: 30,
      height: 30
    }
})

export default Navigation;