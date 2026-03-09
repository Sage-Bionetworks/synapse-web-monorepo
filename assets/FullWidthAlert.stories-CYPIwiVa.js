import{aA as a,j as r,r as i}from"./iframe-CCrcZxgU.js";import{S as c}from"./SynapseNavDrawer-V7DLx5Pi.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-HWywYMx0.js";import"./useInfiniteQuery-1J2BPHjO.js";import"./useDownloadList-3DdUZSbm.js";import"./waitForAsyncResult-BZ2TkiIU.js";import"./useUserBundle-BX_9QzHX.js";import"./CreateProjectModal-CxWVFRl3.js";import"./ConfirmationDialog-D414-GDQ.js";import"./DialogBase-CeubuD3-.js";import"./Close-CM4W6Pks.js";import"./HelpPopover-BR72KBQJ.js";import"./MarkdownPopover-BZ4yirLT.js";import"./LightTooltip-BQGvE2MH.js";import"./MarkdownSynapse-FC1rcF9v.js";import"./SkeletonButton-BtsVrZX-.js";import"./SkeletonInlineBlock-D21wux6D.js";import"./SkeletonTable-Ba707JDB.js";import"./SkeletonParagraph--DCUjqtN.js";import"./SynapseHomepageNavBar-CszJCoEU.js";import"./SageResourcesPopover-9t5tmaOL.js";import"./Grid-BBptQ3XV.js";import"./index-DOETxQEh.js";import"./MenuItem-BOrJnNIc.js";import"./UserBadge-foBknIQ2.js";import"./Card-B7y7fXMD.js";import"./Chip-BosvP6Bi.js";import"./searchDefaults-CV-Xm2KR.js";import"./Slide-Dq3SpSuR.js";import"./InputAdornment-Bc1aF6fK.js";import"./listItemButtonClasses-DBBBInAv.js";import"./Badge-gl2vu-D5.js";import"./usePreviousProps-CqWCcIps.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
