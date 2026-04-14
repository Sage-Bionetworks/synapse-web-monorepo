import{ax as a,r as i,j as r}from"./iframe-C5G3mSsR.js";import{S as c}from"./SynapseNavDrawer-WDzC7y0F.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-CPgOeb1w.js";import"./useInfiniteQuery-DjR-9fP5.js";import"./useDownloadList-BNjZFRmD.js";import"./waitForAsyncResult-0sW71vVw.js";import"./useUserBundle-b7Uv0-A-.js";import"./CreateProjectModal-Cs7T5I57.js";import"./ConfirmationDialog-Br5927dU.js";import"./DialogBase-D3E-ORM4.js";import"./Close-DMmJiCqc.js";import"./HelpPopover-TqGD_tY5.js";import"./MarkdownPopover-C1geqiut.js";import"./LightTooltip-BCSWtQqF.js";import"./MarkdownSynapse-BKYTzrKF.js";import"./SkeletonButton-_Eu_07NL.js";import"./SkeletonInlineBlock-BpaxCT_H.js";import"./SkeletonTable-q_wTrDuF.js";import"./SkeletonParagraph-B8DwnroK.js";import"./SynapseHomepageNavBar-DU-gY3qd.js";import"./SageResourcesPopover-isfAZchP.js";import"./Grid-C1orS3f4.js";import"./index-ZLaaxmrv.js";import"./MenuItem-DBKy37Hp.js";import"./UserBadge-CvgJynwa.js";import"./useUserGroupHeader-9PNLN8Yb.js";import"./Card-cZbkiVcl.js";import"./Chip-j4Xp3f_v.js";import"./searchDefaults-CSHrdJbk.js";import"./Slide-BgTdbclk.js";import"./InputAdornment-D5A0IpUx.js";import"./listItemButtonClasses-DGdGuUll.js";import"./Badge-DKPDIBC5.js";import"./usePreviousProps-CGWoFtrf.js";const q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
