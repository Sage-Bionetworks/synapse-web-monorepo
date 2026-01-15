import{ay as a,j as r,r as i}from"./iframe-CV5uF1_e.js";import{S as c}from"./SynapseNavDrawer-BsVkqpgr.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-D2dxKatm.js";import"./useInfiniteQuery-oU30NX3B.js";import"./useDownloadList-DQBILMlx.js";import"./waitForAsyncResult-C6e3QT2N.js";import"./useGetFeatureFlag-LOAiCChU.js";import"./useUserBundle-9F9vUiBr.js";import"./useSuspenseQuery-CGczKAJn.js";import"./CreateProjectModal-BagVoOjK.js";import"./ConfirmationDialog-D2HwlyP0.js";import"./DialogBase-BBjGlBIj.js";import"./Close-BXWZan39.js";import"./HelpPopover-jZCDiU0J.js";import"./MarkdownPopover-DuJ5uVW5.js";import"./LightTooltip-CPpYn2Kh.js";import"./MarkdownSynapse-DKo3fnwU.js";import"./SkeletonButton-CpwnNhlN.js";import"./SkeletonInlineBlock-CfS9comD.js";import"./SkeletonTable-Dkaqgxy9.js";import"./SkeletonParagraph-CfoCBxY5.js";import"./SynapseHomepageNavBar-Bl55kKEc.js";import"./SageResourcesPopover-Ctxwt_a2.js";import"./Grid-Pr30XWBi.js";import"./index-Lq8AZYKI.js";import"./MenuItem-BzuAhGLX.js";import"./UserBadge-yVhGbWiX.js";import"./Card-DCUNa1gA.js";import"./Chip-KBD8jJOF.js";import"./Slide-m3Dy6w3M.js";import"./InputAdornment-BQG2wuEQ.js";import"./listItemButtonClasses-zWm1TryB.js";import"./Badge-CoAGNy-U.js";import"./usePreviousProps-CirsVsge.js";const q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const H=["DownloadListPackageCreation","SuccessAlertWithPrimaryButtonOnly","SynapseNavDrawerIsShowing"];export{t as DownloadListPackageCreation,e as SuccessAlertWithPrimaryButtonOnly,o as SynapseNavDrawerIsShowing,H as __namedExportsOrder,q as default};
