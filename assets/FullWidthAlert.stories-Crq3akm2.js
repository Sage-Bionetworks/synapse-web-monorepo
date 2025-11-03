import{ax as g,j as e,r as w}from"./iframe-BaLjRbxV.js";import{S as v}from"./SynapseNavDrawer-CYZOWGT9.js";import"./index-r8ZA1smB.js";import"./useDataAccessSubmission-UdoRhH6r.js";import"./useInfiniteQuery-BKbW_T3d.js";import"./useDownloadList-D0rVUugy.js";import"./CreateProjectModal-BBAjo1D1.js";import"./ConfirmationDialog-BerI96kx.js";import"./DialogBase-DQC5Xm4N.js";import"./Close-DUVDmgA5.js";import"./HelpPopover-HEhffQ-9.js";import"./MarkdownPopover-D0-hXxlT.js";import"./LightTooltip-Df4OWJg3.js";import"./MarkdownSynapse-D5dupBHl.js";import"./SkeletonButton-BCO3ltYO.js";import"./SkeletonInlineBlock-DlbO9j3B.js";import"./SkeletonTable-DRhIcjmz.js";import"./SkeletonParagraph-2OOcKN6S.js";import"./SynapseHomepageNavBar-Ca0LmVHf.js";import"./SageResourcesPopover-DQiMvRJe.js";import"./Grid-DXUoF1k2.js";import"./index-Bf6lqsG1.js";import"./MenuItem-CmlP5UgZ.js";import"./UserBadge-CkEzG92Y.js";import"./Card-BCoCTWa3.js";import"./Chip-BNDtClPI.js";import"./Slide-CxnSubtK.js";import"./InputAdornment-_gLMoaHD.js";import"./listItemButtonClasses-zTMmTepl.js";import"./Badge-YGd_4PsS.js";import"./usePreviousProps-9NqsbF4o.js";const Q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:g,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},r={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...r.args},render:s=>e.jsxs(e.Fragment,{children:[e.jsx(v,{initIsOpen:!1,gotoPlace:h=>{window.alert(`Nav bar calling back to change route to ${h}`)}}),e.jsx(g,{...s})]}),decorators:[s=>(w.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),e.jsx(s,{}))]};var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const V=["DownloadListPackageCreation","SuccessAlertWithPrimaryButtonOnly","SynapseNavDrawerIsShowing"];export{t as DownloadListPackageCreation,r as SuccessAlertWithPrimaryButtonOnly,o as SynapseNavDrawerIsShowing,V as __namedExportsOrder,Q as default};
