import{ax as a,r as i,j as r}from"./iframe-BnslxpU_.js";import{S as c}from"./SynapseNavDrawer-DO7E6IHK.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-BiThlydT.js";import"./useInfiniteQuery-CUtRjsVX.js";import"./useDownloadList-N7_7aK3h.js";import"./waitForAsyncResult-CRtoD2lq.js";import"./useUserBundle-C1FSIxUt.js";import"./queryOptions-C9woPjwX.js";import"./CreateProjectModal-DAhiK98U.js";import"./ConfirmationDialog-zoPPJpy4.js";import"./DialogBase-BFSEb07D.js";import"./Close-zw5i39wh.js";import"./HelpPopover-DEMZmKs_.js";import"./MarkdownPopover--8H7HGCA.js";import"./LightTooltip-CSsPVoOw.js";import"./MarkdownSynapse-CiX0_RGH.js";import"./SkeletonButton-5fVnmkER.js";import"./SkeletonInlineBlock-DPXtIPY8.js";import"./SkeletonTable-CoVehSLQ.js";import"./SkeletonParagraph-B0oRHwOu.js";import"./RadioGroup-CmwtAxB-.js";import"./Radio-Z_Yf4KIL.js";import"./SwitchBase-D8Y_Jyat.js";import"./FormGroup-CsWa7wjm.js";import"./FormControlLabel-DFnjR6do.js";import"./Chip-Bn_oC1Yj.js";import"./SynapseHomepageNavBar-Cyjt9RMR.js";import"./SageResourcesPopover-XZQQwRon.js";import"./Grid-BcaJqK2a.js";import"./index-BBnrFY0q.js";import"./MenuItem-DtwhjM27.js";import"./UserBadge-BgBEo1dQ.js";import"./Card-CRK3-fg-.js";import"./searchDefaults-BsdyKYNT.js";import"./Slide-BB6F6spI.js";import"./InputAdornment-aux6HHam.js";import"./listItemButtonClasses-B_i8CeoE.js";import"./Badge-DvMnnzst.js";import"./usePreviousProps-DI4-AD8Z.js";const Q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
