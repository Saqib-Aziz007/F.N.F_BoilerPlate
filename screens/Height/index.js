import React, {useState} from 'react';
import {Text, View, Platform, Alert, ScrollView} from 'react-native';
import {TextInput} from 'react-native-paper';
import {OPENSANS_REGULAR, POPPINS_BOLD} from '../../assets/fonts/fonts';
import AppIconButton from '../../components/AppIconButton';
import {colors} from '../../components/constants/constants';
import AppToggleButton from '../../components/CustomButton';
import AppButton from '../../components/AppButton';
import {useNavigation} from '@react-navigation/native';
import {HEIGHT} from '../../navigation/routes';
import {styles} from './styles';
import WeightScreen from '../weight';

const HeightScreen = ({navigation, route}) => {
  console.log('WightScreen', route.params);
  const [height, setHeight] = useState();
  const [HeightUnit, setHeightUnit] = useState('FT');
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <AppIconButton
          icon={'chevron-left'}
          size={32}
          onPress={() => navigation.goBack()}
          //   style={{position: 'absolute'}}
        />
        <Text style={styles.screenTitle}>Account Setup</Text>
        <View style={styles.progressBar}></View>
        <Text style={styles.title}>HEIGHT</Text>
        <TextInput
          onChangeText={setHeight}
          keyboardType="numeric"
          //   selectionColor={colors.APP_COLOR_LIGHT2}
          style={styles.input}
        />
        <AppToggleButton
          state1="FT"
          state2="CM"
          onPress={setHeightUnit}
          style={{alignSelf: 'center', marginTop: 25}}
        />
        <View style={styles.next}>
          <AppButton
            title={'NEXT'}
            onPress={() =>
              console.log('HeightScreen on submit::::', {
                ...route.params,
                Height: {height, HeightUnit},
              })
            }
            // onPress={() =>
            //   navigation.navigate(HEIGHT, {
            //     ...route.params,
            //     userDetails: {weight},
            //   })
            // }
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default HeightScreen;
