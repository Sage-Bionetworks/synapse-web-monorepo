import{n as e}from"./chunk-zsgVPwQN.js";import{n as t,r as n,t as r}from"./core-DzrPRFGD.js";import{Et as i,t as a}from"./dist-jiKX-16m.js";import{St as o,Tn as s,ht as c,xn as l,yn as u}from"./SynapseClient-BzG4sNth.js";import{r as d}from"./mock_user_profile-NKYbA1Kn.js";import{a as f,g as p,h as m,i as h,o as g}from"./mockAccessRequirements-DHvPpred.js";import{n as _,r as v}from"./wikiHandlers-CHp4Lhcn.js";import{a as y,n as b}from"./accessRequirementHandlers-Doe_B2mn.js";import{r as x,t as S}from"./userProfileHandlers-C6s1Sw_t.js";import{n as C,t as w}from"./UnmanagedACTAccessRequirementItem-A4neuAUy.js";var T,E,D,O;e((()=>{h(),y(),x(),v(),d(),u(),s(),a(),r(),C(),T={title:`Governance/Data Access Request Flow/Requirements/UnmanagedACTAccessRequirementItem`,component:w,argTypes:{isAuthenticated:{control:{type:`boolean`}}},args:{isAuthenticated:!0}},E={args:{accessRequirement:f},parameters:{msw:{handlers:[...b(l),..._(l),S(l,!1,!1),n.get(`${l}${o(`:id`)}`,({params:e})=>{let n={accessRequirementId:e.id,concreteType:`org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus`,isApproved:!1};return t.json(n,{status:200})}),n.post(`${l}${c}`,()=>{let e={requirementId:m.id,submitterId:`999`,accessorId:`999`,state:i.APPROVED,id:123,etag:`etag`,createdOn:new Date().toISOString(),modifiedOn:new Date().toISOString(),createdBy:`999`,modifiedBy:`999`};return t.json(e,{status:201})})]}}},D={args:{accessRequirement:g},parameters:{msw:{handlers:[...b(l),..._(l),S(l,!1,!1),n.get(`${l}${o(`:id`)}`,({params:e})=>{let n={accessRequirementId:e.id,concreteType:`org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus`,isApproved:!1};return t.json(n,{status:200})}),n.post(`${l}${c}`,()=>{let e={requirementId:p.id,submitterId:`999`,accessorId:`999`,state:i.APPROVED,id:123,etag:`etag`,createdOn:new Date().toISOString(),modifiedOn:new Date().toISOString(),createdBy:`999`,modifiedBy:`999`};return t.json(e,{status:201})})]}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirement: mockACTAccessRequirement
  },
  parameters: {
    msw: {
      handlers: [
      // ...getHandlers(MOCK_REPO_ORIGIN),
      ...getAccessRequirementHandlers(MOCK_REPO_ORIGIN), ...getWikiHandlers(MOCK_REPO_ORIGIN), getCurrentUserCertifiedValidatedHandler(MOCK_REPO_ORIGIN, false, false), http.get(\`\${MOCK_REPO_ORIGIN}\${ACCESS_REQUIREMENT_STATUS(':id')}\`, ({
        params
      }) => {
        const response: AccessRequirementStatus = {
          accessRequirementId: params.id as string,
          concreteType: 'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus',
          isApproved: false
        };
        return HttpResponse.json(response, {
          status: 200
        });
      }), http.post(\`\${MOCK_REPO_ORIGIN}\${ACCESS_APPROVAL}\`, () => {
        const response: AccessApproval = {
          requirementId: mockToUAccessRequirement.id,
          submitterId: MOCK_USER_ID.toString(),
          accessorId: MOCK_USER_ID.toString(),
          state: ApprovalState.APPROVED,
          id: 123,
          etag: 'etag',
          createdOn: new Date().toISOString(),
          modifiedOn: new Date().toISOString(),
          createdBy: String(MOCK_USER_ID),
          modifiedBy: String(MOCK_USER_ID)
        };
        return HttpResponse.json(response, {
          status: 201
        });
      })]
    }
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirement: mockACTAccessRequirementWithWiki
  },
  parameters: {
    msw: {
      handlers: [
      // ...getHandlers(MOCK_REPO_ORIGIN),
      ...getAccessRequirementHandlers(MOCK_REPO_ORIGIN), ...getWikiHandlers(MOCK_REPO_ORIGIN), getCurrentUserCertifiedValidatedHandler(MOCK_REPO_ORIGIN, false, false), http.get(\`\${MOCK_REPO_ORIGIN}\${ACCESS_REQUIREMENT_STATUS(':id')}\`, ({
        params
      }) => {
        const response: AccessRequirementStatus = {
          accessRequirementId: params.id as string,
          concreteType: 'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus',
          isApproved: false
        };
        return HttpResponse.json(response, {
          status: 200
        });
      }), http.post(\`\${MOCK_REPO_ORIGIN}\${ACCESS_APPROVAL}\`, () => {
        const response: AccessApproval = {
          requirementId: mockToUAccessRequirementWithWiki.id,
          submitterId: MOCK_USER_ID.toString(),
          accessorId: MOCK_USER_ID.toString(),
          state: ApprovalState.APPROVED,
          id: 123,
          etag: 'etag',
          createdOn: new Date().toISOString(),
          modifiedOn: new Date().toISOString(),
          createdBy: String(MOCK_USER_ID),
          modifiedBy: String(MOCK_USER_ID)
        };
        return HttpResponse.json(response, {
          status: 201
        });
      })]
    }
  }
}`,...D.parameters?.docs?.source}}},O=[`LegacyACTAccessRequirement`,`LegacyACTAccessRequirementWithWiki`]}))();export{E as LegacyACTAccessRequirement,D as LegacyACTAccessRequirementWithWiki,O as __namedExportsOrder,T as default};