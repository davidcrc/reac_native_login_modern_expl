import { ParamListBase, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RouteName } from '@/navigation';

type RouteParams = undefined;

interface NavigationParams extends ParamListBase {
  [RouteName.SignUp]: RouteParams;
}

export type SignUpScreenNavigation = NativeStackNavigationProp<NavigationParams>;

export type SignUpScreenRoute = RouteProp<NavigationParams, RouteName.SignUp>;
