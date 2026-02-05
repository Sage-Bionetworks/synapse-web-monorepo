import{j as i}from"./iframe-CmoSAPSB.js";import{c as n}from"./SortDown-BBrOCXSP.js";import{H as o}from"./HeaderCard-zoI-RBBE.js";import"./index-Chi_LkuB.js";import"./HeaderCardV2-CBM-GkGg.js";import"./MarkdownSynapse-vijXPkmg.js";import"./SkeletonButton-BiCcSD_e.js";import"./SkeletonInlineBlock-Cx8PzyyP.js";import"./SkeletonTable-BfBRnH8d.js";import"./SkeletonParagraph-JgANzJ5n.js";import"./IsExternalLink-DeYq7Mrk.js";import"./index-C2zeCRkX.js";import"./Card-KnQ9tlyZ.js";import"./index-Bu6DfioJ.js";import"./Icon-B-p5SsF1.js";import"./mouse-D8_IVM85.js";import"./ShowMore-B_Q1rnDI.js";import"./SustainabilityScorecard-B2bnlBDC.js";import"./Close-yUN2-UGG.js";import"./Dial-DTAvokoh.js";import"./CheckIcon-lx7Y_leX.js";import"./NoContentAvailable-DiBriyVb.js";const O={title:"Synapse/HeaderCard",component:o,parameters:{layout:"centered"},tags:["autodocs"]},e={args:{type:"Standard",title:"Example Study",description:"This is an example study description that demonstrates the HeaderCard component.",values:[{columnDisplayName:"Status",value:"Active"},{columnDisplayName:"Data Type",value:"Genomics"},{columnDisplayName:"Access",value:"Public"}],secondaryLabelLimit:3,isAlignToLeftNav:!1,descriptionConfig:{showFullDescriptionByDefault:!0},icon:i.jsx(n,{})}},a={args:{...e.args,title:"Study With Subtitle",subTitle:"Principal Investigator: John Doe"}},t={args:{...e.args,title:"DICOM",description:"Radiology imaging, including templates for narrative reports and machine-generated output. DICOM® — Digital Imaging and Communications in Medicine — is the international standard for medical images and related information. It defines the formats for medical images that can be exchanged with the data and quality necessary for clinical use.",values:[{columnDisplayName:"AUTHOR NAME",value:"DICOM (@dicom)"},{columnDisplayName:"LAT UPDATED",value:"2024-01-01"},{columnDisplayName:"BASED ON",value:"None"}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
