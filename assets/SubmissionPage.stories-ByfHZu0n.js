import{z as d,b as e,o as u,s as t,kp as i,kq as c,H as s,kr as R,i as m,ks as E,kt as _,a0 as I,dG as S,k8 as O}from"./iframe-C5G3mSsR.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-DKn9H8Fk.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-BU9EE108.js";import"./useAccessRequirements-DUGTLQvp.js";import"./index-ZLaaxmrv.js";import"./_baseOrderBy-DzTN0t1b.js";import"./_baseIteratee-BJFOXZpA.js";import"./_baseMap-KZgyx6ES.js";import"./_baseEach-xqhXeHjp.js";import"./useInfiniteQuery-DjR-9fP5.js";import"./groupBy-NoJjjEnd.js";import"./_createAggregator-qnvQvqxn.js";import"./DialogBase-D3E-ORM4.js";import"./Close-DMmJiCqc.js";import"./HelpPopover-TqGD_tY5.js";import"./MarkdownPopover-C1geqiut.js";import"./LightTooltip-BCSWtQqF.js";import"./MarkdownSynapse-BKYTzrKF.js";import"./SkeletonButton-_Eu_07NL.js";import"./SkeletonInlineBlock-BpaxCT_H.js";import"./SkeletonTable-q_wTrDuF.js";import"./SkeletonParagraph-B8DwnroK.js";import"./EntityLink-BsDdUXcb.js";import"./useEntity-CcWu8fd8.js";import"./pickBy-B33oLEkQ.js";import"./isString-Du3YB3Zp.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Bf--ncRy.js";import"./useGetEntityHeaders-BsuVYC_p.js";import"./EntityIcon-AQQENdO-.js";import"./ErrorChip-Bjr3rX-g.js";import"./Chip-j4Xp3f_v.js";import"./UserOrTeamBadge-BLU7eoyA.js";import"./useUserGroupHeader-9PNLN8Yb.js";import"./TeamBadge-DEXjEt4D.js";import"./UserBadge-CvgJynwa.js";import"./useUserBundle-b7Uv0-A-.js";import"./MenuItem-DBKy37Hp.js";import"./Card-cZbkiVcl.js";import"./UnmanagedACTAccessRequirementItem-CAbNW3li.js";import"./RequirementItem-BD6dvIrZ.js";import"./LockTwoTone-DsMfWpsx.js";import"./ManagedACTAccessRequirementItemView-QxNgElIV.js";import"./SelfSignAccessRequirementItem-BqLGaBfv.js";import"./DataAccessRequestAccessorsFilesForm-BUjq383o.js";import"./enums-BBTj0zY-.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-DC7TTXmA.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-CPgOeb1w.js";import"./UserSearchBox-CjGP-vtF.js";import"./useDebouncedEffect-CE8T3ull.js";import"./Autocomplete-BXFPR9ju.js";import"./usePreviousProps-CGWoFtrf.js";import"./RadioGroup-Ct9qeCg4.js";import"./Radio-DbvYBMjY.js";import"./SwitchBase-CO_2vZSB.js";import"./FormGroup-CNOMkbjr.js";import"./FormControlLabel-k-SWrQ8f.js";import"./UploadDocumentField-DHrdFtOO.js";import"./FileUpload-CjI5JAsr.js";import"./ManagedACTAccessRequirementFormWikiWrapper-DgZv3Nx_.js";import"./GridLegacy-BPQHlFzN.js";import"./ResearchProjectForm-DbcneTfu.js";import"./TextFieldWithWordLimit-CKQxTNpZ.js";import"./AuthenticatedRequirement-DyImo7Ey.js";import"./CertificationRequirement-C-mEow9z.js";import"./TwoFactorAuthEnabledRequirement-DBtQqkXs.js";import"./ValidationRequirement-BMPzmoUO.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-HXxLg_nl.js";import"./RejectDataAccessRequestModal-Dn6CBMdP.js";import"./CannedRejectionDialog-CCLC---8.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-Br5927dU.js";import"./Checkbox-CB1vuwHn.js";import"./Grid-C1orS3f4.js";import"./upperFirst-8YHO185K.js";import"./_stringToArray-GPdrc_Ii.js";const Je={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${R(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${E(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Ve=["Demo","DemoError"];export{o as Demo,n as DemoError,Ve as __namedExportsOrder,Je as default};
