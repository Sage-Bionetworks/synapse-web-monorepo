import{j as i}from"./iframe-ebumedXL.js";import{c as n}from"./SortDown-BWzO7QyL.js";import{H as o}from"./HeaderCard-DQMoo-zO.js";import"./index-Chi_LkuB.js";import"./HeaderCardV2-DPvv4V4Y.js";import"./MarkdownSynapse-BSPB6zOl.js";import"./SkeletonButton-ClK4nZ4V.js";import"./SkeletonInlineBlock--tfqxNwn.js";import"./SkeletonTable-D1WsuyYZ.js";import"./SkeletonParagraph-CjkSb5xZ.js";import"./IsExternalLink--eXBmGmb.js";import"./index-BXiypiiB.js";import"./Card-TzJMzE0i.js";import"./index-Rzqa0rBU.js";import"./Icon-fY9iMZQt.js";import"./mouse-ZzzDCYsS.js";import"./ShowMore-BAIM_yN5.js";import"./SustainabilityScorecard-4spLALin.js";import"./Close-BrRtpMs2.js";import"./Dial-BV7u02jg.js";import"./CheckIcon-xslo7yjD.js";import"./NoContentAvailable-efp72CYk.js";const O={title:"Synapse/HeaderCard",component:o,parameters:{layout:"centered"},tags:["autodocs"]},e={args:{type:"Standard",title:"Example Study",description:"This is an example study description that demonstrates the HeaderCard component.",values:[{columnDisplayName:"Status",value:"Active"},{columnDisplayName:"Data Type",value:"Genomics"},{columnDisplayName:"Access",value:"Public"}],secondaryLabelLimit:3,isAlignToLeftNav:!1,descriptionConfig:{showFullDescriptionByDefault:!0},icon:i.jsx(n,{})}},a={args:{...e.args,title:"Study With Subtitle",subTitle:"Principal Investigator: John Doe"}},t={args:{...e.args,title:"DICOM",description:"Radiology imaging, including templates for narrative reports and machine-generated output. DICOM® — Digital Imaging and Communications in Medicine — is the international standard for medical images and related information. It defines the formats for medical images that can be exchanged with the data and quality necessary for clinical use.",values:[{columnDisplayName:"AUTHOR NAME",value:"DICOM (@dicom)"},{columnDisplayName:"LAT UPDATED",value:"2024-01-01"},{columnDisplayName:"BASED ON",value:"None"}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
