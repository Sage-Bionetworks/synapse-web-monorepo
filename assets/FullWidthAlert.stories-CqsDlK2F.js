import{az as a,j as r,r as i}from"./iframe-Bppf-2Xb.js";import{S as c}from"./SynapseNavDrawer-DHEbQXke.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-cgfc5lxA.js";import"./useInfiniteQuery-B_o5exK7.js";import"./useDownloadList-vlnSuvXO.js";import"./waitForAsyncResult-B1ylm2d6.js";import"./useUserBundle-Bz68MuAV.js";import"./CreateProjectModal-BBp7ko9x.js";import"./ConfirmationDialog-Gd10OZKA.js";import"./DialogBase-DiQjK8QP.js";import"./Close-C0gBeEqv.js";import"./HelpPopover-CFG8wYnx.js";import"./MarkdownPopover-DEUp7YgC.js";import"./LightTooltip-CGlFhZF-.js";import"./MarkdownSynapse-CXgwuaB5.js";import"./SkeletonButton-BFle63Mn.js";import"./SkeletonInlineBlock-DZgUMGJu.js";import"./SkeletonTable-BMvof9lJ.js";import"./SkeletonParagraph-Cgi3RpEx.js";import"./SynapseHomepageNavBar-UAJAE8XN.js";import"./SageResourcesPopover-BaFM-wE5.js";import"./Grid-C5JIyy_C.js";import"./index-Cee3WZrY.js";import"./MenuItem-BorCkjPg.js";import"./UserBadge-2pt_JFzf.js";import"./Card-SKsRnOG3.js";import"./Chip-B-8xLvKL.js";import"./searchDefaults-Sm1bJvB7.js";import"./Slide-0ttHo5jl.js";import"./InputAdornment-BINY0DBJ.js";import"./listItemButtonClasses-DCoAU_xh.js";import"./Badge-W2LNWBT3.js";import"./usePreviousProps-CcejWT8-.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
