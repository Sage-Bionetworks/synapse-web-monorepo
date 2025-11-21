import{at as g,j as e,r as w}from"./iframe-C0_MGelw.js";import{S as v}from"./SynapseNavDrawer-Cw6jFe2q.js";import"./index-r8ZA1smB.js";import"./useDataAccessSubmission-DD4-yAHh.js";import"./useInfiniteQuery-G1IM-AGg.js";import"./useDownloadList-BzynmwFZ.js";import"./waitForAsyncResult-BIGip6-V.js";import"./CreateProjectModal-DtD5mrX-.js";import"./ConfirmationDialog-BcmQv4r_.js";import"./DialogBase-DRZu8qiJ.js";import"./Close-Br2x6lcO.js";import"./HelpPopover-CgR11bAO.js";import"./MarkdownPopover-Bfocou5T.js";import"./LightTooltip-I4_xvDt3.js";import"./MarkdownSynapse-BNFairzk.js";import"./SkeletonButton-DjhR7sxh.js";import"./SkeletonInlineBlock-yTERZu3L.js";import"./SkeletonTable-DS1wvkaV.js";import"./SkeletonParagraph-BpdEaVGd.js";import"./SynapseHomepageNavBar-clBBxDj8.js";import"./SageResourcesPopover-jTHwiLCt.js";import"./Grid-Psj3QFGi.js";import"./index-B6X4B_B8.js";import"./MenuItem-VpU5uB21.js";import"./UserBadge-Bzjens13.js";import"./Card-CXieohvt.js";import"./Chip-DoXtLwjl.js";import"./Slide-DRbUyuBh.js";import"./InputAdornment-ymwbD-ER.js";import"./listItemButtonClasses-Crgbwq92.js";import"./Badge-DoN7t8ct.js";import"./usePreviousProps-BQBA_9xG.js";const V={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:g,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},r={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...r.args},render:s=>e.jsxs(e.Fragment,{children:[e.jsx(v,{initIsOpen:!1,gotoPlace:h=>{window.alert(`Nav bar calling back to change route to ${h}`)}}),e.jsx(g,{...s})]}),decorators:[s=>(w.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),e.jsx(s,{}))]};var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    show: true,
    title: 'Package has been downloaded',
    description: 'The files contained in this zip file have been removed from your list.',
    isGlobal: false
  }
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var c,p,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var l,d,u;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const X=["DownloadListPackageCreation","SuccessAlertWithPrimaryButtonOnly","SynapseNavDrawerIsShowing"];export{t as DownloadListPackageCreation,r as SuccessAlertWithPrimaryButtonOnly,o as SynapseNavDrawerIsShowing,X as __namedExportsOrder,V as default};
