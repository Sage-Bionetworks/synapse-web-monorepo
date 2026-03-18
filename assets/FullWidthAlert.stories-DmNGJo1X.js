import{aA as a,j as r,r as i}from"./iframe-C2kEGB7j.js";import{S as c}from"./SynapseNavDrawer-CaEeUE1P.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-BW_qljaz.js";import"./useInfiniteQuery-7NJwUk3W.js";import"./useDownloadList-H2c3WFYe.js";import"./waitForAsyncResult-Cxjfx2B1.js";import"./useUserBundle-Jr5wF9rW.js";import"./CreateProjectModal-DtSgKmSJ.js";import"./ConfirmationDialog-BbdKEfo2.js";import"./DialogBase-CW3j8lBK.js";import"./Close-zOC26mc8.js";import"./HelpPopover-CBvQB68Y.js";import"./MarkdownPopover-CcmAtHQ5.js";import"./LightTooltip-Bc96vcP5.js";import"./MarkdownSynapse-F7h7ulwU.js";import"./SkeletonButton-B3EXz-nP.js";import"./SkeletonInlineBlock-DfFg1BbM.js";import"./SkeletonTable-DkNCUEbr.js";import"./SkeletonParagraph-CzHkK7a_.js";import"./SynapseHomepageNavBar-BUP3g65j.js";import"./SageResourcesPopover-GZzW74NP.js";import"./Grid-Dx-wlIwj.js";import"./index-ZDojTcBs.js";import"./MenuItem-BNHT0Gz0.js";import"./UserBadge-19izyROB.js";import"./Card-p-At64Gf.js";import"./Chip-C46utT-v.js";import"./searchDefaults-Bp9oqaNb.js";import"./Slide-CSoliOiP.js";import"./InputAdornment-ktoJBIrd.js";import"./listItemButtonClasses-DdLkHwtt.js";import"./Badge-DpsMqBsd.js";import"./usePreviousProps-eEeh_K5H.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
