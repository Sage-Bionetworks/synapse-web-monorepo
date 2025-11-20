import{at as g,j as e,r as w}from"./iframe-CGmVaDjG.js";import{S as v}from"./SynapseNavDrawer-By3CYcH9.js";import"./index-r8ZA1smB.js";import"./useDataAccessSubmission-BGklvKov.js";import"./useInfiniteQuery-BOwZO-RU.js";import"./useDownloadList-C3I0JGMu.js";import"./waitForAsyncResult-h6I1MqyA.js";import"./CreateProjectModal-CfQfchi7.js";import"./ConfirmationDialog-Be0gJysx.js";import"./DialogBase-B3tdGTOA.js";import"./Close-lxYenFCK.js";import"./HelpPopover-2nxZPXpX.js";import"./MarkdownPopover-aHrxZUZD.js";import"./LightTooltip-ClWSh7qk.js";import"./MarkdownSynapse-V28WkNFd.js";import"./SkeletonButton-B4_njZrh.js";import"./SkeletonInlineBlock-DlR8y1uS.js";import"./SkeletonTable-DNeEDdIn.js";import"./SkeletonParagraph-Dm_x6xws.js";import"./SynapseHomepageNavBar-4I2lvBLs.js";import"./SageResourcesPopover-DUSpPR7s.js";import"./Grid-CUFsX9EA.js";import"./index-Bg4ai4NK.js";import"./MenuItem-UENhvr4V.js";import"./UserBadge-CNPQXBDq.js";import"./Card-C00TRiyT.js";import"./Chip-DOrw28hN.js";import"./Slide-a3Hp9ZMf.js";import"./InputAdornment-BaEASxwI.js";import"./listItemButtonClasses-CX5_diOU.js";import"./Badge-BhCIUxog.js";import"./usePreviousProps-DapeRrTY.js";const V={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:g,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},r={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...r.args},render:s=>e.jsxs(e.Fragment,{children:[e.jsx(v,{initIsOpen:!1,gotoPlace:h=>{window.alert(`Nav bar calling back to change route to ${h}`)}}),e.jsx(g,{...s})]}),decorators:[s=>(w.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),e.jsx(s,{}))]};var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
