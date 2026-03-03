import{az as a,j as r,r as i}from"./iframe-DfdWKLuQ.js";import{S as c}from"./SynapseNavDrawer-Gy4aTmCg.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-D4DpQKH-.js";import"./useInfiniteQuery-CHkRkowF.js";import"./useDownloadList-BIJ9ZZez.js";import"./waitForAsyncResult-BylXcmoG.js";import"./useUserBundle-7JcHSU6U.js";import"./CreateProjectModal-F4GINXAn.js";import"./ConfirmationDialog-CEwS0nhH.js";import"./DialogBase-C0Kwo-PX.js";import"./Close-j69RghhX.js";import"./HelpPopover-BffLbhJu.js";import"./MarkdownPopover-CRAHYrd0.js";import"./LightTooltip-C0MMxyxM.js";import"./MarkdownSynapse-Du9C6_rv.js";import"./SkeletonButton-JUuEaAKJ.js";import"./SkeletonInlineBlock-D4AECgOc.js";import"./SkeletonTable-D3TOZVyi.js";import"./SkeletonParagraph-Dis-ZodA.js";import"./SynapseHomepageNavBar-B_wGTW4L.js";import"./SageResourcesPopover-5tZpPEWn.js";import"./Grid-g2Huy5x_.js";import"./index-DlfLpHsv.js";import"./MenuItem-Q13c39O4.js";import"./UserBadge-CCI5HOlo.js";import"./Card-BIQF_LNz.js";import"./Chip-Dty2JNCX.js";import"./searchDefaults-MCFBycbU.js";import"./Slide-DXGWGyOD.js";import"./InputAdornment-BbkRtRBv.js";import"./listItemButtonClasses-BYerUnn7.js";import"./Badge-ZH8SHeCz.js";import"./usePreviousProps-BRMclHfi.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
