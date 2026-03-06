import{az as a,j as r,r as i}from"./iframe-Ak5JkJtY.js";import{S as c}from"./SynapseNavDrawer-D9_ueQt2.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-CP5BrOJx.js";import"./useInfiniteQuery-BIO-789Q.js";import"./useDownloadList-CKFc937O.js";import"./waitForAsyncResult-BUEeelL7.js";import"./useUserBundle-BoMKGodO.js";import"./CreateProjectModal-DBpwAmcp.js";import"./ConfirmationDialog-zlNiA4Jk.js";import"./DialogBase-C44QfcA-.js";import"./Close-B2gux84L.js";import"./HelpPopover-9bzvOPZ1.js";import"./MarkdownPopover-5KNMW25X.js";import"./LightTooltip-Dx85UV-A.js";import"./MarkdownSynapse-n-SLVIb1.js";import"./SkeletonButton-J64P-p4R.js";import"./SkeletonInlineBlock-DSfvHYOc.js";import"./SkeletonTable-DmhZtLI7.js";import"./SkeletonParagraph-eBTTxCdT.js";import"./SynapseHomepageNavBar-BMFXMMsW.js";import"./SageResourcesPopover-0TQVBPXq.js";import"./Grid-BSUODZPK.js";import"./index-DhBGOdhC.js";import"./MenuItem-BM1_B-4q.js";import"./UserBadge-cYluQ2Y6.js";import"./Card-DxvHHd6H.js";import"./Chip-rT4uyFgK.js";import"./searchDefaults-BcY09LZa.js";import"./Slide-CapGCnsx.js";import"./InputAdornment-C5xLo9qi.js";import"./listItemButtonClasses-BHpZ8CPe.js";import"./Badge-2hR44Uj0.js";import"./usePreviousProps-CyqORNDR.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
