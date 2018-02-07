import { IIconProps } from '../../Icon';
import { ISelectableOption } from '../../utilities/selectableOption/SelectableOption.types';
import { ISelectableDroppableTextProps } from '../../utilities/selectableOption/SelectableDroppableText.types';
import { IStyle, ITheme } from '../../Styling';
import { IButtonStyles } from '../../Button';
import { IRenderFunction, IStyleFunction } from '../../Utilities';

export interface IComboBox {
  /**
  * If there is a menu open this will dismiss the menu
  */
  dismissMenu: () => void;

  /**
   * Sets focus to the input in the comboBox
   * @returns True if focus could be set, false if no operation was taken.
   */
  focus(shouldOpenOnFocus?: boolean): boolean;
}

export interface IComboBoxOption extends ISelectableOption {
  /**
   * Specific styles for each comboBox option. If you intend to give
   * common styles to all comboBox option please use
   * the prop comboBoxOptionStyles
   */
  styles?: Partial<IComboBoxOptionStyles>;
}

export interface IComboBoxProps extends ISelectableDroppableTextProps<IComboBox> {
  /**
   * Optional callback to access the IComboBox interface. Use this instead of ref for accessing
   * the public methods and properties of the component.
   */
  componentRef?: (component: IComboBox) => void;

  /**
   * Collection of options for this ComboBox
   */
  options: IComboBoxOption[];

  /**
   * Callback issues when either:
   * 1) the selected option changes
   * 2) a manually edited value is submitted. In this case there may not be a matched option if allowFreeform is also true
   *    (and hence only value would be true, the other parameter would be null in this case)
   */
  onChanged?: (option?: IComboBoxOption, index?: number, value?: string) => void;

  /**
   * Function that gets invoked when the ComboBox menu is launched
   */
  onMenuOpen?: () => void;

  /**
   * Function that gets invoked when the ComboBox menu is dismissed
   */
  onMenuDismissed?: () => void;

  /**
   * Callback issued when the options should be resolved, if they have been updated or
   * if they need to be passed in the first time
   */
  onResolveOptions?: (options: IComboBoxOption[]) => IComboBoxOption[] | PromiseLike<IComboBoxOption[]>;

  /**
   * Callback issued when the ComboBox requests the list to scroll to a specific element
   */
  onScrollToItem?: (itemIndex: number) => void;

  /**
   * Whether the ComboBox is free form, meaning that the user input is not bound to provided options. Defaults to false.
   */
  allowFreeform?: boolean;

  /**
   * Whether the ComboBox auto completes. As the user is inputing text, it will be suggested potential matches from the list of options. If
   * the combo box is expanded, this will also scroll to the suggested option, and give it a selected style.
   *
   * @default "on"
   */
  autoComplete?: 'on' | 'off';

  /**
   * Value to show in the input, does not have to map to a combobox option
   */
  value?: string;

  /**
   * The IconProps to use for the button aspect of the combobox
   */
  buttonIconProps?: IIconProps;

  /**
   * Theme provided by HOC.
   */
  theme?: ITheme;

  /**
   * Custom styles for this component
   *
   * @deprecated styles prop will be removed in favor of getStyles in 6.0
   */
  styles?: Partial<IComboBoxStyles>;

  /**
   * Styles for the caret down button.
   *
   * @deprecated caretDownButtonStyles prop will be removed in favor of getCaretDownButtonStyles in 6.0
   */
  caretDownButtonStyles?: Partial<IButtonStyles>;

  /**
   * Default styles that should be applied to ComboBox options,
   * in case an option does not come with user-defined custom styles
   *
   * @deprecated comboBoxOptionStyles prop will be removed in favor of getOptionStyles in 6.0
   */
  comboBoxOptionStyles?: Partial<IComboBoxOptionStyles>;

  /**
    * Custom styles function for this component
    */
  getStyles?: IStyleFunction<IComboBoxStyleProps, IComboBoxStyles>;

  /**
   * Custom styles function for this component
   */
  getOptionStyles?: IStyleFunction<IComboBoxStyleProps, IComboBoxStyles>;

  /**
   * Custom styles function for this component
   */
  getCaretDownButtonStyles?: IStyleFunction<IComboBoxCaretStyleProps, IComboBoxStyles>;

  /**
   * When options are scrollable the selected option is positioned at the top of the callout when it is opened (unless it has reached the end of the scrollbar).
   * @default false;
   */
  scrollSelectedToTop?: boolean;

  /**
   * Add additional content below the callout list.
   */
  onRenderLowerContent?: IRenderFunction<IComboBoxProps>;

  /**
  * Custom width for dropdown (unless useComboBoxAsMenuWidth is undefined or false)
  */
  dropdownWidth?: number;

  /**
   * Whether to use the ComboBoxes width as the menu's width
   */
  useComboBoxAsMenuWidth?: boolean;

  /**
   * Sets the 'aria-hidden' attribute on the ComboBox's button element instructing screen readers how to handle the element. This element is hidden by default because all functionality is handled by the input element and the arrow button is only meant to be decorative.
   * @default true
   */
  isButtonAriaHidden?: boolean;
}

export interface IComboBoxStyleProps {
  /**
   * Theme provided by HOC.
   */
  theme: ITheme;

  /**
   * WIdth of the comboBox options
   */
  comboBoxOptionWidth?: string;

  /**
   * The open state.
   */
  isOpen?: boolean;

  /**
   * The disabled state.
   */
  disabled?: boolean;

  /**
   * Whether the associated form field is required or not.
   */
  required?: boolean;

  /**
   * Whether focus is on the control.
   */
  focused?: boolean;

  /**
   * Whether the ComboBox is free form, meaning that the user input is not bound to provided options. Defaults to false.
   */
  allowFreeform?: boolean;

  /**
   * Whether an error message is uncluded.
   */
  hasErrorMessage?: boolean;

  /**
   * Custom styles that are passed in from the control
   */
  customStyles?: Partial<IComboBoxStyles>;
}

export interface IComboBoxCaretStyleProps {
  /**
   * Theme provided by HOC.
   */
  theme: ITheme;

  /**
   * Custom styles for the caret down button injected into the getStyles method
   */
  customCaretDownButtonStyles?: Partial<IButtonStyles>;
}

export interface IComboBoxOptionStyleProps {
  /**
   * Theme provided by HOC.
   */
  theme: ITheme;

  /**
   * Custom styles for all options injected into the getStyles method
   */
  customStylesForAllOptions?: Partial<IComboBoxOptionStyles>;

  /**
   * Custom styles for the current option injected into the getStyles method
   */
  customStylesForCurrentOption?: Partial<IComboBoxOptionStyles>;
}

export interface IComboBoxStyles {
  /**
   * Style for the container which has the ComboBox and the label
   */
  container: IStyle;

  /**
   * Style for the label element of the ComboBox.
   */
  label: IStyle;

  /**
   * Style for the label element of the ComboBox in the disabled state.
   */
  labelDisabled: IStyle;

  /**
   * Base styles for the root element of all ComboBoxes.
   */
  root: IStyle;

  /**
   * Styles for the root element for variant of ComboBox with an errorMessage in the props.
   */
  rootError: IStyle;

  /**
   * Styles for variant of ComboBox where allowFreeForm is false in the props.
   */
  rootDisallowFreeForm: IStyle;

  /**
   * Styles for when the ComboBox is hovered. These styles are applied for all comboBoxes except when
   * the comboBox is disabled.
   */
  rootHovered: IStyle;

  /**
   * Styles for when the ComboBox is active. These styles are applied for all comboBoxes except when
   * the comboBox is disabled.
   */
  rootPressed: IStyle;

  /**
   * Styles for when the ComboBox is focused. These styles are applied for all comboBoxes except when
   * the comboBox is disabled.
   */
  rootFocused: IStyle;

  /**
   * Styles for when the comboBox is disabled. These styles override all the other styles.
   * NOTE : Hover (or) Focused (or) active styles are not applied for disabled comboBoxes.
   */
  rootDisabled: IStyle;

  /**
   * Base styles for the input element - which contains the currently selected
   * option.
   */
  input: IStyle;

  /**
   * Style override for the input element when comboBox is disabled.
   */
  inputDisabled: IStyle;

  /**
   * Styles for the error Message text of the comboBox.
   */
  errorMessage: IStyle;

  /**
   * Styles for the callout.
   */
  callout: IStyle;

  /**
  * Styles for the optionsContainerWrapper.
  */
  optionsContainerWrapper: IStyle;

  /**
   * Styles for the container of all the Combobox options
   * Includes the headers and dividers.
   */
  optionsContainer: IStyle;

  /**
 * Styles for a header in the options.
 */
  header: IStyle;

  /**
   * Styles for a divider in the options.
   */
  divider: IStyle;
}

export interface IComboBoxOptionStyles extends IButtonStyles {

  /**
   * Styles for the text inside the comboBox option.
   * This should be used instead of the description
   * inside IButtonStyles because we custom render the text
   * in the comboBox options.
   */
  optionText: IStyle;
}
