import{ay as a,j as r,r as i}from"./iframe-DOA--ypP.js";import{S as c}from"./SynapseNavDrawer-BU7O32zY.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-CPBBSkt3.js";import"./useInfiniteQuery-TrFnHSG6.js";import"./useDownloadList-ByevkkU7.js";import"./waitForAsyncResult-CukCkTkm.js";import"./useGetFeatureFlag-DstVTmbC.js";import"./useUserBundle-CMLYFODb.js";import"./useSuspenseQuery-CH8JGQoS.js";import"./CreateProjectModal-BWM7XBLV.js";import"./ConfirmationDialog-Bx9ardy9.js";import"./DialogBase-COBCl3WL.js";import"./Close-SOWXhUL2.js";import"./HelpPopover-CQR-J_g5.js";import"./MarkdownPopover-ByIhHE6X.js";import"./LightTooltip-Cp9tv2pP.js";import"./MarkdownSynapse-CorLAqOX.js";import"./SkeletonButton-SLwBY3oR.js";import"./SkeletonInlineBlock-BSyES9P5.js";import"./SkeletonTable-BN8TQIoy.js";import"./SkeletonParagraph-CKHoRTTC.js";import"./SynapseHomepageNavBar-BxOufVBN.js";import"./SageResourcesPopover-DFGKXm8Y.js";import"./Grid-37fxI_NR.js";import"./index-gKWz_61H.js";import"./MenuItem-BXWiBucH.js";import"./UserBadge-B-bcdv8r.js";import"./Card-Cb051pi6.js";import"./Chip-B3zCMCcx.js";import"./Slide-CA5PoEKJ.js";import"./InputAdornment-BjDFsFAu.js";import"./listItemButtonClasses-eIq3jCjC.js";import"./Badge-DSquszyd.js";import"./usePreviousProps-BkuDIe2k.js";const q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
