import{ay as a,j as r,r as i}from"./iframe-la5pZNJP.js";import{S as c}from"./SynapseNavDrawer-CpxqPWTE.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-BaQKq9ZH.js";import"./useInfiniteQuery-Dw0hPYtP.js";import"./useDownloadList-DPkSf4zI.js";import"./waitForAsyncResult-Bv9S2_zR.js";import"./useUserBundle-DcSi2JrE.js";import"./CreateProjectModal-CnWrNyWA.js";import"./ConfirmationDialog-BYOqzzUy.js";import"./DialogBase-CC3Fom-D.js";import"./Close-CPzKBjYo.js";import"./HelpPopover-BinEOj-x.js";import"./MarkdownPopover-DWH2OeX9.js";import"./LightTooltip-CcK1WQdJ.js";import"./MarkdownSynapse-DdvlGI58.js";import"./SkeletonButton-Cnars53-.js";import"./SkeletonInlineBlock-IWHLRfGq.js";import"./SkeletonTable-jKVXe2RG.js";import"./SkeletonParagraph-D00HqPxF.js";import"./SynapseHomepageNavBar-C0cQF4f1.js";import"./SageResourcesPopover-BzKyM-SZ.js";import"./Grid-DjVp0Bgc.js";import"./index-nbMMV5sL.js";import"./MenuItem-fdQnDEWw.js";import"./UserBadge-rJYMep-q.js";import"./Card-Bzw4JsT_.js";import"./Chip-og5LeUeY.js";import"./searchDefaults-SMdBl-QA.js";import"./Slide-BEHQeKsq.js";import"./InputAdornment-I9ib5FfS.js";import"./listItemButtonClasses-DE4u_cVy.js";import"./Badge-C_h54_nm.js";import"./usePreviousProps-CFwkF1El.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
