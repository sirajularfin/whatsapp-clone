import React from 'react';
import FastImage, { FastImageProps } from 'react-native-fast-image';

type IProps = Partial<Pick<FastImageProps, 'style' | 'resizeMode'> & { source: string }>;

const Image: React.FC<IProps> = React.memo(
  ({ ...props }) => {
    return (
      <FastImage
        source={{ uri: props.source }}
        style={props.style}
        resizeMode={FastImage.resizeMode.cover}
      />
    );
  },
  (prevProps, nextProps) => prevProps.source === nextProps.source,
);

export default Image;
