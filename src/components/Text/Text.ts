import styled from 'styled-components/native';

import {
  BodyTextProps,
  ButtonTextProps,
  TextProps,
} from 'components/Text/Text.types';
import colors from 'values/colors';

export const BaseText = styled.Text<TextProps>`
  font-family: 'System';
  ${({color}) =>
    (color && `color: ${color}`) || `color: ${colors.textSecondary}`}
  ${({capitalize, lowercase, uppercase}) =>
    (capitalize && 'text-transform: capitalize;') ||
    (lowercase && 'text-transform: lowercase;') ||
    (uppercase && 'text-transform: uppercase;') ||
    ''}
  ${({center}) => (center && 'text-align: center;') || ''}
  ${({top}) => top && `margin-top: ${top}px`}
`;

export const Heading = styled(BaseText)`
  font-size: 36px;
  font-weight: 700;
`;

export const Title = styled(BaseText)`
  font-size: 18px;
  font-weight: 500;
`;

export const Body = styled(BaseText)<BodyTextProps>`
  font-size: 16px;
  font-weight: ${({fontWeight}) => fontWeight || 'normal'};
`;

export const Caption = styled(BaseText)<BodyTextProps>`
  font-size: 10px;
  font-weight: ${({fontWeight}) => fontWeight || 'normal'};
`;

export const Button = styled(BaseText)<ButtonTextProps>`
  flex: 1;
  font-size: ${({small}) => (small ? '14px' : '16px')};
  font-weight: 700;
`;
