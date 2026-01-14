import{ay as a,j as r,r as i}from"./iframe-PKSisnYN.js";import{S as c}from"./SynapseNavDrawer-DjCQo7On.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-Dhth76rJ.js";import"./useInfiniteQuery-CbKeCSex.js";import"./useDownloadList-C8vOJRTC.js";import"./waitForAsyncResult-BWNnpoHC.js";import"./useGetFeatureFlag-BI9pqkT1.js";import"./useUserBundle-C9JUfD1-.js";import"./useSuspenseQuery-CtKV56yt.js";import"./CreateProjectModal-QYa8iGb_.js";import"./ConfirmationDialog-S4M52zPJ.js";import"./DialogBase-CB9fyCxz.js";import"./Close-B6DB3YsI.js";import"./HelpPopover-DzDKur2h.js";import"./MarkdownPopover-DS7FUQk-.js";import"./LightTooltip-8SVgZs3S.js";import"./MarkdownSynapse-xcQCt-re.js";import"./SkeletonButton-BGdnvIuV.js";import"./SkeletonInlineBlock-CSwI3yx9.js";import"./SkeletonTable-Dkrc7QOG.js";import"./SkeletonParagraph-C0R5SJWX.js";import"./SynapseHomepageNavBar-BCc8lk8N.js";import"./SageResourcesPopover-CYrwqa-a.js";import"./Grid-Cd8xwGFy.js";import"./index-CHPH14xa.js";import"./MenuItem-DV5diNve.js";import"./UserBadge-B34w-3Og.js";import"./Card-DCVbjVFH.js";import"./Chip-BQb8GEui.js";import"./Slide-Q3Lqa1oA.js";import"./InputAdornment-CQijo6xw.js";import"./listItemButtonClasses-CQsaMkk1.js";import"./Badge-C8EvS0gA.js";import"./usePreviousProps-F4S7haKQ.js";const q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
