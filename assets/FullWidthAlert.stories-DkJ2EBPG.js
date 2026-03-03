import{az as a,j as r,r as i}from"./iframe-CR9Kppk9.js";import{S as c}from"./SynapseNavDrawer-TiBRxHWH.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-C74XK6io.js";import"./useInfiniteQuery-CfvRCTip.js";import"./useDownloadList-B3oDROKk.js";import"./waitForAsyncResult-D7JaeIIS.js";import"./useUserBundle-BZz123Kg.js";import"./CreateProjectModal-Cy-Jb4wH.js";import"./ConfirmationDialog-BXteRzfy.js";import"./DialogBase-DXW71yq5.js";import"./Close-4K7Ixs7T.js";import"./HelpPopover-DZ345V92.js";import"./MarkdownPopover-olh3PRGS.js";import"./LightTooltip-z2lc9QXh.js";import"./MarkdownSynapse-C76XvQvw.js";import"./SkeletonButton-DgY4znPZ.js";import"./SkeletonInlineBlock-D-RkmMYK.js";import"./SkeletonTable-DJdtHoqT.js";import"./SkeletonParagraph-DAQxrYxE.js";import"./SynapseHomepageNavBar-BrGr2y5f.js";import"./SageResourcesPopover-D1E2lslq.js";import"./Grid-Dh0yaqaz.js";import"./index-CTj_7GLi.js";import"./MenuItem-CatSzqG9.js";import"./UserBadge-CJm2e0vF.js";import"./Card-NdZ0o22H.js";import"./Chip-B6UQirNv.js";import"./searchDefaults-Dw2Lo5m_.js";import"./Slide-DmN2_uQS.js";import"./InputAdornment-CFkyeD7R.js";import"./listItemButtonClasses-DLwIaZt5.js";import"./Badge-BSoN0EH0.js";import"./usePreviousProps-KjIZq89L.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
