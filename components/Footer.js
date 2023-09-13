import { View, Text} from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export default function Footer(props){
    return(
            <Text >{props.message}</Text>
    );
}