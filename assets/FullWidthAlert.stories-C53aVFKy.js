import{ax as a,r as i,j as r}from"./iframe-DeCZWsOw.js";import{S as c}from"./SynapseNavDrawer-LEnTGtjG.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-DF6_I5od.js";import"./useInfiniteQuery-U4Po-hj0.js";import"./useDownloadList-CDFD4KYV.js";import"./waitForAsyncResult-6MoQrjEg.js";import"./useUserBundle-x45H33EG.js";import"./queryOptions-C9woPjwX.js";import"./CreateProjectModal-B2Hg5nCe.js";import"./ConfirmationDialog-BEm0Hfbq.js";import"./DialogBase-KILzPQhc.js";import"./Close-C8-LQoZ0.js";import"./HelpPopover-CwKb1-x2.js";import"./MarkdownPopover-jZMkPkG9.js";import"./LightTooltip-B9fHYLYn.js";import"./MarkdownSynapse-D0mIxpTT.js";import"./SkeletonButton-KOOFtLVu.js";import"./SkeletonInlineBlock-Dvt7Y2hl.js";import"./SkeletonTable-wLNyC9qX.js";import"./SkeletonParagraph-Bh8QkB1r.js";import"./RadioGroup-BHT7V9e6.js";import"./Radio-CLXsYHdC.js";import"./SwitchBase-D0NKihTE.js";import"./FormGroup-CWTsMuWD.js";import"./FormControlLabel-CDGc6Svz.js";import"./Chip-Zt9ByBCz.js";import"./SynapseHomepageNavBar-7mr93H_m.js";import"./SageResourcesPopover-BWxiWV6W.js";import"./Grid-BBpd3EAB.js";import"./index-C-sY2UDa.js";import"./MenuItem-BwXWDpmH.js";import"./UserBadge-Bzk1CSGa.js";import"./Card-B6034kBB.js";import"./searchDefaults-BfLq8IQL.js";import"./Slide-CqQtrdL9.js";import"./InputAdornment-3sIY45zN.js";import"./listItemButtonClasses-BuwylV9a.js";import"./Badge-FUedAoKm.js";import"./usePreviousProps-Dy-mp2ym.js";const Q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const V=["DownloadListPackageCreation","SuccessAlertWithPrimaryButtonOnly","SynapseNavDrawerIsShowing"];export{t as DownloadListPackageCreation,e as SuccessAlertWithPrimaryButtonOnly,o as SynapseNavDrawerIsShowing,V as __namedExportsOrder,Q as default};
