import{o as e}from"./preload-helper-CsHsquCd.js";import{n as t,p as n,t as r}from"./core-IjRt3rc-.js";import{Cn as i,t as a}from"./dist-DyN41VtP.js";import{An as o,En as s,Tt as c,vt as l,wn as u}from"./synapse-client-lwpa67nR.js";import{r as d}from"./mock_user_profile-BgSYjn5K.js";import{a as f,g as p,h as m,i as h,o as g}from"./mockAccessRequirements-jv_Aokwf.js";import{Ct as _,a as v,f as y,o as b,u as x,xt as S}from"./iframe-xdoN6U0C.js";import{n as C,t as w}from"./UnmanagedACTAccessRequirementItem-DgmiGPH5.js";var T,E,D,O;e((()=>{h(),_(),y(),b(),d(),u(),o(),a(),r(),C(),T={title:`Governance/Data Access Request Flow/Requirements/UnmanagedACTAccessRequirementItem`,component:w,argTypes:{isAuthenticated:{control:{type:`boolean`}}},args:{isAuthenticated:!0}},E={args:{accessRequirement:f},parameters:{msw:{handlers:[...S(s),...v(s),x(s,!1,!1),t.get(`${s}${c(`:id`)}`,({params:e})=>{let t={accessRequirementId:e.id,concreteType:`org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus`,isApproved:!1};return n.json(t,{status:200})}),t.post(`${s}${l}`,()=>{let e={requirementId:m.id,submitterId:`999`,accessorId:`999`,state:i.APPROVED,id:123,etag:`etag`,createdOn:new Date().toISOString(),modifiedOn:new Date().toISOString(),createdBy:`999`,modifiedBy:`999`};return n.json(e,{status:201})})]}}},D={args:{accessRequirement:g},parameters:{msw:{handlers:[...S(s),...v(s),x(s,!1,!1),t.get(`${s}${c(`:id`)}`,({params:e})=>{let t={accessRequirementId:e.id,concreteType:`org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus`,isApproved:!1};return n.json(t,{status:200})}),t.post(`${s}${l}`,()=>{let e={requirementId:p.id,submitterId:`999`,accessorId:`999`,state:i.APPROVED,id:123,etag:`etag`,createdOn:new Date().toISOString(),modifiedOn:new Date().toISOString(),createdBy:`999`,modifiedBy:`999`};return n.json(e,{status:201})})]}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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