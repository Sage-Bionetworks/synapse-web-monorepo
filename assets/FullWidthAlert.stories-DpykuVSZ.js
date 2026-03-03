import{az as a,j as r,r as i}from"./iframe-B_O9kSix.js";import{S as c}from"./SynapseNavDrawer-DkAYvEPL.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-_dl49Mca.js";import"./useInfiniteQuery-BhNmSgI4.js";import"./useDownloadList-CbPQzXF2.js";import"./waitForAsyncResult-tkMX49Ib.js";import"./useUserBundle-BrtD0xy9.js";import"./CreateProjectModal-DWcbrja2.js";import"./ConfirmationDialog-DzRI3wIo.js";import"./DialogBase-DwQ32IO2.js";import"./Close-BwmNujrW.js";import"./HelpPopover-CCcniF6w.js";import"./MarkdownPopover-DRJsMIka.js";import"./LightTooltip-GgpSSUJ5.js";import"./MarkdownSynapse-DfLA11xe.js";import"./SkeletonButton-BM1gzNpw.js";import"./SkeletonInlineBlock-B4Ftzl0H.js";import"./SkeletonTable-DPjCujA-.js";import"./SkeletonParagraph-CyxH5Rsx.js";import"./SynapseHomepageNavBar-DxO68wm9.js";import"./SageResourcesPopover-r_3AibSO.js";import"./Grid-DpqNCaG6.js";import"./index-CIA9_xQz.js";import"./MenuItem-BcwwJPC9.js";import"./UserBadge-DxRMin_1.js";import"./Card-DeLay9_m.js";import"./Chip-DJkWIvUs.js";import"./searchDefaults-e_1Q2Jgk.js";import"./Slide-Dj4Xgmj-.js";import"./InputAdornment-WLvlrKwx.js";import"./listItemButtonClasses-CS700FRz.js";import"./Badge-B7uiERVd.js";import"./usePreviousProps-D5tg2RLD.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
