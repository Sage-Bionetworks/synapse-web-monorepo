import{ax as a,r as i,j as r}from"./iframe-sZrYZ6Wp.js";import{S as c}from"./SynapseNavDrawer-ChLPbEd_.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-D445wRCK.js";import"./useInfiniteQuery-C5HUZHaI.js";import"./useDownloadList-CN2yg6-J.js";import"./waitForAsyncResult-B8aJg0ki.js";import"./useUserBundle-Sq4CKI0B.js";import"./queryOptions-C9woPjwX.js";import"./CreateProjectModal-at5itNd6.js";import"./ConfirmationDialog-Bxj212oG.js";import"./DialogBase-DJn9LdSy.js";import"./Close-DmLJxOz2.js";import"./HelpPopover-CFZvRBgC.js";import"./MarkdownPopover-BPe5k0vL.js";import"./LightTooltip-PwS5hn6t.js";import"./MarkdownSynapse-B356jbGy.js";import"./SkeletonButton--UCUv7uI.js";import"./SkeletonInlineBlock-RlErow6J.js";import"./SkeletonTable-ChIFdfhg.js";import"./SkeletonParagraph-QSdi-JVA.js";import"./RadioGroup-DjuYVx1n.js";import"./Radio-BQoXyLIs.js";import"./SwitchBase-W3Oi4NaW.js";import"./FormGroup-Cu8TvdXt.js";import"./FormControlLabel-DawJBkuM.js";import"./Chip-BvOGwdWK.js";import"./SynapseHomepageNavBar-D5yelDj4.js";import"./SageResourcesPopover-oSRDIHGJ.js";import"./Grid-BbQwRq5Y.js";import"./index-DHfNFGWR.js";import"./MenuItem-2yGPkNWm.js";import"./UserBadge-Dg-mhIDf.js";import"./Card-wFiE_sMv.js";import"./searchDefaults-CPFuXC_G.js";import"./Slide-CLg5OP8j.js";import"./InputAdornment-sFKFiQTY.js";import"./listItemButtonClasses-D6nsu7sC.js";import"./Badge-BCL3fGy6.js";import"./usePreviousProps-zdMDBRmY.js";const Q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
