import React from 'react';
import { StyleSheet } from 'react-native';
import FastImage, { FastImageProps } from 'react-native-fast-image';

type IProps = Partial<Pick<FastImageProps, 'style' | 'resizeMode'> & { source: string }>;

const Image: React.FC<IProps> = React.memo(
  ({ ...props }) => {
    return (
      <FastImage
        source={{ uri: props.source }}
        style={styles.container}
        resizeMode={FastImage.resizeMode.cover}
      />
    );
  },
  (prevProps, nextProps) => prevProps.source === nextProps.source,
);

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
  },
});

export default Image;
