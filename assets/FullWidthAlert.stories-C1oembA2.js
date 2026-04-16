import{ax as a,r as i,j as r}from"./iframe-DUQkn8iF.js";import{S as c}from"./SynapseNavDrawer-4saw3THQ.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-0kBPNahm.js";import"./useInfiniteQuery-CSxua8m4.js";import"./useDownloadList-Cb-SID__.js";import"./waitForAsyncResult-Ckm8c9ev.js";import"./useUserBundle-2e6WFDdI.js";import"./CreateProjectModal-ButV6BLc.js";import"./ConfirmationDialog-56MHZonu.js";import"./DialogBase-Bjwp1F6F.js";import"./Close-CoWf9EwA.js";import"./HelpPopover-O-SP5MD7.js";import"./MarkdownPopover-BqXoJ5YF.js";import"./LightTooltip-D6czb-Qe.js";import"./MarkdownSynapse-Dmjjzt7C.js";import"./SkeletonButton-COaCvHBG.js";import"./SkeletonInlineBlock-S0DMpc3c.js";import"./SkeletonTable-Dx_jF5OF.js";import"./SkeletonParagraph-BzReNLH2.js";import"./RadioGroup-Dxu2ThVx.js";import"./Radio-B5nBcyaG.js";import"./SwitchBase-DmNt2wvQ.js";import"./FormGroup-HdN5_xk5.js";import"./FormControlLabel-ULAaK-Wz.js";import"./Chip-DTXJglpB.js";import"./SynapseHomepageNavBar-Dz8qpk8Q.js";import"./SageResourcesPopover-DuLM9JJH.js";import"./Grid-BtW5NgRp.js";import"./index-B-0M8h1t.js";import"./MenuItem-BPgUr9lg.js";import"./UserBadge-BLdSt8lg.js";import"./useUserGroupHeader-DjnwW-1A.js";import"./Card-CxsQey3A.js";import"./searchDefaults-CPG2VVzB.js";import"./Slide-DHSg0-5D.js";import"./InputAdornment-DLNyfFZu.js";import"./listItemButtonClasses-D9mub51c.js";import"./Badge-BP8m_ytJ.js";import"./usePreviousProps-Dv-jr2T7.js";const Q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
