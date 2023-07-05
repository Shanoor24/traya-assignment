import React, { useEffect } from "react";
import { View, Text, Image, BackHandler } from "react-native";
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { AirbnbRating } from "react-native-ratings";
import {
  responsiveFontSize,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { useRecoilState } from "recoil";
import { ratingAndReviewAtom, userDataAtom } from "../../recoil/atom";

const Ratings = () => {
  const navigation = useNavigation();
  const [userData, setUserData] = useRecoilState(userDataAtom);
  const [ratingAndReview, setRatingAndReview] =
    useRecoilState(ratingAndReviewAtom);

  const handlePressRating = async (rating) => {
    await setRatingAndReview((prev) => ({ ...prev, rating: rating }));

    navigation.navigate("Review");
  };

  const handleBackPress = () => {
    // Disable back button functionality
    return navigation.goBack();
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackPress);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackPress);
    };
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.formContainer}>
        <Text style={styles.heading}>How was the product?</Text>
        <View style={styles.subcontainer}>
          <Image
            source={require("../../assets/images/traya_hair_ras.png")}
            style={styles.productImage}
          />
          <Text style={styles.descriptionText}>
            {userData?.lastOrder?.name}
          </Text>
          <Text style={styles.text}>Rate here!</Text>
          <AirbnbRating
            onFinishRating={(e) => handlePressRating(e)}
            defaultRating={ratingAndReview?.rating}
            reviews={["Terrible", "Poor", "Average", "Good", "Excellent"]}
            size={responsiveWidth(5.5)}
            reviewSize={responsiveFontSize(2.5)}
            reviewColor="gray"
          />
        </View>
        <View>
          {/* <Text style={styles.errorText}>Incorrect Password!</Text> */}
        </View>
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default Ratings;
