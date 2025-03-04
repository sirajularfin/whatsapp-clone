import logger from 'src/util/logger.util';
import { navigationRef } from './types';

export const goBack = () => {
  if (navigationRef && navigationRef.current) {
    if (navigationRef.current?.isReady() && navigationRef.current.canGoBack()) {
      navigationRef.current?.goBack();
    }
  } else {
    logger(
      'Navigation reference is not ready. Unable to navigate back.',
      'error',
    );
  }
};
