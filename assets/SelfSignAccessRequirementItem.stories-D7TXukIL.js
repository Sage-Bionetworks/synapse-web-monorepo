import{n as e}from"./chunk-jRWAZmH_.js";import{$t as t,At as n,Ct as r,Kv as i,Lt as a,Qt as o,Rt as s,V_ as c,Vh as l,Wh as u,Zt as d,a as f,ag as p,f as m,hn as h,o as g,sg as _,u as v,ug as y,xt as b,zt as x}from"./iframe-GLOmp9V8.js";import{n as S,t as C}from"./SelfSignAccessRequirementItem-Dz4dCA06.js";var w,T,E,D,O;e((()=>{n(),r(),m(),g(),h(),p(),y(),c(),d(),S(),w={title:`Governance/Data Access Request Flow/Requirements/SelfSignAccessRequirementItem`,component:C,argTypes:{isAuthenticated:{control:{type:`boolean`}}},args:{isAuthenticated:!0}},T={args:{accessRequirement:{...a,isCertifiedUserRequired:!0,isValidatedProfileRequired:!0}},parameters:{msw:{handlers:[...b(_),...f(_),v(_,!1,!1),t.get(`${_}${u(`:id`)}`,({params:e})=>{let t={accessRequirementId:e.id,concreteType:`org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus`,isApproved:!1};return o.json(t,{status:200})}),t.post(`${_}${l}`,()=>{let e={requirementId:a.id,submitterId:`999`,accessorId:`999`,state:i.APPROVED,id:123,etag:`etag`,createdOn:new Date().toISOString(),modifiedOn:new Date().toISOString(),createdBy:`999`,modifiedBy:`999`};return o.json(e,{status:201})})]}}},E={args:{accessRequirement:s},parameters:{msw:{handlers:[...b(_),...f(_),v(_,!1,!1),t.get(`${_}${u(`:id`)}`,({params:e})=>{let t={accessRequirementId:e.id,concreteType:`org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus`,isApproved:!1};return o.json(t,{status:200})}),t.post(`${_}${l}`,()=>{let e={requirementId:s.id,submitterId:`999`,accessorId:`999`,state:i.APPROVED,id:123,etag:`etag`,createdOn:new Date().toISOString(),modifiedOn:new Date().toISOString(),createdBy:`999`,modifiedBy:`999`};return o.json(e,{status:201})})]}}},D={args:{accessRequirement:x},parameters:{msw:{handlers:[...b(_),...f(_),v(_,!1,!1),t.get(`${_}${u(`:id`)}`,({params:e})=>{let t={accessRequirementId:e.id,concreteType:`org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus`,isApproved:!1};return o.json(t,{status:200})}),t.post(`${_}${l}`,()=>{let e={requirementId:x.id,submitterId:`999`,accessorId:`999`,state:i.APPROVED,id:123,etag:`etag`,createdOn:new Date().toISOString(),modifiedOn:new Date().toISOString(),createdBy:`999`,modifiedBy:`999`};return o.json(e,{status:201})})]}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirement: {
      ...mockSelfSignAccessRequirement,
      isCertifiedUserRequired: true,
      isValidatedProfileRequired: true
    }
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
          requirementId: mockSelfSignAccessRequirement.id,
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirement: mockToUAccessRequirement
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
    accessRequirement: mockToUAccessRequirementWithWiki
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
}`,...D.parameters?.docs?.source}}},O=[`RequiresUnmetCertificationAndValidation`,`LegacyTermsOfUse`,`LegacyTermsOfUseWithWiki`]}))();export{E as LegacyTermsOfUse,D as LegacyTermsOfUseWithWiki,T as RequiresUnmetCertificationAndValidation,O as __namedExportsOrder,w as default};