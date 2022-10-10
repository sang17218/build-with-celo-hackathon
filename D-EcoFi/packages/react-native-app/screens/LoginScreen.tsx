import { useWalletConnect } from "@walletconnect/react-native-dapp";
import { StyleSheet } from "react-native";
import { RootStackScreenProps } from "../types";
import { Text, View, TouchableOpacity } from "../components/Themed";
import Colors from "../constants/Colors";
import deployedContracts from "/Users/sangeetha_lakshmanan/Documents/celo-composer/packages/hardhat/deployments/hardhat_contracts.json";

export default function LoginScreen({
	navigation,
}: RootStackScreenProps<"Root">) {
	const connector = useWalletConnect();
	console.log(connector);
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={() => connector.connect({
				chainId: 44787,
			}).then((res) => console.log(res, "res")).catch((err) => console.error(err, "err"))}>
				<Text style={{ fontSize: 16 }}>Connect Wallet</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
});
