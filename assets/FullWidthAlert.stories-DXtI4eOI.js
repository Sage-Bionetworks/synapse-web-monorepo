import{ax as a,r as i,j as r}from"./iframe-TELIK5St.js";import{S as c}from"./SynapseNavDrawer-CD5evd__.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-DnA8012R.js";import"./useInfiniteQuery-CsPobzOo.js";import"./useDownloadList-CTUBDZwB.js";import"./waitForAsyncResult-DA3PH3bJ.js";import"./useUserBundle-DCscJCIX.js";import"./CreateProjectModal-5sBVyPo9.js";import"./ConfirmationDialog-BxrjJOlJ.js";import"./DialogBase-B_W-3fb4.js";import"./Close-1aRbQcSU.js";import"./HelpPopover-CHQIvLmq.js";import"./MarkdownPopover-ByQ3xb7d.js";import"./LightTooltip-B6lk_bQM.js";import"./MarkdownSynapse-DMWe3Ld4.js";import"./SkeletonButton-Ch0HQYiA.js";import"./SkeletonInlineBlock-DmvsIilu.js";import"./SkeletonTable-BK56JWcz.js";import"./SkeletonParagraph-CsdCh0c6.js";import"./RadioGroup-DcKVrU9M.js";import"./Radio-Ch940cOi.js";import"./SwitchBase-C4A-3PON.js";import"./FormGroup-tH04-FQb.js";import"./FormControlLabel-DkZ0xtIe.js";import"./Chip-ChN1vAl3.js";import"./SynapseHomepageNavBar-DDxF0tIO.js";import"./SageResourcesPopover-BFpWZPrt.js";import"./Grid--nzUhU6x.js";import"./index-DhCG1PUT.js";import"./MenuItem-CZMXI3mZ.js";import"./UserBadge-BL2bxi6y.js";import"./useUserGroupHeader-1WZ7S21v.js";import"./Card-CdQC2hYH.js";import"./searchDefaults-B_hiaBT7.js";import"./Slide-uSjLVlEy.js";import"./InputAdornment-DbnoJ775.js";import"./listItemButtonClasses-DyQLHwEc.js";import"./Badge-Ci_FyZUr.js";import"./usePreviousProps-Dq07bXWo.js";const Q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
