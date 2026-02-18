import{g as u,k as d,n as t,a3 as c,e0 as R,b as e,kv as i,kw as E,H as s,kx as _,p as m,ky as I,kz as S,ke as O}from"./iframe-T7oLJ25f.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-BwUuP9y_.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-HTgHaqJF.js";import"./useAccessRequirements-G8_a63Qz.js";import"./index-BdhaPNFV.js";import"./_baseOrderBy-CM7pO5MO.js";import"./_baseIteratee-Dy1SfAsC.js";import"./_baseMap-Da-WRcVt.js";import"./_baseEach-CLkct6tL.js";import"./useQueries-CYX4p4ut.js";import"./useInfiniteQuery-D-UxbEMz.js";import"./groupBy-BhY5Q9XV.js";import"./_createAggregator-aMp1lnyV.js";import"./DialogBase-J7aweyN2.js";import"./Close-1h43D8ey.js";import"./HelpPopover-DSXOOapj.js";import"./MarkdownPopover-BuaJIUS8.js";import"./LightTooltip-d_5FyQ04.js";import"./MarkdownSynapse-BEmtf9mM.js";import"./SkeletonButton-BbQ1D2mw.js";import"./SkeletonInlineBlock-DDBz5ks6.js";import"./SkeletonTable-Iucvd8oY.js";import"./SkeletonParagraph-O68Vr_JV.js";import"./EntityLink-DXW0B4Vt.js";import"./useEntity-CXW7ZXO6.js";import"./pickBy-LjsbNNdy.js";import"./isString-B3VyUCFl.js";import"./useSuspenseQuery-0xwwePGu.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BV62bEP6.js";import"./useGetEntityHeaders-BqPziyzY.js";import"./EntityIcon-BnPC7XdH.js";import"./ErrorChip-CSv0jn1K.js";import"./Chip-CoqraAOn.js";import"./UserOrTeamBadge-VRE706p6.js";import"./UserBadge-BGdm1g_K.js";import"./useUserBundle-DLS_5O5Y.js";import"./MenuItem-CcVKVUSq.js";import"./Card-DUua1aJ8.js";import"./TeamBadge-D4MSEdBF.js";import"./UnmanagedACTAccessRequirementItem-DRZGiviB.js";import"./RequirementItem-DlIXDTV1.js";import"./LockTwoTone-pqCgWYd2.js";import"./UserSearchBoxV2-BZp5tPQx.js";import"./useDebouncedEffect-xn6PZLNB.js";import"./use-deep-compare-effect.esm-DWCQDhwA.js";import"./uniq-B94JdzcS.js";import"./without-9smdan5p.js";import"./Select-aab027f3.esm-PM9xqT5k.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-BN_gjT5a.js";import"./SelfSignAccessRequirementItem-CuEIGuzg.js";import"./DataAccessRequestAccessorsFilesForm-CaQcVuXG.js";import"./enums-BgRoPhI5.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-BdXVbDUA.js";import"./RadioGroup-dAsmlyaq.js";import"./Radio-CAFZykjz.js";import"./SwitchBase-DDKFHFxJ.js";import"./FormGroup-B94opkzR.js";import"./FormControlLabel-FS1tnZLz.js";import"./UploadDocumentField-BBYY4ccL.js";import"./FileUpload-CD0a8NPc.js";import"./ManagedACTAccessRequirementFormWikiWrapper-CVPL8JMT.js";import"./GridLegacy-DwFqcFmw.js";import"./ResearchProjectForm-D-0j5xB2.js";import"./TextFieldWithWordLimit-CkgION-6.js";import"./AuthenticatedRequirement-JF0ct76u.js";import"./CertificationRequirement-qQv03rOr.js";import"./TwoFactorAuthEnabledRequirement-CV9B_d1P.js";import"./ValidationRequirement-oQakQcu_.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-CJLwAWjb.js";import"./RejectDataAccessRequestModal-C3gWo_J0.js";import"./CannedRejectionDialog-DieOE54Q.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-CRRWyf25.js";import"./Checkbox-R1y8ieM8.js";import"./Grid-D792T7zJ.js";import"./upperFirst-Js5tMKXQ.js";import"./_stringToArray-CGGzxCkF.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
