import { FormlyFieldConfig, FormlyFieldProps } from '@ngx-formly/core';

//// **ENUMS** ////
export enum FormType {
  alert = 'alert',
  calendar = 'calendar',
  checkbox = 'checkbox',
  divider = 'divider',
  email = 'email',
  grid = 'grid',
  group = 'group',
  number = 'number',
  multicheckbox = 'multicheckbox',
  paragraph = 'paragraph',
  password = 'password',
  radio = 'radio',
  tel = 'tel',
  text = 'text',
  title = 'title',
}

//// **TYPES** ////
export type TextFormattingOption =
  | 'bold'
  | 'underline'
  | 'italic'
  | 'strikethrough';
export type TextFormattingOptions = TextFormattingOption[];

export type Align = 'left' | 'center' | 'right' | 'justify';
export type HeadingType = 'h1' | 'h2' | 'h3';
export type Severity = 'info' | 'warn' | 'error' | 'success';
export type Color =
  | `#${string}`
  | `rgb(${number},${number},${number})`
  | `rgba(${number},${number},${number},${number})`;

export type SelectOption = Align | HeadingType | Severity | number | string;

export type FieldGroup = CustomFormlyFieldConfig[]

export type Wrapper =
  | 'alertWrapper'
  | 'dividerWrapper'
  | 'fieldWrapper'
  | 'formControlWrapper'
  | 'paragraphWrapper'
  | 'titleWrapper';

export interface FormFieldList {
  title: string;
  items: FormFieldItem[];
}

export interface FormFieldItem {
  label: string;
  description: string;
  icon: string;
  field: CustomFormlyFieldConfig;
}

export interface FormFieldType {
  ALERT_WRAPPER: CustomFormlyFieldConfig;
  DIVIDER_WRAPPER: CustomFormlyFieldConfig;
  INPUT_CALENDAR: CustomFormlyFieldConfig;
  INPUT_CHECKBOX: CustomFormlyFieldConfig;
  INPUT_EMAIL: CustomFormlyFieldConfig;
  INPUT_NUMBER: CustomFormlyFieldConfig;
  INPUT_MULTICHECKBOX: CustomFormlyFieldConfig;
  INPUT_PASSWORD: CustomFormlyFieldConfig;
  INPUT_RADIO: CustomFormlyFieldConfig;
  INPUT_TEL: CustomFormlyFieldConfig;
  INPUT_TEXT: CustomFormlyFieldConfig;
  INPUT_TITLE: CustomFormlyFieldConfig;
  INPUT_PARAGRAPH: CustomFormlyFieldConfig;
  INPUT_GROUP: CustomFormlyFieldConfig;
}

//// **INTERFACES** ////
export interface CustomFormlyFieldConfig extends Omit<FormlyFieldConfig, 'type'> {
  type: FormType | undefined; // Reemplaza el tipo existente
  wrappers?: Wrapper[];
  props: CustomFormlyFieldProps;
  fieldGroup?: CustomFormlyFieldConfig[]
}

export interface CustomFormlyFieldProps extends FormlyFieldProps {
  textFormattingOptions?: TextFormattingOptions;
  tooltip?: string;
  headingType?: HeadingType;
  align?: Align;
  exactLength?: number;
  severity?: Severity;
  minDate?: Date;
  maxDate?: Date;
}
