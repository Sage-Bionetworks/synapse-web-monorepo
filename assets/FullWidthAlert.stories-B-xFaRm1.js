import{aA as a,j as r,r as i}from"./iframe-B7gyTvXJ.js";import{S as c}from"./SynapseNavDrawer-BBAsB_Tl.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-CowWc4at.js";import"./useInfiniteQuery-Cp7Cpj3Z.js";import"./useDownloadList-J0I46PzI.js";import"./waitForAsyncResult-BeCq9f5U.js";import"./useUserBundle-CZajkvxD.js";import"./CreateProjectModal-t2cBs4V-.js";import"./ConfirmationDialog-B3QhZ0u5.js";import"./DialogBase--rdhqJoF.js";import"./Close-BtEQAkrf.js";import"./HelpPopover-CgJi15Pc.js";import"./MarkdownPopover-CtJuHvPt.js";import"./LightTooltip-DabWC6y6.js";import"./MarkdownSynapse-27_wa5xd.js";import"./SkeletonButton-BISD75XD.js";import"./SkeletonInlineBlock-w4q-zSuw.js";import"./SkeletonTable-DjMRvgKw.js";import"./SkeletonParagraph-DmG5QWjf.js";import"./SynapseHomepageNavBar-BF8s1Utu.js";import"./SageResourcesPopover-V1EYCCpK.js";import"./Grid-DuwlkHi3.js";import"./index-WdAvK5aU.js";import"./MenuItem-Dou85YW3.js";import"./UserBadge-qo_IX7jY.js";import"./Card-DfwGulL0.js";import"./Chip-CZ04a0tX.js";import"./searchDefaults-DOenIxlL.js";import"./Slide-C4p_XTyT.js";import"./InputAdornment-DkUah7Gt.js";import"./listItemButtonClasses-buXogD7e.js";import"./Badge-B7eMGk47.js";import"./usePreviousProps-DBkndVCf.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
