import{aA as a,j as r,r as i}from"./iframe-pozrfGX9.js";import{S as c}from"./SynapseNavDrawer-umnynYYe.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-bmf7qe6-.js";import"./useInfiniteQuery-BoWyfOQx.js";import"./useDownloadList-BZ3gPJ8M.js";import"./waitForAsyncResult-ChK-3Mfq.js";import"./useUserBundle-dJrxo5eU.js";import"./CreateProjectModal-CaMr19oG.js";import"./ConfirmationDialog-pkD1Ofo-.js";import"./DialogBase-B6KdTX5Z.js";import"./Close-DSWu6oeE.js";import"./HelpPopover-CXWVW84-.js";import"./MarkdownPopover-DP57655n.js";import"./LightTooltip-B0VARp2j.js";import"./MarkdownSynapse-B4RP0lap.js";import"./SkeletonButton-BVG9V-0l.js";import"./SkeletonInlineBlock-COIr5uPh.js";import"./SkeletonTable-B877ikOr.js";import"./SkeletonParagraph-QqDrbm_v.js";import"./SynapseHomepageNavBar-C4-2mvMS.js";import"./SageResourcesPopover-BRIX3_GS.js";import"./Grid-CKjOzNfL.js";import"./index-DK5SCnFS.js";import"./MenuItem-CtrC7AXY.js";import"./UserBadge-DNs5g3Fi.js";import"./Card-CdSoIgQr.js";import"./Chip-SQ2CRNke.js";import"./searchDefaults-DpCsszZC.js";import"./Slide-C-dzvcHj.js";import"./InputAdornment-__MMDfls.js";import"./listItemButtonClasses-DKZCNe1d.js";import"./Badge-CZa-eroZ.js";import"./usePreviousProps-CxvBbgnl.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
