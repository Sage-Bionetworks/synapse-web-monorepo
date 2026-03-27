import{ay as a,j as r,r as i}from"./iframe-C0AexDGo.js";import{S as c}from"./SynapseNavDrawer-Bieuw15T.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-BhWmyiyz.js";import"./useInfiniteQuery-B2H1bPeH.js";import"./useDownloadList-eSVZfn8U.js";import"./waitForAsyncResult-BMncJALb.js";import"./useUserBundle-BrZlfjEn.js";import"./CreateProjectModal-iwppqxag.js";import"./ConfirmationDialog-Tlg0AvaS.js";import"./DialogBase-DEQixVmG.js";import"./Close-BSsXOVcm.js";import"./HelpPopover-CVzUoBki.js";import"./MarkdownPopover-DABKYL5O.js";import"./LightTooltip-D8PwR5sb.js";import"./MarkdownSynapse-BQk4puC1.js";import"./SkeletonButton-BkD5G1Zw.js";import"./SkeletonInlineBlock-BJifXgdu.js";import"./SkeletonTable-ButMnzRS.js";import"./SkeletonParagraph-BSPRuMA0.js";import"./SynapseHomepageNavBar-D8dWutLD.js";import"./SageResourcesPopover-BxFsI4Oy.js";import"./Grid-BoLhaorR.js";import"./index-BLmC8C9J.js";import"./MenuItem-CS8tSfW4.js";import"./UserBadge-KYcTRXZe.js";import"./Card-CavtJPUI.js";import"./Chip-7BiG69Cu.js";import"./searchDefaults-rwj4E4MU.js";import"./Slide-DIhyMc9v.js";import"./InputAdornment-9zUz1kYm.js";import"./listItemButtonClasses-BVWTFNxv.js";import"./Badge-Bzpz2x0G.js";import"./usePreviousProps-Cb80TPQl.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
