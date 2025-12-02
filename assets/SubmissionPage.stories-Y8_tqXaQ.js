import{g as I,k as S,n as t,a2 as O,e2 as g,b as e,ku as i,kv as C,H as s,kw as l,p as m,kx as b,ky as T,k9 as A}from"./iframe-ClyxPfmc.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-CpRXDrB-.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-BZjfc5Sz.js";import"./useAccessRequirements-D8QtUaKF.js";import"./index-DAlOmM9o.js";import"./_baseOrderBy-mKcR7STP.js";import"./_baseIteratee-9Jql63Gf.js";import"./_baseMap-BZX5HvhC.js";import"./_baseEach-BKNPTxf-.js";import"./useQueries-CSThz8EB.js";import"./useInfiniteQuery-Cqgwy5DL.js";import"./groupBy-DOjpUFyl.js";import"./_createAggregator-DrEIYQ6O.js";import"./DialogBase-Bta8Ocnf.js";import"./Close-D1ca1SeS.js";import"./HelpPopover-CX_ddDkl.js";import"./MarkdownPopover-dvWKxOZ7.js";import"./LightTooltip-x_r9dSqG.js";import"./MarkdownSynapse-DQFUbqu6.js";import"./SkeletonButton-JqUeiWK5.js";import"./SkeletonInlineBlock-CyrAtLJW.js";import"./SkeletonTable-ClI70_Q3.js";import"./SkeletonParagraph-BsIbpmnA.js";import"./EntityLink-ChpXLvVE.js";import"./useEntity-3ZGC1Zu9.js";import"./pickBy-CCFUe152.js";import"./isString-Bzx34bEP.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Bj2snGnH.js";import"./useGetEntityHeaders-BQ940mRW.js";import"./EntityIcon-DHQ63RSh.js";import"./ErrorChip-BIe3Tgoa.js";import"./Chip-Bt2Da9Ss.js";import"./UserOrTeamBadge-xgcTiyiN.js";import"./UserBadge-dq1rcuGr.js";import"./MenuItem-DP0olmzU.js";import"./Card-u1-hFSg-.js";import"./TeamBadge-i2qsl3bw.js";import"./UnmanagedACTAccessRequirementItem-RmA2txhT.js";import"./RequirementItem-BFtKk7R_.js";import"./LockTwoTone-4YBlOu54.js";import"./UserSearchBoxV2-C8PwSj7D.js";import"./useDebouncedEffect-DulQ5ukY.js";import"./use-deep-compare-effect.esm-vk4Z9RWV.js";import"./uniq-wuCvyXTJ.js";import"./without-BrkAU00P.js";import"./Select-aab027f3.esm-CFC8E6a2.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-D6iPXVQQ.js";import"./SelfSignAccessRequirementItem-CV55HGdp.js";import"./DataAccessRequestAccessorsFilesForm-DxVg-Up7.js";import"./enums-Bj7hG8A6.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-DPOb84OY.js";import"./RadioGroup-BBy3Hmyu.js";import"./Radio-DK8_6UyJ.js";import"./SwitchBase-DZhxFchy.js";import"./FormGroup-Kmu_LrXP.js";import"./FormControlLabel-DuHvGhLT.js";import"./UploadDocumentField-DFURGieT.js";import"./FileUpload-CFNSZlNf.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BnHDTC19.js";import"./GridLegacy-CJeXaJhd.js";import"./ResearchProjectForm-C_XY_z8S.js";import"./TextFieldWithWordLimit-XheTzIBh.js";import"./AuthenticatedRequirement-CkTclmzB.js";import"./CertificationRequirement-_WNHDrJ4.js";import"./TwoFactorAuthEnabledRequirement-BSgB81Fk.js";import"./ValidationRequirement-DG5t3uJw.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-BS6LtEqH.js";import"./RejectDataAccessRequestModal-BNjLd9RI.js";import"./CannedRejectionDialog-ByY-qXvn.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-BsTE_PBt.js";import"./Checkbox-rnd4zaCH.js";import"./Grid-C_QyTJ9i.js";import"./upperFirst-BMERv0X8.js";import"./_stringToArray-6xQ4DnAo.js";const tr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
