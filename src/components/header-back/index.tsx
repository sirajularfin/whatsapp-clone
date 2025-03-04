import React from 'react';
import Container from '../container';
import ScaledSize from 'src/themes/sizes';
import { TouchableOpacity } from 'react-native';
import { goBack } from 'src/navigation/helpers';
import ArrowBackward from 'src/assets/icons/arrow-backward.svg';

const HeaderBackButton = () => {
  return (
    <Container marginLeft={ScaledSize.XS_5}>
      <TouchableOpacity onPress={goBack}>
        <ArrowBackward height={ScaledSize.S_20} />
      </TouchableOpacity>
    </Container>
  );
};

export default HeaderBackButton;
