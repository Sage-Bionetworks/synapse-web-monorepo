import{ax as a,r as i,j as r}from"./iframe-ggb9BT7g.js";import{S as c}from"./SynapseNavDrawer-pNqvnBDj.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-6lDR9ibd.js";import"./useInfiniteQuery-Dmqb6E3U.js";import"./useDownloadList-C_6eZmjB.js";import"./waitForAsyncResult-ByZFawmf.js";import"./useUserBundle-t5nTyqdV.js";import"./queryOptions-C9woPjwX.js";import"./CreateProjectModal-BZrd7oJp.js";import"./ConfirmationDialog-Csdoq0fQ.js";import"./DialogBase-De2IOlxW.js";import"./Close-DUdLCtLc.js";import"./HelpPopover-C6C-iAVu.js";import"./MarkdownPopover-DpZurWOd.js";import"./LightTooltip-DB2Zm8A-.js";import"./MarkdownSynapse-CcYYvyZJ.js";import"./SkeletonButton-CUOVs3Oy.js";import"./SkeletonInlineBlock-C6q-RqyQ.js";import"./SkeletonTable-ByepoAwi.js";import"./SkeletonParagraph-CEmjW8Ho.js";import"./RadioGroup-CTZ1Wqa_.js";import"./Radio-BaviI14-.js";import"./SwitchBase-Cb1YcC8J.js";import"./FormGroup-Clktikys.js";import"./FormControlLabel-CAUCzVir.js";import"./Chip-CisBGjg3.js";import"./SynapseHomepageNavBar-CsB8nUdy.js";import"./SageResourcesPopover-B7aOt3Vl.js";import"./Grid-BTHwFXUN.js";import"./index-BsBFOmKs.js";import"./MenuItem-Dz7N7FME.js";import"./UserBadge-DEEeycwe.js";import"./Card-BrUEDoBm.js";import"./searchDefaults-xDFHRLMp.js";import"./Slide-Ci_v3Ztk.js";import"./InputAdornment-9jY0V4pv.js";import"./listItemButtonClasses-CeAtuF-Z.js";import"./Badge-CfLrKjEW.js";import"./usePreviousProps-CuVqs5w7.js";const Q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
