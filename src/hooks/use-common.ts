import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Dimensions } from 'react-native';

export default function useCommonDeclaration() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  return { navigation, width, height };
}
