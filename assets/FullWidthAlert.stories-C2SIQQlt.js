import{ax as a,r as i,j as r}from"./iframe-DI_DW6I7.js";import{S as c}from"./SynapseNavDrawer-DtY2Utnm.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-TShE-J9q.js";import"./useInfiniteQuery-CYDJs5Ir.js";import"./useDownloadList-eAYlNxBf.js";import"./waitForAsyncResult-CFX1n-Lj.js";import"./useUserBundle-sgovs3e8.js";import"./queryOptions-C9woPjwX.js";import"./CreateProjectModal-CnqsbQNw.js";import"./ConfirmationDialog-BT2-p3SP.js";import"./DialogBase-vDTKWkBt.js";import"./Close-BlF01rCL.js";import"./HelpPopover-D9eTDHf2.js";import"./MarkdownPopover-3GY4ND-o.js";import"./LightTooltip-BJTLvyTt.js";import"./MarkdownSynapse-CFMaEATT.js";import"./SkeletonButton-VuyYmUxo.js";import"./SkeletonInlineBlock-2jyq21QW.js";import"./SkeletonTable-B1K8a5wm.js";import"./SkeletonParagraph-iVrUoPVl.js";import"./RadioGroup-CMfF6N69.js";import"./Radio-lTxFkRWZ.js";import"./SwitchBase-CgMZiCSG.js";import"./FormGroup-BXw1bb14.js";import"./FormControlLabel-DJ3CxxVI.js";import"./Chip-BtT8gxc3.js";import"./SynapseHomepageNavBar-BL_ZJuf7.js";import"./SageResourcesPopover-BzKg3ww4.js";import"./Grid-DYavEcIp.js";import"./index-CEkoI5OI.js";import"./MenuItem-D7FiHfrS.js";import"./UserBadge-Dcp1qyfD.js";import"./Card-DSTJfyTC.js";import"./searchDefaults-BtYt4ewu.js";import"./Slide-DtjOmJWD.js";import"./InputAdornment-B4rL165R.js";import"./listItemButtonClasses-DFNZ8DDl.js";import"./Badge-yqtRzJZA.js";import"./usePreviousProps-CRw8wBaq.js";const Q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
