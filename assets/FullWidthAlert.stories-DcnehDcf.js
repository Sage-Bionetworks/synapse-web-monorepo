import{ax as a,r as i,j as r}from"./iframe-CkF2RhKN.js";import{S as c}from"./SynapseNavDrawer-DFOlb3oI.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-Dbbbyn99.js";import"./useInfiniteQuery-B7jSsWM4.js";import"./useDownloadList-DgFOFOjI.js";import"./waitForAsyncResult-37KmRQy0.js";import"./useUserBundle-DQZHVi7_.js";import"./CreateProjectModal-Ba22RpSd.js";import"./ConfirmationDialog-Dx2givAp.js";import"./DialogBase-BynSzgi7.js";import"./Close-C30i0cHB.js";import"./HelpPopover-8yvHKAte.js";import"./MarkdownPopover-ChhMW5W_.js";import"./LightTooltip-C4-8pTH-.js";import"./MarkdownSynapse-CUvWST4S.js";import"./SkeletonButton-szKajW48.js";import"./SkeletonInlineBlock-BHo_rHpz.js";import"./SkeletonTable-_Ae5KVb-.js";import"./SkeletonParagraph-D5pjFcDJ.js";import"./SynapseHomepageNavBar-Cv3c8PbJ.js";import"./SageResourcesPopover-_VgEWNEa.js";import"./Grid-bBoM1obv.js";import"./index-Ci6ZMoUD.js";import"./MenuItem-Bn_zQ0BD.js";import"./UserBadge-Yb-L8AxF.js";import"./Card-BR9tyc2m.js";import"./Chip-BzTGJFEB.js";import"./searchDefaults-FyoAaEUQ.js";import"./Slide-N7uQgDty.js";import"./InputAdornment-CSB9Jqcy.js";import"./listItemButtonClasses-D_9PsBch.js";import"./Badge-yOqnWaQp.js";import"./usePreviousProps-DoqDJIYb.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
