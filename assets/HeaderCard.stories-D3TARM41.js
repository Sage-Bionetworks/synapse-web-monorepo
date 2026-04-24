import{n as e}from"./chunk-zsgVPwQN.js";import{t}from"./jsx-runtime-CR4qI0Ep.js";import{S as n,t as r}from"./themed_icons-BjewYdDU.js";import{n as i,t as a}from"./HeaderCard-QCCrEFxH.js";var o,s,c,l,u,d;e((()=>{r(),i(),o=t(),s={title:`Synapse/HeaderCard`,component:a,parameters:{layout:`centered`},tags:[`autodocs`]},c={args:{type:`Standard`,title:`Example Study`,description:`This is an example study description that demonstrates the HeaderCard component.`,values:[{columnDisplayName:`Status`,value:`Active`},{columnDisplayName:`Data Type`,value:`Genomics`},{columnDisplayName:`Access`,value:`Public`}],secondaryLabelLimit:3,isAlignToLeftNav:!1,descriptionConfig:{showFullDescriptionByDefault:!0},icon:(0,o.jsx)(n,{})}},l={args:{...c.args,title:`Study With Subtitle`,subTitle:`Principal Investigator: John Doe`}},u={args:{...c.args,title:`DICOM`,description:`Radiology imaging, including templates for narrative reports and machine-generated output. DICOM® — Digital Imaging and Communications in Medicine — is the international standard for medical images and related information. It defines the formats for medical images that can be exchanged with the data and quality necessary for clinical use.`,values:[{columnDisplayName:`AUTHOR NAME`,value:`DICOM (@dicom)`},{columnDisplayName:`LAT UPDATED`,value:`2024-01-01`},{columnDisplayName:`BASED ON`,value:`None`}]}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'Standard',
    title: 'Example Study',
    description: 'This is an example study description that demonstrates the HeaderCard component.',
    values: [{
      columnDisplayName: 'Status',
      value: 'Active'
    }, {
      columnDisplayName: 'Data Type',
      value: 'Genomics'
    }, {
      columnDisplayName: 'Access',
      value: 'Public'
    }],
    secondaryLabelLimit: 3,
    isAlignToLeftNav: false,
    descriptionConfig: {
      showFullDescriptionByDefault: true
    },
    icon: <Study />
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: 'Study With Subtitle',
    subTitle: 'Principal Investigator: John Doe'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: 'DICOM',
    description: 'Radiology imaging, including templates for narrative reports and machine-generated output. DICOM® — Digital Imaging and Communications in Medicine — is the international standard for medical images and related information. It defines the formats for medical images that can be exchanged with the data and quality necessary for clinical use.',
    values: [{
      columnDisplayName: 'AUTHOR NAME',
      value: 'DICOM (@dicom)'
    }, {
      columnDisplayName: 'LAT UPDATED',
      value: '2024-01-01'
    }, {
      columnDisplayName: 'BASED ON',
      value: 'None'
    }]
  }
}`,...u.parameters?.docs?.source}}},d=[`Default`,`WithSubtitle`,`Dicom`]}))();export{c as Default,u as Dicom,l as WithSubtitle,d as __namedExportsOrder,s as default};