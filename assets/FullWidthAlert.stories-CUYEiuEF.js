import{ax as a,r as i,j as r}from"./iframe-I9EoyWQf.js";import{S as c}from"./SynapseNavDrawer-nCXQiqCl.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-BB7SzQZo.js";import"./useInfiniteQuery-ybg8uaKh.js";import"./useDownloadList-Dso5fGK4.js";import"./waitForAsyncResult-xTHI72A6.js";import"./useUserBundle-B0BzK8VS.js";import"./CreateProjectModal-D9pG2U7G.js";import"./ConfirmationDialog-Cn8YG5nL.js";import"./DialogBase-mhO3z0mU.js";import"./Close-C4Fuzij-.js";import"./HelpPopover-CSkKFQDG.js";import"./MarkdownPopover-CZrsA1Ve.js";import"./LightTooltip-BjpzGQlc.js";import"./MarkdownSynapse-DmmReL7B.js";import"./SkeletonButton-BZ4IW0NV.js";import"./SkeletonInlineBlock-CnFxuHgE.js";import"./SkeletonTable-Daoy3Wk1.js";import"./SkeletonParagraph-C2Jym8Lt.js";import"./SynapseHomepageNavBar-D1aPZIyI.js";import"./SageResourcesPopover-Buobv8G_.js";import"./Grid-DGbFvsXq.js";import"./index-BR8vhpyy.js";import"./MenuItem-DLjd3Exv.js";import"./UserBadge-DfnAepuT.js";import"./useUserGroupHeader-2ZjU8d_Z.js";import"./Card-xjD4swog.js";import"./Chip-qFrw06qV.js";import"./searchDefaults-CJDHBajF.js";import"./Slide-odxMQ-4B.js";import"./InputAdornment-_ugYBIXR.js";import"./listItemButtonClasses-B12uDCc1.js";import"./Badge-DM2udEeF.js";import"./usePreviousProps-D8JQgpCi.js";const q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
