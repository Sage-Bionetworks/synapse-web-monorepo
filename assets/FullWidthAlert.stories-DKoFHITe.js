import{ax as a,r as i,j as r}from"./iframe-B_8Pbtyy.js";import{S as c}from"./SynapseNavDrawer-DUOIxZ91.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-CA5Fw2rs.js";import"./useInfiniteQuery-EmhrFgDQ.js";import"./useDownloadList--RaMmeWH.js";import"./waitForAsyncResult-DE3NDXIz.js";import"./useUserBundle-AYZLZe6H.js";import"./queryOptions-C9woPjwX.js";import"./CreateProjectModal-BofcLwS6.js";import"./ConfirmationDialog-Cj7M6sK5.js";import"./DialogBase-BsBgus9N.js";import"./Close-DmraeU9A.js";import"./HelpPopover-DFhkNVag.js";import"./MarkdownPopover-CqCpxQwy.js";import"./LightTooltip-DL-di1QQ.js";import"./MarkdownSynapse-HYoIGTcS.js";import"./SkeletonButton-C2boYaKt.js";import"./SkeletonInlineBlock-ChbxFlxk.js";import"./SkeletonTable-DZYgPiW7.js";import"./SkeletonParagraph-CanILnI9.js";import"./RadioGroup-DRRY0zGy.js";import"./Radio-B3nv9QSc.js";import"./SwitchBase-CoXKjNiI.js";import"./FormGroup-DDlgUjrx.js";import"./FormControlLabel-Dkt0Kpn_.js";import"./Chip-CrOe6yxn.js";import"./SynapseHomepageNavBar-KQx8lQDe.js";import"./SageResourcesPopover-BAiicWNP.js";import"./Grid-DGMh7hSD.js";import"./index-C8E9GuLP.js";import"./MenuItem-B5j_dwt3.js";import"./UserBadge-C_HLmkM9.js";import"./Card-TCSc9gJb.js";import"./searchDefaults-CYNY1MLp.js";import"./Slide-rSKlXaHL.js";import"./InputAdornment-DfZEFC2p.js";import"./listItemButtonClasses-BrtwA7kB.js";import"./Badge-BoyMhUot.js";import"./usePreviousProps-Bh7W6lyD.js";const Q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
