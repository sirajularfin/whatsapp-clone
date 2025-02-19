import { StyleSheet } from 'react-native';
import Color from 'src/themes/colors';
import { Font } from 'src/themes/fonts';
import ScaledSize from 'src/themes/sizes';

const styles = StyleSheet.create({
  textInputContainerStyle: {
    borderColor: Color.GREY_400,
    borderWidth: ScaledSize.XS_1,
    paddingVertical: ScaledSize.S_15,
    paddingStart: ScaledSize.M_30,
  },
  textInputPlaceholderStyle: {
    fontFamily: Font.Montserrat.regular,
    fontSize: ScaledSize.S_16,
    letterSpacing: 0.5,
    lineHeight: ScaledSize.M_24,
  },
});

export default styles;
