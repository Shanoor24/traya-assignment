import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  TextInput,
  Keyboard,
} from "react-native";
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { AirbnbRating } from "react-native-ratings";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { ScrollView } from "react-native";
import { useRecoilState } from "recoil";
import { ratingAndReviewAtom, userDataAtom } from "../../recoil/atom";
import { addOrEditReview } from "../../utils/apiServices";
import RBSheet from "react-native-raw-bottom-sheet";

const Feedback = () => {
  const navigation = useNavigation();
  const [userData, setUserData] = useRecoilState(userDataAtom);
  const [errorMessage, setErrorMessage] = useState("");
  const [ratingAndReview, setRatingAndReview] =
    useRecoilState(ratingAndReviewAtom);

  const onChangeReview = (text) => {
    setErrorMessage("");
    setRatingAndReview((prev) => ({ ...prev, review: text }));
  };

  const handleSubmitReview = async () => {
    Keyboard.dismiss();
    if (
      ratingAndReview?.review.trim() === "" ||
      ratingAndReview?.review.trim() === "empty"
    ) {
      setErrorMessage("Review field can't be empty");
    }

    const response = await addOrEditReview(userData?.email, {
      ...userData?.lastOrder,
      rating: ratingAndReview?.rating,
      review: ratingAndReview?.review,
    });

    console.log(response);
    if (response.hasOwnProperty("error")) {
      let statusCode = response?.error?.response?.status;
      console.log(response?.error?.response?.status);
      if (statusCode === 400) {
        setErrorMessage("Review feild can't be empty");
        return;
      }
      setErrorMessage("Something went wrong!");
      return;
    }

    await setUserData((prev) => response.updatedUser);
    this.RBSheet.open();
  };

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView style={styles.formContainer}>
        <Text style={styles.heading}>Add detailed review</Text>
        <View style={styles.subcontainer}>
          <Image
            source={require("../../assets/images/traya_hair_ras.png")}
            style={styles.productImage}
          />
          <Text style={styles.descriptionText}>
            {userData?.lastOrder?.name}
          </Text>
          <AirbnbRating
            isDisabled={true}
            defaultRating={ratingAndReview?.rating}
            reviews={["Terrible", "Poor", "Average", "Good", "Excellent"]}
            size={responsiveWidth(5.5)}
            reviewSize={responsiveFontSize(2.5)}
            reviewColor="gray"
          />
          <TextInput
            value={
              ratingAndReview?.review === "empty" ? "" : ratingAndReview?.review
            }
            onChangeText={(e) => onChangeReview(e)}
            maxLength={250}
            style={styles.feedbackInput}
            multiline={true}
            placeholder="Write here"
          />
          <TouchableOpacity
            onPress={handleSubmitReview}
            style={styles.SubmitButton}
          >
            <Text style={styles.buttonText}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
        {errorMessage && (
          <View>
            <Text style={styles.errorText}>{errorMessage}</Text>
          </View>
        )}
        <View></View>
      </SafeAreaView>
      <RBSheet
        ref={(ref) => {
          this.RBSheet = ref;
        }}
        height={responsiveHeight(50)}
        customStyles={{
          container: styles.bottomsheetContainer,
          draggableIcon: {
            backgroundColor: "#000000",
          },
        }}
        closeOnPressMask={false}
        closeOnPressBack={false}
      >
        <View style={styles.bottomSheetView}>
          <Image
            source={require("../../assets/images/thank_you.png")}
            style={styles.celebrationImage}
          />
          <Text style={styles.ThankyouText}>We appreciate your input.</Text>
          <TouchableOpacity style={styles.dashboardButton}>
            <Text
              style={styles.buttonText}
              onPress={() => navigation.navigate("Dashboard")}
            >
              Go to Dashboard
            </Text>
          </TouchableOpacity>
        </View>
      </RBSheet>
    </ScrollView>
  );
};

export default Feedback;
