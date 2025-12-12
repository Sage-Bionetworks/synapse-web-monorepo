import{g as I,k as S,n as t,a2 as O,d_ as g,b as e,kr as i,ks as C,H as s,kt as l,p as m,ku as b,kv as T,ka as A}from"./iframe-6fxFvYFG.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-BZc345rq.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-LaZo1tJz.js";import"./useAccessRequirements-DXccu9dc.js";import"./index-CP3LG1g1.js";import"./_baseOrderBy-Cr16-GjM.js";import"./_baseIteratee-DY1tQatH.js";import"./_baseMap-Rk7cewzM.js";import"./_baseEach-Cn4IQ3HL.js";import"./useQueries-C1Wk7ykh.js";import"./useInfiniteQuery-D3h0JCdq.js";import"./groupBy-BvfDOmTk.js";import"./_createAggregator-BOFEHp5k.js";import"./DialogBase-CDVzPJD1.js";import"./Close--BbnJHAr.js";import"./HelpPopover-CS2yi4Iw.js";import"./MarkdownPopover-BT53YGTG.js";import"./LightTooltip-B_bCqVrh.js";import"./MarkdownSynapse-BiQ8eplM.js";import"./SkeletonButton-CwN3sKyQ.js";import"./SkeletonInlineBlock-DeCoWgUQ.js";import"./SkeletonTable-B0KdXxpl.js";import"./SkeletonParagraph-P8Ugt_HA.js";import"./EntityLink-Cbyc3quO.js";import"./useEntity-CiSEE1ST.js";import"./pickBy-afJY1XzF.js";import"./isString-C9xQ2Al-.js";import"./useSuspenseQuery-ilZIAiZO.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CDx_Zyyw.js";import"./useGetEntityHeaders-Bc5uH4a7.js";import"./EntityIcon-B6RW9G18.js";import"./ErrorChip-CmeUiDzD.js";import"./Chip-BwWvwcwU.js";import"./UserOrTeamBadge-CjRyaMhX.js";import"./UserBadge-CnsgxeYH.js";import"./useUserBundle-Cw5DWU5h.js";import"./MenuItem-B2VLGt4Y.js";import"./Card-Cx8rkxTL.js";import"./TeamBadge-D5fJx7q9.js";import"./UnmanagedACTAccessRequirementItem-DTMlsURG.js";import"./RequirementItem-BlrCKkOM.js";import"./LockTwoTone-1ZZATT0C.js";import"./UserSearchBoxV2-LPivlEfZ.js";import"./useDebouncedEffect-BK30tzs9.js";import"./use-deep-compare-effect.esm-6HhN3vUK.js";import"./uniq-Bs8U3rF1.js";import"./without-DeXe7ptH.js";import"./Select-aab027f3.esm-DG9oUfLW.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-BFQpqQAD.js";import"./SelfSignAccessRequirementItem-fVLI4r69.js";import"./DataAccessRequestAccessorsFilesForm-bPTRTbaT.js";import"./enums-BNC1SF2Z.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-CFGCophe.js";import"./RadioGroup-DxpXxn2A.js";import"./Radio-BFNfi9Ft.js";import"./SwitchBase-Bvt5w2g0.js";import"./FormGroup-p2ZBI5ND.js";import"./FormControlLabel-D4CQ3AYq.js";import"./UploadDocumentField-CB98licU.js";import"./FileUpload-ChuC5bsa.js";import"./ManagedACTAccessRequirementFormWikiWrapper-Bxd0gHpm.js";import"./GridLegacy-DRXASug7.js";import"./ResearchProjectForm-B4X7vTTW.js";import"./TextFieldWithWordLimit-DCM3W5Ot.js";import"./AuthenticatedRequirement-BuTEh3VB.js";import"./CertificationRequirement-D-_zdvmO.js";import"./TwoFactorAuthEnabledRequirement-EPZWs_9W.js";import"./ValidationRequirement-BDWoYVZM.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-io0uAd0l.js";import"./RejectDataAccessRequestModal-BUb3a9ZH.js";import"./CannedRejectionDialog-B4XZvwb6.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-D7CL9Hbl.js";import"./Checkbox-CHQ5V6dI.js";import"./Grid-DGlN8hhe.js";import"./upperFirst-Bc3vQ99n.js";import"./_stringToArray-DJv5wTJe.js";const sr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(R=(c=n.parameters)==null?void 0:c.docs)==null?void 0:R.source}}};const or=["Demo","DemoError"];export{o as Demo,n as DemoError,or as __namedExportsOrder,sr as default};
