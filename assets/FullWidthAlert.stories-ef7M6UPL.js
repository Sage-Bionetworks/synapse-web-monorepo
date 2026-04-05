import{ax as a,r as i,j as r}from"./iframe-b13k1F7I.js";import{S as c}from"./SynapseNavDrawer-DPVv_-8D.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-Dv_EU9TG.js";import"./useInfiniteQuery-BuA9b8--.js";import"./useDownloadList-lYbddbJM.js";import"./waitForAsyncResult-D5jPHemS.js";import"./useUserBundle-earXxlZb.js";import"./CreateProjectModal-D334WWk4.js";import"./ConfirmationDialog-DlQ1ryI4.js";import"./DialogBase-UKhXgfvV.js";import"./Close-BXhjNoKM.js";import"./HelpPopover-DLt1mKAE.js";import"./MarkdownPopover-HHq_PWe6.js";import"./LightTooltip-C-QkzhbA.js";import"./MarkdownSynapse-DgVHOn26.js";import"./SkeletonButton-DVR5pv_e.js";import"./SkeletonInlineBlock-DRQHTWc8.js";import"./SkeletonTable-DL4vBEzw.js";import"./SkeletonParagraph-fVALJo5f.js";import"./SynapseHomepageNavBar-D9k8JAI8.js";import"./SageResourcesPopover--Tp5WidA.js";import"./Grid-DVknrE2l.js";import"./index-BnGRXv6y.js";import"./MenuItem-DH1v1_Sf.js";import"./UserBadge-CsnCA53P.js";import"./Card-Ctn6KCGb.js";import"./Chip-DjWJ18GV.js";import"./searchDefaults-wowzn-K_.js";import"./Slide-D578be0S.js";import"./InputAdornment-DEYxwdGc.js";import"./listItemButtonClasses-buvqHCdw.js";import"./Badge-DOE_tfKY.js";import"./usePreviousProps-CbDsT3dl.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
