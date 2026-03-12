import{aA as a,j as r,r as i}from"./iframe-CpfV3NOk.js";import{S as c}from"./SynapseNavDrawer-DtL8vHe0.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-DDW5hm3l.js";import"./useInfiniteQuery-B30BxfoI.js";import"./useDownloadList-DtAFe1mq.js";import"./waitForAsyncResult-DeNh9gY4.js";import"./useUserBundle-C27HsRJe.js";import"./CreateProjectModal-BbmqfETf.js";import"./ConfirmationDialog-DY31ZGPr.js";import"./DialogBase-CPT43OGP.js";import"./Close-C1wfyqfV.js";import"./HelpPopover-D1HFzEEY.js";import"./MarkdownPopover-SqpB0xea.js";import"./LightTooltip-Nh7QLXl8.js";import"./MarkdownSynapse-D21W3bY-.js";import"./SkeletonButton-AQOmCgu3.js";import"./SkeletonInlineBlock-DUNC2gO4.js";import"./SkeletonTable-DOJ0zD5O.js";import"./SkeletonParagraph-D5apqSdK.js";import"./SynapseHomepageNavBar-cv878PGN.js";import"./SageResourcesPopover-oEKf_zAo.js";import"./Grid-DCDxxMQ3.js";import"./index-C4-1Fb9W.js";import"./MenuItem-JjjD7Qco.js";import"./UserBadge-BfZ-Dzq0.js";import"./Card-Dk_Qq8ND.js";import"./Chip-D0au_Ohq.js";import"./searchDefaults-C2eg-3Ke.js";import"./Slide-GHjUuO0k.js";import"./InputAdornment-CciChbho.js";import"./listItemButtonClasses-D4ELf39w.js";import"./Badge-CueX07bN.js";import"./usePreviousProps-C2AmCEnV.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
