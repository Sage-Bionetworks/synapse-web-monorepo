import{az as a,j as r,r as i}from"./iframe-D2314vV7.js";import{S as c}from"./SynapseNavDrawer-CjVhenMT.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-B5h2iyEp.js";import"./useInfiniteQuery-BkYzK-VQ.js";import"./useDownloadList-DSKx2FiB.js";import"./waitForAsyncResult-F_lF7Vqb.js";import"./useUserBundle-geWM6IMX.js";import"./useSuspenseQuery-Dqm9rcpM.js";import"./CreateProjectModal-BtGzwshV.js";import"./ConfirmationDialog-Rlnq_K10.js";import"./DialogBase-CeLIS526.js";import"./Close-DF-SSni9.js";import"./HelpPopover-DPlyz4f8.js";import"./MarkdownPopover-DLwjwgAy.js";import"./LightTooltip-C3RLT3BD.js";import"./MarkdownSynapse-DOP2sYUv.js";import"./SkeletonButton-B53Z_sb3.js";import"./SkeletonInlineBlock-CV4xFhI_.js";import"./SkeletonTable-BKP48mc0.js";import"./SkeletonParagraph-LgnNm5lB.js";import"./SynapseHomepageNavBar-BLPfxdDD.js";import"./SageResourcesPopover-pJ1o180p.js";import"./Grid-B3ew8oLs.js";import"./index-uz0aFGkQ.js";import"./MenuItem-Bh76qgcw.js";import"./UserBadge-DzB9tiKw.js";import"./Card-DZNxgrrg.js";import"./Chip-Dx5TUVtU.js";import"./searchDefaults-Ctqal1Lm.js";import"./Slide-Ccos9Qh_.js";import"./InputAdornment-DLFMNmhA.js";import"./listItemButtonClasses-BYk7Nv3g.js";import"./Badge-DAxWfUtN.js";import"./usePreviousProps-CDqJKuLz.js";const q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
