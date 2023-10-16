import { ParamListBase, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RouteName } from '@/navigation';

type RouteParams = undefined;

interface NavigationParams extends ParamListBase {
  [RouteName.Login]: RouteParams;
}

export type LoginScreenNavigation = NativeStackNavigationProp<NavigationParams>;

export type LoginScreenRoute = RouteProp<NavigationParams, RouteName.Login>;
