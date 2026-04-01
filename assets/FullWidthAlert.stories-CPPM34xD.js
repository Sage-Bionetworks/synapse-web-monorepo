import{ay as a,j as r,r as i}from"./iframe-CtRRQlop.js";import{S as c}from"./SynapseNavDrawer-ByoUnSf-.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-D2-Eyd6q.js";import"./useInfiniteQuery-SCJRjalP.js";import"./useDownloadList-CuCrjAS2.js";import"./waitForAsyncResult-BvMu9EHP.js";import"./useUserBundle-B0DX8PZs.js";import"./CreateProjectModal-Cr-lIVTN.js";import"./ConfirmationDialog-D_lIVX08.js";import"./DialogBase-C8HPRqha.js";import"./Close-CTvsNcCQ.js";import"./HelpPopover-DWiuaJ6Y.js";import"./MarkdownPopover-Cjdvah9D.js";import"./LightTooltip-CnDTJ09B.js";import"./MarkdownSynapse-BokKjTo9.js";import"./SkeletonButton-pOxqmMp7.js";import"./SkeletonInlineBlock-DEN7Z-Ku.js";import"./SkeletonTable-DdWEF2Hw.js";import"./SkeletonParagraph-B1xPIO3Y.js";import"./SynapseHomepageNavBar-CDIWWdO7.js";import"./SageResourcesPopover-Bl-zZaiZ.js";import"./Grid-DXPNqt8F.js";import"./index-6GE_fzjW.js";import"./MenuItem-BQGtU2sS.js";import"./UserBadge-euSgz4-X.js";import"./Card-zOjMR6J6.js";import"./Chip-CNSuJPte.js";import"./searchDefaults-CsTFKTuZ.js";import"./Slide-D1PBi8Q_.js";import"./InputAdornment-DBq-5Nbw.js";import"./listItemButtonClasses-Od4d1K6B.js";import"./Badge-JSrpYFq2.js";import"./usePreviousProps-Twb_anNL.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
