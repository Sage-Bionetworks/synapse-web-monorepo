import{ax as a,r as i,j as r}from"./iframe-zB-jZjF1.js";import{S as c}from"./SynapseNavDrawer-CC49FtQj.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-B_NKwfSG.js";import"./useInfiniteQuery--NK2xn9-.js";import"./useDownloadList-3E3CFsf4.js";import"./waitForAsyncResult-QY86skf9.js";import"./useUserBundle-DmoRhqzX.js";import"./CreateProjectModal-BOOumNjw.js";import"./ConfirmationDialog-D8snEBXQ.js";import"./DialogBase-65T0H8Lc.js";import"./Close-DurIvuzE.js";import"./HelpPopover-tpWqXUpg.js";import"./MarkdownPopover-C_96Abiz.js";import"./LightTooltip-Bbhh6aTb.js";import"./MarkdownSynapse-DWu3M3VU.js";import"./SkeletonButton-DitOEAxO.js";import"./SkeletonInlineBlock-CeW9qPuC.js";import"./SkeletonTable-Xio-92ZC.js";import"./SkeletonParagraph-D0noDT_a.js";import"./SynapseHomepageNavBar-CL3xsF2P.js";import"./SageResourcesPopover-Cj1NTlpm.js";import"./Grid-B5h6UUcr.js";import"./index-CpNo1svs.js";import"./MenuItem-BWX0VE3I.js";import"./UserBadge-t9MoYrmb.js";import"./useUserGroupHeader-aV7k__0H.js";import"./Card-Den_1IvA.js";import"./Chip-C8ZEijAb.js";import"./searchDefaults-CB5-P3Lz.js";import"./Slide-9rVS1va7.js";import"./InputAdornment-BN-mcqH2.js";import"./listItemButtonClasses-BkTygPr_.js";import"./Badge-BRXq_X31.js";import"./usePreviousProps-Bo09v6Gt.js";const q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const H=["DownloadListPackageCreation","SuccessAlertWithPrimaryButtonOnly","SynapseNavDrawerIsShowing"];export{t as DownloadListPackageCreation,e as SuccessAlertWithPrimaryButtonOnly,o as SynapseNavDrawerIsShowing,H as __namedExportsOrder,q as default};
