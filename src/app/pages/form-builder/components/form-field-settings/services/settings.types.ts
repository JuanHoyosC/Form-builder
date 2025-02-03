import { FormType } from '../../../types/form-builder.types';

export interface FormFieldSettings {
  data: {
    showDefaultValue: boolean;
    showOptions: boolean;
  };
  layout: {
    showAlign: boolean;
    showCols: boolean;
    showHeadingType: boolean;
    showRatingType: boolean;
    showSeverity: boolean;
    showTextFormattingOptions: boolean;
  };
  properties: {
    showDescription: boolean;
    showLabel: boolean;
    showLeftText: boolean;
    showPlaceholder: boolean;
    showRightText: boolean;
    showTooltip: boolean;
  };
  validations: {
    showRequired: boolean;
    showDisabled: boolean;
    showReadonly: boolean;
    showStarCount: boolean;
    showMin: boolean;
    showMax: boolean;
    showMinDate: boolean;
    showMaxDate: boolean;
    showMinLength: boolean;
    showMaxLength: boolean;
    showExactLength: boolean;
    showPattern: boolean;
  };
}

export type SectionKeys = keyof FormFieldSettings;
export type SectionPropertyKeys<T extends SectionKeys> =
  keyof FormFieldSettings[T];

export type PropertyConfigMap = {
  [K in keyof FormFieldSettings]: {
    [P in keyof FormFieldSettings[K]]: FormType[];
  };
};
