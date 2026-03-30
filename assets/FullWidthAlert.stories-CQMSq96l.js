import{ay as a,j as r,r as i}from"./iframe-DlbWcGN2.js";import{S as c}from"./SynapseNavDrawer-D-ySNdNk.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-BFuY3fAe.js";import"./useInfiniteQuery-EmSFUzRL.js";import"./useDownloadList-sZvT7B2z.js";import"./waitForAsyncResult-5f-s3C3l.js";import"./useUserBundle-fmpBDiU5.js";import"./CreateProjectModal-BWbYFDwl.js";import"./ConfirmationDialog-52XVYQBi.js";import"./DialogBase-iPKdwKl0.js";import"./Close-ClY7c3V4.js";import"./HelpPopover-D8qjwvMR.js";import"./MarkdownPopover-Dqmv7u1m.js";import"./LightTooltip-jUz17zhr.js";import"./MarkdownSynapse-DBEf5gPX.js";import"./SkeletonButton-dCMet_AC.js";import"./SkeletonInlineBlock-Zv-gdja3.js";import"./SkeletonTable-CLjRwafm.js";import"./SkeletonParagraph-CTcAcvxB.js";import"./SynapseHomepageNavBar-CYSXnYOz.js";import"./SageResourcesPopover-BkIS59VA.js";import"./Grid-BM0Djy_Q.js";import"./index-CPDGSnl2.js";import"./MenuItem-y9tFSlzR.js";import"./UserBadge-BMihFK0S.js";import"./Card-CX5B1fkb.js";import"./Chip-B6dYwJrn.js";import"./searchDefaults-0GpmOr-E.js";import"./Slide-CwBqmoOX.js";import"./InputAdornment-D-sqnBO3.js";import"./listItemButtonClasses-CltND6A7.js";import"./Badge-Dl4Vz2gT.js";import"./usePreviousProps-BDqNGxJz.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
