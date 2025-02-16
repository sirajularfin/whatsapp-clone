import { StyleSheet } from 'react-native';
import Color from '../../themes/colors';
import ScaledSize from '../../themes/sizes';
import { Font } from '../../themes/fonts';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Color.GREY_100,
    borderRadius: ScaledSize.XS_10,
    columnGap: ScaledSize.S_15,
    flexDirection: 'row',
    paddingHorizontal: ScaledSize.S_11,
  },
  textInput: {
    backgroundColor: Color.GREY_100,
    paddingVertical: ScaledSize.S_12,
  },
  text: {
    fontSize: ScaledSize.S_14,
    fontFamily: Font.Montserrat.medium,
    letterSpacing: 0.1,
    lineHeight: ScaledSize.S_20,
  },
});

export default styles;
