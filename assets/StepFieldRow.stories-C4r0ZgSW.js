import{o as e}from"./preload-helper-CsHsquCd.js";import{n as t,t as n}from"./StepFieldRow-CIzqiD-O.js";var r,i,a,o,s,c,l,u;e((()=>{t(),r={title:`Components/FormTemplateEditor/StepFieldRow`,component:n,args:{sortableId:`slot:0:0`,sortableIndex:0,sortableGroup:`step:0`,field:{schemaPath:`/institution`,uiDefinition:null},resolvedProperty:{type:`string`,title:`Institution`},context:`ALWAYS`,propertyKey:`institution`,isFirst:!1,isLast:!1,onChange:e=>console.log(`onChange`,e),onMoveUp:()=>console.log(`onMoveUp`),onMoveDown:()=>console.log(`onMoveDown`),onRemove:()=>console.log(`onRemove`)}},i={},a={args:{isFirst:!0,isLast:!0}},o={args:{field:{schemaPath:`/summaryOfUse`,uiDefinition:null,submissionContext:`RENEWAL_ONLY`,isPublic:!0},resolvedProperty:{type:`string`,title:`Summary of use`},context:`RENEWAL_ONLY`,propertyKey:`summaryOfUse`}},s={args:{field:{schemaPath:`/deletedProperty`,uiDefinition:null},resolvedProperty:void 0,propertyKey:`deletedProperty`}},c={args:{field:{schemaPath:`/consentForm`,uiDefinition:null},resolvedProperty:{format:`synapse-filehandle-id`},propertyKey:`consentForm`}},l={args:{field:{schemaPath:`/consentForm`,uiDefinition:null,templateFileHandleId:`987654321`},resolvedProperty:{format:`synapse-filehandle-id`},propertyKey:`consentForm`,formTemplateId:void 0}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isFirst: true,
    isLast: true
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    field: {
      schemaPath: '/summaryOfUse',
      uiDefinition: null,
      submissionContext: 'RENEWAL_ONLY',
      isPublic: true
    },
    resolvedProperty: {
      type: 'string',
      title: 'Summary of use'
    },
    context: 'RENEWAL_ONLY',
    propertyKey: 'summaryOfUse'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    field: {
      schemaPath: '/deletedProperty',
      uiDefinition: null
    },
    resolvedProperty: undefined,
    propertyKey: 'deletedProperty'
  }
}`,...s.parameters?.docs?.source},description:{story:`The slot's schemaPath no longer resolves to a real property -- e.g. the property was deleted
from the schema after this slot was bound to it.`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    field: {
      schemaPath: '/consentForm',
      uiDefinition: null
    },
    resolvedProperty: {
      format: 'synapse-filehandle-id'
    },
    propertyKey: 'consentForm'
  }
}`,...c.parameters?.docs?.source},description:{story:`Expand the row (click "Expand field") to reveal the template-file control for this type.`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    field: {
      schemaPath: '/consentForm',
      uiDefinition: null,
      templateFileHandleId: '987654321'
    },
    resolvedProperty: {
      format: 'synapse-filehandle-id'
    },
    propertyKey: 'consentForm',
    formTemplateId: undefined
  }
}`,...l.parameters?.docs?.source},description:{story:`A template file is attached, but the FormTemplate has not been saved yet, so download is not
available. Expand the row to see the control.`,...l.parameters?.docs?.description}}},u=[`Default`,`FirstAndLastRow`,`SubmissionContextAndPublicBadges`,`UnresolvedField`,`FileField`,`FileFieldWithTemplateOnUnsavedTemplate`]}))();export{i as Default,c as FileField,l as FileFieldWithTemplateOnUnsavedTemplate,a as FirstAndLastRow,o as SubmissionContextAndPublicBadges,s as UnresolvedField,u as __namedExportsOrder,r as default};