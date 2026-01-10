import{ay as a,j as r,r as i}from"./iframe-Pdm4gHko.js";import{S as c}from"./SynapseNavDrawer-Do75v_24.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-CYnPKwQA.js";import"./useInfiniteQuery-B29qh585.js";import"./useDownloadList-D_owyxpY.js";import"./waitForAsyncResult-lc37DZY4.js";import"./useUserBundle-Bz1L6r6d.js";import"./useSuspenseQuery-2zOEkQmi.js";import"./CreateProjectModal-DfpbN6U-.js";import"./ConfirmationDialog-ewD4gxwv.js";import"./DialogBase-bF1STKBD.js";import"./Close-B5qXrF4s.js";import"./HelpPopover-DyzmZgtg.js";import"./MarkdownPopover-D9mZ0BlU.js";import"./LightTooltip-DYCkK4-y.js";import"./MarkdownSynapse-CRRjtehd.js";import"./SkeletonButton-KgZa_W_5.js";import"./SkeletonInlineBlock-DSI3AO38.js";import"./SkeletonTable-C47tnEUn.js";import"./SkeletonParagraph-DMN2Qcp6.js";import"./SynapseHomepageNavBar-D_kqTMi_.js";import"./SageResourcesPopover-YhRJ9EsU.js";import"./Grid-BhJcUTyz.js";import"./index-DFJ7Q3Tb.js";import"./MenuItem-D1_ZdkN0.js";import"./UserBadge-wxpXkL3B.js";import"./Card-C6gQHDcr.js";import"./Chip-D7Y4i0b0.js";import"./Slide-Bw-fCkot.js";import"./InputAdornment-CY6iHKEJ.js";import"./listItemButtonClasses-mwEcVMPS.js";import"./Badge-CuaSGrYs.js";import"./usePreviousProps-CUJbZbv5.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
