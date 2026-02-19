import{az as a,j as r,r as i}from"./iframe-05B79XZ4.js";import{S as c}from"./SynapseNavDrawer-CT6QYNzD.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-B-HrFx-Z.js";import"./useInfiniteQuery-BL4rT7lo.js";import"./useDownloadList-C1MnlUuF.js";import"./waitForAsyncResult-CJtXQwKI.js";import"./useUserBundle-xFwWr3d6.js";import"./useSuspenseQuery-DXOpFrh-.js";import"./CreateProjectModal-GNHj91_8.js";import"./ConfirmationDialog-Bn0uFIx_.js";import"./DialogBase-DuQ9TKuQ.js";import"./Close-DqDldpZI.js";import"./HelpPopover-CaC791WE.js";import"./MarkdownPopover-DBcqFb8R.js";import"./LightTooltip-DHbNXpmV.js";import"./MarkdownSynapse-9V8zeGJ5.js";import"./SkeletonButton-DSpQmtG3.js";import"./SkeletonInlineBlock-DysL0dN-.js";import"./SkeletonTable-CUmGP5q5.js";import"./SkeletonParagraph-CCYsd3b9.js";import"./SynapseHomepageNavBar-CrBlXxyE.js";import"./SageResourcesPopover-ChxA2wv0.js";import"./Grid-DxtXvbXE.js";import"./index-Daq82rHX.js";import"./MenuItem-CVPsdyof.js";import"./UserBadge-CDJVlHlx.js";import"./Card-ejUAG1yu.js";import"./Chip-MTPGu8Dp.js";import"./searchDefaults-D5zNn59N.js";import"./Slide-Bt6eCnHu.js";import"./InputAdornment-D9pjaW7D.js";import"./listItemButtonClasses-BcaI3SIE.js";import"./Badge-Csh5I8hu.js";import"./usePreviousProps-J0GCPjn7.js";const q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
