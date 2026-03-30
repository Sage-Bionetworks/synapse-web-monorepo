import{ay as a,j as r,r as i}from"./iframe-DIHgldxa.js";import{S as c}from"./SynapseNavDrawer-uHWkJi3S.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-B8bmNLya.js";import"./useInfiniteQuery-C7SfxOXc.js";import"./useDownloadList-B_OwSRgW.js";import"./waitForAsyncResult-C9emP7m5.js";import"./useUserBundle-DlpivQb3.js";import"./CreateProjectModal-Cj1vlydk.js";import"./ConfirmationDialog-B1pUQtYb.js";import"./DialogBase-BoGr-CRZ.js";import"./Close-B9FxdBmj.js";import"./HelpPopover-CojtIfyp.js";import"./MarkdownPopover-Brc4t5Ga.js";import"./LightTooltip-BLPTEgz7.js";import"./MarkdownSynapse-VQjxuG79.js";import"./SkeletonButton-CflRIFGp.js";import"./SkeletonInlineBlock-eDwQJ6BQ.js";import"./SkeletonTable-kyH1U49B.js";import"./SkeletonParagraph-Bj2Sqp59.js";import"./SynapseHomepageNavBar-CBZxZhb_.js";import"./SageResourcesPopover-C8xMI22n.js";import"./Grid-BJrpEgUY.js";import"./index-DnH41gKI.js";import"./MenuItem-CAWhO3PR.js";import"./UserBadge-wF921RXQ.js";import"./Card-CXOm8pHh.js";import"./Chip-RTYTkfR-.js";import"./searchDefaults-BSjRggfZ.js";import"./Slide-BqPJFB5J.js";import"./InputAdornment-DI3hHKxw.js";import"./listItemButtonClasses-Yu4fYD5n.js";import"./Badge-CiHIx1lJ.js";import"./usePreviousProps-iY9qJYwG.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
