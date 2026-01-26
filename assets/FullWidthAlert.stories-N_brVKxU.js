import{ay as a,j as r,r as i}from"./iframe-Byg5KEO3.js";import{S as c}from"./SynapseNavDrawer-Ztu8sy8p.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-C6eZc-Mu.js";import"./useInfiniteQuery-CZPJsNj1.js";import"./useDownloadList-Cm0tU31q.js";import"./waitForAsyncResult-B51ARsMA.js";import"./useGetFeatureFlag-DKH0uI1r.js";import"./useUserBundle-CIHk5rZS.js";import"./useSuspenseQuery-BsTrDnpu.js";import"./CreateProjectModal-Be0QvCYO.js";import"./ConfirmationDialog-JsFCfxK0.js";import"./DialogBase-CnDWnT2B.js";import"./Close-CpMA1DKn.js";import"./HelpPopover-CT10kuL6.js";import"./MarkdownPopover-DISWB6lN.js";import"./LightTooltip-MazkSLsv.js";import"./MarkdownSynapse-DUFzxpBi.js";import"./SkeletonButton-4jGLqIPK.js";import"./SkeletonInlineBlock-BMXq3IDQ.js";import"./SkeletonTable-DoPPIijf.js";import"./SkeletonParagraph-Bg9PA-th.js";import"./SynapseHomepageNavBar-C1ghJBRr.js";import"./SageResourcesPopover-DqnKZ6Gk.js";import"./Grid-DxpU9yRv.js";import"./index-ChYi0wId.js";import"./MenuItem-CHAd-f9u.js";import"./UserBadge-BLjnlATj.js";import"./Card-BiYdDpof.js";import"./Chip-S8C0h81Q.js";import"./Slide-CLLlQmZJ.js";import"./InputAdornment-qFRcmL-P.js";import"./listItemButtonClasses-CSdhhBnK.js";import"./Badge-BbkIuyvC.js";import"./usePreviousProps-Dn7MxSj9.js";const q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
