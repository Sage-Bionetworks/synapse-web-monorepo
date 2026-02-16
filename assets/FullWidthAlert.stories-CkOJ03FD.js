import{az as a,j as r,r as i}from"./iframe-D5Jb4H7-.js";import{S as c}from"./SynapseNavDrawer-MBIgEPNh.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-DG2CNbVT.js";import"./useInfiniteQuery-mtij9nHQ.js";import"./useDownloadList-BqDqnEGn.js";import"./waitForAsyncResult-OFEpxLsJ.js";import"./useUserBundle-B8Qf3-u2.js";import"./useSuspenseQuery-CJo7dxig.js";import"./CreateProjectModal-Cl6EdH3b.js";import"./ConfirmationDialog-Cf6HqVui.js";import"./DialogBase-DbS96YQV.js";import"./Close-CbOuO2km.js";import"./HelpPopover-zrq7Oti8.js";import"./MarkdownPopover-CET6pvp6.js";import"./LightTooltip-D5wkP_b3.js";import"./MarkdownSynapse-BYeobG0y.js";import"./SkeletonButton-C8q9GuK7.js";import"./SkeletonInlineBlock-B1J-x5sp.js";import"./SkeletonTable-CWnnOC4O.js";import"./SkeletonParagraph-1IqDxZQP.js";import"./SynapseHomepageNavBar-CX2i6gVm.js";import"./SageResourcesPopover-mLOZndQQ.js";import"./Grid-DSYoMefi.js";import"./index-Q_YFCtqN.js";import"./MenuItem-BcAY2td_.js";import"./UserBadge-DVbiFxjq.js";import"./Card-DcE5VUZL.js";import"./Chip-BPCELKLJ.js";import"./searchDefaults-BrqrpXVY.js";import"./Slide-Chyl3fU8.js";import"./InputAdornment-D7UfKMXD.js";import"./listItemButtonClasses-D_p-rgYX.js";import"./Badge-Dt6tTmPd.js";import"./usePreviousProps-CDRJnlOE.js";const q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const H=["DownloadListPackageCreation","SuccessAlertWithPrimaryButtonOnly","SynapseNavDrawerIsShowing"];export{t as DownloadListPackageCreation,e as SuccessAlertWithPrimaryButtonOnly,o as SynapseNavDrawerIsShowing,H as __namedExportsOrder,q as default};
