import { Platform } from 'react-native';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';

import { Colors } from '../themes';

const iconNames = [ 'calendar', 'group', 'vcard' ];
const getIconImageSources = () => {
	const color = Colors.orange;
	const navBarIconSize = Platform.OS === 'ios' ? 38 : 28;
	const tabBarIconSize = 28;

	const imageSources = iconNames.map(
		(iconName) => {
			const tabBarIcon = FontAwesomeIcons.getImageSource(iconName, tabBarIconSize, color);

			return Promise.all([tabBarIcon]);
		}
	);
	return Promise.all(imageSources);
};

const buildIconsObject = (imageSources) => {
	let iconDict = {}
	imageSources.forEach((iconNamePair, i) => {
		iconDict[iconNames[i]] = imageSources[i][0]
	});

	return iconDict;
};

const getIcons = new Promise((resolve, reject) => {
	getIconImageSources().then(buildIconsObject).then(resolve).catch(reject);
});

export default getIcons;
