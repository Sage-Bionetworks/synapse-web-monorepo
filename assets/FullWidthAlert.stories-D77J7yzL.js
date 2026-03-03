import{az as a,j as r,r as i}from"./iframe-BXOaFC93.js";import{S as c}from"./SynapseNavDrawer-CFH8nnta.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-BX8ZrOI1.js";import"./useInfiniteQuery-CMyAeBvQ.js";import"./useDownloadList-BGLU_1cK.js";import"./waitForAsyncResult-DC2AVyM0.js";import"./useUserBundle-GtjAuzC1.js";import"./CreateProjectModal-CrO9F5BD.js";import"./ConfirmationDialog-B4Nlucy5.js";import"./DialogBase-D6Ud-Adz.js";import"./Close-D1WVTMvM.js";import"./HelpPopover-9iSqJaFc.js";import"./MarkdownPopover-BQxFNv37.js";import"./LightTooltip-CPiLa2tV.js";import"./MarkdownSynapse-BQFq1ZI6.js";import"./SkeletonButton-Bqwyl1dP.js";import"./SkeletonInlineBlock-Cl-hsdeu.js";import"./SkeletonTable-CeAdm2qt.js";import"./SkeletonParagraph-DymEZI1w.js";import"./SynapseHomepageNavBar-BPOf9Mcl.js";import"./SageResourcesPopover-C9VImuGK.js";import"./Grid-C6QXGUzL.js";import"./index-MNp32NR_.js";import"./MenuItem-Dtwb3tI6.js";import"./UserBadge-XxMl2-q6.js";import"./Card-myTQBzog.js";import"./Chip-DABoi-5O.js";import"./searchDefaults-DrEcy8vs.js";import"./Slide-DPK7sxuH.js";import"./InputAdornment-C1zp6cZY.js";import"./listItemButtonClasses-PUrzaJtW.js";import"./Badge-BYJzEIRN.js";import"./usePreviousProps-BDW20S0g.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
