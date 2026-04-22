import{ax as a,r as i,j as r}from"./iframe-KW3Ki4s5.js";import{S as c}from"./SynapseNavDrawer-CktVmC52.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-CiHXaPKq.js";import"./useInfiniteQuery-B3Zfqdzl.js";import"./useDownloadList-P9IXuc2s.js";import"./waitForAsyncResult-CcID0KMx.js";import"./useUserBundle-DcHRF-pN.js";import"./queryOptions-C9woPjwX.js";import"./CreateProjectModal-BCM6TGon.js";import"./ConfirmationDialog-Bz6P-Mwf.js";import"./DialogBase-CUOBFy-j.js";import"./Close-Cj_UWN_d.js";import"./HelpPopover-CtFwS0Vq.js";import"./MarkdownPopover-BFr6QtMT.js";import"./LightTooltip-DxSrPZ77.js";import"./MarkdownSynapse-Bf8TJuFS.js";import"./SkeletonButton-Bn8xeqTi.js";import"./SkeletonInlineBlock-Cx7fF-gW.js";import"./SkeletonTable-DKXzhoLj.js";import"./SkeletonParagraph-iKwtI13n.js";import"./RadioGroup-BmiYPJB7.js";import"./Radio-DP9THWnr.js";import"./SwitchBase-Bk1kmRTR.js";import"./FormGroup-VCMvMds2.js";import"./FormControlLabel-DD0DDA_y.js";import"./Chip-M2qGtBYy.js";import"./SynapseHomepageNavBar-Cum3acei.js";import"./SageResourcesPopover-CCS4_hg4.js";import"./Grid-ByDfa41p.js";import"./index-CBVoQ7Md.js";import"./MenuItem-Cxj9mVkl.js";import"./UserBadge-CKE8L02R.js";import"./Card-BJGUbHlx.js";import"./searchDefaults-Htv6clcP.js";import"./Slide-CVGfaXny.js";import"./InputAdornment-DRBJTZBH.js";import"./listItemButtonClasses-BS-txcj0.js";import"./Badge-CGDIpf6t.js";import"./usePreviousProps-pcPmgYqd.js";const Q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
