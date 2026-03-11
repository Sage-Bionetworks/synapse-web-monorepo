import{aA as a,j as r,r as i}from"./iframe-9Dp3veeu.js";import{S as c}from"./SynapseNavDrawer-CXwW21ug.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-DcLmB_ZO.js";import"./useInfiniteQuery-Db6GiRYb.js";import"./useDownloadList-DI2GKv_T.js";import"./waitForAsyncResult-DY734K7L.js";import"./useUserBundle-a5rfcdNm.js";import"./CreateProjectModal-DzHDCJSW.js";import"./ConfirmationDialog-0O1Dp5pK.js";import"./DialogBase-wgKSPL2s.js";import"./Close-RKCQt29o.js";import"./HelpPopover-CV1i3nJO.js";import"./MarkdownPopover-DoQCnLPw.js";import"./LightTooltip-TjP4VxGs.js";import"./MarkdownSynapse-D2Pk-B6S.js";import"./SkeletonButton-COK1UYfn.js";import"./SkeletonInlineBlock-BcYTxiw0.js";import"./SkeletonTable-Cjl9F2Dt.js";import"./SkeletonParagraph-Cn0395FS.js";import"./SynapseHomepageNavBar-gOs4_vK8.js";import"./SageResourcesPopover-B3CqF4dd.js";import"./Grid-VfSnU_P-.js";import"./index-SBatv29g.js";import"./MenuItem-BJVfKgip.js";import"./UserBadge-Ct4ZfEmE.js";import"./Card--VJgiAYz.js";import"./Chip-gPffx778.js";import"./searchDefaults-BDL05jPP.js";import"./Slide-D-esWvF5.js";import"./InputAdornment-mswjGCl0.js";import"./listItemButtonClasses-DxeChUKh.js";import"./Badge-BR9aywa3.js";import"./usePreviousProps-BSOQdJeP.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
