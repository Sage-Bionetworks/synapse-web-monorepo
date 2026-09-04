import{o as e}from"./preload-helper-CsHsquCd.js";import{_ as t,i as n,t as r}from"./core-CI8DLeHF.js";import{t as i,wn as a}from"./dist-C7SMz8Oe.js";import{Fn as o,Ln as s,Ot as c,Vn as l,xt as u}from"./synapse-client-CZF9FYCe.js";import{i as d}from"./mock_user_profile-DpGVXyMi.js";import{a as f,g as p,h as m,i as h,o as g}from"./mockAccessRequirements-REdc47__.js";import{At as _,Mt as v,a as y,f as b,o as x,u as S}from"./iframe-z0GNZNON.js";import{n as C,t as w}from"./UnmanagedACTAccessRequirementItem-DAUEGkb_.js";var T,E,D,O;e((()=>{h(),v(),b(),x(),d(),o(),l(),i(),r(),C(),T={title:`Governance/Data Access Request Flow/Requirements/UnmanagedACTAccessRequirementItem`,component:w,argTypes:{isAuthenticated:{control:{type:`boolean`}}},args:{isAuthenticated:!0}},E={args:{accessRequirement:f},parameters:{msw:{handlers:[..._(s),...y(s),S(s,!1,!1),n.get(`${s}${c(`:id`)}`,({params:e})=>{let n={accessRequirementId:e.id,concreteType:`org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus`,isApproved:!1};return t.json(n,{status:200})}),n.post(`${s}${u}`,()=>{let e={requirementId:m.id,submitterId:`999`,accessorId:`999`,state:a.APPROVED,id:123,etag:`etag`,createdOn:new Date().toISOString(),modifiedOn:new Date().toISOString(),createdBy:`999`,modifiedBy:`999`};return t.json(e,{status:201})})]}}},D={args:{accessRequirement:g},parameters:{msw:{handlers:[..._(s),...y(s),S(s,!1,!1),n.get(`${s}${c(`:id`)}`,({params:e})=>{let n={accessRequirementId:e.id,concreteType:`org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus`,isApproved:!1};return t.json(n,{status:200})}),n.post(`${s}${u}`,()=>{let e={requirementId:p.id,submitterId:`999`,accessorId:`999`,state:a.APPROVED,id:123,etag:`etag`,createdOn:new Date().toISOString(),modifiedOn:new Date().toISOString(),createdBy:`999`,modifiedBy:`999`};return t.json(e,{status:201})})]}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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