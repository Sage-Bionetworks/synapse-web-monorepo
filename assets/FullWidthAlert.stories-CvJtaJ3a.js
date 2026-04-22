import{ax as a,r as i,j as r}from"./iframe-Bq2Ob2aK.js";import{S as c}from"./SynapseNavDrawer-Bjbdc_17.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-6p2luA4E.js";import"./useInfiniteQuery-Ds4aQTI9.js";import"./useDownloadList-C23GIz1T.js";import"./waitForAsyncResult-y_r7E1uG.js";import"./useUserBundle-BEHCcl1q.js";import"./queryOptions-C9woPjwX.js";import"./CreateProjectModal-BvrUt2lr.js";import"./ConfirmationDialog-Bu-Eb5tt.js";import"./DialogBase-94P046rC.js";import"./Close-UeiWMwwR.js";import"./HelpPopover-CG_-BC6G.js";import"./MarkdownPopover-CtjBz5l1.js";import"./LightTooltip-CzYg_hTr.js";import"./MarkdownSynapse-Dhzef1qm.js";import"./SkeletonButton-BGK0wFQC.js";import"./SkeletonInlineBlock-CmYjNg7h.js";import"./SkeletonTable-BBXhhxxV.js";import"./SkeletonParagraph-LdyaQqI_.js";import"./RadioGroup-5LCSUqsC.js";import"./Radio-BwaWw5Pp.js";import"./SwitchBase-C5-igteL.js";import"./FormGroup-C_b7b_WO.js";import"./FormControlLabel-HJWDlDWs.js";import"./Chip-6y5YmXDt.js";import"./SynapseHomepageNavBar-BQEBnJEw.js";import"./SageResourcesPopover-YN2uz2dh.js";import"./Grid-Bly1A-LN.js";import"./index-BURFaEcg.js";import"./MenuItem-QKEL9EzE.js";import"./UserBadge-ByqebRvh.js";import"./Card-CpWT9_D-.js";import"./searchDefaults-BWQ1vKYF.js";import"./Slide-BEuYUYqK.js";import"./InputAdornment-B3QjXknZ.js";import"./listItemButtonClasses-BDHYK_ZD.js";import"./Badge-Cu4UVMR2.js";import"./usePreviousProps-DZM5n9-N.js";const Q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
