import{az as a,j as r,r as i}from"./iframe-E5Ka0mIZ.js";import{S as c}from"./SynapseNavDrawer-FBvXuo2M.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-CkftuIX3.js";import"./useInfiniteQuery-DcuDXesA.js";import"./useDownloadList-DZ5efpSC.js";import"./waitForAsyncResult-Ch7CSCFI.js";import"./useUserBundle-BGioipGE.js";import"./CreateProjectModal-C2Bl2dXB.js";import"./ConfirmationDialog-ZdQ-24Ic.js";import"./DialogBase-JVTM_oQl.js";import"./Close-EPxz31Ms.js";import"./HelpPopover-CvoNF05b.js";import"./MarkdownPopover-DD6HYN95.js";import"./LightTooltip-B5aPrNqD.js";import"./MarkdownSynapse-BDwlDcaF.js";import"./SkeletonButton-kIjuP8ut.js";import"./SkeletonInlineBlock-C_4IQROm.js";import"./SkeletonTable-Crx1Nozv.js";import"./SkeletonParagraph-9oETCVT4.js";import"./SynapseHomepageNavBar-BjTrOxhp.js";import"./SageResourcesPopover-1LQy7E2n.js";import"./Grid-Dn4fGAyj.js";import"./index-Cv8vAGy5.js";import"./MenuItem-DBqDOy7_.js";import"./UserBadge-BNHf5Pka.js";import"./Card-zpRmv5OW.js";import"./Chip-Bk7-WqYd.js";import"./searchDefaults-V8v7Swi-.js";import"./Slide-CNNNzeHa.js";import"./InputAdornment-CMwUWjJT.js";import"./listItemButtonClasses-BOPKPtWT.js";import"./Badge-CyrcrkUx.js";import"./usePreviousProps-BpJsEKbj.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
