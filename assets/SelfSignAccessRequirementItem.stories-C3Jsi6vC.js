import{e as d,k as m,h as p,n,q as O,s as g,L as I,b as e,N as R,H as r,A as S,v as u,w as t}from"./iframe-E5Ka0mIZ.js";import{S as _}from"./SelfSignAccessRequirementItem-Ba62IrTj.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-1-Q1slqh.js";import"./index-Cv8vAGy5.js";import"./_baseOrderBy-Cnq4q8EF.js";import"./_baseIteratee-D6PNAt1_.js";import"./_baseMap-DSEb_IbP.js";import"./_baseEach-C0RJNqJx.js";import"./useInfiniteQuery-DcuDXesA.js";import"./useUserBundle-BGioipGE.js";import"./MarkdownSynapse-BDwlDcaF.js";import"./SkeletonButton-kIjuP8ut.js";import"./SkeletonInlineBlock-C_4IQROm.js";import"./SkeletonTable-Crx1Nozv.js";import"./SkeletonParagraph-9oETCVT4.js";import"./RequirementItem-BJUVmTLo.js";import"./LockTwoTone-ZPPc3MGe.js";const h={title:"Governance/Data Access Request Flow/Requirements/SelfSignAccessRequirementItem",component:_,argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},i={args:{accessRequirement:{...O,isCertifiedUserRequired:!0,isValidatedProfileRequired:!0}},parameters:{msw:{handlers:[...d(e),...m(e),p(e,!1,!1),n.get(`${e}${R(":id")}`,({params:s})=>{const a={accessRequirementId:s.id,concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!1};return r.json(a,{status:200})}),n.post(`${e}${S}`,()=>{const s={requirementId:O.id,submitterId:t.toString(),accessorId:t.toString(),state:u.APPROVED,id:123,etag:"etag",createdOn:new Date().toISOString(),modifiedOn:new Date().toISOString(),createdBy:String(t),modifiedBy:String(t)};return r.json(s,{status:201})})]}}},o={args:{accessRequirement:g},parameters:{msw:{handlers:[...d(e),...m(e),p(e,!1,!1),n.get(`${e}${R(":id")}`,({params:s})=>{const a={accessRequirementId:s.id,concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!1};return r.json(a,{status:200})}),n.post(`${e}${S}`,()=>{const s={requirementId:g.id,submitterId:t.toString(),accessorId:t.toString(),state:u.APPROVED,id:123,etag:"etag",createdOn:new Date().toISOString(),modifiedOn:new Date().toISOString(),createdBy:String(t),modifiedBy:String(t)};return r.json(s,{status:201})})]}}},c={args:{accessRequirement:I},parameters:{msw:{handlers:[...d(e),...m(e),p(e,!1,!1),n.get(`${e}${R(":id")}`,({params:s})=>{const a={accessRequirementId:s.id,concreteType:"org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus",isApproved:!1};return r.json(a,{status:200})}),n.post(`${e}${S}`,()=>{const s={requirementId:I.id,submitterId:t.toString(),accessorId:t.toString(),state:u.APPROVED,id:123,etag:"etag",createdOn:new Date().toISOString(),modifiedOn:new Date().toISOString(),createdBy:String(t),modifiedBy:String(t)};return r.json(s,{status:201})})]}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const G=["RequiresUnmetCertificationAndValidation","LegacyTermsOfUse","LegacyTermsOfUseWithWiki"];export{o as LegacyTermsOfUse,c as LegacyTermsOfUseWithWiki,i as RequiresUnmetCertificationAndValidation,G as __namedExportsOrder,h as default};
