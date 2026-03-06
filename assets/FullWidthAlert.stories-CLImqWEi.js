import{az as a,j as r,r as i}from"./iframe-C0ar5Nzr.js";import{S as c}from"./SynapseNavDrawer-D4NOciKp.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-Cj9E1Jwl.js";import"./useInfiniteQuery-648_I8si.js";import"./useDownloadList-CpGLKun9.js";import"./waitForAsyncResult-C0f983bN.js";import"./useUserBundle-DBMlukq6.js";import"./CreateProjectModal-Bt9NwaAL.js";import"./ConfirmationDialog-BnyJh5PO.js";import"./DialogBase-DIEXoqBk.js";import"./Close-BRs0EfFH.js";import"./HelpPopover-CqP6r1FP.js";import"./MarkdownPopover-BkLUE7Bg.js";import"./LightTooltip-2r7pM-Zn.js";import"./MarkdownSynapse-DSVPTxPU.js";import"./SkeletonButton-DLomeGvI.js";import"./SkeletonInlineBlock-sY9elCWZ.js";import"./SkeletonTable-4Tdh8Kss.js";import"./SkeletonParagraph-Cu2Z5Jdt.js";import"./SynapseHomepageNavBar-Cr9-0m3a.js";import"./SageResourcesPopover-CqGZAXQF.js";import"./Grid-U8F2upY6.js";import"./index-BR-nFAVn.js";import"./MenuItem-C89nEhr5.js";import"./UserBadge-C9kxKIBU.js";import"./Card-C6t8Ijbj.js";import"./Chip-CFPpkp1B.js";import"./searchDefaults-D-GYYZvv.js";import"./Slide-BBXWi-R8.js";import"./InputAdornment-DxlbavuL.js";import"./listItemButtonClasses-B1IQ2mkL.js";import"./Badge-LJCPP4Ft.js";import"./usePreviousProps-CbHIsxAd.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
