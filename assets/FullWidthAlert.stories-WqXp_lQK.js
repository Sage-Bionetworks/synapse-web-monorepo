import{ay as g,j as e,r as w}from"./iframe-DNJeJ5iA.js";import{S as v}from"./SynapseNavDrawer-CMFd_oJI.js";import"./index-r8ZA1smB.js";import"./useDataAccessSubmission-BHQColDS.js";import"./useInfiniteQuery-Br--10f9.js";import"./useDownloadList-DXRgRMQa.js";import"./waitForAsyncResult-BrrVpfpt.js";import"./CreateProjectModal-C2zb5GDO.js";import"./ConfirmationDialog-DnlJR0qi.js";import"./DialogBase-CE44SEYA.js";import"./Close-BKUp_exR.js";import"./HelpPopover-CF0Dq4Vm.js";import"./MarkdownPopover-DoRIMtwC.js";import"./LightTooltip-DsJ2BEeZ.js";import"./MarkdownSynapse-DzSnHMfD.js";import"./SkeletonButton-BUOacwJB.js";import"./SkeletonInlineBlock-BeQwzjXN.js";import"./SkeletonTable-DVr3y68U.js";import"./SkeletonParagraph-D6w9BO_7.js";import"./SynapseHomepageNavBar-BeLnTC4H.js";import"./SageResourcesPopover-13AM6dl8.js";import"./Grid-BVNpB9GF.js";import"./index-CvnLitu3.js";import"./MenuItem-CT67I_PA.js";import"./UserBadge-DH_o0r3v.js";import"./Card-hxfs1Pfl.js";import"./Chip-F4DxftXR.js";import"./Slide-BMJpLCOr.js";import"./InputAdornment-DXacaD-1.js";import"./listItemButtonClasses-f8j0FUe6.js";import"./Badge-DErZJ4-S.js";import"./usePreviousProps-x25YfvI0.js";const V={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:g,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},r={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...r.args},render:s=>e.jsxs(e.Fragment,{children:[e.jsx(v,{initIsOpen:!1,gotoPlace:h=>{window.alert(`Nav bar calling back to change route to ${h}`)}}),e.jsx(g,{...s})]}),decorators:[s=>(w.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),e.jsx(s,{}))]};var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
