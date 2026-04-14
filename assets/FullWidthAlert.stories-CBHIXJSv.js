import{ax as a,r as i,j as r}from"./iframe-xuGDYskk.js";import{S as c}from"./SynapseNavDrawer-CTb_0YN_.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-pbnQCpkD.js";import"./useInfiniteQuery-DjTbIVFH.js";import"./useDownloadList-Bva-3Poc.js";import"./waitForAsyncResult-CSnsF4Ja.js";import"./useUserBundle-DtSERE0H.js";import"./CreateProjectModal-svxHeX8p.js";import"./ConfirmationDialog-CeVmcrd5.js";import"./DialogBase-D_8BDBtZ.js";import"./Close-DW9kzD-X.js";import"./HelpPopover-w8ni5A6U.js";import"./MarkdownPopover-DTgCpJv6.js";import"./LightTooltip-lMMHMay2.js";import"./MarkdownSynapse-Dqj1e4cl.js";import"./SkeletonButton-Ba2syrHs.js";import"./SkeletonInlineBlock-CuJjaS51.js";import"./SkeletonTable-Bn51DOnQ.js";import"./SkeletonParagraph-BP-szXpV.js";import"./SynapseHomepageNavBar-D7oyLCAH.js";import"./SageResourcesPopover-Bb5rwg78.js";import"./Grid-OGEpIkgy.js";import"./index-D8fOn0Se.js";import"./MenuItem-D1rBKZNi.js";import"./UserBadge-BorFtQsG.js";import"./useUserGroupHeader-CzZ91UGJ.js";import"./Card-B4NJfnf-.js";import"./Chip-Ckkk-5JS.js";import"./searchDefaults-CdNXx1_u.js";import"./Slide-CpLeEq3Q.js";import"./InputAdornment-D4HCwoEr.js";import"./listItemButtonClasses-DhUDG0R8.js";import"./Badge-Ba7i11nI.js";import"./usePreviousProps-CRWTbO4u.js";const q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
