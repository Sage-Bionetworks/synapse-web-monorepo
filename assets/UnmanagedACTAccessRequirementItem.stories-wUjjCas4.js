import{e as O,k as g,h as S,n as a,t as C,N as l,b as e,L as A,H as i,A as I,v as _,s as E,w as t,K as q}from"./iframe-B9AXyISm.js";import{U as T}from"./UnmanagedACTAccessRequirementItem-BKq9oMaW.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-D2FWW5Vs.js";import"./index-DcvNn4X2.js";import"./_baseOrderBy-CN7N_uLk.js";import"./_baseIteratee-DWFWiy4b.js";import"./_baseMap-BVLp5GDP.js";import"./_baseEach-D0al_2ma.js";import"./useQueries-BCOBTSji.js";import"./useInfiniteQuery-B0uiA_PZ.js";import"./MarkdownSynapse-ACifc84y.js";import"./SkeletonButton-C-q75hZ2.js";import"./SkeletonInlineBlock-BZYL3GN_.js";import"./SkeletonTable-DJaYvBkh.js";import"./SkeletonParagraph-DZGMGLgg.js";import"./RequirementItem-CwOJxySa.js";import"./LockTwoTone-tGs6d-EK.js";const V={title:"Governance/Data Access Request Flow/Requirements/UnmanagedACTAccessRequirementItem",component:T,argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},n={args:{accessRequirement:C},parameters:{msw:{handlers:[...O(e),...g(e),S(e,!1,!1),a.get(`${e}${A(":id")}`,({params:s})=>{const o={accessRequirementId:s.id,concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!1};return i.json(o,{status:200})}),a.post(`${e}${I}`,()=>{const s={requirementId:E.id,submitterId:t.toString(),accessorId:t.toString(),state:_.APPROVED,id:123,etag:"etag",createdOn:new Date().toISOString(),modifiedOn:new Date().toISOString(),createdBy:String(t),modifiedBy:String(t)};return i.json(s,{status:201})})]}}},r={args:{accessRequirement:l},parameters:{msw:{handlers:[...O(e),...g(e),S(e,!1,!1),a.get(`${e}${A(":id")}`,({params:s})=>{const o={accessRequirementId:s.id,concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!1};return i.json(o,{status:200})}),a.post(`${e}${I}`,()=>{const s={requirementId:q.id,submitterId:t.toString(),accessorId:t.toString(),state:_.APPROVED,id:123,etag:"etag",createdOn:new Date().toISOString(),modifiedOn:new Date().toISOString(),createdBy:String(t),modifiedBy:String(t)};return i.json(s,{status:201})})]}}};var c,m,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(d=(m=n.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var p,R,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(R=r.parameters)==null?void 0:R.docs)==null?void 0:u.source}}};const j=["LegacyACTAccessRequirement","LegacyACTAccessRequirementWithWiki"];export{n as LegacyACTAccessRequirement,r as LegacyACTAccessRequirementWithWiki,j as __namedExportsOrder,V as default};
