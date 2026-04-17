import{ax as a,r as i,j as r}from"./iframe-C6yCTbiI.js";import{S as c}from"./SynapseNavDrawer-CMt0vkNf.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-D3OBjA2O.js";import"./useInfiniteQuery-87POMCNY.js";import"./useDownloadList-9QJL-VYv.js";import"./waitForAsyncResult-B8JoKScp.js";import"./useUserBundle-BUCs7RFl.js";import"./CreateProjectModal-hTB4CbgS.js";import"./ConfirmationDialog-BfhgLdtZ.js";import"./DialogBase-Blh69WLu.js";import"./Close-ZVMj15KJ.js";import"./HelpPopover-CL5CAAmH.js";import"./MarkdownPopover-CU_-CB6C.js";import"./LightTooltip-COIY3s5G.js";import"./MarkdownSynapse-BPE6Gggh.js";import"./SkeletonButton-BSw7ANLA.js";import"./SkeletonInlineBlock-kzXVwRpV.js";import"./SkeletonTable-BTe-OCwr.js";import"./SkeletonParagraph-CZqj6TP0.js";import"./RadioGroup-D5iDnSEE.js";import"./Radio-B1Nj13eJ.js";import"./SwitchBase-C0tFzd3x.js";import"./FormGroup-kIgz71P_.js";import"./FormControlLabel-blAWuUdq.js";import"./Chip-DN5j6xVl.js";import"./SynapseHomepageNavBar-QrAuhlpD.js";import"./SageResourcesPopover-U4Eh6XfV.js";import"./Grid-BC0gKlm6.js";import"./index-B3SxQMwi.js";import"./MenuItem-CKNKfHkT.js";import"./UserBadge-CJBcuBDD.js";import"./useUserGroupHeader-5j2MpiwC.js";import"./Card-CwMidbhG.js";import"./searchDefaults-BCYb4r_q.js";import"./Slide-D22sdAcO.js";import"./InputAdornment-SMteQumw.js";import"./listItemButtonClasses-BevsLqTj.js";import"./Badge-BVdybhZt.js";import"./usePreviousProps-BlssNkvg.js";const Q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
