import{ax as a,r as i,j as r}from"./iframe-ebumedXL.js";import{S as c}from"./SynapseNavDrawer-CbkHJT2J.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-DM3crkkD.js";import"./useInfiniteQuery-DYtjmNBb.js";import"./useDownloadList-DlKG17XY.js";import"./waitForAsyncResult-BVaFV40B.js";import"./useUserBundle-ClJAa-1h.js";import"./queryOptions-C9woPjwX.js";import"./CreateProjectModal-D8JceBHl.js";import"./ConfirmationDialog-Cl7cQ4Nu.js";import"./DialogBase-CStF3dxn.js";import"./Close-BrRtpMs2.js";import"./HelpPopover-BgDuyYAY.js";import"./MarkdownPopover-B-Z3CE2b.js";import"./LightTooltip-CgA2Jxaj.js";import"./MarkdownSynapse-BSPB6zOl.js";import"./SkeletonButton-ClK4nZ4V.js";import"./SkeletonInlineBlock--tfqxNwn.js";import"./SkeletonTable-D1WsuyYZ.js";import"./SkeletonParagraph-CjkSb5xZ.js";import"./RadioGroup-C-Ce5FAn.js";import"./Radio-kqohRild.js";import"./SwitchBase-hiOfS_D4.js";import"./FormGroup-DbgWVAsY.js";import"./FormControlLabel-EbJgvWzn.js";import"./Chip-DwqfSnWD.js";import"./SynapseHomepageNavBar-p2-wTySe.js";import"./SageResourcesPopover-CtsQvsDO.js";import"./Grid-C5Yci4HF.js";import"./index-BXiypiiB.js";import"./MenuItem-DMONT234.js";import"./UserBadge-Cxc18L8a.js";import"./Card-TzJMzE0i.js";import"./searchDefaults-DQCihjuU.js";import"./Slide-cf4WLzSx.js";import"./InputAdornment-D8ElXNBT.js";import"./listItemButtonClasses-iA8X2Ldm.js";import"./Badge-Nla8rthB.js";import"./usePreviousProps-UzYqkF7W.js";const Q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
