import{g as I,k as S,n as t,a2 as O,e2 as g,b as e,kt as i,ku as C,H as s,kv as l,p as m,kw as b,kx as T,k8 as A}from"./iframe-B9toAp7a.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-Divd1svr.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-AZNs43TS.js";import"./useAccessRequirements-BSwn4Ekv.js";import"./index-D8ZnctAR.js";import"./_baseOrderBy-C3i3TCPw.js";import"./_baseIteratee-BGiUzQ8d.js";import"./_baseMap-miNkUa17.js";import"./_baseEach-BzUqFgra.js";import"./useQueries-Yqgl-oYp.js";import"./useInfiniteQuery-DGLpPH-X.js";import"./groupBy-CAa5hQHs.js";import"./_createAggregator-D0Gr6slg.js";import"./DialogBase-DGl7drlj.js";import"./Close-eKJYJFPR.js";import"./HelpPopover-ChAtcQyP.js";import"./MarkdownPopover-nm59-MMf.js";import"./LightTooltip-CxCt9or1.js";import"./MarkdownSynapse-Dm9xpmpj.js";import"./SkeletonButton-D4dnbEqI.js";import"./SkeletonInlineBlock-DARsQc6u.js";import"./SkeletonTable-Ci-z4Kjh.js";import"./SkeletonParagraph-DDetyv-w.js";import"./EntityLink-8sGOl2uE.js";import"./useEntity-BIZR8hFL.js";import"./pickBy-Vjm6-h7B.js";import"./isString-BndzlJTD.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DMC4ZNQp.js";import"./useGetEntityHeaders-DRIptC9o.js";import"./EntityIcon-B54IzAlE.js";import"./ErrorChip-C6GnwweS.js";import"./Chip-CudXwLxi.js";import"./UserOrTeamBadge-P6dVTK0u.js";import"./UserBadge-BoBObQpt.js";import"./MenuItem-BZ_VEH8F.js";import"./Card-HZPz8khv.js";import"./TeamBadge-u020cHRi.js";import"./UnmanagedACTAccessRequirementItem-CyEmyU61.js";import"./RequirementItem-ByyK5ulJ.js";import"./LockTwoTone-D54nK9TF.js";import"./UserSearchBoxV2-tT9515MJ.js";import"./useDebouncedEffect-D59uftUv.js";import"./use-deep-compare-effect.esm-Cl2Ri4if.js";import"./uniq-fknARjdf.js";import"./without-CD6bULX3.js";import"./Select-aab027f3.esm-C6BRDs7I.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-DqlkR4Jx.js";import"./SelfSignAccessRequirementItem-BudZ5Q16.js";import"./DataAccessRequestAccessorsFilesForm-kcU3tUzQ.js";import"./enums-BV4Qgx_I.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-GXnHrxFB.js";import"./RadioGroup-tTnyfdgM.js";import"./Radio-BaCOZ9CR.js";import"./SwitchBase-Bmf2bXZK.js";import"./FormGroup-CjT-1FZJ.js";import"./FormControlLabel-g_NAfEdo.js";import"./UploadDocumentField-IiUb4uwO.js";import"./FileUpload-pV1LXzqI.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BXG460Y9.js";import"./GridLegacy-DACCnVKf.js";import"./ResearchProjectForm-CwuUmM7J.js";import"./TextFieldWithWordLimit-BZxJq7Wo.js";import"./AuthenticatedRequirement-C8kHgPyq.js";import"./CertificationRequirement-Cuuioy90.js";import"./TwoFactorAuthEnabledRequirement-3nTxPxrn.js";import"./ValidationRequirement-CzvkB52r.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-bCyH-JJ6.js";import"./RejectDataAccessRequestModal-CYPaLO8U.js";import"./CannedRejectionDialog-cf4FnAdw.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-B5Wo4CTL.js";import"./Checkbox-C2_MHdw4.js";import"./Grid-DRzP1o43.js";import"./upperFirst-1vF-9fH2.js";import"./_stringToArray-B_Wow5kI.js";const tr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
