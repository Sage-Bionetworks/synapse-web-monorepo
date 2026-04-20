import{ax as a,r as i,j as r}from"./iframe-CyTUL3rw.js";import{S as c}from"./SynapseNavDrawer-Dzrb64gK.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-DQJnkZgb.js";import"./useInfiniteQuery-8XDsvgry.js";import"./useDownloadList-BNZc-Hnc.js";import"./waitForAsyncResult-qpmmSR8g.js";import"./useUserBundle-B9ypisaf.js";import"./queryOptions-C9woPjwX.js";import"./CreateProjectModal-BPJhouFP.js";import"./ConfirmationDialog-BSxA4EpL.js";import"./DialogBase-BmPd6gFD.js";import"./Close-Cs5OhkJ0.js";import"./HelpPopover-Di3M7oAV.js";import"./MarkdownPopover-C7H_W_vs.js";import"./LightTooltip-Br9ozYpY.js";import"./MarkdownSynapse-C3mcPF1h.js";import"./SkeletonButton-DChDzo9i.js";import"./SkeletonInlineBlock-B96TZts7.js";import"./SkeletonTable-BzEL_yMf.js";import"./SkeletonParagraph-D3EKUoCV.js";import"./RadioGroup-BFl8OAX7.js";import"./Radio-COPtt3m4.js";import"./SwitchBase-BAQlXzL4.js";import"./FormGroup-BgDNvdHh.js";import"./FormControlLabel-BoYvZo-l.js";import"./Chip-RUiUFPKg.js";import"./SynapseHomepageNavBar-BH4hKnJl.js";import"./SageResourcesPopover-DUSYDBxM.js";import"./Grid-B8Ch4kur.js";import"./index-BOhc23wR.js";import"./MenuItem-48CaJz-o.js";import"./UserBadge-De5Xgm0G.js";import"./Card-8ssPkC44.js";import"./searchDefaults-BmjKkJgJ.js";import"./Slide-CR2xMCVd.js";import"./InputAdornment-BVQ-z-jg.js";import"./listItemButtonClasses-CuHOQPFx.js";import"./Badge-f0wm1P_l.js";import"./usePreviousProps-Bk4ZH_gp.js";const Q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
