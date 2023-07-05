import DashboardScreen from "../screens/DashboardScreen/DashboardScreen";
import DetailedReview from "../screens/DetailedReviewScreen/DetailedReviewScreen";
import LoadingScreen from "../screens/LoadingScreen/LoadingScreen";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import RatingScreen from "../screens/RatingsScreen/RatingScreen";
import RegisterScreen from "../screens/RegisterScreen/RegisterScreen";

export const screenMapper = [
  {
    name: "LoadingScreen",
    component: LoadingScreen,
    headerShown: false,
    headerLeftShown: false,
  },
  {
    name: "Rating",
    component: RatingScreen,
    headerShown: true,
    headerLeftShown: true,
  },
  {
    name: "Review",
    component: DetailedReview,
    headerShown: true,
    headerLeftShown: true,
  },
  {
    name: "Dashboard",
    component: DashboardScreen,
    headerShown: true,
    headerLeftShown: false,
  },
  {
    name: "LoginScreen",
    component: LoginScreen,
    headerShown: false,
    headerLeftShown: false,
  },
  {
    name: "RegisterScreen",
    component: RegisterScreen,
    headerShown: false,
    headerLeftShown: false,
  },
];
