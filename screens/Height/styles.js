import {StyleSheet} from 'react-native';
import {OPENSANS_REGULAR, POPPINS_BOLD} from '../../assets/fonts/fonts';
import {colors} from '../../components/constants/constants';

export const styles = StyleSheet.create({
  scrollView: {backgroundColor: colors.APP_COLOR_LIGHT1, flex: 1},
  container: {paddingHorizontal: 30, marginTop: 50},
  screenTitle: {
    textAlign: 'center',
    // fontFamily: OPENSANS_REGULAR,
    fontWeight: '700',
    fontSize: 14,
    color: colors.APP_SECONDARY_COLOR,
    lineHeight: 19,
  },
  progressBar: {
    height: 2,
    backgroundColor: colors.APP_SECONDARY_COLOR,
    width: '100%',
    marginTop: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    lineHeight: 45,
    // fontFamily: POPPINS_BOLD,
    marginTop: 80,
    textAlign: 'center',
    color: colors.APP_SECONDARY_COLOR,
  },
  input: {
    width: '80%',
    // borderBottomColor: Platform.OS === 'ios' ? 'red' : 'black',
    // borderWidth: 2,
    backgroundColor: colors.APP_COLOR_LIGHT1,
    // borderColor: colors.APP_COLOR_LIGHT2,
    alignSelf: 'center',
    textAlign: 'center',
    borderColor: 'red',
    marginTop: 80,
    // borderWidth: 1,
    // borderBottomWidth: Platform.OS === 'ios' ? 1 : 2,
  },
  next: {
    justifyContent: 'flex-end',
    // height: '40%',
    // backgroundColor: 'pink',
    paddingHorizontal: 25,
  },
});
