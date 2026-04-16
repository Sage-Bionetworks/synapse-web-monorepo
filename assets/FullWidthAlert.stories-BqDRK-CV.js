import{ax as a,r as i,j as r}from"./iframe-BJt7q_JV.js";import{S as c}from"./SynapseNavDrawer-v_ZXj_TX.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-DYW2yUqz.js";import"./useInfiniteQuery-Ceo7_zT8.js";import"./useDownloadList-BTlTWVav.js";import"./waitForAsyncResult-BgaWG6Sd.js";import"./useUserBundle-DxuM9JQF.js";import"./CreateProjectModal-B-6OMdrW.js";import"./ConfirmationDialog-DhIfbqQu.js";import"./DialogBase-DNgmg92r.js";import"./Close-CnuYTtXB.js";import"./HelpPopover-BKPDM7P7.js";import"./MarkdownPopover-iIdPMRk3.js";import"./LightTooltip-boxSQgEG.js";import"./MarkdownSynapse-BHezFvPm.js";import"./SkeletonButton-CQzFd6lb.js";import"./SkeletonInlineBlock-DWTLId8s.js";import"./SkeletonTable-BoHNQ0XH.js";import"./SkeletonParagraph-76490YmJ.js";import"./RadioGroup-BoIVV53h.js";import"./Radio-DgNCNVuW.js";import"./SwitchBase-B6wo5qcW.js";import"./FormGroup-DKxxADn2.js";import"./FormControlLabel-BZzQmDal.js";import"./Chip-D4cY5ocF.js";import"./SynapseHomepageNavBar-nolihSZu.js";import"./SageResourcesPopover-DpvOdi-K.js";import"./Grid-DFP1jire.js";import"./index-D1KUKnNi.js";import"./MenuItem-DUuZTALA.js";import"./UserBadge-Bct9zt1u.js";import"./useUserGroupHeader-D1CyPOkN.js";import"./Card-C9SkN0MX.js";import"./searchDefaults-Ci6p_6NA.js";import"./Slide-uI2pMgwH.js";import"./InputAdornment-v7fhpYFD.js";import"./listItemButtonClasses-CLI1Iss5.js";import"./Badge-9uMJnEoS.js";import"./usePreviousProps-_k1Molu3.js";const Q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
