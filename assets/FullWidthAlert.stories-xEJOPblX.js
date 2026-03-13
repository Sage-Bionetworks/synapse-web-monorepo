import{aA as a,j as r,r as i}from"./iframe-SpTPUL8m.js";import{S as c}from"./SynapseNavDrawer-DubPKqgt.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-CRHUC28V.js";import"./useInfiniteQuery-BpbmMIh3.js";import"./useDownloadList-CZj68w-6.js";import"./waitForAsyncResult-D6Cs8ZL9.js";import"./useUserBundle-CMEzZcsf.js";import"./CreateProjectModal-BHZ5IRw3.js";import"./ConfirmationDialog-Dh3Su1ip.js";import"./DialogBase-BJEwHP0p.js";import"./Close-CXggAjW9.js";import"./HelpPopover-BfVFLmxW.js";import"./MarkdownPopover-DmG1p_lZ.js";import"./LightTooltip-thM4wO9l.js";import"./MarkdownSynapse-D10-Vf-V.js";import"./SkeletonButton-BZ4aKRQm.js";import"./SkeletonInlineBlock-QplUKVpF.js";import"./SkeletonTable-BuAR6CBE.js";import"./SkeletonParagraph-CB5oiNEg.js";import"./SynapseHomepageNavBar-B6uRwIZ9.js";import"./SageResourcesPopover-uWuG9FCR.js";import"./Grid-BjgyTgS9.js";import"./index-BPOVYvhU.js";import"./MenuItem-DMW1-yIZ.js";import"./UserBadge-WsW3e6pV.js";import"./Card-DnzMTA9B.js";import"./Chip-BbzLJe0J.js";import"./searchDefaults-Dv2f_Vm9.js";import"./Slide-DcaE_T-Q.js";import"./InputAdornment-B4haAT7H.js";import"./listItemButtonClasses-DD21Mqvg.js";import"./Badge-noQRWEjL.js";import"./usePreviousProps-Cyr_peAw.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
