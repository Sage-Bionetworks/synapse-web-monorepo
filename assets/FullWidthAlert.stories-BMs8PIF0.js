import{at as g,j as e,r as w}from"./iframe-BwBHmtLn.js";import{S as v}from"./SynapseNavDrawer-DdSKCJN_.js";import"./index-r8ZA1smB.js";import"./useDataAccessSubmission-CP8OdJfk.js";import"./useInfiniteQuery-CJ62jRAa.js";import"./useDownloadList-Du6hRXXd.js";import"./waitForAsyncResult-D98CvZO0.js";import"./CreateProjectModal-CJPTNY_p.js";import"./ConfirmationDialog-LuKTcSOQ.js";import"./DialogBase-CGGylDq4.js";import"./Close-BfixGz6h.js";import"./HelpPopover-CaVwFHNp.js";import"./MarkdownPopover-BoTNWuCk.js";import"./LightTooltip-B1vNEQPg.js";import"./MarkdownSynapse-C2XjXP5O.js";import"./SkeletonButton-BTCaeByw.js";import"./SkeletonInlineBlock-ZHAchM_I.js";import"./SkeletonTable-CwWx9Hg9.js";import"./SkeletonParagraph-CvcuNn1V.js";import"./SynapseHomepageNavBar-CCBkbzqr.js";import"./SageResourcesPopover-CM5b05zQ.js";import"./Grid-DVF-F4ru.js";import"./index-Cofbk_Be.js";import"./MenuItem-CkdRDM7m.js";import"./UserBadge-BD5Fxkmm.js";import"./Card-CWfuhv8s.js";import"./Chip-DeqIQwfV.js";import"./Slide-ZRXpX-di.js";import"./InputAdornment-CRwuWGqd.js";import"./listItemButtonClasses-qkDTYFPm.js";import"./Badge-C-YH8w9x.js";import"./usePreviousProps-BT7V12Qo.js";const V={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:g,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},r={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...r.args},render:s=>e.jsxs(e.Fragment,{children:[e.jsx(v,{initIsOpen:!1,gotoPlace:h=>{window.alert(`Nav bar calling back to change route to ${h}`)}}),e.jsx(g,{...s})]}),decorators:[s=>(w.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),e.jsx(s,{}))]};var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
