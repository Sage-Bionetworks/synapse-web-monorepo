import{e as d,k as m,h as p,n,q as O,s as g,K as I,b as e,L as R,H as r,A as S,v as u,w as t}from"./iframe-BbBIbNbJ.js";import{S as M}from"./SelfSignAccessRequirementItem-ClVsvlXV.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-CBGLv5ao.js";import"./index-UMjXJfzL.js";import"./_baseOrderBy-DvNlOUFW.js";import"./_baseIteratee-4zm-yijX.js";import"./_baseMap-D-a7amfv.js";import"./_baseEach-KEo3Uqcu.js";import"./useQueries-BL7xbtea.js";import"./useInfiniteQuery-Dq3AohCE.js";import"./MarkdownSynapse-a5yQxqx5.js";import"./SkeletonButton-C0rZfSx5.js";import"./SkeletonInlineBlock-DVbB2SaF.js";import"./SkeletonTable-DeosQDQ2.js";import"./SkeletonParagraph-Cre22j3C.js";import"./RequirementItem-BlDwcH4r.js";import"./LockTwoTone-S0aJqkW7.js";const Q={title:"Governance/Data Access Request Flow/Requirements/SelfSignAccessRequirementItem",component:M,argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},i={args:{accessRequirement:{...O,isCertifiedUserRequired:!0,isValidatedProfileRequired:!0}},parameters:{msw:{handlers:[...d(e),...m(e),p(e,!1,!1),n.get(`${e}${R(":id")}`,({params:s})=>{const a={accessRequirementId:s.id,concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!1};return r.json(a,{status:200})}),n.post(`${e}${S}`,()=>{const s={requirementId:O.id,submitterId:t.toString(),accessorId:t.toString(),state:u.APPROVED,id:123,etag:"etag",createdOn:new Date().toISOString(),modifiedOn:new Date().toISOString(),createdBy:String(t),modifiedBy:String(t)};return r.json(s,{status:201})})]}}},o={args:{accessRequirement:g},parameters:{msw:{handlers:[...d(e),...m(e),p(e,!1,!1),n.get(`${e}${R(":id")}`,({params:s})=>{const a={accessRequirementId:s.id,concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!1};return r.json(a,{status:200})}),n.post(`${e}${S}`,()=>{const s={requirementId:g.id,submitterId:t.toString(),accessorId:t.toString(),state:u.APPROVED,id:123,etag:"etag",createdOn:new Date().toISOString(),modifiedOn:new Date().toISOString(),createdBy:String(t),modifiedBy:String(t)};return r.json(s,{status:201})})]}}},c={args:{accessRequirement:I},parameters:{msw:{handlers:[...d(e),...m(e),p(e,!1,!1),n.get(`${e}${R(":id")}`,({params:s})=>{const a={accessRequirementId:s.id,concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!1};return r.json(a,{status:200})}),n.post(`${e}${S}`,()=>{const s={requirementId:I.id,submitterId:t.toString(),accessorId:t.toString(),state:u.APPROVED,id:123,etag:"etag",createdOn:new Date().toISOString(),modifiedOn:new Date().toISOString(),createdBy:String(t),modifiedBy:String(t)};return r.json(s,{status:201})})]}}};var _,l,A;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(A=(l=i.parameters)==null?void 0:l.docs)==null?void 0:A.source}}};var C,E,f;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(f=(E=o.parameters)==null?void 0:E.docs)==null?void 0:f.source}}};var q,P,U;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(U=(P=c.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};const x=["RequiresUnmetCertificationAndValidation","LegacyTermsOfUse","LegacyTermsOfUseWithWiki"];export{o as LegacyTermsOfUse,c as LegacyTermsOfUseWithWiki,i as RequiresUnmetCertificationAndValidation,x as __namedExportsOrder,Q as default};
