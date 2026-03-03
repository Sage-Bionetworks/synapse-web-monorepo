import{e as c,k as m,h as d,n as a,t as O,O as g,b as e,N as p,H as i,A as R,v as u,s as S,w as t,L as A}from"./iframe-BPIYH1oT.js";import{U as I}from"./UnmanagedACTAccessRequirementItem-D3rie0W0.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BtM5n_Nn.js";import"./index-CSa6jvLb.js";import"./_baseOrderBy-D0f27N3W.js";import"./_baseIteratee-Bb0kra6V.js";import"./_baseMap-Bus0-AtT.js";import"./_baseEach-H9iq9W3A.js";import"./useInfiniteQuery-DoSJlmbq.js";import"./MarkdownSynapse-B95PEuB_.js";import"./SkeletonButton-BzOCV9D1.js";import"./SkeletonInlineBlock-BqdJTX4s.js";import"./SkeletonTable-DGggFpSD.js";import"./SkeletonParagraph-CVXQh454.js";import"./RequirementItem-p11hXvdr.js";import"./LockTwoTone-D5d7zmts.js";const N={title:"Governance/Data Access Request Flow/Requirements/UnmanagedACTAccessRequirementItem",component:I,argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},n={args:{accessRequirement:O},parameters:{msw:{handlers:[...c(e),...m(e),d(e,!1,!1),a.get(`${e}${p(":id")}`,({params:s})=>{const o={accessRequirementId:s.id,concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!1};return i.json(o,{status:200})}),a.post(`${e}${R}`,()=>{const s={requirementId:S.id,submitterId:t.toString(),accessorId:t.toString(),state:u.APPROVED,id:123,etag:"etag",createdOn:new Date().toISOString(),modifiedOn:new Date().toISOString(),createdBy:String(t),modifiedBy:String(t)};return i.json(s,{status:201})})]}}},r={args:{accessRequirement:g},parameters:{msw:{handlers:[...c(e),...m(e),d(e,!1,!1),a.get(`${e}${p(":id")}`,({params:s})=>{const o={accessRequirementId:s.id,concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!1};return i.json(o,{status:200})}),a.post(`${e}${R}`,()=>{const s={requirementId:A.id,submitterId:t.toString(),accessorId:t.toString(),state:u.APPROVED,id:123,etag:"etag",createdOn:new Date().toISOString(),modifiedOn:new Date().toISOString(),createdBy:String(t),modifiedBy:String(t)};return i.json(s,{status:201})})]}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
