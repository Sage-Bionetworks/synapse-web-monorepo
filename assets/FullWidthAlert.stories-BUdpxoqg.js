import{ay as a,j as r,r as i}from"./iframe-DGtd-eZ6.js";import{S as c}from"./SynapseNavDrawer-dfB8j7g3.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-DUfPCbVV.js";import"./useInfiniteQuery-XzhrhxiT.js";import"./useDownloadList-Cbdkanxc.js";import"./waitForAsyncResult-D1IxOnOp.js";import"./useUserBundle-17T_kydg.js";import"./CreateProjectModal-Bl8Wqv6z.js";import"./ConfirmationDialog-GQl5NATU.js";import"./DialogBase-CMc4lLby.js";import"./Close-B_IJwyX4.js";import"./HelpPopover-Bexa4l-J.js";import"./MarkdownPopover-DFLb2Nun.js";import"./LightTooltip-DPmJZKdH.js";import"./MarkdownSynapse-Ck3-QFfE.js";import"./SkeletonButton-Dv9p8gRu.js";import"./SkeletonInlineBlock-BeCQqojL.js";import"./SkeletonTable-If1Q4Zg-.js";import"./SkeletonParagraph-B4bRIlqn.js";import"./SynapseHomepageNavBar-ByxEE1a5.js";import"./SageResourcesPopover-ppFd4iif.js";import"./Grid-CUXDyCY5.js";import"./index-DRd13Kob.js";import"./MenuItem-CRv6srlg.js";import"./UserBadge-C0S6rE_-.js";import"./Card-DHfeIgmt.js";import"./Chip-CNav__8J.js";import"./searchDefaults-DVmaYOdB.js";import"./Slide-3kaQb2-N.js";import"./InputAdornment-CzV_pMJJ.js";import"./listItemButtonClasses-CKLLnE8c.js";import"./Badge-BgPve0ng.js";import"./usePreviousProps-Cnwayz7H.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
