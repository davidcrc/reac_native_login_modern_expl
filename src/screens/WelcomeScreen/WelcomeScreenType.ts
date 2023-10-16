import { ParamListBase, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RouteName } from '@/navigation';

type RouteParams = undefined;

interface NavigationParams extends ParamListBase {
  [RouteName.Welcome]: RouteParams;
}

export type WelcomeScreenNavigation = NativeStackNavigationProp<NavigationParams>;

export type WelcomeScreenRoute = RouteProp<NavigationParams, RouteName.Welcome>;
