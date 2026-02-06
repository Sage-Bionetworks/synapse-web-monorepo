import{az as a,j as r,r as i}from"./iframe-CqOjta_N.js";import{S as c}from"./SynapseNavDrawer-B7wfQJ2W.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-CtxLCUky.js";import"./useInfiniteQuery-BaCRejyT.js";import"./useDownloadList-BjzPKsrF.js";import"./waitForAsyncResult-CbIqhu6Z.js";import"./useGetFeatureFlag-C-kAayec.js";import"./useUserBundle-D8JYfTyv.js";import"./useSuspenseQuery-BD3WNLbV.js";import"./CreateProjectModal-DbfaIQjV.js";import"./ConfirmationDialog-NO_pJ3mE.js";import"./DialogBase-CYbBRd4W.js";import"./Close-B3SqSRyi.js";import"./HelpPopover-CldbtdCh.js";import"./MarkdownPopover-uBOu0K68.js";import"./LightTooltip-DC7cbKib.js";import"./MarkdownSynapse-D2zbplv6.js";import"./SkeletonButton-BR5YXC6L.js";import"./SkeletonInlineBlock-CN4aVK2u.js";import"./SkeletonTable-BGlGLKIw.js";import"./SkeletonParagraph-B4VFFfOl.js";import"./SynapseHomepageNavBar-a1-qA_Sg.js";import"./SageResourcesPopover-DUvGDuIt.js";import"./Grid-78ouEGxR.js";import"./index-BRBOZzYG.js";import"./MenuItem-DGqgHDXw.js";import"./UserBadge-D2tCEW5C.js";import"./Card-qx92vT-y.js";import"./Chip-9i0QEYWa.js";import"./Slide-Bj5iP7fE.js";import"./InputAdornment-B3Tqkebs.js";import"./listItemButtonClasses-BKhNCkCn.js";import"./Badge-D4lIixCE.js";import"./usePreviousProps-CkSK3vlK.js";const q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const H=["DownloadListPackageCreation","SuccessAlertWithPrimaryButtonOnly","SynapseNavDrawerIsShowing"];export{t as DownloadListPackageCreation,e as SuccessAlertWithPrimaryButtonOnly,o as SynapseNavDrawerIsShowing,H as __namedExportsOrder,q as default};
