import { FormType } from "../../../types/form-builder.types";

export interface FormFieldSettings {
    data: {
      showDefaultValue: boolean;
      showOptions: boolean;
    };
    layout: {
      showHeadingType: boolean;
      showAlign: boolean;
      showSeverity: boolean;
      showTextFormattingOptions: boolean;
      showCols: boolean;
    };
    properties: {
      showLabel: boolean;
      showTooltip: boolean;
      showPlaceholder: boolean;
      showDescription: boolean;
    };
    validations: {
      showRequired: boolean;
      showDisabled: boolean;
      showReadonly: boolean;
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
  export type SectionPropertyKeys<T extends SectionKeys> = keyof FormFieldSettings[T];
  
  export type PropertyConfigMap = {
    [K in keyof FormFieldSettings]: {
      [P in keyof FormFieldSettings[K]]: FormType[];
    };
  };
  