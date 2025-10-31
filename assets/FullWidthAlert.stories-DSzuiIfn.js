import{ax as g,j as e,r as w}from"./iframe-DkJtXMGY.js";import{S as v}from"./SynapseNavDrawer-DOfYaT-Q.js";import"./index-r8ZA1smB.js";import"./useDataAccessSubmission-BStWTxwZ.js";import"./useInfiniteQuery-iYy68X6j.js";import"./useDownloadList-BqvEC_EH.js";import"./CreateProjectModal-gTG2fJZ_.js";import"./ConfirmationDialog-DYXCYbxt.js";import"./DialogBase-buJoyvfa.js";import"./Close-BlNc4-DS.js";import"./HelpPopover-Bw54_hwN.js";import"./MarkdownPopover-HbQMpPTM.js";import"./LightTooltip-DemkIWEH.js";import"./MarkdownSynapse-Cj88j8IZ.js";import"./SkeletonButton-Wvy1B_g_.js";import"./SkeletonInlineBlock-BZs9NYqd.js";import"./SkeletonTable-Boy2sN_O.js";import"./SkeletonParagraph-D2M_qyIo.js";import"./SynapseHomepageNavBar-DKG8f3kh.js";import"./SageResourcesPopover-C3cNZhWY.js";import"./Grid-CVeqhvD2.js";import"./index-BhkdXidL.js";import"./MenuItem-__VZzdvD.js";import"./UserBadge-D10KGNES.js";import"./Card-BrdkgB5x.js";import"./Chip-C5Eg6zQf.js";import"./Slide-BZRb7OmG.js";import"./InputAdornment-C08nIKom.js";import"./listItemButtonClasses-CsxA2vb9.js";import"./Badge-DvAhZHUM.js";import"./usePreviousProps-B2s_NTFp.js";const Q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:g,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},r={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...r.args},render:s=>e.jsxs(e.Fragment,{children:[e.jsx(v,{initIsOpen:!1,gotoPlace:h=>{window.alert(`Nav bar calling back to change route to ${h}`)}}),e.jsx(g,{...s})]}),decorators:[s=>(w.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),e.jsx(s,{}))]};var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
