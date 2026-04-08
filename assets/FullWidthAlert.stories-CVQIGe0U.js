import{ax as a,r as i,j as r}from"./iframe-CtEx53-_.js";import{S as c}from"./SynapseNavDrawer-CTO0aRFG.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-C3iLV0sA.js";import"./useInfiniteQuery-Btk7RS4S.js";import"./useDownloadList--KEvxZbH.js";import"./waitForAsyncResult-BE4u0Ypp.js";import"./useUserBundle-CU45jpjR.js";import"./CreateProjectModal-vZO87gHV.js";import"./ConfirmationDialog-D10OfoxA.js";import"./DialogBase-ChLejIKB.js";import"./Close-DYbs631P.js";import"./HelpPopover-DPQexwMD.js";import"./MarkdownPopover-D5Nx0R4H.js";import"./LightTooltip-Ceq6WBqp.js";import"./MarkdownSynapse-DIm3O9Y2.js";import"./SkeletonButton-BxJCEkFM.js";import"./SkeletonInlineBlock-CUTClj5h.js";import"./SkeletonTable-DXr3KoSK.js";import"./SkeletonParagraph-B7Iue5Hi.js";import"./SynapseHomepageNavBar-D1bedd9R.js";import"./SageResourcesPopover-I6xfMkkz.js";import"./Grid-Dx2Bd5oi.js";import"./index-rzZ2fsR5.js";import"./MenuItem-FhFL09-C.js";import"./UserBadge-DEyjEyEt.js";import"./Card-CEnckPzK.js";import"./Chip-DZZXMgyG.js";import"./searchDefaults-b9DiOhpF.js";import"./Slide-BNjwEJRw.js";import"./InputAdornment-BUDwCpRQ.js";import"./listItemButtonClasses-CYdXg08h.js";import"./Badge-DtzIY44K.js";import"./usePreviousProps-BB8cbwq6.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const q=["DownloadListPackageCreation","SuccessAlertWithPrimaryButtonOnly","SynapseNavDrawerIsShowing"];export{t as DownloadListPackageCreation,e as SuccessAlertWithPrimaryButtonOnly,o as SynapseNavDrawerIsShowing,q as __namedExportsOrder,U as default};
