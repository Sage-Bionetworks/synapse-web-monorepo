import{o as e}from"./preload-helper-CsHsquCd.js";import{n as t,t as n}from"./CreateOrUpdateCurationTaskDialog-C0oB_4p4.js";var r,i,a,o,s,c,l;e((()=>{t(),r={title:`Synapse/Entity/CreateOrUpdateCurationTaskDialog`,component:n,args:{open:!0,projectId:`syn12554559`,onCancel:()=>{},onSuccess:()=>{}},parameters:{stack:`mock`}},i={},a={projectId:`syn12554559`,dataType:`Gene Expression`,instructions:`Please fill in all metadata fields for each file.`,assigneePrincipalId:`3456789`,taskProperties:{concreteType:`org.sagebionetworks.repo.model.curation.metadata.FileBasedMetadataTaskProperties`,uploadFolderId:`syn111`,fileViewId:`syn222`,suggestedAuthorizationMode:`SESSION_OWNER`}},o={projectId:`syn12554559`,dataType:`Clinical Data`,instructions:`Add records for each clinical data entry.`,taskProperties:{concreteType:`org.sagebionetworks.repo.model.curation.metadata.RecordBasedMetadataTaskProperties`,recordSetId:`syn333`,suggestedAuthorizationMode:`SOURCE_BENEFACTOR`}},s={name:`Edit Mode — File-Based`,args:{task:a}},c={name:`Edit Mode — Record-Based`,args:{task:o}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{}`,...i.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Edit Mode — File-Based',
  args: {
    task: fileBasedTask
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Edit Mode — Record-Based',
  args: {
    task: recordBasedTask
  }
}`,...c.parameters?.docs?.source}}},l=[`CreateMode`,`EditModeFileBased`,`EditModeRecordBased`]}))();export{i as CreateMode,s as EditModeFileBased,c as EditModeRecordBased,l as __namedExportsOrder,r as default};