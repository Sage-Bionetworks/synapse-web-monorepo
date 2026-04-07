import{ax as a,r as i,j as r}from"./iframe-BqdsSWZd.js";import{S as c}from"./SynapseNavDrawer-35P7xpdL.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-BLqW2haG.js";import"./useInfiniteQuery-B8rjpe3i.js";import"./useDownloadList-CQuaWCt0.js";import"./waitForAsyncResult-CUiqX14Q.js";import"./useUserBundle-D7Oq3eOX.js";import"./CreateProjectModal-DZmflV-k.js";import"./ConfirmationDialog-DfDAoE1B.js";import"./DialogBase-DhimsSeU.js";import"./Close-CiwYrWW2.js";import"./HelpPopover-Bj_HEu0H.js";import"./MarkdownPopover-1NSkQgo1.js";import"./LightTooltip-DuUAsYAd.js";import"./MarkdownSynapse-Cq3G3Ysd.js";import"./SkeletonButton-DQlCUFlj.js";import"./SkeletonInlineBlock-BTiJ2BO_.js";import"./SkeletonTable-BNCsFwsu.js";import"./SkeletonParagraph-CITKHxXA.js";import"./SynapseHomepageNavBar-BlJhmkfT.js";import"./SageResourcesPopover-DKh-ITlw.js";import"./Grid-Z1x-TWzV.js";import"./index-BGf55DBP.js";import"./MenuItem-BDOSlvEx.js";import"./UserBadge-CBefG1yG.js";import"./Card-rcxhgfJE.js";import"./Chip-QNpY_KS_.js";import"./searchDefaults-BwWmVkNC.js";import"./Slide-BYZYo-AG.js";import"./InputAdornment-BGljoWLI.js";import"./listItemButtonClasses-DPyNCkQ_.js";import"./Badge-DK5cb040.js";import"./usePreviousProps-BGc4kDSn.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
