import{az as a,j as r,r as i}from"./iframe-PaLoqTAY.js";import{S as c}from"./SynapseNavDrawer-DdpZRRIL.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-CJfrCQQq.js";import"./useInfiniteQuery-tSWCMdH0.js";import"./useDownloadList-CKc0RPxX.js";import"./waitForAsyncResult-Bz6GUPwX.js";import"./useUserBundle-8xaYISQq.js";import"./CreateProjectModal-Cvhks0Am.js";import"./ConfirmationDialog-CYp0eVVg.js";import"./DialogBase-CdOZpOpZ.js";import"./Close-cm6rg5AJ.js";import"./HelpPopover-CsjQ6N0g.js";import"./MarkdownPopover-nKSUx3jQ.js";import"./LightTooltip-_tTaVink.js";import"./MarkdownSynapse-Ba6V8zsg.js";import"./SkeletonButton-BnWhyhDQ.js";import"./SkeletonInlineBlock-Cw72BSZP.js";import"./SkeletonTable-zz4k46jG.js";import"./SkeletonParagraph-BUTvJRRd.js";import"./SynapseHomepageNavBar-CLFLrSCB.js";import"./SageResourcesPopover-DLFlzAqv.js";import"./Grid-2tfAWBHV.js";import"./index-CNYDnv7t.js";import"./MenuItem-HGElYqD5.js";import"./UserBadge-CVbBcasz.js";import"./Card-v0j-xphS.js";import"./Chip-CsQ7Z6OV.js";import"./searchDefaults-CeEdF8Yp.js";import"./Slide-BOv_nCoR.js";import"./InputAdornment-CsddGjwD.js";import"./listItemButtonClasses-B7ohCB-y.js";import"./Badge-ixuhIiXy.js";import"./usePreviousProps-ChMLkegD.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
