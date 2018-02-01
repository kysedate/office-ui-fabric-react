import * as React from 'react';
import {
  SpinButton,
  ISpinButtonStyles,
  ISpinButtonStyleProps,
  ISpinButtonArrowStyleProps
} from 'office-ui-fabric-react/lib/SpinButton';
import { IButtonStyles } from 'office-ui-fabric-react/lib/Button';

const getStyles = (
  props: ISpinButtonStyleProps
): Partial<ISpinButtonStyles> => {
  return {
    root: {
      width: '400px'
    }
  };
};

const upArrowButtonStyles: Partial<IButtonStyles> = {
  rootChecked: {
    backgroundColor: 'green'
  },
  rootPressed: {
    backgroundColor: 'green'
  }
};

const downArrowButtonStyles: Partial<IButtonStyles> = {
  rootChecked: {
    backgroundColor: 'red'
  },
  rootPressed: {
    backgroundColor: 'red'
  }
};

export class SpinButtonCustomStyledExample extends React.Component<any, any> {
  public render() {
    return (
      <div>
        <SpinButton
          getStyles={ getStyles }
          upArrowButtonStyles={ upArrowButtonStyles }
          downArrowButtonStyles={ downArrowButtonStyles }
          defaultValue='0'
          label={ 'Custom styled SpinButton:' }
          min={ 0 }
          max={ 100 }
          step={ 1 }
        />
      </div>
    );
  }
}
