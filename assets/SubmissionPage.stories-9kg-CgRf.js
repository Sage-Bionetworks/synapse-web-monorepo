import{g as I,k as S,n as t,a2 as O,e2 as g,b as e,kt as i,ku as C,H as s,kv as l,p as m,kw as b,kx as T,k8 as A}from"./iframe-Zu8RvZUL.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-B4XVfgpR.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-BZmeMCjz.js";import"./useAccessRequirements-CY1yadz2.js";import"./index-C-A1emnN.js";import"./_baseOrderBy-DFQ0btRe.js";import"./_baseIteratee-DhVKAxYy.js";import"./_baseMap-D5VoDhU6.js";import"./_baseEach-DSyukbW5.js";import"./useQueries-BV3GalOM.js";import"./useInfiniteQuery-DY2EkPTt.js";import"./groupBy-DZY1M7jO.js";import"./_createAggregator-CscPbhX2.js";import"./DialogBase-D0lW8KgR.js";import"./Close-Ce4QSXM9.js";import"./HelpPopover-DTUJNc5J.js";import"./MarkdownPopover-CDbCCKmS.js";import"./LightTooltip-3uyB0mdk.js";import"./MarkdownSynapse-Bf4DcIpi.js";import"./SkeletonButton-WXJ0zPic.js";import"./SkeletonInlineBlock-CowlHzP_.js";import"./SkeletonTable-CPpj76Kj.js";import"./SkeletonParagraph-DoX1NVXB.js";import"./EntityLink-BUZnCnnL.js";import"./useEntity-DG6bXMkL.js";import"./pickBy-11Sid5_3.js";import"./isString-CJhnVd9r.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BKHAG3DL.js";import"./useGetEntityHeaders-XbyfVw2J.js";import"./EntityIcon-BrQvxwoC.js";import"./ErrorChip-B6YT3d7U.js";import"./Chip-CUvuriGX.js";import"./UserOrTeamBadge-BfB9fNJt.js";import"./UserBadge-BWB7RQzA.js";import"./MenuItem-DJ5K5GB8.js";import"./Card-6xQl6A3R.js";import"./TeamBadge-CdaLSKm9.js";import"./UnmanagedACTAccessRequirementItem-XzIkIQYi.js";import"./RequirementItem-Ddmpn4qI.js";import"./LockTwoTone-CZBcoVRk.js";import"./UserSearchBoxV2-Bb2-SlMC.js";import"./useDebouncedEffect-BSUmIPNh.js";import"./use-deep-compare-effect.esm-DC9AC14i.js";import"./uniq-3VVxXdvC.js";import"./without-Cn5GIDcK.js";import"./Select-aab027f3.esm-CQVkxhXq.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-C3VckAkN.js";import"./SelfSignAccessRequirementItem-CczssaDB.js";import"./DataAccessRequestAccessorsFilesForm-CQDDa_wO.js";import"./enums-Cfltgcql.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-BVop7Ud6.js";import"./RadioGroup-CoxqlNh-.js";import"./Radio-LRNkMabF.js";import"./SwitchBase-CrY3cna5.js";import"./FormGroup-8eiXy_6n.js";import"./FormControlLabel-DDX1vfdb.js";import"./UploadDocumentField-CWFucsv7.js";import"./FileUpload-DgejT5xQ.js";import"./ManagedACTAccessRequirementFormWikiWrapper-CsiYBmTG.js";import"./GridLegacy-eNeiPsCB.js";import"./ResearchProjectForm-DQF_NHlw.js";import"./TextFieldWithWordLimit-ZV7ntbBo.js";import"./AuthenticatedRequirement-Xlq8sONZ.js";import"./CertificationRequirement-PBXpaPkq.js";import"./TwoFactorAuthEnabledRequirement-xcRWpKjN.js";import"./ValidationRequirement-Brcb_Cug.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-pCucTnMR.js";import"./RejectDataAccessRequestModal-1kX_W2yl.js";import"./CannedRejectionDialog-CnsES4LV.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-DWaYymem.js";import"./Checkbox-9TspXcgn.js";import"./Grid-_ErRMDJp.js";import"./upperFirst-DYf6gngY.js";import"./_stringToArray-CJAwYWUU.js";const tr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
