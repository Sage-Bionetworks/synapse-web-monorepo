import{ay as a,j as r,r as i}from"./iframe-CztmM481.js";import{S as c}from"./SynapseNavDrawer-BHy60RUL.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-D5Kpai-D.js";import"./useInfiniteQuery-CMUwdvwB.js";import"./useDownloadList--alN61np.js";import"./waitForAsyncResult-BHkURaIQ.js";import"./useUserBundle-BsSVCPoC.js";import"./CreateProjectModal-CJ70ZRJu.js";import"./ConfirmationDialog-CRTgjSct.js";import"./DialogBase-DuknWYoH.js";import"./Close-DsRX1MCV.js";import"./HelpPopover-DvC80QRo.js";import"./MarkdownPopover-eu3zF-im.js";import"./LightTooltip-BA9BIuJJ.js";import"./MarkdownSynapse-B_NDi4bv.js";import"./SkeletonButton-BWr_w7rt.js";import"./SkeletonInlineBlock-BafzGMgM.js";import"./SkeletonTable-D62IODcw.js";import"./SkeletonParagraph-RQGRwxXl.js";import"./SynapseHomepageNavBar-rXHP4a_P.js";import"./SageResourcesPopover-DvZAaIPV.js";import"./Grid-BIQeSlL_.js";import"./index-D4zvspUx.js";import"./MenuItem-DhY-eVIi.js";import"./UserBadge-Di9rrgvd.js";import"./Card-DZPeI2yE.js";import"./Chip-CpQHwqZu.js";import"./searchDefaults-Cqgf0k1n.js";import"./Slide-B9EgLCkF.js";import"./InputAdornment-i9iwPlM9.js";import"./listItemButtonClasses-BRLZOxuP.js";import"./Badge-B_mcvQjz.js";import"./usePreviousProps-piPUdNFL.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
