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
  multicheckbox = 'multicheckbox',
  multiselect = 'multiselect',
  number = 'number',
  paragraph = 'paragraph',
  password = 'password',
  radio = 'radio',
  rating = 'rating',
  signature = 'signature',
  select = 'select',
  slider = 'slider',
  tel = 'tel',
  text = 'text',
  textarea = 'textarea',
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
export type RatingType = 'start' | 'numbers';
export type Severity = 'info' | 'warn' | 'error' | 'success';
export type Color =
  | `#${string}`
  | `rgb(${number},${number},${number})`
  | `rgba(${number},${number},${number},${number})`;

export type SelectOption = Align | HeadingType | Severity | number | string;

export type FieldGroup = CustomFormlyFieldConfig[];

export interface OptionProps {
  label: string;
  value: string | string[] | number | boolean | undefined;
}

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
  INPUT_GROUP: CustomFormlyFieldConfig;
  INPUT_MULTICHECKBOX: CustomFormlyFieldConfig;
  INPUT_MULTISELECT: CustomFormlyFieldConfig;
  INPUT_NUMBER: CustomFormlyFieldConfig;
  INPUT_PARAGRAPH: CustomFormlyFieldConfig;
  INPUT_PASSWORD: CustomFormlyFieldConfig;
  INPUT_RADIO: CustomFormlyFieldConfig;
  INPUT_RATING: CustomFormlyFieldConfig;
  INPUT_SLIDER: CustomFormlyFieldConfig;
  INPUT_SIGNATURE: CustomFormlyFieldConfig;
  INPUT_SELECT: CustomFormlyFieldConfig;
  INPUT_TEL: CustomFormlyFieldConfig;
  INPUT_TEXT: CustomFormlyFieldConfig;
  INPUT_TEXTAREA: CustomFormlyFieldConfig;
  INPUT_TITLE: CustomFormlyFieldConfig;
}

//// **INTERFACES** ////
export interface CustomFormlyFieldConfig
  extends Omit<FormlyFieldConfig, 'type'> {
  type: FormType | undefined; // Reemplaza el tipo existente
  wrappers?: Wrapper[];
  props: CustomFormlyFieldProps;
  fieldGroup?: CustomFormlyFieldConfig[];
}

export interface CustomFormlyFieldProps extends FormlyFieldProps {
  textFormattingOptions?: TextFormattingOptions;
  tooltip?: string;
  headingType?: HeadingType;
  ratingType?: RatingType;
  align?: Align;
  exactLength?: number;
  stars?: number;
  severity?: Severity;
  minDate?: Date;
  maxDate?: Date;
  options?: OptionProps[];
  leftText?: string;
  rightText?: string;
}
