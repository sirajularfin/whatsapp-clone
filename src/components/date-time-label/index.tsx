import React from 'react';
import Container from '../container';
import Text from '../text';
import { FontVariant } from '../text/styles';
import Color from 'src/themes/colors';
import ScaledSize from 'src/themes/sizes';

interface IProps {
  dateTime: string;
}

const DateTimeLabel: React.FC<Partial<IProps>> = ({ ...props }) => {
  return (
    <Container
      alignSelf="center"
      backgroundColor={Color.GREY_50}
      borderColor={Color.GREY_400}
      borderRadius={ScaledSize.S_20}
      borderWidth={ScaledSize.XS_1}
      paddingHorizontal={ScaledSize.S_15}
      paddingVertical={ScaledSize.XS_8}
    >
      <Text variant={FontVariant.BodySmall} color={Color.BLACK}>
        {props.dateTime}
      </Text>
    </Container>
  );
};

export default DateTimeLabel;
