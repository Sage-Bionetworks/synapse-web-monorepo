import{g as u,k as d,n as t,a3 as c,e0 as R,b as e,kv as i,kw as E,H as s,kx as _,p as m,ky as I,kz as S,ke as O}from"./iframe-CKkRwo5v.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-CsVl0TZI.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-BlN3rP1C.js";import"./useAccessRequirements-DRtemz2c.js";import"./index-T5CXHaiH.js";import"./_baseOrderBy-Bx7CQqGV.js";import"./_baseIteratee-COPrDePY.js";import"./_baseMap-B36GknGl.js";import"./_baseEach-BM2npHyS.js";import"./useQueries-DAr7Xmz3.js";import"./useInfiniteQuery-D91Hmxok.js";import"./groupBy-CLF0uVPC.js";import"./_createAggregator-SM7kLbsx.js";import"./DialogBase-DdQNaVTV.js";import"./Close-CVsFjIhS.js";import"./HelpPopover-DZFuhU9d.js";import"./MarkdownPopover-niMIJG4k.js";import"./LightTooltip-Bt97fi6r.js";import"./MarkdownSynapse-COK-Gxgq.js";import"./SkeletonButton-DLboZNuU.js";import"./SkeletonInlineBlock-DfpGMDXv.js";import"./SkeletonTable-bRkZRSb0.js";import"./SkeletonParagraph-DGFhmrY6.js";import"./EntityLink-DuR25SR3.js";import"./useEntity-C_pugPvR.js";import"./pickBy-DnhMagRc.js";import"./isString-Wwui1oe3.js";import"./useSuspenseQuery-vP5ehhR0.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-mjXgY0Yw.js";import"./useGetEntityHeaders-Ct9BkZnW.js";import"./EntityIcon-2WszyjXe.js";import"./ErrorChip-AdQgG4tv.js";import"./Chip-Dbbmbwqm.js";import"./UserOrTeamBadge-BnU7Tnmz.js";import"./UserBadge-B7iJoUd3.js";import"./useUserBundle-Biq_JT-q.js";import"./MenuItem-CL505aRp.js";import"./Card-Dl_jNj30.js";import"./TeamBadge-DzxoZvE5.js";import"./UnmanagedACTAccessRequirementItem-6_sCwQw_.js";import"./RequirementItem-ChRUEGuP.js";import"./LockTwoTone-Bpyh__0W.js";import"./UserSearchBoxV2-DHQoqBnU.js";import"./useDebouncedEffect-CAGoM_2X.js";import"./use-deep-compare-effect.esm-DgxJF9xG.js";import"./uniq-DTweKclO.js";import"./without-DxRhbpmN.js";import"./Select-aab027f3.esm-DGHcyJGi.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-C4IRfbzH.js";import"./SelfSignAccessRequirementItem-D1RnOJZh.js";import"./DataAccessRequestAccessorsFilesForm-DbY8JjRm.js";import"./enums-wroegNAy.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-BPd6LQBk.js";import"./RadioGroup-Cg2r7kxF.js";import"./Radio-B5v_2pAe.js";import"./SwitchBase-BmMmO8FL.js";import"./FormGroup-B7l8KBIB.js";import"./FormControlLabel-RfEoG-bp.js";import"./UploadDocumentField-pEfi0SK9.js";import"./FileUpload-Cv4rEu-V.js";import"./ManagedACTAccessRequirementFormWikiWrapper-DkKq31lT.js";import"./GridLegacy-NnHHn7UI.js";import"./ResearchProjectForm-BOtBn7qe.js";import"./TextFieldWithWordLimit-Dy4Au4ov.js";import"./AuthenticatedRequirement-DiaG7n1F.js";import"./CertificationRequirement-cs1XwRbm.js";import"./TwoFactorAuthEnabledRequirement-C8DBa1Dg.js";import"./ValidationRequirement-BWhu-U1F.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-CjOlTYNY.js";import"./RejectDataAccessRequestModal-DB3pakkD.js";import"./CannedRejectionDialog-JcycatCT.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-CVuhYKmi.js";import"./Checkbox-CrdVE499.js";import"./Grid-C82W-1WD.js";import"./upperFirst-Qog4FFSu.js";import"./_stringToArray-DOQwUXWL.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Xe=["Demo","DemoError"];export{o as Demo,n as DemoError,Xe as __namedExportsOrder,ze as default};
