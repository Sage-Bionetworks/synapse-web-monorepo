import{ax as a,r as i,j as r}from"./iframe-D6P0nkNQ.js";import{S as c}from"./SynapseNavDrawer-D-DrOQsa.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-BDSI77Zt.js";import"./useInfiniteQuery-BabK25aM.js";import"./useDownloadList-Bioygjhk.js";import"./waitForAsyncResult-CWss9xjS.js";import"./useUserBundle-Da75ZNju.js";import"./queryOptions-C9woPjwX.js";import"./CreateProjectModal-BlUrozj9.js";import"./ConfirmationDialog-DbhMChYr.js";import"./DialogBase-CYnhOgAU.js";import"./Close-BEd3pYVj.js";import"./HelpPopover-CaKE4C1W.js";import"./MarkdownPopover-C0soPO-I.js";import"./LightTooltip-Q195xsL6.js";import"./MarkdownSynapse-Csu_X-L3.js";import"./SkeletonButton-CpvcVcC6.js";import"./SkeletonInlineBlock-cwgAS3YS.js";import"./SkeletonTable-B5s8sRSp.js";import"./SkeletonParagraph-Dny_21Xp.js";import"./RadioGroup-_08wv5Uc.js";import"./Radio-5QzAgrml.js";import"./SwitchBase-Cxiym2LW.js";import"./FormGroup-C0FtPd7k.js";import"./FormControlLabel-C3dQ3TAO.js";import"./Chip-BsvDvlw9.js";import"./SynapseHomepageNavBar-z0GmHRVU.js";import"./SageResourcesPopover-DYYNhLKP.js";import"./Grid-BDZmSCq2.js";import"./index-ClysohDO.js";import"./MenuItem-BFhkC2rz.js";import"./UserBadge-BfOkKJj6.js";import"./Card-Km0k0NLl.js";import"./searchDefaults-DL-zNc3s.js";import"./Slide-CBdOG9sM.js";import"./InputAdornment-DCgVDyzB.js";import"./listItemButtonClasses-JVruTrVe.js";import"./Badge-DXXaSnR3.js";import"./usePreviousProps-Duwj02pS.js";const Q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const V=["DownloadListPackageCreation","SuccessAlertWithPrimaryButtonOnly","SynapseNavDrawerIsShowing"];export{t as DownloadListPackageCreation,e as SuccessAlertWithPrimaryButtonOnly,o as SynapseNavDrawerIsShowing,V as __namedExportsOrder,Q as default};
