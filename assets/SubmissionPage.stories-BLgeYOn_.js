import{g as I,k as S,n as t,a2 as O,e2 as g,b as e,ku as i,kv as C,H as s,kw as l,p as m,kx as b,ky as T,k9 as A}from"./iframe-DbV7x0Bc.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-Va76PaIR.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-Br-0kb0r.js";import"./useAccessRequirements-CeMsDcwS.js";import"./index-D2Qrjv69.js";import"./_baseOrderBy-CGUCTtHs.js";import"./_baseIteratee-Ce614RAD.js";import"./_baseMap-Tp95EtUm.js";import"./_baseEach-DrahPvDJ.js";import"./useQueries-DZBfPbhP.js";import"./useInfiniteQuery-CQxVeuk5.js";import"./groupBy-BX76tvZ7.js";import"./_createAggregator-CB--yn0V.js";import"./DialogBase-BD7SYBJ5.js";import"./Close--0rVQaHw.js";import"./HelpPopover-D60yTUPQ.js";import"./MarkdownPopover-CeZB9GVN.js";import"./LightTooltip-Djp-H0Gj.js";import"./MarkdownSynapse-jLoV8o0B.js";import"./SkeletonButton-CEdKSSw-.js";import"./SkeletonInlineBlock-DPkHUg7t.js";import"./SkeletonTable-D35PHSUs.js";import"./SkeletonParagraph-CtXDblG_.js";import"./EntityLink-BBuYYk86.js";import"./useEntity-DLaC8iaG.js";import"./pickBy-BpZduv0C.js";import"./isString-Dz9SZekD.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CVQ1PPlf.js";import"./useGetEntityHeaders-DHRHztRX.js";import"./EntityIcon-CGA-kpex.js";import"./ErrorChip-DJdWtuqC.js";import"./Chip-Df3eRAme.js";import"./UserOrTeamBadge-DpXxPI1U.js";import"./UserBadge-CSeyrS-i.js";import"./MenuItem-tbPVUwvL.js";import"./Card-BlOhhd1x.js";import"./TeamBadge-DK4DDUL1.js";import"./UnmanagedACTAccessRequirementItem-BtgCkgNS.js";import"./RequirementItem-Bh9HhQWZ.js";import"./LockTwoTone-Fry1417Q.js";import"./UserSearchBoxV2-f70VBFIL.js";import"./useDebouncedEffect-CZKtavsF.js";import"./use-deep-compare-effect.esm-DdgMJnVC.js";import"./uniq-whkMau-N.js";import"./without-eoH4Bdd6.js";import"./Select-aab027f3.esm-Kwz2OgqV.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-Bf_ION0n.js";import"./SelfSignAccessRequirementItem-DnrLHjwj.js";import"./DataAccessRequestAccessorsFilesForm-BUxSUcVD.js";import"./enums-8UZ-jtlD.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-IcJdAb4M.js";import"./RadioGroup-h-T1F84o.js";import"./Radio-DrLKHt1e.js";import"./SwitchBase-DGuqDH3e.js";import"./FormGroup-C_AmRPJM.js";import"./FormControlLabel-DJbMYuJO.js";import"./UploadDocumentField-B65O_6Pd.js";import"./FileUpload-CGOG5dqM.js";import"./ManagedACTAccessRequirementFormWikiWrapper-CcmuqrCW.js";import"./GridLegacy-DdWP4TB9.js";import"./ResearchProjectForm-BWXVktyr.js";import"./TextFieldWithWordLimit-CjY07WeW.js";import"./AuthenticatedRequirement-pjYKZy-O.js";import"./CertificationRequirement-Cj1IZ45A.js";import"./TwoFactorAuthEnabledRequirement-C0qzy_cN.js";import"./ValidationRequirement-CjMUcPXf.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-WqkAb3hC.js";import"./RejectDataAccessRequestModal-BdEoPFBG.js";import"./CannedRejectionDialog-DEaZ6CMZ.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-fMOwxCoC.js";import"./Checkbox-Cz2XkOYO.js";import"./Grid-C1yu_EgY.js";import"./upperFirst-BvJGb7Ee.js";import"./_stringToArray-D0zZTXZc.js";const tr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
