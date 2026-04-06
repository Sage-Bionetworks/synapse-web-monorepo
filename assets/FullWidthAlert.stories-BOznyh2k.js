import{ax as a,r as i,j as r}from"./iframe-BPNyJNxm.js";import{S as c}from"./SynapseNavDrawer-X3w7TtH0.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-Cn2MANg_.js";import"./useInfiniteQuery-XrkzDwnB.js";import"./useDownloadList-eL8fg_NR.js";import"./waitForAsyncResult-CphzxZ2t.js";import"./useUserBundle-D2j_CZi9.js";import"./CreateProjectModal-Cp8Iqbj4.js";import"./ConfirmationDialog-BpyGFD_j.js";import"./DialogBase-DSrJGPMK.js";import"./Close-wqX4il5f.js";import"./HelpPopover-cbCWQpx5.js";import"./MarkdownPopover-DYWWH0E2.js";import"./LightTooltip-D69z1M63.js";import"./MarkdownSynapse-D3aSYsDm.js";import"./SkeletonButton-DKmXtnFb.js";import"./SkeletonInlineBlock-YVxGd7KG.js";import"./SkeletonTable-DBeYWS70.js";import"./SkeletonParagraph-BxBZJF2o.js";import"./SynapseHomepageNavBar-CUyE9BIs.js";import"./SageResourcesPopover-CDKYE1pU.js";import"./Grid-BO2Ij0QT.js";import"./index-Br3ickc1.js";import"./MenuItem-CEXBRyzq.js";import"./UserBadge-BPa7l308.js";import"./Card-B4zIQ-hG.js";import"./Chip-Hk6f0McD.js";import"./searchDefaults-CLaYn6F1.js";import"./Slide-C2bKKVjo.js";import"./InputAdornment-CqYm3I5Z.js";import"./listItemButtonClasses-Ds1B8RjS.js";import"./Badge-Dea-CPAn.js";import"./usePreviousProps--x0xYk9p.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
