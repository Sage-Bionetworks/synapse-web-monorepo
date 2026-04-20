import{ax as a,r as i,j as r}from"./iframe-CZUUdnAP.js";import{S as c}from"./SynapseNavDrawer-EEQM01cu.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-DwlKAnKl.js";import"./useInfiniteQuery-C_MyS1FN.js";import"./useDownloadList-BKjvsfkz.js";import"./waitForAsyncResult-lj0-zpSS.js";import"./useUserBundle-CqpwNloT.js";import"./queryOptions-C9woPjwX.js";import"./CreateProjectModal-CfkuFMNu.js";import"./ConfirmationDialog-bHj4aTcl.js";import"./DialogBase-vGJ-9Ozq.js";import"./Close-C0cVzGCV.js";import"./HelpPopover-BVtbTHqG.js";import"./MarkdownPopover-D3m2bqb5.js";import"./LightTooltip-DSgBjgHB.js";import"./MarkdownSynapse-m6An14vR.js";import"./SkeletonButton-u1mXBMmd.js";import"./SkeletonInlineBlock-Dwwns8en.js";import"./SkeletonTable-B92SNSTz.js";import"./SkeletonParagraph-Dccn5vm_.js";import"./RadioGroup-Bt65-_CX.js";import"./Radio-Dde4Awwg.js";import"./SwitchBase-B1xcpsp0.js";import"./FormGroup-BlHjy926.js";import"./FormControlLabel-Cv5LGeMa.js";import"./Chip-vSFEg4gP.js";import"./SynapseHomepageNavBar-BrdQjrK4.js";import"./SageResourcesPopover-DhRdf2PV.js";import"./Grid-CYH6R9jX.js";import"./index-fDzCYU54.js";import"./MenuItem-BQBfTSFf.js";import"./UserBadge-CgUWMwJt.js";import"./Card-BktRylCw.js";import"./searchDefaults-pt0ldaCU.js";import"./Slide-CplGmIQu.js";import"./InputAdornment-BAHeUo69.js";import"./listItemButtonClasses-DUz4wm5w.js";import"./Badge-D5RRTwBq.js";import"./usePreviousProps-BYJ5T-gX.js";const Q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
