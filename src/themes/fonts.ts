import { isIOS } from '../util/commons.util';

export const Font = {
  Montserrat: {
    regular: isIOS() ? 'Montserrat-Regular' : 'MontserratRegular',
    medium: isIOS() ? 'Montserrat-Medium' : 'MontserratMedium',
  },
};
