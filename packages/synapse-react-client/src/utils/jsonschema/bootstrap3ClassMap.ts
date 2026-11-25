import { FormClassMap } from '@rjsf/utils'

/**
 * The Bootstrap 3 class names `@rjsf/core` rendered before v7, which our styles for the forms built on `@rjsf/core`
 * (rather than our MUI `JsonSchemaForm`) target. Since v7, `@rjsf/core` renders unstyled markup unless given a class
 * map. Taken from `@rjsf/bootstrap3`, whose published 7.0.0-beta.1 package ships no build to import.
 */
export const BOOTSTRAP3_CLASS_MAP: FormClassMap = {
  input: 'form-control',
  select: 'form-control',
  textarea: 'form-control',
  fileInput: 'form-control',
  rangeInput: 'form-control',
  checkboxWrapper: 'checkbox',
  checkboxInlineLabel: 'checkbox-inline',
  radioWrapper: 'radio',
  radioInlineLabel: 'radio-inline',
  disabled: 'disabled',
  altDateList: 'list-inline',
  altDateListItem: 'list-inline-item',
  altDateNowButton: 'btn btn-info',
  altDateClearButton: 'btn btn-warning',
  fieldLabel: 'control-label',
  fieldErrors: 'bs-callout bs-callout-info',
  fieldError: 'text-danger',
  fieldHelp: 'help-block',
  errorList: 'panel panel-danger',
  errorListHeading: 'panel-heading',
  errorListTitle: 'panel-title',
  errorListItems: 'list-group',
  errorListItem: 'list-group-item text-danger',
  arrayItemList: 'row',
  multiSchema: 'panel panel-default panel-body',
  multiSchemaSelector: 'form-group',
  cyclicSchemaMessage: 'text-danger',
  cyclicSchemaExpandButton: 'btn btn-sm btn-warning',
  optionalDataAddButton: 'btn-sm',
  optionalDataRemoveButton: 'btn-sm',
  submitButton: 'btn btn-info',
}
