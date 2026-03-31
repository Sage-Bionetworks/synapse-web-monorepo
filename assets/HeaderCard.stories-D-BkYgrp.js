import{j as i}from"./iframe-DGtd-eZ6.js";import{c as n}from"./SortDown-CSu0y8NX.js";import{H as o}from"./HeaderCard-CZ4LaWCZ.js";import"./index-Chi_LkuB.js";import"./HeaderCardV2-FcIDVIgS.js";import"./MarkdownSynapse-Ck3-QFfE.js";import"./SkeletonButton-Dv9p8gRu.js";import"./SkeletonInlineBlock-BeCQqojL.js";import"./SkeletonTable-If1Q4Zg-.js";import"./SkeletonParagraph-B4bRIlqn.js";import"./IsExternalLink--eXBmGmb.js";import"./index-DRd13Kob.js";import"./Card-DHfeIgmt.js";import"./index-BBnuEekj.js";import"./Icon-B-unSmTt.js";import"./mouse-KqHqToPV.js";import"./ShowMore-FR6QcyXa.js";import"./SustainabilityScorecard-C7KW6f2h.js";import"./Close-B_IJwyX4.js";import"./Dial-7ApkAv20.js";import"./CheckIcon-D3XEnl_t.js";import"./NoContentAvailable-CXbcMsR3.js";const O={title:"Synapse/HeaderCard",component:o,parameters:{layout:"centered"},tags:["autodocs"]},e={args:{type:"Standard",title:"Example Study",description:"This is an example study description that demonstrates the HeaderCard component.",values:[{columnDisplayName:"Status",value:"Active"},{columnDisplayName:"Data Type",value:"Genomics"},{columnDisplayName:"Access",value:"Public"}],secondaryLabelLimit:3,isAlignToLeftNav:!1,descriptionConfig:{showFullDescriptionByDefault:!0},icon:i.jsx(n,{})}},a={args:{...e.args,title:"Study With Subtitle",subTitle:"Principal Investigator: John Doe"}},t={args:{...e.args,title:"DICOM",description:"Radiology imaging, including templates for narrative reports and machine-generated output. DICOM® — Digital Imaging and Communications in Medicine — is the international standard for medical images and related information. It defines the formats for medical images that can be exchanged with the data and quality necessary for clinical use.",values:[{columnDisplayName:"AUTHOR NAME",value:"DICOM (@dicom)"},{columnDisplayName:"LAT UPDATED",value:"2024-01-01"},{columnDisplayName:"BASED ON",value:"None"}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
