import{ay as a,j as r,r as i}from"./iframe-BCo6xRtR.js";import{S as c}from"./SynapseNavDrawer-BK8L_0z4.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-DQBtFh1r.js";import"./useInfiniteQuery-DNwGIq_T.js";import"./useDownloadList-DfOLH32j.js";import"./waitForAsyncResult-Vqz9FRAb.js";import"./useUserBundle-CtTpGbMF.js";import"./useSuspenseQuery-DtqIfE1u.js";import"./CreateProjectModal-CtFlJ3nB.js";import"./ConfirmationDialog-DI4QV0Bv.js";import"./DialogBase-CdXHsKxC.js";import"./Close-DWxxPOfT.js";import"./HelpPopover-COi1c2gB.js";import"./MarkdownPopover-xrdPtb-B.js";import"./LightTooltip-CCtrwSvI.js";import"./MarkdownSynapse-CwD5nz4r.js";import"./SkeletonButton-Di7WZDoT.js";import"./SkeletonInlineBlock-Oo_uHdtx.js";import"./SkeletonTable-CE_fO4U2.js";import"./SkeletonParagraph-BBZfUnUj.js";import"./SynapseHomepageNavBar-DY78Bkci.js";import"./SageResourcesPopover-BECytPdZ.js";import"./Grid-DdgWYWNa.js";import"./index-BIDqU31Y.js";import"./MenuItem-Dt5CKkV1.js";import"./UserBadge-DQ61RU3p.js";import"./Card-DIT33oKt.js";import"./Chip-_-7K_QD-.js";import"./Slide-BknEV0iJ.js";import"./InputAdornment-DTCjSwe0.js";import"./listItemButtonClasses-DPiL5uzD.js";import"./Badge-Cz9t3_8O.js";import"./usePreviousProps-D9BnOnjf.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
