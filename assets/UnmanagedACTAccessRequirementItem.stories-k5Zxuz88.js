import{e as O,k as g,h as S,n as a,t as C,N as l,b as e,L as A,H as i,A as I,v as _,s as E,w as t,K as q}from"./iframe-Ci1lmE8g.js";import{U as T}from"./UnmanagedACTAccessRequirementItem-DMzWDNsT.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-BcP6tXmo.js";import"./index-BdMb-1ps.js";import"./_baseOrderBy-hgHOx6Yr.js";import"./_baseIteratee-BQlpWk-E.js";import"./_baseMap-DOU_FLyJ.js";import"./_baseEach-C_dLu_fx.js";import"./useQueries-DsbpWbBj.js";import"./useInfiniteQuery-DWL-Og4B.js";import"./MarkdownSynapse-3G1qoarh.js";import"./SkeletonButton-CC-6gNoS.js";import"./SkeletonInlineBlock-B2RYwmUI.js";import"./SkeletonTable-DkbE7er9.js";import"./SkeletonParagraph-ITJPOI8x.js";import"./RequirementItem-DP_I-Bz7.js";import"./LockTwoTone-CrK_l1K_.js";const V={title:"Governance/Data Access Request Flow/Requirements/UnmanagedACTAccessRequirementItem",component:T,argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},n={args:{accessRequirement:C},parameters:{msw:{handlers:[...O(e),...g(e),S(e,!1,!1),a.get(`${e}${A(":id")}`,({params:s})=>{const o={accessRequirementId:s.id,concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!1};return i.json(o,{status:200})}),a.post(`${e}${I}`,()=>{const s={requirementId:E.id,submitterId:t.toString(),accessorId:t.toString(),state:_.APPROVED,id:123,etag:"etag",createdOn:new Date().toISOString(),modifiedOn:new Date().toISOString(),createdBy:String(t),modifiedBy:String(t)};return i.json(s,{status:201})})]}}},r={args:{accessRequirement:l},parameters:{msw:{handlers:[...O(e),...g(e),S(e,!1,!1),a.get(`${e}${A(":id")}`,({params:s})=>{const o={accessRequirementId:s.id,concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!1};return i.json(o,{status:200})}),a.post(`${e}${I}`,()=>{const s={requirementId:q.id,submitterId:t.toString(),accessorId:t.toString(),state:_.APPROVED,id:123,etag:"etag",createdOn:new Date().toISOString(),modifiedOn:new Date().toISOString(),createdBy:String(t),modifiedBy:String(t)};return i.json(s,{status:201})})]}}};var c,m,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
