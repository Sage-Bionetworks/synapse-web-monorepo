import{aA as a,j as r,r as i}from"./iframe-BVhGOjHR.js";import{S as c}from"./SynapseNavDrawer-qK5mgvmX.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-z_L_HMAb.js";import"./useInfiniteQuery-DBGOhcL0.js";import"./useDownloadList-lEfyCICL.js";import"./waitForAsyncResult-CvWoG0iH.js";import"./useUserBundle-dXzxNskR.js";import"./CreateProjectModal-CLeNBezP.js";import"./ConfirmationDialog-Cv8Px1du.js";import"./DialogBase-DRrK0xBi.js";import"./Close-BMnT91sG.js";import"./HelpPopover-D6fqSHgm.js";import"./MarkdownPopover-DU6whr1F.js";import"./LightTooltip-vnEyTJDI.js";import"./MarkdownSynapse-BL-kClrd.js";import"./SkeletonButton-u72hHay5.js";import"./SkeletonInlineBlock-BxY577KC.js";import"./SkeletonTable-DsxcrpLy.js";import"./SkeletonParagraph-mwYfRmjy.js";import"./SynapseHomepageNavBar-BKZBhlpG.js";import"./SageResourcesPopover-C4o8Ychg.js";import"./Grid-BoTHHcTR.js";import"./index-B8gzQCaZ.js";import"./MenuItem-CXPtROXT.js";import"./UserBadge-CDmVMUNv.js";import"./Card-DxFsJWCw.js";import"./Chip-DZiNGCO2.js";import"./searchDefaults-BlkgdHud.js";import"./Slide-D69doZYk.js";import"./InputAdornment-BlCMJ_To.js";import"./listItemButtonClasses-CguTVZpn.js";import"./Badge-BuEUEt2K.js";import"./usePreviousProps-zTGnpYa-.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
