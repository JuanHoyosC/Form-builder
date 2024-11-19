import { FormlyExtension, FormlyFieldConfig } from '@ngx-formly/core';
import {
  FormFieldList,
  FormFieldType,
  FormType,
} from '../pages/form-builder/interfaces/form-builder';
import { InputFieldCalendarComponent } from '../pages/form-builder/fields/input-field-calendar/input-field-calendar.component';
import { InputFieldCheckboxComponent } from '../pages/form-builder/fields/input-field-checkbox/input-field-checkbox.component';
import { InputFieldEmailComponent } from '../pages/form-builder/fields/input-field-email/input-field-email.component';
import { InputFieldGroupComponent } from '../pages/form-builder/fields/input-field-group/input-field-group.component';
import { InputFieldNumberComponent } from '../pages/form-builder/fields/input-field-number/input-field-number.component';
import { InputFieldParagraphComponent } from '../pages/form-builder/fields/input-field-paragraph/input-field-paragraph.component';
import { InputFieldPasswordComponent } from '../pages/form-builder/fields/input-field-password/input-field-password.component';
import { InputFieldRadioComponent } from '../pages/form-builder/fields/input-field-radio/input-field-radio.component';
import { InputFieldTelComponent } from '../pages/form-builder/fields/input-field-tel/input-field-tel.component';
import { InputFieldTextComponent } from '../pages/form-builder/fields/input-field-text/input-field-text.component';
import { InputFieldTitleComponent } from '../pages/form-builder/fields/input-field-title/input-field-title.component';
import { AlertComponent } from '../pages/form-builder/wrappers/alert/alert.component';
import { DividerComponent } from '../pages/form-builder/wrappers/divider/divider.component';
import { FieldWrapperComponent } from '../pages/form-builder/wrappers/fieldWrapper/fieldWrapper.component';
import { InputFieldMultiCheckboxComponent } from '../pages/form-builder/fields/input-field-multicheckbox/input-field-multicheckbox.component';

export const FORM_FIELD_TYPES: FormFieldType = {
  ALERT_WRAPPER: {
    type: FormType.alert,
    props: {
      description: 'Escribe aqui un mensaje de ayuda',
      severity: 'info',
      align: 'left',
      textFormattingOptions: [],
    },
    wrappers: [FormType.alert],
  },
  INPUT_CALENDAR: {
    key: '',
    type: FormType.calendar,
    wrappers: ['fieldWrapper'],
    props: {
      label: '',
      placeholder: '',
    },
  },
  INPUT_CHECKBOX: {
    key: '',
    type: FormType.checkbox,
    props: {
      label: '',
      placeholder: '',
    },
  },
  DIVIDER_WRAPPER: {
    type: FormType.divider,
    props: {},
    wrappers: [FormType.divider],
  },
  INPUT_EMAIL: {
    key: '',
    type: FormType.email,
    wrappers: ['fieldWrapper'],
    props: {
      type: 'text',
      label: '',
      placeholder: '',
    },
  },
  INPUT_NUMBER: {
    key: '',
    type: FormType.number,
    wrappers: ['fieldWrapper'],
    props: {
      label: '',
      placeholder: '',
    },
  },
  INPUT_MULTICHECKBOX: {
    key: '',
    type: FormType.multicheckbox,
    wrappers: ['fieldWrapper'],
    props: {
      label: '',
      description: '',
      options: undefined,
    },
  },
  INPUT_PARAGRAPH: {
    key: '',
    type: FormType.paragraph,
    props: {
      description: 'Contenido de ayuda',
      align: 'left',
      textFormattingOptions: [],
    },
  },
  INPUT_PASSWORD: {
    key: '',
    type: FormType.password,
    wrappers: ['fieldWrapper'],
    props: {
      label: '',
      placeholder: '',
    },
  },
  INPUT_RADIO: {
    key: '',
    type: FormType.radio,
    wrappers: ['fieldWrapper'],
    props: {
      label: '',
      description: '',
      options: undefined,
    },
  },
  INPUT_TEL: {
    key: '',
    type: FormType.tel,
    wrappers: ['fieldWrapper'],
    props: {
      label: '',
      placeholder: '',
    },
  },
  INPUT_TEXT: {
    key: '',
    type: FormType.text,
    wrappers: ['fieldWrapper'],
    defaultValue: '',
    props: {
      label: '',
      placeholder: '',
      tooltip: '',
      required: false,
      disabled: false,
      readonly: false,
      minLength: 0,
      maxLength: 255,
    },
  },
  INPUT_TITLE: {
    key: '',
    type: FormType.title,
    props: {
      label: '',
      headingType: 'h1',
      align: 'left',
      textFormattingOptions: ['bold'],
    },
  },
  INPUT_GROUP: {
    key: '',
    type: FormType.group,
    fieldGroup: [],
    props: {
      label: 'Group',
      cols: 1,
    },
  },
  INPUT_GROUP_GRID: {
    key: '',
    type: FormType.grid,
    fieldGroup: [],
    props: {
      label: 'Grids columns',
      cols: 3,
    },
  },
};

export const FORM_FIELD_LIST: FormFieldList[] = [
  {
    title: 'Layout',
    items: [
      {
        label: 'container',
        icon: 'ionSquareOutline',
        field: FORM_FIELD_TYPES.INPUT_GROUP,
      },
      {
        label: 'Divider',
        icon: 'heroMinus',
        field: FORM_FIELD_TYPES.DIVIDER_WRAPPER,
      },
      {
        label: 'Grid',
        icon: 'heroViewColumns',
        field: FORM_FIELD_TYPES.INPUT_GROUP_GRID,
      },
      {
        label: 'Message',
        icon: 'ionInformationCircleOutline',
        field: FORM_FIELD_TYPES.ALERT_WRAPPER,
      },
      {
        label: 'Paragraph',
        icon: 'heroDocumentText',
        field: FORM_FIELD_TYPES.INPUT_PARAGRAPH,
      },
      {
        label: 'Title',
        icon: 'heroH1',
        field: FORM_FIELD_TYPES.INPUT_TITLE,
      },
    ],
  },
  {
    title: 'Fields',
    items: [
      {
        label: 'Text',
        icon: 'ionTextOutline',
        field: FORM_FIELD_TYPES.INPUT_TEXT,
      },
      {
        label: 'Number',
        icon: 'heroHashtag',
        field: FORM_FIELD_TYPES.INPUT_NUMBER,
      },
      {
        label: 'Email',
        icon: 'ionMailOutline',
        field: FORM_FIELD_TYPES.INPUT_EMAIL,
      },
      {
        label: 'Password',
        icon: 'heroEllipsisHorizontal',
        field: FORM_FIELD_TYPES.INPUT_PASSWORD,
      },
      {
        label: 'Checkbox',
        icon: 'ionCheckboxOutline',
        field: FORM_FIELD_TYPES.INPUT_CHECKBOX,
      },
      {
        label: 'Checkbox group',
        icon: 'ionCheckboxOutline',
        field: FORM_FIELD_TYPES.INPUT_MULTICHECKBOX,
      },
      {
        label: 'Radio',
        icon: 'ionRadioButtonOnOutline',
        field: FORM_FIELD_TYPES.INPUT_RADIO,
      },
      {
        label: 'Calendar',
        icon: 'ionCalendarNumberOutline',
        field: FORM_FIELD_TYPES.INPUT_CALENDAR,
      },
      {
        label: 'Tel',
        icon: 'ionCallOutline',
        field: FORM_FIELD_TYPES.INPUT_TEL,
      },
    ],
  },
  {
    title: 'Advanced fields',
    items: [],
  },
];

export const defaultLabelExtension: FormlyExtension = {
  prePopulate(field: FormlyFieldConfig): void {
    if (!field.props?.label) {
      field.props = { ...field.props, label: 'Default Label' };
    }
  },
};

export const defaultOptionsExtension: FormlyExtension = {
  prePopulate(field: FormlyFieldConfig): void {
    const fieldTypes = [FormType.radio, FormType.multicheckbox];
    const currentFielType = field.type as FormType;
    if (!fieldTypes.includes(currentFielType)) return;
    if (field.props?.options) return;

    field.props = {
      ...field.props,
      options: [
        {
          label: 'option 1',
          value: 'option 1',
        },
        {
          label: 'option 2',
          value: 'option 2',
        },
      ],
    };
  },
};

export const FORMLY_EXTENSIONS = [
  {
    name: 'default-label',
    extension: defaultLabelExtension,
  },
  {
    name: 'default-options',
    extension: defaultOptionsExtension,
  },
];

export const FORMLY_TYPES = [
  { name: 'calendar', component: InputFieldCalendarComponent },
  { name: 'checkbox', component: InputFieldCheckboxComponent },
  { name: 'email', component: InputFieldEmailComponent },
  { name: 'group', component: InputFieldGroupComponent },
  { name: 'number', component: InputFieldNumberComponent },
  { name: 'multicheckbox', component: InputFieldMultiCheckboxComponent },
  { name: 'paragraph', component: InputFieldParagraphComponent },
  { name: 'password', component: InputFieldPasswordComponent },
  { name: 'radio', component: InputFieldRadioComponent },
  { name: 'tel', component: InputFieldTelComponent },
  { name: 'text', component: InputFieldTextComponent },
  { name: 'title', component: InputFieldTitleComponent },
];

export const FORMLY_WRAPPERS = [
  { name: 'alert', component: AlertComponent },
  { name: 'divider', component: DividerComponent },
  { name: 'fieldWrapper', component: FieldWrapperComponent },
];
