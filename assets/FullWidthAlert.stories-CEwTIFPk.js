import{ax as a,r as i,j as r}from"./iframe-BuKUHwYF.js";import{S as c}from"./SynapseNavDrawer-B9OYdIKM.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-ZNOntj8V.js";import"./useInfiniteQuery-BrWu3fho.js";import"./useDownloadList-BbDGwn66.js";import"./waitForAsyncResult-BICJZXCw.js";import"./useUserBundle-DkD9QSSJ.js";import"./queryOptions-C9woPjwX.js";import"./CreateProjectModal-BUCLQSgH.js";import"./ConfirmationDialog-BDmP_pr5.js";import"./DialogBase-C4vg5HBd.js";import"./Close-D3qIPQRQ.js";import"./HelpPopover-D_lIBi9b.js";import"./MarkdownPopover-NRLWKKDC.js";import"./LightTooltip-C8cY03H6.js";import"./MarkdownSynapse-CiDjaR4B.js";import"./SkeletonButton-DoOKAwEq.js";import"./SkeletonInlineBlock-Cs7usZ_r.js";import"./SkeletonTable-Ca_8DlU1.js";import"./SkeletonParagraph-CA2_vLea.js";import"./RadioGroup-ChAui0H3.js";import"./Radio-wRbUmLyc.js";import"./SwitchBase-Cq5wm8XC.js";import"./FormGroup-ScuvxNkT.js";import"./FormControlLabel-BQKBoEMA.js";import"./Chip-D3Gu_L5i.js";import"./SynapseHomepageNavBar-BJrVJ6Jy.js";import"./SageResourcesPopover-CK16GAfg.js";import"./Grid-D5sZRbIA.js";import"./index-BkSKqIFv.js";import"./MenuItem-DmEYYO79.js";import"./UserBadge-DwsW3g_K.js";import"./Card-B6TgluZN.js";import"./searchDefaults-DFz3Aryr.js";import"./Slide-BTEYjOif.js";import"./InputAdornment-BorpTZZE.js";import"./listItemButtonClasses-l-4efrzS.js";import"./Badge-CBT-aMB7.js";import"./usePreviousProps-DfueR3FT.js";const Q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
