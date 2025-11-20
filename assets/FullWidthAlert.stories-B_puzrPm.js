import{at as g,j as e,r as w}from"./iframe-zheGqhAq.js";import{S as v}from"./SynapseNavDrawer-C2th4mEh.js";import"./index-r8ZA1smB.js";import"./useDataAccessSubmission-B2XIqeL0.js";import"./useInfiniteQuery-CG0Fso0D.js";import"./useDownloadList-et0aYX-s.js";import"./waitForAsyncResult-CCi18s6D.js";import"./CreateProjectModal-BnbwHCny.js";import"./ConfirmationDialog-COSL1EcY.js";import"./DialogBase-CTe4gN8d.js";import"./Close-Czuq5Lj0.js";import"./HelpPopover-JQdCNZBx.js";import"./MarkdownPopover-BacXeUFr.js";import"./LightTooltip-DB1oMCwe.js";import"./MarkdownSynapse-Ct83EToF.js";import"./SkeletonButton-DnBFAAqj.js";import"./SkeletonInlineBlock-DQ4vmVkM.js";import"./SkeletonTable-B_5GfUT7.js";import"./SkeletonParagraph-0XdWF-57.js";import"./SynapseHomepageNavBar-Bf4z916E.js";import"./SageResourcesPopover-BYdfI6ge.js";import"./Grid-DT4MUoeo.js";import"./index-Cdw1MH5n.js";import"./MenuItem-Bwm8UOUj.js";import"./UserBadge-Bt736bOg.js";import"./Card-EONa1C96.js";import"./Chip-BBw1-U_9.js";import"./Slide-Ck1XjKdh.js";import"./InputAdornment-D1wDOMXn.js";import"./listItemButtonClasses-C233TWRI.js";import"./Badge-DMKMB5j1.js";import"./usePreviousProps-Oqo9GUWG.js";const V={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:g,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},r={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...r.args},render:s=>e.jsxs(e.Fragment,{children:[e.jsx(v,{initIsOpen:!1,gotoPlace:h=>{window.alert(`Nav bar calling back to change route to ${h}`)}}),e.jsx(g,{...s})]}),decorators:[s=>(w.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),e.jsx(s,{}))]};var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
