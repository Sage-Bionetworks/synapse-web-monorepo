import{ay as a,j as r,r as i}from"./iframe-BIEbu1W6.js";import{S as c}from"./SynapseNavDrawer-BcFcaceU.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-fQEtxXpS.js";import"./useInfiniteQuery-B0KU597s.js";import"./useDownloadList-VgmqyI83.js";import"./waitForAsyncResult-DJvgyvWx.js";import"./useUserBundle-bL5uBmII.js";import"./useSuspenseQuery-B21UYyAc.js";import"./CreateProjectModal-B8E-5pBN.js";import"./ConfirmationDialog-BG7mYTUg.js";import"./DialogBase-BOsW7V0r.js";import"./Close-PD-8PwDw.js";import"./HelpPopover-BMpjG3ih.js";import"./MarkdownPopover-D4XSX2HP.js";import"./LightTooltip-Cl8rvG15.js";import"./MarkdownSynapse-C6TGH7qQ.js";import"./SkeletonButton-CYSUqy8V.js";import"./SkeletonInlineBlock-BPt0uiBn.js";import"./SkeletonTable-xs4-qgjj.js";import"./SkeletonParagraph-C7NGLrAr.js";import"./SynapseHomepageNavBar-DXeQYhzC.js";import"./SageResourcesPopover-u15hUQJw.js";import"./Grid-B9VV0g0f.js";import"./index-G6SXchb0.js";import"./MenuItem-DN4nfg1A.js";import"./UserBadge-CkpZ8t6W.js";import"./Card-BRaEJLq9.js";import"./Chip-BTFPdc0m.js";import"./Slide-CDK2cK9H.js";import"./InputAdornment-Yl1vRa2O.js";import"./listItemButtonClasses-CENHLeNB.js";import"./Badge-DywuBCkY.js";import"./usePreviousProps-B7J_MGTt.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
