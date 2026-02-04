import{ay as a,j as r,r as i}from"./iframe-BhrR5Sll.js";import{S as c}from"./SynapseNavDrawer-3t7F2_E8.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-CDomkyR3.js";import"./useInfiniteQuery-BrWjCX7v.js";import"./useDownloadList-Bn6eB3m7.js";import"./waitForAsyncResult-i8Wd7E9l.js";import"./useGetFeatureFlag-D7CxAo11.js";import"./useUserBundle-hOPzwbRd.js";import"./useSuspenseQuery-CuIa-HUN.js";import"./CreateProjectModal-y19HopNG.js";import"./ConfirmationDialog-B44tNgOv.js";import"./DialogBase-BYIqUMiE.js";import"./Close-8bb5EJ6t.js";import"./HelpPopover-lG-0-_4j.js";import"./MarkdownPopover-Dra-bAXM.js";import"./LightTooltip-CtyC1diu.js";import"./MarkdownSynapse-gk6o-aVH.js";import"./SkeletonButton-CXfcR02x.js";import"./SkeletonInlineBlock-BVfsrZM3.js";import"./SkeletonTable-bVZR_JBz.js";import"./SkeletonParagraph-BvDfq1qX.js";import"./SynapseHomepageNavBar-Ds2ziX9W.js";import"./SageResourcesPopover-B7aM87Fk.js";import"./Grid-Dfl2LtvY.js";import"./index-CPX53gcL.js";import"./MenuItem-BJbLDGlr.js";import"./UserBadge-B_-Td5kg.js";import"./Card-D2q1-b23.js";import"./Chip-BT3G1XLE.js";import"./Slide-j8yXPvTf.js";import"./InputAdornment-vUCDV8FZ.js";import"./listItemButtonClasses-DXNiEFb2.js";import"./Badge-DrqJM5K_.js";import"./usePreviousProps-N55TCA3c.js";const q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
