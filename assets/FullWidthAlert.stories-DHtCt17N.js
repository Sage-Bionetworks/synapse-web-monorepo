import{az as a,j as r,r as i}from"./iframe-CK9LwFro.js";import{S as c}from"./SynapseNavDrawer-Dm8Ubwdl.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-BHy1EEJK.js";import"./useInfiniteQuery-D4l8wj4_.js";import"./useDownloadList-TXPjAwb1.js";import"./waitForAsyncResult-DCpaAC8Q.js";import"./useUserBundle-CbV-ctfJ.js";import"./CreateProjectModal-5uvDA1eE.js";import"./ConfirmationDialog-DPJPP9eh.js";import"./DialogBase-B2Q9QfSf.js";import"./Close-9sqFRZ8O.js";import"./HelpPopover-Ds-0QjK6.js";import"./MarkdownPopover-DsuaVFQU.js";import"./LightTooltip-DnfCpu70.js";import"./MarkdownSynapse-Cc1yLr_j.js";import"./SkeletonButton-BDlPnboj.js";import"./SkeletonInlineBlock-CxEf_EaS.js";import"./SkeletonTable-ycMK6xwc.js";import"./SkeletonParagraph-BI7CR1TI.js";import"./SynapseHomepageNavBar-CZK2nscE.js";import"./SageResourcesPopover-TMfO5miR.js";import"./Grid-vZDnzv9a.js";import"./index-BisQv3gR.js";import"./MenuItem-4nfAFdIM.js";import"./UserBadge-D66c8QAm.js";import"./Card-Da6m2K6p.js";import"./Chip-CRLyozh0.js";import"./searchDefaults-CiRGgk-Z.js";import"./Slide-DCdNDUbv.js";import"./InputAdornment-Cs-_9WZD.js";import"./listItemButtonClasses-CDA8g5P2.js";import"./Badge-DdS9F9-Z.js";import"./usePreviousProps-5p7CVWii.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
