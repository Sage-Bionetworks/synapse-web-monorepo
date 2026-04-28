import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{t as n}from"./react-Bxo1Isko.js";import{t as r}from"./jsx-runtime-CR4qI0Ep.js";import{C as i,t as a}from"./dist-jiKX-16m.js";import{a as o,h as s,i as c}from"./mockAccessRequirements-DHvPpred.js";import{n as l,t as u}from"./ConfirmationDialog-X4LG6-XE.js";import{n as d,t as f}from"./AccessRequirementAclEditor-BJ4AQ68t.js";import{n as p,t as m}from"./SetAccessRequirementCommonFields-CKsZVsL-.js";import{i as h,n as g,r as _,t as v}from"./SetManagedAccessRequirementFields-B59Ja6l-.js";var y=e((()=>{p()})),b,x=e((()=>{g(),b=v}));function S(e,t){switch(e){case`SET_AR_COMMON_FIELDS`:case`SET_MANAGED_AR_FIELDS`:case`SET_BASIC_AR_FIELDS`:return`${t?`Edit`:`Create`} Access Requirement`;case`SET_MANAGED_AR_ACL_PERMISSIONS`:return`Access Requirement Permissions`}}function C(e){switch(e){case`SET_MANAGED_AR_ACL_PERMISSIONS`:case`SET_BASIC_AR_FIELDS`:return!0}return!1}var w=e((()=>{}));function T(e){let{open:t,onCancel:n,onComplete:r}=e,[i,a]=(0,E.useState)(`SET_AR_COMMON_FIELDS`),[o,s]=(0,E.useState)(!1),[c,l]=(0,E.useState)(e.accessRequirementId),d=(0,E.useRef)(null),p=(0,E.useRef)(null),h=(0,E.useRef)(null),g=(0,E.useRef)(null),v=!!e.accessRequirementId,y=(0,E.useMemo)(()=>{switch(i){case`SET_AR_COMMON_FIELDS`:return(0,D.jsx)(m,{ref:d,onSave:(e,t)=>{l(e),a(t===`org.sagebionetworks.repo.model.ManagedACTAccessRequirement`?`SET_MANAGED_AR_FIELDS`:`SET_BASIC_AR_FIELDS`),s(!1)},onError:()=>s(!1),subject:e.subject,accessRequirementId:e.accessRequirementId});case`SET_MANAGED_AR_FIELDS`:return(0,D.jsx)(b,{ref:p,accessRequirementId:c,onSave:()=>{a(`SET_MANAGED_AR_ACL_PERMISSIONS`),s(!1)},onError:()=>{s(!1)}});case`SET_MANAGED_AR_ACL_PERMISSIONS`:return(0,D.jsx)(f,{ref:h,accessRequirementId:c,onSaveComplete:e=>{e&&r(c),s(!1)}});case`SET_BASIC_AR_FIELDS`:return(0,D.jsx)(_,{ref:g,accessRequirementId:c,onSave:()=>{r(c),s(!1)},onError:()=>s(!1)})}},[i,e.subject,e.accessRequirementId,c,r]);return(0,D.jsx)(u,{open:t,onCancel:n,onConfirm:e=>{switch(e.preventDefault(),s(!0),i){case`SET_AR_COMMON_FIELDS`:d?.current?.save();return;case`SET_MANAGED_AR_FIELDS`:p?.current?.save();return;case`SET_MANAGED_AR_ACL_PERMISSIONS`:h?.current?.save();return;case`SET_BASIC_AR_FIELDS`:g?.current?.save()}},confirmButtonProps:{children:C(i)?`Save`:`Save & Continue`,disabled:o},maxWidth:`md`,title:S(i,v),content:y})}var E,D,O=e((()=>{a(),E=t(n(),1),d(),l(),y(),h(),x(),w(),D=r();try{T.displayName=`CreateOrUpdateAccessRequirementWizard`,T.__docgenInfo={description:``,displayName:`CreateOrUpdateAccessRequirementWizard`,filePath:`/home/runner/work/synapse-web-monorepo/synapse-web-monorepo/packages/synapse-react-client/src/components/CreateOrUpdateAccessRequirementWizard/CreateOrUpdateAccessRequirementWizard.tsx`,methods:[],props:{open:{defaultValue:null,declarations:[{fileName:`synapse-react-client/src/components/CreateOrUpdateAccessRequirementWizard/CreateOrUpdateAccessRequirementWizard.tsx`,name:`TypeLiteral`}],description:``,name:`open`,required:!0,tags:{},type:{name:`boolean`}},onCancel:{defaultValue:null,declarations:[{fileName:`synapse-react-client/src/components/CreateOrUpdateAccessRequirementWizard/CreateOrUpdateAccessRequirementWizard.tsx`,name:`TypeLiteral`}],description:``,name:`onCancel`,required:!0,tags:{},type:{name:`() => void`}},onComplete:{defaultValue:null,declarations:[{fileName:`synapse-react-client/src/components/CreateOrUpdateAccessRequirementWizard/CreateOrUpdateAccessRequirementWizard.tsx`,name:`TypeLiteral`}],description:``,name:`onComplete`,required:!0,tags:{},type:{name:`(accessRequirementID?: string) => void`}},accessRequirementId:{defaultValue:null,declarations:[{fileName:`synapse-react-client/src/components/SetAccessRequirementCommonFields/SetAccessRequirementCommonFields.tsx`,name:`TypeLiteral`}],description:``,name:`accessRequirementId`,required:!1,tags:{},type:{name:`string`}},subject:{defaultValue:null,declarations:[{fileName:`synapse-react-client/src/components/SetAccessRequirementCommonFields/SetAccessRequirementCommonFields.tsx`,name:`TypeLiteral`}],description:``,name:`subject`,required:!1,tags:{},type:{name:`RestrictableObjectDescriptor`}}},tags:{}}}catch{}})),k,A,j,M,N,P,F,I,L;e((()=>{c(),a(),O(),{fn:k}=__STORYBOOK_MODULE_TEST__,A={title:`Governance/CreateOrUpdateAccessRequirementWizard`,component:T,parameters:{stack:`development`}},j={args:{open:!0,onComplete:k(),onCancel:k(),subject:{id:`3429759`,type:i.TEAM}}},M={args:{open:!0,onComplete:k(),onCancel:k(),subject:{id:`syn12714410`,type:i.ENTITY}}},N={args:{open:!0,onComplete:k(),onCancel:k(),accessRequirementId:`9602671`}},P={args:{open:!0,onComplete:k(),onCancel:k(),accessRequirementId:`9602700`}},F={args:{open:!0,onComplete:k(),onCancel:k(),accessRequirementId:s.id.toString()},parameters:{stack:`mock`}},I={args:{open:!0,onComplete:k(),onCancel:k(),accessRequirementId:o.id.toString()},parameters:{stack:`mock`}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    onComplete: fn(),
    onCancel: fn(),
    subject: {
      id: '3429759',
      type: RestrictableObjectType.TEAM
    }
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    onComplete: fn(),
    onCancel: fn(),
    subject: {
      id: 'syn12714410',
      type: RestrictableObjectType.ENTITY
    }
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    onComplete: fn(),
    onCancel: fn(),
    accessRequirementId: '9602671'
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    onComplete: fn(),
    onCancel: fn(),
    accessRequirementId: '9602700'
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    onComplete: fn(),
    onCancel: fn(),
    accessRequirementId: mockToUAccessRequirement.id.toString()
  },
  parameters: {
    stack: 'mock'
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    onComplete: fn(),
    onCancel: fn(),
    accessRequirementId: mockACTAccessRequirement.id.toString()
  },
  parameters: {
    stack: 'mock'
  }
}`,...I.parameters?.docs?.source}}},L=[`CreateTeamAR`,`CreateEntityAR`,`EditManagedAR`,`EditSelfSignAR`,`MockTermsOfUseAR`,`MockActAR`]}))();export{M as CreateEntityAR,j as CreateTeamAR,N as EditManagedAR,P as EditSelfSignAR,I as MockActAR,F as MockTermsOfUseAR,L as __namedExportsOrder,A as default};