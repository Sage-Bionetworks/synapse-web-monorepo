import{ay as a,j as r,r as i}from"./iframe-dqn_o-j7.js";import{S as c}from"./SynapseNavDrawer-CmXTavJF.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-C1o1iV7_.js";import"./useInfiniteQuery-CgM25XWi.js";import"./useDownloadList-CF6pZEB8.js";import"./waitForAsyncResult-DxTe3bPT.js";import"./useUserBundle-Bwl8g-Om.js";import"./useSuspenseQuery-BB8-jlr0.js";import"./CreateProjectModal-CY-ryswt.js";import"./ConfirmationDialog-BglZMyws.js";import"./DialogBase-Du7TIgB4.js";import"./Close-Axrw4Kzl.js";import"./HelpPopover-C9R8R_7q.js";import"./MarkdownPopover-D3CVPC0g.js";import"./LightTooltip-Dhs-cvGE.js";import"./MarkdownSynapse-BD2Fjx54.js";import"./SkeletonButton-B8uw_n6q.js";import"./SkeletonInlineBlock-nI55AVgz.js";import"./SkeletonTable-8ejcRdZg.js";import"./SkeletonParagraph-DUPitNKo.js";import"./SynapseHomepageNavBar-zvsJDFWH.js";import"./SageResourcesPopover-j0D4-E5n.js";import"./Grid-C-uX_xYH.js";import"./index-TRDYm8vi.js";import"./MenuItem-BOJ2Kk2Z.js";import"./UserBadge-BAsSKXtF.js";import"./Card-BpyeYfNX.js";import"./Chip-CFttJTcb.js";import"./Slide-VRv5ubkn.js";import"./InputAdornment-DeFht1oy.js";import"./listItemButtonClasses-DuVG8e5O.js";import"./Badge-CAAgegFP.js";import"./usePreviousProps-1OqQ4JRf.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
