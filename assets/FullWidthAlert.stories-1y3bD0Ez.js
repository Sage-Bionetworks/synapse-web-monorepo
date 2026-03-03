import{az as a,j as r,r as i}from"./iframe-Caumy8OG.js";import{S as c}from"./SynapseNavDrawer-B72Sxi_w.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-CBU1pezo.js";import"./useInfiniteQuery-BettF6mH.js";import"./useDownloadList-DGDIhIB3.js";import"./waitForAsyncResult-CmqXC-Cz.js";import"./useUserBundle-YBqMkgNg.js";import"./CreateProjectModal-ByblQovo.js";import"./ConfirmationDialog-IHEJhKNR.js";import"./DialogBase-BwhcKSSX.js";import"./Close-DQtVppmx.js";import"./HelpPopover-DLbRiMnr.js";import"./MarkdownPopover-Ed--YpdW.js";import"./LightTooltip-VmaxT5-P.js";import"./MarkdownSynapse-BvD7qHpg.js";import"./SkeletonButton-CJd-6_Rb.js";import"./SkeletonInlineBlock-Mrzyi1ZX.js";import"./SkeletonTable-Cy3CPYvw.js";import"./SkeletonParagraph-tEoCsyXm.js";import"./SynapseHomepageNavBar-COXM0LgQ.js";import"./SageResourcesPopover-CryNbq_u.js";import"./Grid-DbgtV8Vv.js";import"./index-CS5uaYEv.js";import"./MenuItem-C3S0i9k3.js";import"./UserBadge-D_bg6T3T.js";import"./Card-CcHhVuhh.js";import"./Chip-BD4K8GZ0.js";import"./searchDefaults-B7Zdr9wC.js";import"./Slide-Dfc63elR.js";import"./InputAdornment-CWfCSpbP.js";import"./listItemButtonClasses-CqspFtzF.js";import"./Badge-BPKlJZKA.js";import"./usePreviousProps-Bu7ZPua7.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
