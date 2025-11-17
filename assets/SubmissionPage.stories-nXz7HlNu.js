import{g as I,k as S,n as t,a2 as O,e2 as g,b as e,kt as i,ku as C,H as s,kv as l,p as m,kw as b,kx as T,k8 as A}from"./iframe-DOnL1WnT.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-COlifcbQ.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-B8xMG551.js";import"./useAccessRequirements-YOANGYfG.js";import"./index-BSAtyD83.js";import"./_baseOrderBy-CQqPJjUp.js";import"./_baseIteratee-BuXwAMpp.js";import"./_baseMap-D9xJeZVA.js";import"./_baseEach-DlkX0Ljy.js";import"./useQueries-Dpcoofnd.js";import"./useInfiniteQuery-DBtR-i50.js";import"./groupBy-cyF0-Maf.js";import"./_createAggregator-CWo4lX6u.js";import"./DialogBase-CKf_63Ui.js";import"./Close-MJ_nsuDC.js";import"./HelpPopover-D86Vst7Z.js";import"./MarkdownPopover-CauQ5K7i.js";import"./LightTooltip-bfiAMs0U.js";import"./MarkdownSynapse-BF6cile7.js";import"./SkeletonButton-B9cG9K33.js";import"./SkeletonInlineBlock-BUPDznw3.js";import"./SkeletonTable-PXKcpraC.js";import"./SkeletonParagraph-BmRLG4OY.js";import"./EntityLink-hICDK4r7.js";import"./useEntity-DFUeyftv.js";import"./pickBy-JkvQMS-p.js";import"./isString-DRItR6Nw.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-u7iqnHCV.js";import"./useGetEntityHeaders-DDRKSjVG.js";import"./EntityIcon-BX39tx9r.js";import"./ErrorChip-CKOF5Cz8.js";import"./Chip-C754RM17.js";import"./UserOrTeamBadge-BDO9lliy.js";import"./UserBadge-DQCtOu7Y.js";import"./MenuItem-hhLXKwPr.js";import"./Card-DY48lF53.js";import"./TeamBadge-xT3CAI_Q.js";import"./UnmanagedACTAccessRequirementItem-d9jsv8kF.js";import"./RequirementItem-71nLumiV.js";import"./LockTwoTone-CZM9yHFq.js";import"./UserSearchBoxV2-BUI5fTZK.js";import"./useDebouncedEffect-DjUV3p-h.js";import"./use-deep-compare-effect.esm-BKm0Hfaf.js";import"./uniq-f0PXychf.js";import"./without-DUsye9XC.js";import"./Select-aab027f3.esm-BP1TTTnK.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-CeYkDJWY.js";import"./SelfSignAccessRequirementItem-BikB5TTh.js";import"./DataAccessRequestAccessorsFilesForm-BxH23l1n.js";import"./enums-C5CnfqdH.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-CQBoco9R.js";import"./RadioGroup-BMwR7Qqy.js";import"./Radio-DqYWrmTT.js";import"./SwitchBase-BK6ATdaZ.js";import"./FormGroup-BhwkjhUK.js";import"./FormControlLabel-BONTN4Fq.js";import"./UploadDocumentField-D0GcpMhh.js";import"./FileUpload-DuzUtbsW.js";import"./ManagedACTAccessRequirementFormWikiWrapper-DFTZBuZF.js";import"./GridLegacy-DxcU_KGs.js";import"./ResearchProjectForm-BHe8G5Zl.js";import"./TextFieldWithWordLimit-CTc872SQ.js";import"./AuthenticatedRequirement-BO5Xt96T.js";import"./CertificationRequirement-DVRCIdbf.js";import"./TwoFactorAuthEnabledRequirement-DwyiFxZl.js";import"./ValidationRequirement-BUCf9ud1.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-DuwY3Fkb.js";import"./RejectDataAccessRequestModal-Duk6MDfl.js";import"./CannedRejectionDialog-DyiL_SQi.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-DBlD3c8E.js";import"./Checkbox-2y8gbEUD.js";import"./Grid-OsvXf4Gv.js";import"./upperFirst-QVmH9cpB.js";import"./_stringToArray-NBZlxHAp.js";const tr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
