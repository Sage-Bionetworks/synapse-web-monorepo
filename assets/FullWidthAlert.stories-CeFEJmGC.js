import{aA as a,j as r,r as i}from"./iframe-BEF4MEGo.js";import{S as c}from"./SynapseNavDrawer-CXYGSKNk.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-XQ2_UEdS.js";import"./useInfiniteQuery-DIn0P7iw.js";import"./useDownloadList-C2lS0ZTk.js";import"./waitForAsyncResult-6EtrKuLL.js";import"./useUserBundle-BSq5yoVT.js";import"./CreateProjectModal-CElETT-q.js";import"./ConfirmationDialog-CSdXW-H0.js";import"./DialogBase-C-U41h-h.js";import"./Close-CpFdUeMZ.js";import"./HelpPopover-DCEUptUW.js";import"./MarkdownPopover-D6Nnm8NP.js";import"./LightTooltip-u_zYTDNY.js";import"./MarkdownSynapse-2vacgikM.js";import"./SkeletonButton-DtUWEjyN.js";import"./SkeletonInlineBlock-B_sSYUYb.js";import"./SkeletonTable-B7lcCt2v.js";import"./SkeletonParagraph-kmlFPk4O.js";import"./SynapseHomepageNavBar-DyKqIATF.js";import"./SageResourcesPopover-Do27LCxi.js";import"./Grid-BDAXk-a3.js";import"./index-CPBFcEpw.js";import"./MenuItem-kdifhyeS.js";import"./UserBadge-Du1rJukw.js";import"./Card-CqODmY2j.js";import"./Chip-Cww2ggjY.js";import"./searchDefaults-DLyXLrTn.js";import"./Slide-CBfWq5X8.js";import"./InputAdornment-DujUKlye.js";import"./listItemButtonClasses-BgbB4LY1.js";import"./Badge-CtF9wZJU.js";import"./usePreviousProps-B1e385cX.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
