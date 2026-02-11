import{g as u,k as d,n as t,a3 as c,e0 as R,b as e,kv as i,kw as E,H as s,kx as _,p as m,ky as I,kz as S,ke as O}from"./iframe-BNuX63Gg.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-DvYXexKN.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-Caj79SbZ.js";import"./useAccessRequirements-_0RQX0yI.js";import"./index-CsZzG_M-.js";import"./_baseOrderBy-IYGbYqmr.js";import"./_baseIteratee-BV0dwrmo.js";import"./_baseMap-8byQYP5F.js";import"./_baseEach-CkrVvfzN.js";import"./useQueries-92nI7yPX.js";import"./useInfiniteQuery-ETBFsHKX.js";import"./groupBy-BPs4Qcx5.js";import"./_createAggregator-ci3cIJOJ.js";import"./DialogBase-CT_QCuKJ.js";import"./Close-DnYx9FSk.js";import"./HelpPopover-BxitrOSl.js";import"./MarkdownPopover-Cqj5utYy.js";import"./LightTooltip-B2c4vJ-r.js";import"./MarkdownSynapse-CllS4xt7.js";import"./SkeletonButton-Q_wdDaMT.js";import"./SkeletonInlineBlock-BaXmg-Ho.js";import"./SkeletonTable-B24h57Dq.js";import"./SkeletonParagraph-Bh-mJsSp.js";import"./EntityLink-CqZYJN6J.js";import"./useEntity-3KpRmlIl.js";import"./pickBy-MqZLkr5W.js";import"./isString-CUEBVvBN.js";import"./useSuspenseQuery-5mc94Bck.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DAdG-b2G.js";import"./useGetEntityHeaders-DiFB5Zwy.js";import"./EntityIcon-2anmf3qi.js";import"./ErrorChip-vdAsbLyw.js";import"./Chip-Dbkz0kTt.js";import"./UserOrTeamBadge-C3ixqtAK.js";import"./UserBadge-DiHQ1_7F.js";import"./useUserBundle-BeMY8viL.js";import"./MenuItem-QgPCDudv.js";import"./Card-o20fYyBP.js";import"./TeamBadge-bUN2zYg9.js";import"./UnmanagedACTAccessRequirementItem-DjdX9XKc.js";import"./RequirementItem-ClItA_DE.js";import"./LockTwoTone-BoBkoRh3.js";import"./UserSearchBoxV2-C0q7COL3.js";import"./useDebouncedEffect-BLdJbogE.js";import"./use-deep-compare-effect.esm-DawoZLOl.js";import"./uniq-yHAgUkeJ.js";import"./without-EiPJ8F95.js";import"./Select-aab027f3.esm-CDKLzpoI.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-9JY3yyQK.js";import"./SelfSignAccessRequirementItem-BwznRGJj.js";import"./DataAccessRequestAccessorsFilesForm-C310saFV.js";import"./enums-BwuVJP_H.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-CfsEb9-U.js";import"./RadioGroup-k7eUTwGZ.js";import"./Radio-Bj8k1w4U.js";import"./SwitchBase-DQ3y_lJs.js";import"./FormGroup-C7VwY6p-.js";import"./FormControlLabel-CzBjWoYC.js";import"./UploadDocumentField-BCJ7BE_q.js";import"./FileUpload-CrUpKYwB.js";import"./ManagedACTAccessRequirementFormWikiWrapper-D9dWLBRB.js";import"./GridLegacy-VREhilKw.js";import"./ResearchProjectForm-SQx9Y8cz.js";import"./TextFieldWithWordLimit-Vn56dfCn.js";import"./AuthenticatedRequirement-CfuDGCh8.js";import"./CertificationRequirement-CullP4Sq.js";import"./TwoFactorAuthEnabledRequirement-MtWEPJiA.js";import"./ValidationRequirement-nuUJdDQH.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-SiB-w1xW.js";import"./RejectDataAccessRequestModal-BWzBtW7-.js";import"./CannedRejectionDialog-3RSJS-Rw.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-w4vciXYo.js";import"./Checkbox-CM0Tixh-.js";import"./Grid-DJDQfnqx.js";import"./upperFirst-BNcLNK9a.js";import"./_stringToArray-BgAzkCSB.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
