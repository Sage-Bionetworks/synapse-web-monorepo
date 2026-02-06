import{j as i}from"./iframe-Ya-g_qay.js";import{c as n}from"./SortDown-mJHBC_ou.js";import{H as o}from"./HeaderCard-4V5ywLvT.js";import"./index-Chi_LkuB.js";import"./HeaderCardV2-BtXVkvyR.js";import"./MarkdownSynapse-CFShCHbb.js";import"./SkeletonButton-WGw1QxaV.js";import"./SkeletonInlineBlock-BhpPIW12.js";import"./SkeletonTable-gSh9dXdS.js";import"./SkeletonParagraph-B7nhBI0o.js";import"./IsExternalLink-DeYq7Mrk.js";import"./index-xVTfjyPx.js";import"./Card-ZIbsqxVQ.js";import"./index-DQlQq6H4.js";import"./Icon-HeVAeVxY.js";import"./mouse-4zO98VHm.js";import"./ShowMore-D4ocjEbT.js";import"./SustainabilityScorecard-CWg0vtrM.js";import"./Close-CwYN6EVd.js";import"./Dial-BjH56RqP.js";import"./CheckIcon-QDhY0WSZ.js";import"./NoContentAvailable-htTT2x4m.js";const O={title:"Synapse/HeaderCard",component:o,parameters:{layout:"centered"},tags:["autodocs"]},e={args:{type:"Standard",title:"Example Study",description:"This is an example study description that demonstrates the HeaderCard component.",values:[{columnDisplayName:"Status",value:"Active"},{columnDisplayName:"Data Type",value:"Genomics"},{columnDisplayName:"Access",value:"Public"}],secondaryLabelLimit:3,isAlignToLeftNav:!1,descriptionConfig:{showFullDescriptionByDefault:!0},icon:i.jsx(n,{})}},a={args:{...e.args,title:"Study With Subtitle",subTitle:"Principal Investigator: John Doe"}},t={args:{...e.args,title:"DICOM",description:"Radiology imaging, including templates for narrative reports and machine-generated output. DICOM® — Digital Imaging and Communications in Medicine — is the international standard for medical images and related information. It defines the formats for medical images that can be exchanged with the data and quality necessary for clinical use.",values:[{columnDisplayName:"AUTHOR NAME",value:"DICOM (@dicom)"},{columnDisplayName:"LAT UPDATED",value:"2024-01-01"},{columnDisplayName:"BASED ON",value:"None"}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: 'Study With Subtitle',
    subTitle: 'Principal Investigator: John Doe'
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const E=["Default","WithSubtitle","Dicom"];export{e as Default,t as Dicom,a as WithSubtitle,E as __namedExportsOrder,O as default};
