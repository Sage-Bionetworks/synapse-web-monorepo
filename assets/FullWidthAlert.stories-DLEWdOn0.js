import{az as a,j as r,r as i}from"./iframe-BjUpq5xd.js";import{S as c}from"./SynapseNavDrawer-DgoZTmmW.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-DR8Kubm8.js";import"./useInfiniteQuery-BQLrsI8-.js";import"./useDownloadList-BIB2-uqn.js";import"./waitForAsyncResult-DiQFMeJ1.js";import"./useUserBundle-CjiLCz0M.js";import"./useSuspenseQuery-DbgujXvY.js";import"./CreateProjectModal-C0xv5Gr2.js";import"./ConfirmationDialog-B5pmgtC9.js";import"./DialogBase-CzW-EroP.js";import"./Close-CJMPACEo.js";import"./HelpPopover-DKCN5vTJ.js";import"./MarkdownPopover-DUsub1Bj.js";import"./LightTooltip-DMh9w68D.js";import"./MarkdownSynapse-DVFomeAo.js";import"./SkeletonButton-CV3RH36o.js";import"./SkeletonInlineBlock-ANrbFXbS.js";import"./SkeletonTable-B-Y_KPUW.js";import"./SkeletonParagraph-C60Mi91l.js";import"./SynapseHomepageNavBar-C-ScVG_F.js";import"./SageResourcesPopover-Z6qi1R5Y.js";import"./Grid-C-Jjv4Qv.js";import"./index-DbW4RfeC.js";import"./MenuItem-CC-RPPM2.js";import"./UserBadge-DSJf_GP4.js";import"./Card-CJg664IM.js";import"./Chip-iDCojdQO.js";import"./searchDefaults-B7Lb2RZt.js";import"./Slide-CdtPS6qC.js";import"./InputAdornment-DmeeXtui.js";import"./listItemButtonClasses-CE8hegso.js";import"./Badge-BGDwGQUH.js";import"./usePreviousProps-CWa1F3rL.js";const q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
