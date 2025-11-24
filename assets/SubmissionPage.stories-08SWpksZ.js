import{g as I,k as S,n as t,a2 as O,e2 as g,b as e,ku as i,kv as C,H as s,kw as l,p as m,kx as b,ky as T,k9 as A}from"./iframe-C2KiuWKW.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-CthUx-VF.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-BWbjqpa4.js";import"./useAccessRequirements-DjXTovFl.js";import"./index-Bxj6rqQ-.js";import"./_baseOrderBy-Djdm14sR.js";import"./_baseIteratee-CjIdJ6hr.js";import"./_baseMap-DitX6qHD.js";import"./_baseEach-DRvbLTSB.js";import"./useQueries-DR2SNVW2.js";import"./useInfiniteQuery-BrhgLvSC.js";import"./groupBy-CeYvJcKY.js";import"./_createAggregator-CTuXFwdy.js";import"./DialogBase-B4kmo7Ld.js";import"./Close-BIaHlc92.js";import"./HelpPopover-CfPQcqAt.js";import"./MarkdownPopover-5UTwOQCz.js";import"./LightTooltip-Bcc7fqEX.js";import"./MarkdownSynapse-C5i7NIK_.js";import"./SkeletonButton-CRFxONAo.js";import"./SkeletonInlineBlock-B39hqJKo.js";import"./SkeletonTable-PHS1izgY.js";import"./SkeletonParagraph-D5MYRaWu.js";import"./EntityLink-C3u3qFvM.js";import"./useEntity-7cXVCmEM.js";import"./pickBy-CCpCCyD3.js";import"./isString-CJO-7Tta.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CLgDPVZl.js";import"./useGetEntityHeaders-Bmmeqq-p.js";import"./EntityIcon-MXtQ-lRz.js";import"./ErrorChip-D_WoUgPR.js";import"./Chip-CHQONIC6.js";import"./UserOrTeamBadge-D-E6BsbP.js";import"./UserBadge-B_kScQks.js";import"./MenuItem-SU_iXbyZ.js";import"./Card-SPt2m4TT.js";import"./TeamBadge-DZNJg7UW.js";import"./UnmanagedACTAccessRequirementItem-BcGlrDcm.js";import"./RequirementItem-CwseLBnO.js";import"./LockTwoTone-DHxsi1Qk.js";import"./UserSearchBoxV2-DHZw3wi6.js";import"./useDebouncedEffect-pMqXMO0p.js";import"./use-deep-compare-effect.esm-BLwPhTf4.js";import"./uniq-QrSgfjXv.js";import"./without-BiEKjebO.js";import"./Select-aab027f3.esm-R2NyVd_n.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-CPIWR1be.js";import"./SelfSignAccessRequirementItem-C8PP6F5M.js";import"./DataAccessRequestAccessorsFilesForm-DATQu2gw.js";import"./enums-C-8kEX-O.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-C4U-ESYP.js";import"./RadioGroup-BHXI8pcV.js";import"./Radio-xI5KIyYJ.js";import"./SwitchBase-Cjz94MqM.js";import"./FormGroup-Bl_NnUy2.js";import"./FormControlLabel-D_3YwViS.js";import"./UploadDocumentField-BnlGrUVI.js";import"./FileUpload-BIoIQnCR.js";import"./ManagedACTAccessRequirementFormWikiWrapper-Ba6Wv6WF.js";import"./GridLegacy-DKga7jPZ.js";import"./ResearchProjectForm-qP3X-1Rs.js";import"./TextFieldWithWordLimit-B_Z0O7sk.js";import"./AuthenticatedRequirement-BAWJ4xRb.js";import"./CertificationRequirement-BOgT9O3w.js";import"./TwoFactorAuthEnabledRequirement-C61si5x3.js";import"./ValidationRequirement-C62ddYdl.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-BoDZiKOv.js";import"./RejectDataAccessRequestModal-BIeiTthZ.js";import"./CannedRejectionDialog-CV9C05R7.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-Bm4vu1Af.js";import"./Checkbox-B3nGy5Ij.js";import"./Grid-XsX4lsh5.js";import"./upperFirst-C13KvHUE.js";import"./_stringToArray-DAzpW7Hv.js";const tr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
