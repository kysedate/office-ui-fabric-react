import { ISemanticTextColors } from '../../Styling';
import { IThemedProps } from '../../Foundation';
import { ITextProps, ITextStyles } from './Text.types';

export const TextStyles = (props: IThemedProps<ITextProps>): ITextStyles => {
  const { as, className, inline, theme, wrap, variant, family, weight, size, color, hoverColor } = props;
  const { semanticColors, typography } = theme;
  const variantObject = typography.variants[variant!] || typography.variants.default;

  return {
    root: [
      {
        display: inline ? 'inline' : as === 'td' ? 'table-cell' : 'block',
        fontFamily: variantObject.family,
        fontSize: variantObject.size,
        // tslint:disable-next-line:no-any
        fontWeight: variantObject.weight as any,
        color: variantObject.color
      },
      family && {
        // TODO: How are language specific font families configured?
        fontFamily: typography.families[family]
      },
      size && {
        fontSize: typography.sizes[size]
      },
      weight && {
        fontWeight: typography.weights[weight]
      },
      color && {
        color: semanticColors[color as keyof ISemanticTextColors]
      },
      hoverColor && {
        selectors: {
          ':hover': {
            color: semanticColors[hoverColor as keyof ISemanticTextColors]
          }
        }
      },
      !wrap && {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      },
      // TODO: this needs to be evaluated.
      //     mozOsxFontSmoothing: mozOsxFontSmoothing,
      //     webkitFontSmoothing: webkitFontSmoothing,
      className
    ]
  };
};
