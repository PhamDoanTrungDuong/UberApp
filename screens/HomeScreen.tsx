import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar, Image } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useAppDispatch } from "../store";
import { setDestination, setOrigin } from "../slices/navSlice";

const HomeScreen = () => {
	const dispatch = useAppDispatch();

	return (
		<SafeAreaView style={styles.AndroidSafeArea}>
			<View style={tw`p-5`}>
				<Image
					style={{
						width: 100,
						height: 100,
						resizeMode: "contain",
					}}
					source={{
						uri: "https://links.papareact.com/gzs",
					}}
				/>

				<GooglePlacesAutocomplete
					placeholder="Where From?"
					styles={{
						container: {
							flex: 0,
						},
						textInput: {
							fontSize: 18,
						},
					}}
					query={{
						key: GOOGLE_MAPS_APIKEY,
						language: "en",
					}}
					nearbyPlacesAPI="GooglePlacesSearch"
					minLength={2}
					enablePoweredByContainer={false}
					fetchDetails
					onPress={(data, details = null) => {
						dispatch(setOrigin({
							location: details?.geometry.location,
							description: data.description
						}));
						dispatch(setDestination(null))
					}}
				/>
				<NavOptions />
			</View>
		</SafeAreaView>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	AndroidSafeArea: {
		flex: 1,
		backgroundColor: "white",
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
	},
});
