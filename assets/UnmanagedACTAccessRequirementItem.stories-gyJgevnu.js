import{n as O,N as g,d as c,b as e,o as d,c as m,s as a,L as p,H as i,A as R,t as u,l as S,K as A,v as t}from"./iframe-BDH9K3aQ.js";import{U as I}from"./UnmanagedACTAccessRequirementItem-ByCGv425.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DABEgAy5.js";import"./index-BEXoIJDe.js";import"./_baseOrderBy-Dgg6c-Or.js";import"./_baseIteratee-gLwaiEgY.js";import"./_baseMap-CoKNYOGS.js";import"./_baseEach-C6kEqMCn.js";import"./useInfiniteQuery-CsOZNg3u.js";import"./MarkdownSynapse-BfgcgRyQ.js";import"./SkeletonButton-8Qglx0Lx.js";import"./SkeletonInlineBlock-C7j3Fduy.js";import"./SkeletonTable-DpnDnZ6A.js";import"./SkeletonParagraph-4XI-GQEQ.js";import"./RequirementItem-H4w1jjZ7.js";import"./CheckTwoTone-pYnYaaJv.js";const N={title:"Governance/Data Access Request Flow/Requirements/UnmanagedACTAccessRequirementItem",component:I,argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},n={args:{accessRequirement:O},parameters:{msw:{handlers:[...c(e),...d(e),m(e,!1,!1),a.get(`${e}${p(":id")}`,({params:s})=>{const o={accessRequirementId:s.id,concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!1};return i.json(o,{status:200})}),a.post(`${e}${R}`,()=>{const s={requirementId:S.id,submitterId:t.toString(),accessorId:t.toString(),state:u.APPROVED,id:123,etag:"etag",createdOn:new Date().toISOString(),modifiedOn:new Date().toISOString(),createdBy:String(t),modifiedBy:String(t)};return i.json(s,{status:201})})]}}},r={args:{accessRequirement:g},parameters:{msw:{handlers:[...c(e),...d(e),m(e,!1,!1),a.get(`${e}${p(":id")}`,({params:s})=>{const o={accessRequirementId:s.id,concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!1};return i.json(o,{status:200})}),a.post(`${e}${R}`,()=>{const s={requirementId:A.id,submitterId:t.toString(),accessorId:t.toString(),state:u.APPROVED,id:123,etag:"etag",createdOn:new Date().toISOString(),modifiedOn:new Date().toISOString(),createdBy:String(t),modifiedBy:String(t)};return i.json(s,{status:201})})]}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const $=["LegacyACTAccessRequirement","LegacyACTAccessRequirementWithWiki"];export{n as LegacyACTAccessRequirement,r as LegacyACTAccessRequirementWithWiki,$ as __namedExportsOrder,N as default};
