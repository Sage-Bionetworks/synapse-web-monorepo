import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-Dh27wMqB.js";import{A as c}from"./AccessRequirementAclEditor--wLTpywt.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-D_WoPHb-.js";import"./index-PG4lqu2T.js";import"./_baseOrderBy-ogl2PcNJ.js";import"./_baseIteratee-DEDPyERc.js";import"./_baseMap-MvKhi6ce.js";import"./_baseEach-B73iYufC.js";import"./useQueries-BPK8tx1d.js";import"./useInfiniteQuery-B-Fw0EIq.js";import"./AclEditor-CYhru4H-.js";import"./UserSearchBoxV2-BQz-3E30.js";import"./useDebouncedEffect-DnuVFZBQ.js";import"./use-deep-compare-effect.esm-Dddb7spg.js";import"./uniq-BE2B1P-o.js";import"./without-BrlBK_hP.js";import"./UserBadge-IHjDII7e.js";import"./useUserBundle-CjBP39Vs.js";import"./useSuspenseQuery-B1cUOedV.js";import"./SkeletonTable-QTbu1S9P.js";import"./MenuItem-G0Ev3uUJ.js";import"./Card-BXf6TNo9.js";import"./Chip-CVqxkPH_.js";import"./Select-aab027f3.esm-DZgATkoL.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-04pgWgoe.js";import"./TeamBadge-DS4QVcyA.js";import"./SkeletonButton-zWY26s6L.js";import"./SkeletonInlineBlock-CUxQyvLz.js";import"./SkeletonParagraph-BECb2Xut.js";import"./IconSvgButton-DOPjAfi5.js";import"./FormControlLabel-cOjz9kb1.js";import"./Checkbox-BQZMpPY0.js";import"./SwitchBase-DRWmMpc4.js";import"./useUpdateAcl-qhW04Tk3.js";const pe={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    accessRequirementId: MOCK_MANAGED_ACCESS_REQUIREMENT_ACL.id
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), getAllAccessRequirementAclHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var E,R,u;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    accessRequirementId: String(MOCK_ACCESS_REQUIREMENT_WITHOUT_ACL_ID)
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), getAllAccessRequirementAclHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...(u=(R=s.parameters)==null?void 0:R.docs)==null?void 0:u.source}}};var A,_,g;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    accessRequirementId: '9602671'
  },
  parameters: {
    stack: 'development'
  }
}`,...(g=(_=t.parameters)==null?void 0:_.docs)==null?void 0:g.source}}};const le=["MockDemoExistingAcl","MockDemoNoExistingAcl","DevDemo"];export{t as DevDemo,r as MockDemoExistingAcl,s as MockDemoNoExistingAcl,le as __namedExportsOrder,pe as default};
