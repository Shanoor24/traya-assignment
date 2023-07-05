import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, Image, BackHandler } from "react-native";
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { AirbnbRating } from "react-native-ratings";
import {
  responsiveFontSize,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { ScrollView } from "react-native";
import { useRecoilState, useRecoilValue } from "recoil";
import { ratingAndReviewAtom, userDataAtom } from "../../recoil/atom";

const Dashboard = () => {
  const navigation = useNavigation();
  const userData = useRecoilValue(userDataAtom);
  const [ratingAndReview, setRatingAndReview] =
    useRecoilState(ratingAndReviewAtom);

  const handleBackPress = () => {
    // Disable back button functionality
    return true;
  };

  const handleNavigateRating = async () => {
    await setRatingAndReview((prev) => ({
      rating: userData?.lastOrder?.rating,
      review: userData?.lastOrder?.review,
    }));
    navigation.navigate("Rating");
  };

  useEffect(() => {
    setRatingAndReview((prev) => ({
      rating: userData?.lastOrder?.rating,
      review: userData?.lastOrder?.review,
    }));
    BackHandler.addEventListener("hardwareBackPress", handleBackPress);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackPress);
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.formContainer}>
        <Text style={styles.heading}>My previous purchase</Text>
        <View style={styles.subcontainer}>
          <Image
            source={require("../../assets/images/traya_hair_ras.png")}
            style={styles.productImage}
          />
          <Text style={styles.descriptionText}>
            {userData?.lastOrder?.name}
          </Text>
          <View style={styles.feedbackContainer}>
            {userData.lastOrder.review === "empty" ||
            userData.lastOrder.review === "" ? (
              <>
                <Text style={{ ...styles.heading, fontWeight: 600 }}>
                  Share your thoughts
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Rating")}
                  style={{ ...styles.SubmitButton, ...styles.feedbackButton }}
                >
                  <Text style={styles.buttonText}>Leave a review</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <Text
                  style={{
                    ...styles.heading,
                    fontWeight: 600,
                    textDecorationLine: "underline",
                  }}
                >
                  My Review
                </Text>
                <AirbnbRating
                  isDisabled={true}
                  defaultRating={userData?.lastOrder?.rating}
                  reviews={["Terrible", "Poor", "Average", "Good", "Excellent"]}
                  size={responsiveWidth(5.5)}
                  reviewSize={responsiveFontSize(2.5)}
                  reviewColor="gray"
                />
                <Text numberOfLines={3.5}>{userData?.lastOrder?.review}</Text>
                <TouchableOpacity
                  onPress={handleNavigateRating}
                  style={styles.editButton}
                >
                  <Text style={styles.buttonText}>Edit review</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
        <View></View>
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default Dashboard;
