import{ax as a,r as i,j as r}from"./iframe-CseC-baw.js";import{S as c}from"./SynapseNavDrawer-C33PuuOF.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-dm94PwzQ.js";import"./useInfiniteQuery-BZ_GGw6g.js";import"./useDownloadList-UVaE5Bn0.js";import"./waitForAsyncResult-DBcP7YZ5.js";import"./useUserBundle-DcGFbwia.js";import"./queryOptions-C9woPjwX.js";import"./CreateProjectModal-DphYjzdd.js";import"./ConfirmationDialog-CcRCdpta.js";import"./DialogBase-BvEmiGuX.js";import"./Close-CEWvO-tT.js";import"./HelpPopover-Bv1OIhKO.js";import"./MarkdownPopover-jmvUxWZs.js";import"./LightTooltip-Dys4qYAB.js";import"./MarkdownSynapse-DWH-mAwE.js";import"./SkeletonButton-CcHwUw1K.js";import"./SkeletonInlineBlock-dgjaDxOx.js";import"./SkeletonTable-BSCFUHCb.js";import"./SkeletonParagraph-BnipCtVU.js";import"./RadioGroup-qkGp_qqA.js";import"./Radio-BOtMyg1i.js";import"./SwitchBase-viy3IhPp.js";import"./FormGroup-DkbuhrfL.js";import"./FormControlLabel-yR_OFq_k.js";import"./Chip-8D96B7uR.js";import"./SynapseHomepageNavBar-BNWyP6xM.js";import"./SageResourcesPopover-DqBRKJYA.js";import"./Grid-DLfQ-OhD.js";import"./index-Cs-oxnB7.js";import"./MenuItem-JA9eMCvt.js";import"./UserBadge-CsME2JGa.js";import"./Card-CkAhX4H-.js";import"./searchDefaults-Ca3T0stc.js";import"./Slide-BZteSL9e.js";import"./InputAdornment-CAgOA8W-.js";import"./listItemButtonClasses-BOJ5pjAV.js";import"./Badge-ZE-Y6tWN.js";import"./usePreviousProps-DrR79Lb9.js";const Q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
