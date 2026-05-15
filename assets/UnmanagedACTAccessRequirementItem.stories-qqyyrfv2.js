import{n as e}from"./chunk-jRWAZmH_.js";import{At as t,It as n,Lt as r,Ot as i,R_ as a,Rh as o,Vh as s,Wv as c,Xt as l,Yt as u,Zt as d,a as f,f as p,ig as m,kt as h,ng as g,o as _,pn as v,sg as y,u as b,xt as x,yt as S}from"./iframe-BntPBd-w.js";import{n as C,t as w}from"./UnmanagedACTAccessRequirementItem-1Lj78PqC.js";var T,E,D,O;e((()=>{i(),x(),p(),_(),v(),g(),y(),a(),u(),C(),T={title:`Governance/Data Access Request Flow/Requirements/UnmanagedACTAccessRequirementItem`,component:w,argTypes:{isAuthenticated:{control:{type:`boolean`}}},args:{isAuthenticated:!0}},E={args:{accessRequirement:h},parameters:{msw:{handlers:[...S(m),...f(m),b(m,!1,!1),d.get(`${m}${s(`:id`)}`,({params:e})=>{let t={accessRequirementId:e.id,concreteType:`org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus`,isApproved:!1};return l.json(t,{status:200})}),d.post(`${m}${o}`,()=>{let e={requirementId:n.id,submitterId:`999`,accessorId:`999`,state:c.APPROVED,id:123,etag:`etag`,createdOn:new Date().toISOString(),modifiedOn:new Date().toISOString(),createdBy:`999`,modifiedBy:`999`};return l.json(e,{status:201})})]}}},D={args:{accessRequirement:t},parameters:{msw:{handlers:[...S(m),...f(m),b(m,!1,!1),d.get(`${m}${s(`:id`)}`,({params:e})=>{let t={accessRequirementId:e.id,concreteType:`org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus`,isApproved:!1};return l.json(t,{status:200})}),d.post(`${m}${o}`,()=>{let e={requirementId:r.id,submitterId:`999`,accessorId:`999`,state:c.APPROVED,id:123,etag:`etag`,createdOn:new Date().toISOString(),modifiedOn:new Date().toISOString(),createdBy:`999`,modifiedBy:`999`};return l.json(e,{status:201})})]}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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