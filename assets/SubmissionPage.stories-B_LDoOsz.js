import{g as I,k as S,n as t,a2 as O,e2 as g,b as e,kt as i,ku as C,H as s,kv as l,p as m,kw as b,kx as T,k8 as A}from"./iframe-CuCRNKD2.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-B1coYBJq.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-CJ_jZJ9w.js";import"./useAccessRequirements-DQ4FszLt.js";import"./index-CSP15YZm.js";import"./_baseOrderBy-CgTIJf-4.js";import"./_baseIteratee-BoekfeUm.js";import"./_baseMap-CSQcD485.js";import"./_baseEach-DxRZKxVw.js";import"./useQueries-D2fWcxPh.js";import"./useInfiniteQuery-CObm4ehU.js";import"./groupBy-jS2qujnc.js";import"./_createAggregator-BJ3qXJ_2.js";import"./DialogBase-Dmv5O61d.js";import"./Close-XPSuPfSe.js";import"./HelpPopover-CUGXBuQO.js";import"./MarkdownPopover-BxdpaW68.js";import"./LightTooltip-CDxRktsS.js";import"./MarkdownSynapse-DNDn28ba.js";import"./SkeletonButton-CaULGpMN.js";import"./SkeletonInlineBlock-BnPEMPpf.js";import"./SkeletonTable-ChmVFJhE.js";import"./SkeletonParagraph-DKk5S29D.js";import"./EntityLink-TdIwQeFW.js";import"./useEntity-CbwMelhb.js";import"./pickBy-C0O8bOmB.js";import"./isString-DymVVSMG.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-D06ihnyt.js";import"./useGetEntityHeaders-B9RFHieY.js";import"./EntityIcon-COm1WXBl.js";import"./ErrorChip-CU4RuFBM.js";import"./Chip-C_N7BwZ8.js";import"./UserOrTeamBadge-BpivlnjU.js";import"./UserBadge-Bxtk_9hQ.js";import"./MenuItem-DWis1ABF.js";import"./Card-BDRHdzBD.js";import"./TeamBadge-CPWkxziE.js";import"./UnmanagedACTAccessRequirementItem-BvwAsBCg.js";import"./RequirementItem-CiAcSI9V.js";import"./LockTwoTone-yjPp4Mgs.js";import"./UserSearchBoxV2-DVmi9CmH.js";import"./useDebouncedEffect-Cngnx5nI.js";import"./use-deep-compare-effect.esm-DGVAb9fw.js";import"./uniq-D0VY6FGH.js";import"./without-DSQpKr05.js";import"./Select-aab027f3.esm-BCe0stGw.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-C3QFsSUw.js";import"./SelfSignAccessRequirementItem-vihWA8U9.js";import"./DataAccessRequestAccessorsFilesForm-Bx5lcl_P.js";import"./enums-CVSV19-D.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-Bf3iXBWp.js";import"./RadioGroup-8LJaGrZz.js";import"./Radio-Dpfkgw2P.js";import"./SwitchBase-Bbn1ALyw.js";import"./FormGroup-DDrTRjKU.js";import"./FormControlLabel-CGTsH9Fv.js";import"./UploadDocumentField-5PEj-BnL.js";import"./FileUpload-BE7XnnyH.js";import"./ManagedACTAccessRequirementFormWikiWrapper-Bd4hqMxl.js";import"./GridLegacy-HQcAoVGt.js";import"./ResearchProjectForm-B44Lh4Yz.js";import"./TextFieldWithWordLimit-CBvqVAQg.js";import"./AuthenticatedRequirement-B4LV72yZ.js";import"./CertificationRequirement-l7REZP5N.js";import"./TwoFactorAuthEnabledRequirement-CXbvsgzs.js";import"./ValidationRequirement-DcVX9K2B.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-DwtnI6jJ.js";import"./RejectDataAccessRequestModal-CDX6das8.js";import"./CannedRejectionDialog-CjZhYYY0.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-Cv8GQS-W.js";import"./Checkbox-D2e6C1U3.js";import"./Grid-z7oGVaA1.js";import"./upperFirst-DaNcnK5F.js";import"./_stringToArray-5NZ1Twwd.js";const tr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'SubmissionPage',
  loaders: [() => registerTableQueryResult({
    sql: \`SELECT * FROM \${REJECT_SUBMISSION_CANNED_RESPONSES_TABLE}\`
  }, mockRejectionReasonsTableQueryResultBundle)],
  parameters: {
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getWikiHandlers(MOCK_REPO_ORIGIN),
      // Return submission based on ID
      http.get(\`\${MOCK_REPO_ORIGIN}\${DATA_ACCESS_SUBMISSION_BY_ID(':id')}\`, ({
        params
      }) => {
        const submission = mockSubmissions.find(submission => params.id === submission.id);
        return HttpResponse.json(submission, {
          status: 200
        });
      }),
      // Return a mocked access requirement
      http.get(\`\${MOCK_REPO_ORIGIN}\${ACCESS_REQUIREMENT_BY_ID(':id')}\`, () => {
        return HttpResponse.json(mockManagedACTAccessRequirement, {
          status: 200
        });
      }), http.get(\`\${MOCK_REPO_ORIGIN}\${ACCESS_REQUIREMENT_WIKI_PAGE_KEY(':id')}\`, () => {
        return HttpResponse.json({
          wikiPageId: 123,
          ownerObjectId: mockManagedACTAccessRequirement.id,
          ownerObjectType: 'ACCESS_REQUIREMENT'
        }, {
          status: 200
        });
      }), http.get<{
        id: string;
      }>(\`\${MOCK_REPO_ORIGIN}/repo/v1/accessRequirement/:id/acl\`, ({
        params
      }) => {
        return HttpResponse.json({
          id: params.id,
          creationDate: '2022-05-20T14:32:31.665Z',
          etag: 'f4fbd4f2-751d-40dd-9421-1d2693231217',
          resourceAccess: [{
            principalId: MOCK_USER_ID_2,
            accessType: ['REVIEW_SUBMISSIONS']
          }]
        }, {
          status: 200
        });
      }), ...getHandlersForTableQuery(MOCK_REPO_ORIGIN), http.put(\`\${MOCK_REPO_ORIGIN}\${DATA_ACCESS_SUBMISSION_BY_ID(':id')}\`, async ({
        request
      }) => {
        return HttpResponse.json(await request.json(), {
          status: 201
        });
      })]
    }
  },
  args: {
    isReviewer: true,
    submissionId: 1
  }
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var d,c,R;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Demo Error State',
  parameters: {
    msw: {
      handlers: [http.get(\`\${MOCK_REPO_ORIGIN}\${DATA_ACCESS_SUBMISSION_BY_ID(':id')}\`, () => {
        const errorResponse: ErrorResponse = {
          reason: 'The user must be validated in order to review data access submissions.',
          concreteType: 'org.sagebionetworks.repo.model.ErrorResponse'
        };
        return HttpResponse.json(errorResponse, {
          status: 403
        });
      })]
    }
  },
  args: {
    isReviewer: true,
    submissionId: 9999
  }
}`,...(R=(c=n.parameters)==null?void 0:c.docs)==null?void 0:R.source}}};const sr=["Demo","DemoError"];export{o as Demo,n as DemoError,sr as __namedExportsOrder,tr as default};
