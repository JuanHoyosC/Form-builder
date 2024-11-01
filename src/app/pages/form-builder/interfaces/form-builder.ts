import { FormlyFieldConfig, FormlyFieldProps } from '@ngx-formly/core';

export type FormFieldList = {
  title: string;
  items: FormFieldItem[];
};

export type FormFieldItem = {
  label: string;
  icon: string;
  field: FormlyFieldConfig;
};

export type FormFieldType = {
  INPUT_CALENDAR: FormlyFieldConfig;
  INPUT_CHECKBOX: FormlyFieldConfig;
  INPUT_EMAIL: FormlyFieldConfig;
  INPUT_NUMBER: FormlyFieldConfig;
  INPUT_PASSWORD: FormlyFieldConfig;
  INPUT_RADIO: FormlyFieldConfig;
  INPUT_TEL: FormlyFieldConfig;
  INPUT_TEXT: FormlyFieldConfig;
  INPUT_TITLE: FormlyFieldConfig;
  INPUT_GROUP: FormlyFieldConfig;
  INPUT_GROUP_GRID: FormlyFieldConfig;
};

export type FieldGroup =
  | FormlyFieldConfig<
      FormlyFieldProps & {
        [additionalProperties: string]: any;
      }
    >[]
  | undefined;
