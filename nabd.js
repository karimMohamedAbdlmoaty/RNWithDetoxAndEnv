import React from 'react';
import { createStackNavigator , createTabNavigator } from 'react-navigation';
import {Landing} from "./src/auth/screens/landing";
import {ChooseResources} from "./src/auth/screens/choose-resources/choose-resources.screen";

import {HomePage} from "./src/home/screens";
import MyResources from "./src/components/my-resources";
import MyAccount from "./src/components/my-account";
import Sports from "./src/components/sports";
import Magazines from "./src/components/magazines";
import Icon from 'react-native-vector-icons/Ionicons'
import IconTwo from 'react-native-vector-icons/FontAwesome5';
import Resources from "./src/components/resources";

import {Register} from "./src/auth";
import {Login} from "./src/auth";
import ForgetPassword from "./src/components/forget-password";


const sharedRoutes = createStackNavigator(
    {
        Login: {
            screen: Login,
            navigationOptions: {
                title: "Login",
            },
        },
        Register: {
            screen: Register,
            navigationOptions: {
                title: "Register",
            },
        },
        ForgetPassword: {
            screen: ForgetPassword,
            navigationOptions: {
                title: "ForgetPassword",
            },
        },
    },
    {
        headerMode:"none",
    }
);


const HomeStackNavigator = createStackNavigator(
    {
        HomePage:{
            screen: HomePage,
            navigationOptions: {
                title: "HomePage",
            },
        },
    },
    {
        headerMode:"none"
    }
);

const MyResourcesStackNavigator = createStackNavigator(
    {
        MyResources:{
            screen: MyResources,
            navigationOptions: {
                title: "MyResources",
            },
        },
    },
    {
        headerMode:"none"
    }
);

const MyAccountStackNavigator = createStackNavigator(
    {
        MyAccount:{
            screen: MyAccount,
            navigationOptions: {
                title: "MyAccount",
            },
        },
    },
    {
        headerMode:"none"
    }
);

const SportsStackNavigator = createStackNavigator(
    {
        Sports:{
            screen: Sports,
            navigationOptions: {
                title: "Sports",
            },
        },
    },
    {
        headerMode:"none"
    }
);

const MagazinesStackNavigator = createStackNavigator(
    {
        Magazines:{
            screen: Magazines,
            navigationOptions: {
                title: "Magazines",
            },
        },
    },
    {
        headerMode:"none"
    }
);



const TabNavigation = createTabNavigator({
    HomeStackNavigator:{
        screen: HomeStackNavigator,
        navigationOptions: {
            title: "آخر الأخبار",
            tabBarIcon: ({ tintColor }) => 
            <IconTwo name="globe-americas" size={30} style={{ color: tintColor }} />
            

        },

    },

    SportsStackNavigator:{
        screen: SportsStackNavigator,
        navigationOptions: {
            title: "رياضة",
            tabBarIcon: ({ tintColor }) => 
            <Icon name="ios-football" size={30}  style={{ color: tintColor }} />

        },
    },



    MyResourcesStackNavigator:{
        screen: MyResourcesStackNavigator,
        navigationOptions: {
            title: "مصادري",
            tabBarIcon: ({ tintColor }) => 
            <Icon name="ios-list" size={30}  style={{ color: tintColor }} />

        },
    },

    MagazinesStackNavigator:{
        screen: MagazinesStackNavigator,
        navigationOptions: {
            title: "مجلات نبض",
            tabBarIcon: ({ tintColor }) => 
            <IconTwo name="book-open" size={30} style={{ color: tintColor }} />

        },
    },

    MyAccountStackNavigator:{
        screen: MyAccountStackNavigator,
        navigationOptions: {
            title: "حسابي",
            tabBarIcon: ({ tintColor }) => 
            <Icon name="ios-headset" size={30} style={{ color: tintColor }} />

        },
    },




})



const MainNavigator = createStackNavigator(
    {
        Landing:{
            screen: Landing,
            navigationOptions: {
                title: "Landing",

            },

        },

        TabNavigation:{
            screen: TabNavigation,
            navigationOptions: {
                title: "TabNavigation",
            },
        },

        ChooseResources:{
            screen: ChooseResources,
            navigationOptions: {
                title: "ChooseResources",
            },
        },

        Resources:{
            screen: Resources,
            navigationOptions: {
                title: "Resources",
            },
        },

       
    },
    {
        headerMode:"none",
    }
)

export const Nabd = createStackNavigator(
    {
        MainNavigator:{
            screen: MainNavigator,
            navigationOptions: {
                title: "MainNavigator",
            },
        },

        sharedRoutes:{
            screen: sharedRoutes,
            navigationOptions: {
                title: "sharedRoutes",   
            },
        },
       
    },
    {
        headerMode:"none",
        mode: 'modal',
    }
)

// import React from 'react';
// import { createStackNavigator , createTabNavigator } from 'react-navigation';
// import {Landing} from "./src/auth/screens/landing";
// import Foo from './Foo';
// // import {Register} from "./src/auth";
// import {Login} from "./src/auth";


// export const Nabd = createStackNavigator(
//     {
//         Landing:{
//             screen: Landing,
//             navigationOptions: {
//                 title: "Landing",

//             },

//         },
//         Login: {
//             screen: Login,
//             navigationOptions: {
//                 title: "Login",
//             },
//         },
//     },
//     {
//         headerMode:"none",
//         // mode: 'modal',
//     }
// )