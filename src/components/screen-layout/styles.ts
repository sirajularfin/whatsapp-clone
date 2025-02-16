import { StyleSheet } from 'react-native';
import ScaledSize from 'src/themes/sizes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    height: ScaledSize.SCREEN_HEIGHT,
    width: ScaledSize.SCREEN_WIDTH,
    zIndex: -1,
  },
});

export default styles;
