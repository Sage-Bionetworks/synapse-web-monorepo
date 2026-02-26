import{az as a,j as r,r as i}from"./iframe-HR5efO_6.js";import{S as c}from"./SynapseNavDrawer-t01yd6nC.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-BWbTE2Cl.js";import"./useInfiniteQuery-BffcSkFX.js";import"./useDownloadList-VzNDkkHJ.js";import"./waitForAsyncResult-BnHFOVB7.js";import"./useUserBundle-B64ZgZGa.js";import"./CreateProjectModal-BUZwlDin.js";import"./ConfirmationDialog-BDKUD8yD.js";import"./DialogBase-CheFJngv.js";import"./Close-DAks8q53.js";import"./HelpPopover-C2dZwoeG.js";import"./MarkdownPopover-DV3WT5Oj.js";import"./LightTooltip-DgluAXFh.js";import"./MarkdownSynapse-BD_kELiG.js";import"./SkeletonButton-CpPX_nit.js";import"./SkeletonInlineBlock-pMLRfvW-.js";import"./SkeletonTable-Bm63jMKW.js";import"./SkeletonParagraph-BGy70kQG.js";import"./SynapseHomepageNavBar-BoQ2yGeB.js";import"./SageResourcesPopover-DPXWidtw.js";import"./Grid-Crcn3maU.js";import"./index-BuKVPeEG.js";import"./MenuItem-BBTtHw-Z.js";import"./UserBadge-CJyxtbNI.js";import"./Card-EBnxndHl.js";import"./Chip-CBQKgw7F.js";import"./searchDefaults-CC-1OpHf.js";import"./Slide-2y-LvUne.js";import"./InputAdornment-UzXna9jk.js";import"./listItemButtonClasses-M7LT5_He.js";import"./Badge-wqW1CCwQ.js";import"./usePreviousProps-VqM79vRJ.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
