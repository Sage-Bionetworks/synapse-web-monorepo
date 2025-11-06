import{at as g,j as e,r as w}from"./iframe-CuCRNKD2.js";import{S as v}from"./SynapseNavDrawer-Ze5pxsnn.js";import"./index-r8ZA1smB.js";import"./useDataAccessSubmission-Bf3iXBWp.js";import"./useInfiniteQuery-CObm4ehU.js";import"./useDownloadList-C9BNjUrG.js";import"./waitForAsyncResult-BBRrQwt-.js";import"./CreateProjectModal-Cv2Ey7qM.js";import"./ConfirmationDialog-Cv8GQS-W.js";import"./DialogBase-Dmv5O61d.js";import"./Close-XPSuPfSe.js";import"./HelpPopover-CUGXBuQO.js";import"./MarkdownPopover-BxdpaW68.js";import"./LightTooltip-CDxRktsS.js";import"./MarkdownSynapse-DNDn28ba.js";import"./SkeletonButton-CaULGpMN.js";import"./SkeletonInlineBlock-BnPEMPpf.js";import"./SkeletonTable-ChmVFJhE.js";import"./SkeletonParagraph-DKk5S29D.js";import"./SynapseHomepageNavBar-Demh-ghY.js";import"./SageResourcesPopover-d7xMOeNW.js";import"./Grid-z7oGVaA1.js";import"./index-CSP15YZm.js";import"./MenuItem-DWis1ABF.js";import"./UserBadge-Bxtk_9hQ.js";import"./Card-BDRHdzBD.js";import"./Chip-C_N7BwZ8.js";import"./Slide-DcZWyzog.js";import"./InputAdornment-LoS80xM5.js";import"./listItemButtonClasses-DrrayANP.js";import"./Badge-B1elecJa.js";import"./usePreviousProps-C4mG5YaX.js";const V={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:g,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},r={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...r.args},render:s=>e.jsxs(e.Fragment,{children:[e.jsx(v,{initIsOpen:!1,gotoPlace:h=>{window.alert(`Nav bar calling back to change route to ${h}`)}}),e.jsx(g,{...s})]}),decorators:[s=>(w.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),e.jsx(s,{}))]};var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
