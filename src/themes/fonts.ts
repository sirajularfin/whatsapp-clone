import { isIOS } from '../util/commons';

export const Font = {
  Montserrat: {
    regular: isIOS() ? 'Montserrat-Regular' : 'MontserratRegular',
    medium: isIOS() ? 'Montserrat-Medium' : 'MontserratMedium',
  },
};
