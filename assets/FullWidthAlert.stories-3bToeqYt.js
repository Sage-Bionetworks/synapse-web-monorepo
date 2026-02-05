import{ay as a,j as r,r as i}from"./iframe-D5_h0PF9.js";import{S as c}from"./SynapseNavDrawer-2MJe-Id7.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-CT4tr5vT.js";import"./useInfiniteQuery-BmUArCE3.js";import"./useDownloadList-nVNLegGE.js";import"./waitForAsyncResult-z7NEENk0.js";import"./useGetFeatureFlag-B-5576PC.js";import"./useUserBundle-29JhTBEU.js";import"./useSuspenseQuery-BZOc09Ao.js";import"./CreateProjectModal-CusvBc8Z.js";import"./ConfirmationDialog-BGdn1nyH.js";import"./DialogBase-BSPbIEb2.js";import"./Close-PtWlikut.js";import"./HelpPopover-Cdyc7PIT.js";import"./MarkdownPopover-DYStciEH.js";import"./LightTooltip-B0jdMCwN.js";import"./MarkdownSynapse-rMn4dUa6.js";import"./SkeletonButton-CnXRIIps.js";import"./SkeletonInlineBlock-DCpTDBDa.js";import"./SkeletonTable-C0hupK0t.js";import"./SkeletonParagraph-C3Ev59KW.js";import"./SynapseHomepageNavBar-DBoga2VE.js";import"./SageResourcesPopover-C5owyDRx.js";import"./Grid-D-UfU3T_.js";import"./index-DihqrFgA.js";import"./MenuItem-CyRowmJi.js";import"./UserBadge-yiMBLQpE.js";import"./Card-LsjfYv2Y.js";import"./Chip-CBZ7YR6P.js";import"./Slide-DaeIXLMJ.js";import"./InputAdornment-Bt8e14jV.js";import"./listItemButtonClasses-D-qzCweW.js";import"./Badge-CuEK14eL.js";import"./usePreviousProps-B-ckrDkP.js";const q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const H=["DownloadListPackageCreation","SuccessAlertWithPrimaryButtonOnly","SynapseNavDrawerIsShowing"];export{t as DownloadListPackageCreation,e as SuccessAlertWithPrimaryButtonOnly,o as SynapseNavDrawerIsShowing,H as __namedExportsOrder,q as default};
