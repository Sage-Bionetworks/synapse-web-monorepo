import{g as I,k as S,n as t,a2 as O,an as g,b as e,kr as i,ks as C,H as s,kt as l,p as m,ku as b,kv as T,k6 as A}from"./iframe-kh7i1csa.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-aT9fF7HV.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-BbKMeHeZ.js";import"./useAccessRequirements-C0APFYXT.js";import"./index-BmXyVNEx.js";import"./_baseOrderBy-CqcX2iUX.js";import"./_baseIteratee-CNSij9QJ.js";import"./_baseMap-BsEQLRd5.js";import"./_baseEach-C-q0c1u0.js";import"./useQueries-gSpjMszZ.js";import"./useInfiniteQuery-DYbKlyxH.js";import"./groupBy-3vHGIfxQ.js";import"./_createAggregator-ClyW0yBd.js";import"./DialogBase-BL1IBdld.js";import"./Close-Cx-5EQFG.js";import"./HelpPopover-BJBDK_g9.js";import"./MarkdownPopover-4Eys4uDE.js";import"./LightTooltip-CpgsJh3_.js";import"./MarkdownSynapse-BXo153sN.js";import"./SkeletonButton-B_CN37W2.js";import"./SkeletonInlineBlock-ClnumZW6.js";import"./SkeletonTable-BqcwQAxC.js";import"./SkeletonParagraph-BnqUYHvv.js";import"./EntityLink-CRKbnt2E.js";import"./useEntity-C1yyUaFg.js";import"./pickBy-COpr4INF.js";import"./isString-BzYB4S-B.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DJ7rMmas.js";import"./useGetEntityHeaders-Bg1AMix9.js";import"./EntityIcon-DnGNi4QV.js";import"./ErrorChip-BkFZ21y1.js";import"./Chip-BOVRxSkP.js";import"./UserOrTeamBadge-lWvXpb5L.js";import"./UserBadge-CdRmIen3.js";import"./MenuItem-CfQGt1HR.js";import"./Card-CcySjyv2.js";import"./TeamBadge-Cl2ueHwO.js";import"./UnmanagedACTAccessRequirementItem-CxnOBLbb.js";import"./RequirementItem-BMTDSSKp.js";import"./LockTwoTone-B42v6zCl.js";import"./UserSearchBoxV2-Ca-x9gNQ.js";import"./useDebouncedEffect-TX9PC0FH.js";import"./use-deep-compare-effect.esm-B88DIzUC.js";import"./uniq-C6C8K34y.js";import"./without-B_273GKB.js";import"./Select-aab027f3.esm-CSUHZq12.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-q8E0y0YU.js";import"./SelfSignAccessRequirementItem-7OZwv2lW.js";import"./DataAccessRequestAccessorsFilesForm-DSuposlY.js";import"./enums-BfA0Jntc.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-DKlZftXy.js";import"./RadioGroup-BVYEgdFY.js";import"./Radio-B0W9sHa3.js";import"./SwitchBase-jMUczUFb.js";import"./FormGroup-QCZKBm1U.js";import"./FormControlLabel-BdtGU7On.js";import"./UploadDocumentField-CgoKlP6X.js";import"./FileUpload-DX6JWbt3.js";import"./ManagedACTAccessRequirementFormWikiWrapper-4oDqVOQ8.js";import"./GridLegacy-ZqbjlI9w.js";import"./ResearchProjectForm-D5zJGLA_.js";import"./TextFieldWithWordLimit-DwDggd8V.js";import"./AuthenticatedRequirement-0MQNKy1V.js";import"./CertificationRequirement-BUCYznfp.js";import"./TwoFactorAuthEnabledRequirement-hgpK31kZ.js";import"./ValidationRequirement-sCPk0e-t.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-BY1UVUYk.js";import"./RejectDataAccessRequestModal-dSAV0a0t.js";import"./CannedRejectionDialog-DWNwaXzD.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-BNscjmOg.js";import"./Checkbox-BwE9-nDN.js";import"./Grid-nnrsqVv6.js";import"./upperFirst-f9qG6sZG.js";import"./_stringToArray-DTAGKDJL.js";const tr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
