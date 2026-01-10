import{g as u,k as d,n as t,a2 as c,d_ as R,b as e,kr as i,ks as E,H as s,kt as _,p as m,ku as I,kv as S,ka as O}from"./iframe-DtOCV9ZO.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-BDR2PiNR.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-BrLybY7_.js";import"./useAccessRequirements-CnF7zoc9.js";import"./index-CtezEvjc.js";import"./_baseOrderBy-Bbv9ZUQX.js";import"./_baseIteratee-BeERohTt.js";import"./_baseMap-CPsPgwJJ.js";import"./_baseEach-Cu1g2duW.js";import"./useQueries-6xM6HhA6.js";import"./useInfiniteQuery-BrzIGqoa.js";import"./groupBy-Bgh41ALg.js";import"./_createAggregator-BavzNXRY.js";import"./DialogBase-BWg90ihX.js";import"./Close-D6GiZp3q.js";import"./HelpPopover-Cdi7BMOo.js";import"./MarkdownPopover-DA9u2k23.js";import"./LightTooltip-7xtsJ5TU.js";import"./MarkdownSynapse-DtveY7cQ.js";import"./SkeletonButton-BW-Av5i1.js";import"./SkeletonInlineBlock-CzzA0rkX.js";import"./SkeletonTable-DpWsxm1f.js";import"./SkeletonParagraph-BvB6yuWG.js";import"./EntityLink-Bvk7WOpu.js";import"./useEntity-B3UI8wvz.js";import"./pickBy-BZq1ALQx.js";import"./isString-DEn23QUL.js";import"./useSuspenseQuery-SVjMJt8R.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-HsFiPHD1.js";import"./useGetEntityHeaders-BaSvgf7u.js";import"./EntityIcon-BbaflQf2.js";import"./ErrorChip-DAUxKXFM.js";import"./Chip-Br7md4nX.js";import"./UserOrTeamBadge-CANpISgL.js";import"./UserBadge-_qm-t3iK.js";import"./useUserBundle-DsiIiz9w.js";import"./MenuItem-BuDWfjYg.js";import"./Card-D-t8GO5w.js";import"./TeamBadge-A2BWui1D.js";import"./UnmanagedACTAccessRequirementItem-Dx9YT9OD.js";import"./RequirementItem-BOQ61lj-.js";import"./LockTwoTone-BjU2KIoz.js";import"./UserSearchBoxV2-D-pR9isa.js";import"./useDebouncedEffect-B9F524Qh.js";import"./use-deep-compare-effect.esm-BtvNeIL9.js";import"./uniq-DZ1P1ajM.js";import"./without-DKw0A8ap.js";import"./Select-aab027f3.esm-DqtTF3IF.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-C8hQtCUg.js";import"./SelfSignAccessRequirementItem-B0BrIJcI.js";import"./DataAccessRequestAccessorsFilesForm-9G4FuJmn.js";import"./enums-syS6Z6tX.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-w7EItidR.js";import"./RadioGroup-pLmlxQvR.js";import"./Radio-DnX-lcum.js";import"./SwitchBase-7rd93fjV.js";import"./FormGroup-j32SvYlP.js";import"./FormControlLabel-ySuzlJSZ.js";import"./UploadDocumentField-BSyEdJRJ.js";import"./FileUpload-DCqdqT63.js";import"./ManagedACTAccessRequirementFormWikiWrapper-B4ikrgQk.js";import"./GridLegacy-B-rjKHDY.js";import"./ResearchProjectForm-Cy26XzDj.js";import"./TextFieldWithWordLimit-DREQwyiD.js";import"./AuthenticatedRequirement-DcYMJ1l2.js";import"./CertificationRequirement-v0edUO88.js";import"./TwoFactorAuthEnabledRequirement-BYY0PDnH.js";import"./ValidationRequirement-CGVafiZl.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-DoBRh4sf.js";import"./RejectDataAccessRequestModal-KC8tombr.js";import"./CannedRejectionDialog-DCBJ4hK1.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-BIEXc5Nr.js";import"./Checkbox-DjdRQ8d3.js";import"./Grid-C1XjfvKJ.js";import"./upperFirst-CN63WRoy.js";import"./_stringToArray-C4hRpv5Q.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
