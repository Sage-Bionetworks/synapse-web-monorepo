import{ax as a,r as i,j as r}from"./iframe-vLBQZPS1.js";import{S as c}from"./SynapseNavDrawer-B_0hB1Nu.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-DlXaVjom.js";import"./useInfiniteQuery-CjBQlBHx.js";import"./useDownloadList-glrUgHQ7.js";import"./waitForAsyncResult-D6E-CFAq.js";import"./useUserBundle-BzYdunjk.js";import"./queryOptions-C9woPjwX.js";import"./CreateProjectModal-DlgLy6ls.js";import"./ConfirmationDialog-DhT3Kl3D.js";import"./DialogBase-MXOqe2PM.js";import"./Close-w9C8mbRP.js";import"./HelpPopover-BDS7EbF2.js";import"./MarkdownPopover-DJzEVvrc.js";import"./LightTooltip-FFjGpbV1.js";import"./MarkdownSynapse-LkluOMjb.js";import"./SkeletonButton-Bpq0DUhs.js";import"./SkeletonInlineBlock-Ck9MEOcu.js";import"./SkeletonTable-vLDxttH1.js";import"./SkeletonParagraph-BdLk36IL.js";import"./RadioGroup-C9fhpGnL.js";import"./Radio-BdaDAdcS.js";import"./SwitchBase-BpROeQ6w.js";import"./FormGroup-iWuYtkuX.js";import"./FormControlLabel-ChegGM40.js";import"./Chip-BwFdox-s.js";import"./SynapseHomepageNavBar-B0k7GGYI.js";import"./SageResourcesPopover-BYb9q_yn.js";import"./Grid-DVwtr0_z.js";import"./index-huQsABd9.js";import"./MenuItem-B9IS4RBy.js";import"./UserBadge-PCszth9B.js";import"./Card-vpuDZNT5.js";import"./searchDefaults-Czyb3SeU.js";import"./Slide-zzoiW8Ck.js";import"./InputAdornment-Bm9VBhG0.js";import"./listItemButtonClasses-BZulfIb5.js";import"./Badge-qYCql3wN.js";import"./usePreviousProps-ChDDB4-s.js";const Q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const V=["DownloadListPackageCreation","SuccessAlertWithPrimaryButtonOnly","SynapseNavDrawerIsShowing"];export{t as DownloadListPackageCreation,e as SuccessAlertWithPrimaryButtonOnly,o as SynapseNavDrawerIsShowing,V as __namedExportsOrder,Q as default};
