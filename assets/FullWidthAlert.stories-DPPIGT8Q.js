import{ay as a,j as r,r as i}from"./iframe-CjPdK8o3.js";import{S as c}from"./SynapseNavDrawer-CDxMx6d6.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-CZMVI9va.js";import"./useInfiniteQuery-CmFbqkY3.js";import"./useDownloadList-BMXBl89B.js";import"./waitForAsyncResult-Dwd4JuvU.js";import"./useGetFeatureFlag-C1j_zTX6.js";import"./useUserBundle-Bny1QVf1.js";import"./useSuspenseQuery-B-tj7iZo.js";import"./CreateProjectModal-OtfslQwX.js";import"./ConfirmationDialog-7KWUNYWE.js";import"./DialogBase-A1jvQwLe.js";import"./Close-CHM8bqMs.js";import"./HelpPopover-CCy_vrhC.js";import"./MarkdownPopover-C1vGDBes.js";import"./LightTooltip-DIhtsuRB.js";import"./MarkdownSynapse-CzOnyM4H.js";import"./SkeletonButton-DVgZ4_7g.js";import"./SkeletonInlineBlock-CpcOQN65.js";import"./SkeletonTable-Dem7Lpfl.js";import"./SkeletonParagraph-BeVZ-sFG.js";import"./SynapseHomepageNavBar-BP34JRcQ.js";import"./SageResourcesPopover-JHr92Okk.js";import"./Grid-rhRRqfEb.js";import"./index-DUxszvjk.js";import"./MenuItem-CjSnBCYE.js";import"./UserBadge-B_i32c0J.js";import"./Card-Ebu0uYiu.js";import"./Chip-CTyQGhqc.js";import"./Slide-BHBNLnbR.js";import"./InputAdornment-uCtOpPqY.js";import"./listItemButtonClasses-4mF2oHoZ.js";import"./Badge-bodY61tN.js";import"./usePreviousProps-DKHCZsDw.js";const q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
