import{o as e}from"./preload-helper-CsHsquCd.js";import{n as t,t as n}from"./AttachmentChip-DHwMcMf8.js";var r,i,a,o,s,c,l;e((()=>{t(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Synapse/Chat/AttachmentChip`,component:n},a={args:{label:`PCA_Lung_Cancer_Feature_Reduction_Classification.pdf`,contentType:`application/pdf`}},o={args:{label:`report.csv`,contentType:`text/csv`,onRemove:r()}},s={args:{label:`9999999`}},c={args:{label:`unsupported-file.exe`,status:`failed`,errorMessage:`This file type is not supported.`}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'PCA_Lung_Cancer_Feature_Reduction_Classification.pdf',
    contentType: 'application/pdf'
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'report.csv',
    contentType: 'text/csv',
    onRemove: fn()
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    // A restored/polled turn only has the fileHandleId that was sent to the server.
    label: '9999999'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'unsupported-file.exe',
    status: 'failed',
    errorMessage: 'This file type is not supported.'
  }
}`,...c.parameters?.docs?.source}}},l=[`Default`,`Removable`,`GenericRestoredAttachment`,`Failed`]}))();export{a as Default,c as Failed,s as GenericRestoredAttachment,o as Removable,l as __namedExportsOrder,i as default};