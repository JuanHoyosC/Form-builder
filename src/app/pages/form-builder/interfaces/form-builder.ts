import { FormlyFieldConfig, FormlyFieldProps } from '@ngx-formly/core';

export interface FormFieldList {
  title: string;
  items: FormFieldItem[];
}

export interface FormFieldItem {
  label: string;
  icon: string;
  field: FormlyFieldConfig;
}

export interface FormFieldType {
  ALERT_WRAPPER: CustomFormlyFieldConfig,
  DIVIDER_WRAPPER: CustomFormlyFieldConfig;
  INPUT_CALENDAR: CustomFormlyFieldConfig;
  INPUT_CHECKBOX: CustomFormlyFieldConfig;
  INPUT_EMAIL: CustomFormlyFieldConfig;
  INPUT_NUMBER: CustomFormlyFieldConfig;
  INPUT_PASSWORD: CustomFormlyFieldConfig;
  INPUT_RADIO: CustomFormlyFieldConfig;
  INPUT_TEL: CustomFormlyFieldConfig;
  INPUT_TEXT: CustomFormlyFieldConfig;
  INPUT_TITLE: CustomFormlyFieldConfig;
  INPUT_PARAGRAPH: CustomFormlyFieldConfig;
  INPUT_GROUP: CustomFormlyFieldConfig;
  INPUT_GROUP_GRID: CustomFormlyFieldConfig;
}

export interface CustomFormlyFieldConfig extends FormlyFieldConfig {
  type: FormType | string; // Reemplaza el tipo existente
  props: FormlyFieldProps & CustomFormlyFieldProps
}

export interface CustomFormlyFieldProps {
  underline?: boolean,
  italic?: boolean
  bold?: boolean
  strikethrough?: boolean
  tooltip?: string,
  headingType?: HeadingType,
  align?: Align
  exactLength?: number,
  severity?: Severity
}

export type Align = 'left' | 'center' | 'right' | 'justify';
export type HeadingType = 'h1' | 'h2' | 'h3';
export type Severity = 'info' | 'warn' | 'error' | 'success';
export type TextStyleKeys = keyof Pick<CustomFormlyFieldProps, 'underline' | 'italic' | 'bold' | 'strikethrough'>;
export type Color = `#${string}` | `rgb(${number},${number},${number})` | `rgba(${number},${number},${number},${number})`;

export type LayoutOption = {
  icon: string;
  value: HeadingType | Align | Severity | TextStyleKeys;
  disabled?: boolean;
  color?: Color
}




export enum FormType {
  alert = 'alert',
  calendar = 'calendar',
  checkbox = 'checkbox',
  divider = 'divider',
  email = 'email',
  grid = 'grid',
  group = 'group',
  number = 'number',
  paragraph = 'paragraph',
  password = 'password',
  radio = 'radio',
  tel = 'tel',
  text = 'text',
  title = 'title',
}

export type FieldGroup =
  | FormlyFieldConfig<
      FormlyFieldProps & Record<string, boolean>
    >[]
  | undefined;
