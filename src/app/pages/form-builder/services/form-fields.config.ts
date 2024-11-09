
import {
  FormFieldList,
  FormFieldType,
  FormType,
} from '../interfaces/form-builder';

export const FORM_FIELD_TYPES: FormFieldType = {
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
  INPUT_PARAGRAPH: {
    key: '',
    type: FormType.paragraph,
    props: {
      label: '',
      placeholder: '',
      align: 'left',
      bold: false,
      italic: false,
      strikethrough: false,
      underline: false,
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
      placeholder: '',
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
      bold: true,
      italic: false,
      strikethrough: false,
      underline: false,
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
        label: 'Grid',
        icon: 'heroViewColumns',
        field: FORM_FIELD_TYPES.INPUT_GROUP_GRID,
      },
      {
        label: 'Title',
        icon: 'heroH1',
        field: FORM_FIELD_TYPES.INPUT_TITLE,
      },
      {
        label: 'Paragraph',
        icon: 'heroDocumentText',
        field: FORM_FIELD_TYPES.INPUT_PARAGRAPH,
      },
      {
        label: 'Divider',
        icon: 'heroMinus',
        field: FORM_FIELD_TYPES.DIVIDER_WRAPPER,
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
