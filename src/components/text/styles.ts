import { StyleSheet } from 'react-native';
import ScaledSize from '../../themes/sizes';
import { Font } from '../../themes/fonts';

export enum FontVariant {
  BodyLarge = 'BODY_LARGE',
  BodyMedium = 'BODY_MEDIUM',
  BodySmall = 'BODY_SMALL',
  HeadingLarge = 'HEADING_LARGE',
  HeadingMedium = 'HEADING_MEDIUM',
  HeadingSmall = 'HEADING_SMALL',
  LabelLarge = 'LABEL_LARGE',
  LabelMedium = 'LABEL_MEDIUM',
  LabelSmall = 'LABEL_SMALL',
}

export const styles = (useLineHeight: boolean, useLetterSpacing: boolean) =>
  StyleSheet.create({
    'BODY_LARGE': {
      fontSize: ScaledSize.S_16,
      fontFamily: Font.Montserrat.regular,
      lineHeight: useLineHeight ? ScaledSize.M_24 : undefined,
      letterSpacing: useLetterSpacing ? 0.5 : undefined,
    },
    'BODY_MEDIUM': {
      fontSize: ScaledSize.S_14,
      fontFamily: Font.Montserrat.regular,
      lineHeight: useLineHeight ? ScaledSize.S_20 : undefined,
      letterSpacing: useLetterSpacing ? 0.25 : undefined,
    },
    'BODY_SMALL': {
      fontSize: ScaledSize.S_12,
      fontFamily: Font.Montserrat.regular,
      lineHeight: useLineHeight ? ScaledSize.S_16 : undefined,
      letterSpacing: useLetterSpacing ? 0.4 : undefined,
    },
    'HEADING_LARGE': {
      fontSize: ScaledSize.L_32,
      fontFamily: Font.Montserrat.regular,
      lineHeight: useLineHeight ? ScaledSize.L_40 : undefined,
      letterSpacing: useLetterSpacing ? ScaledSize.ZERO : undefined,
    },
    'HEADING_MEDIUM': {
      fontSize: ScaledSize.M_28,
      fontFamily: Font.Montserrat.regular,
      lineHeight: useLineHeight ? ScaledSize.L_36 : undefined,
      letterSpacing: useLetterSpacing ? ScaledSize.ZERO : undefined,
    },
    'HEADING_SMALL': {
      fontSize: ScaledSize.M_24,
      fontFamily: Font.Montserrat.regular,
      lineHeight: useLineHeight ? ScaledSize.L_32 : undefined,
      letterSpacing: useLetterSpacing ? ScaledSize.ZERO : undefined,
    },
    'LABEL_LARGE': {
      fontSize: ScaledSize.S_14,
      fontFamily: Font.Montserrat.medium,
      lineHeight: useLineHeight ? ScaledSize.S_20 : undefined,
      letterSpacing: useLetterSpacing ? 0.1 : undefined,
    },
    'LABEL_MEDIUM': {
      fontSize: ScaledSize.S_12,
      fontFamily: Font.Montserrat.medium,
      lineHeight: useLineHeight ? ScaledSize.S_16 : undefined,
      letterSpacing: useLetterSpacing ? 0.5 : undefined,
    },
    'LABEL_SMALL': {
      fontSize: ScaledSize.S_11,
      fontFamily: Font.Montserrat.medium,
      lineHeight: useLineHeight ? ScaledSize.S_16 : undefined,
      letterSpacing: useLetterSpacing ? 0.5 : undefined,
    },
  });
