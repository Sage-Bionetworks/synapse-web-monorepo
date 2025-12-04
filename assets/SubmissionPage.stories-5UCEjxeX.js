import{g as I,k as S,n as t,a2 as O,d_ as g,b as e,kp as i,kq as C,H as s,kr as l,p as m,ks as b,kt as T,k4 as A}from"./iframe-BjuWmOGi.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-DZ39P4Cy.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-C6Zg_FkH.js";import"./useAccessRequirements-B-sZn_wz.js";import"./index-DkRGUkVV.js";import"./_baseOrderBy-CgjyISJW.js";import"./_baseIteratee-BMPI0n1s.js";import"./_baseMap-0Bp-WUWh.js";import"./_baseEach-YBB0h5kf.js";import"./useQueries-C7jhvuGS.js";import"./useInfiniteQuery-C1IsBcDW.js";import"./groupBy-CfJilsOm.js";import"./_createAggregator-l2fg5jQ-.js";import"./DialogBase-0BLPZ86t.js";import"./Close-B62x5WHs.js";import"./HelpPopover-BkI75ct6.js";import"./MarkdownPopover-zCTHVRdN.js";import"./LightTooltip-EAnXddzG.js";import"./MarkdownSynapse-BQfJHOxx.js";import"./SkeletonButton-DB1uc2E1.js";import"./SkeletonInlineBlock-CVuN0wiI.js";import"./SkeletonTable-CigWUdbM.js";import"./SkeletonParagraph-D6mW9cd8.js";import"./EntityLink-DlPTtWTu.js";import"./useEntity-BmPkcNlt.js";import"./pickBy-oh4ohDbb.js";import"./isString-SjnShR5k.js";import"./useSuspenseQuery-DmE9zOqq.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Pni8KKTd.js";import"./useGetEntityHeaders-C8AiTDuR.js";import"./EntityIcon-Bnk4AEuR.js";import"./ErrorChip-CG9nj8xE.js";import"./Chip-Ce4i36Hi.js";import"./UserOrTeamBadge-mZUanJpv.js";import"./UserBadge-CUAwb9LE.js";import"./useUserBundle-B95nWVpb.js";import"./MenuItem-D-8sEbrT.js";import"./Card-DL7hh3kA.js";import"./TeamBadge-B3nrrbfj.js";import"./UnmanagedACTAccessRequirementItem-m3ba_Hzt.js";import"./RequirementItem-rnR1V7q0.js";import"./LockTwoTone-B_oT2J8G.js";import"./UserSearchBoxV2-E3EEBGsI.js";import"./useDebouncedEffect-DmU8aYLM.js";import"./use-deep-compare-effect.esm-CKvc0cS6.js";import"./uniq-CmRSxbmj.js";import"./without-B10tC6pS.js";import"./Select-aab027f3.esm-0q2lS6KB.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-BC5sUnL0.js";import"./SelfSignAccessRequirementItem-CszDjvjO.js";import"./DataAccessRequestAccessorsFilesForm-D45u24ut.js";import"./enums-Bu6pNwVX.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-CqzxZzp9.js";import"./RadioGroup-BZQXsZJS.js";import"./Radio-DEijA1Ll.js";import"./SwitchBase-VeURP3dA.js";import"./FormGroup-DkQhoO0F.js";import"./FormControlLabel-Pg9rhhJW.js";import"./UploadDocumentField-BGb7Pcgn.js";import"./FileUpload-BJfup-oI.js";import"./ManagedACTAccessRequirementFormWikiWrapper-Dybw2_TH.js";import"./GridLegacy-ogeEFY3d.js";import"./ResearchProjectForm-B0YqgDRr.js";import"./TextFieldWithWordLimit-5ZmPbNZm.js";import"./AuthenticatedRequirement-DFbp4bDy.js";import"./CertificationRequirement-CEBOlRme.js";import"./TwoFactorAuthEnabledRequirement-DrZMcn8S.js";import"./ValidationRequirement-Bvg2MX7y.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-BAPV6Sgm.js";import"./RejectDataAccessRequestModal-DMbFn9PH.js";import"./CannedRejectionDialog-CGqh3bTd.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-DppO_-Vj.js";import"./Checkbox-Ckhn1YcA.js";import"./Grid-CTrAtZUN.js";import"./upperFirst-DkaH32ol.js";import"./_stringToArray-CaY8-hff.js";const sr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,d;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,c,R;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
