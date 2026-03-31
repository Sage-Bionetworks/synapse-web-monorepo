import{ay as a,j as r,r as i}from"./iframe-DhpKet55.js";import{S as c}from"./SynapseNavDrawer-CWNd8Gam.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-CYAIDqNi.js";import"./useInfiniteQuery-BThf8L3S.js";import"./useDownloadList-B_L7pFfE.js";import"./waitForAsyncResult-QZl5rD0d.js";import"./useUserBundle-MoKPhqqG.js";import"./CreateProjectModal-BPHC8wvQ.js";import"./ConfirmationDialog-C_059iZP.js";import"./DialogBase-CQOhgDpz.js";import"./Close-gzmIzwoR.js";import"./HelpPopover-CPRkTcWQ.js";import"./MarkdownPopover-BFmylr6y.js";import"./LightTooltip-B31RTkkv.js";import"./MarkdownSynapse-BSCmNA0L.js";import"./SkeletonButton-DB6VnDRU.js";import"./SkeletonInlineBlock-BpymSWGX.js";import"./SkeletonTable-CDPXZ6i1.js";import"./SkeletonParagraph-CQn9tuId.js";import"./SynapseHomepageNavBar-CQg8XhW0.js";import"./SageResourcesPopover-CWmpx6zK.js";import"./Grid-emFPcA4V.js";import"./index-CpJ472Wk.js";import"./MenuItem-DFY-M91_.js";import"./UserBadge-BXdGqvgB.js";import"./Card-bvHfdi3z.js";import"./Chip-9P7ZQoxZ.js";import"./searchDefaults-Dq2pC96I.js";import"./Slide-DjNt9VRb.js";import"./InputAdornment-DQcV6WFD.js";import"./listItemButtonClasses-BKQfmJ0n.js";import"./Badge-CrpWRyED.js";import"./usePreviousProps-rusbXXek.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
