import{aA as a,j as r,r as i}from"./iframe-BFOdDDU9.js";import{S as c}from"./SynapseNavDrawer-I_-GbSqs.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-es8Qfm3x.js";import"./useInfiniteQuery-Dy46-GOZ.js";import"./useDownloadList-Dzgrp8nT.js";import"./waitForAsyncResult-Z8K_NKmA.js";import"./useUserBundle-DCqqdgaq.js";import"./CreateProjectModal-C_tQJXVz.js";import"./ConfirmationDialog-DE_sDXrs.js";import"./DialogBase-CqjTgUyd.js";import"./Close-BiMPyEJa.js";import"./HelpPopover-BGoqvETW.js";import"./MarkdownPopover-DNOZWbzO.js";import"./LightTooltip-CvVy39ak.js";import"./MarkdownSynapse-CvUwVk43.js";import"./SkeletonButton-DqU7tug-.js";import"./SkeletonInlineBlock-DA2_ugLR.js";import"./SkeletonTable-YSrwQoxW.js";import"./SkeletonParagraph-tO6IeoMO.js";import"./SynapseHomepageNavBar-l4bVqvIc.js";import"./SageResourcesPopover-Cq6CW6sd.js";import"./Grid-DZ39djx4.js";import"./index-DDJJe_s9.js";import"./MenuItem-PnDY4AEM.js";import"./UserBadge-D59lDHcb.js";import"./Card-O6nQpaBG.js";import"./Chip-D2x9BPaK.js";import"./searchDefaults-CiRGmyMp.js";import"./Slide-DdulEsX9.js";import"./InputAdornment-Cn7M2egv.js";import"./listItemButtonClasses-ByFlDGo4.js";import"./Badge-LYgNB-Vs.js";import"./usePreviousProps-BDW0O-o-.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    show: true,
    title: 'Package has been downloaded',
    description: 'The files contained in this zip file have been removed from your list.',
    isGlobal: false
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    show: true,
    title: 'Success',
    description: 'Lorem ipsum dolor sit amet',
    primaryButtonConfig: {
      text: 'Accept and Continue',
      onClick: () => alert('Accepted')
    },
    isGlobal: true,
    onClose: undefined
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...SuccessAlertWithPrimaryButtonOnly.args
  },
  render: args => <>
      <SynapseNavDrawer initIsOpen={false} gotoPlace={(href: string) => {
      window.alert(\`Nav bar calling back to change route to \${href}\`);
    }} />
      <FullWidthAlert {...args} />
    </>,
  decorators: [Story => {
    useEffect(() => {
      // SWC applies this class when SynapseNavDrawer is visible
      document.body.classList.add('SynapseNavDrawerIsShowing');
      return () => {
        // ...and removes it when SynapseNavDrawer is not visible
        document.body.classList.remove('SynapseNavDrawerIsShowing');
      };
    }, []);
    return <Story />;
  }]
}`,...o.parameters?.docs?.source}}};const q=["DownloadListPackageCreation","SuccessAlertWithPrimaryButtonOnly","SynapseNavDrawerIsShowing"];export{t as DownloadListPackageCreation,e as SuccessAlertWithPrimaryButtonOnly,o as SynapseNavDrawerIsShowing,q as __namedExportsOrder,U as default};
