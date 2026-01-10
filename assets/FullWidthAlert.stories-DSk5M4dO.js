import{ay as a,j as r,r as i}from"./iframe-_xC4R-9l.js";import{S as c}from"./SynapseNavDrawer-DGUKGgIL.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission--aGrWb7s.js";import"./useInfiniteQuery-_AZmyoIA.js";import"./useDownloadList-BeLJrmeH.js";import"./waitForAsyncResult-BkqUyjbv.js";import"./useUserBundle-rH4zVLMU.js";import"./useSuspenseQuery-BY1RfPC9.js";import"./CreateProjectModal-B2QX49Am.js";import"./ConfirmationDialog-CL4wb7EO.js";import"./DialogBase-Dp6M9JD0.js";import"./Close-BfP40Jkn.js";import"./HelpPopover-1mww7JNK.js";import"./MarkdownPopover-C9UGNyb0.js";import"./LightTooltip-C7ewj1jU.js";import"./MarkdownSynapse-Ct3w_uzW.js";import"./SkeletonButton-DYUdhb7U.js";import"./SkeletonInlineBlock-BJckmeYC.js";import"./SkeletonTable-8K81cLuT.js";import"./SkeletonParagraph-BJTsWPfq.js";import"./SynapseHomepageNavBar-CdlMiSX4.js";import"./SageResourcesPopover-CI4fGdZ2.js";import"./Grid-DCv41BH4.js";import"./index-CUKFaSIZ.js";import"./MenuItem-DRoOm8dg.js";import"./UserBadge-D50lroBs.js";import"./Card-Dc_-EwgO.js";import"./Chip-m593CfK4.js";import"./Slide-CemIMTDA.js";import"./InputAdornment-D-Vq-fjb.js";import"./listItemButtonClasses-BMDJa5nh.js";import"./Badge-lstsq2V2.js";import"./usePreviousProps-D7oyLWJ9.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
