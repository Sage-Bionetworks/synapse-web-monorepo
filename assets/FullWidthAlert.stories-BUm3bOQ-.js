import{az as a,j as r,r as i}from"./iframe-BNuX63Gg.js";import{S as c}from"./SynapseNavDrawer-DnS0M_JT.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-CfsEb9-U.js";import"./useInfiniteQuery-ETBFsHKX.js";import"./useDownloadList-j5MTmZ4N.js";import"./waitForAsyncResult-BAm47mPG.js";import"./useUserBundle-BeMY8viL.js";import"./useSuspenseQuery-5mc94Bck.js";import"./CreateProjectModal-CKNryCY6.js";import"./ConfirmationDialog-w4vciXYo.js";import"./DialogBase-CT_QCuKJ.js";import"./Close-DnYx9FSk.js";import"./HelpPopover-BxitrOSl.js";import"./MarkdownPopover-Cqj5utYy.js";import"./LightTooltip-B2c4vJ-r.js";import"./MarkdownSynapse-CllS4xt7.js";import"./SkeletonButton-Q_wdDaMT.js";import"./SkeletonInlineBlock-BaXmg-Ho.js";import"./SkeletonTable-B24h57Dq.js";import"./SkeletonParagraph-Bh-mJsSp.js";import"./SynapseHomepageNavBar-eiLQf1as.js";import"./SageResourcesPopover-B8pbSRVY.js";import"./Grid-DJDQfnqx.js";import"./index-CsZzG_M-.js";import"./MenuItem-QgPCDudv.js";import"./UserBadge-DiHQ1_7F.js";import"./Card-o20fYyBP.js";import"./Chip-Dbkz0kTt.js";import"./Slide-CypU_W7c.js";import"./InputAdornment-k3B2jUW5.js";import"./listItemButtonClasses-Bekp9Iwc.js";import"./Badge-DCSlJDQd.js";import"./usePreviousProps-BTKmS87I.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
