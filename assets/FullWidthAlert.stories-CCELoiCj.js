import{ay as g,j as e,r as w}from"./iframe-DgbfDeQR.js";import{S as v}from"./SynapseNavDrawer-CsPZlPcY.js";import"./index-r8ZA1smB.js";import"./useDataAccessSubmission-C79odLf9.js";import"./useInfiniteQuery-DkLtRlOU.js";import"./useDownloadList-DOxXD4hf.js";import"./waitForAsyncResult-cEkzEf98.js";import"./CreateProjectModal-S0RthbWN.js";import"./ConfirmationDialog-BKHZua3P.js";import"./DialogBase-Bdu7Jetf.js";import"./Close-Uo8JW1Td.js";import"./HelpPopover-BOrP1Anu.js";import"./MarkdownPopover-BDg3J_sQ.js";import"./LightTooltip-B-8YX4RQ.js";import"./MarkdownSynapse-D4qxv4i6.js";import"./SkeletonButton-C3Hqevp6.js";import"./SkeletonInlineBlock-D8vr7qjb.js";import"./SkeletonTable-CkIMw70Y.js";import"./SkeletonParagraph-BtYiDY2A.js";import"./SynapseHomepageNavBar-CuH4VeP1.js";import"./SageResourcesPopover-DZC6ETQn.js";import"./Grid-D-TUMcKD.js";import"./index-C0b8tnCj.js";import"./MenuItem-kceyAJzH.js";import"./UserBadge-DT_nDzPV.js";import"./Card-Bp2w-evW.js";import"./Chip-D6WFZ5Ud.js";import"./Slide-C8lb1gP9.js";import"./InputAdornment-CbYV-FLf.js";import"./listItemButtonClasses-t2uTfVi9.js";import"./Badge-CSZ4Yj8e.js";import"./usePreviousProps-BKavSuub.js";const V={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:g,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},r={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...r.args},render:s=>e.jsxs(e.Fragment,{children:[e.jsx(v,{initIsOpen:!1,gotoPlace:h=>{window.alert(`Nav bar calling back to change route to ${h}`)}}),e.jsx(g,{...s})]}),decorators:[s=>(w.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),e.jsx(s,{}))]};var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
