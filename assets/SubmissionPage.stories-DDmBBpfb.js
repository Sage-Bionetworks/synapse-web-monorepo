import{g as I,k as S,n as t,a2 as O,d_ as g,b as e,kr as i,ks as C,H as s,kt as l,p as m,ku as b,kv as T,ka as A}from"./iframe-Djv8MYNB.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-CRJo9b9a.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-CbbOYZRU.js";import"./useAccessRequirements-bXQ_1Iuc.js";import"./index-DkUUvlSe.js";import"./_baseOrderBy-CVzC67-B.js";import"./_baseIteratee-DzOJkO1l.js";import"./_baseMap-B3uOsC71.js";import"./_baseEach-liTqT7qy.js";import"./useQueries-iQS82f7J.js";import"./useInfiniteQuery-By8at75o.js";import"./groupBy-C0CFUh13.js";import"./_createAggregator-BVmDgvIf.js";import"./DialogBase-Bt09srou.js";import"./Close-Df0WyQYw.js";import"./HelpPopover-DVpvTiRQ.js";import"./MarkdownPopover-p5QWJMaq.js";import"./LightTooltip-CPJ4gklA.js";import"./MarkdownSynapse-D11UdXjT.js";import"./SkeletonButton-D377GQsO.js";import"./SkeletonInlineBlock-Bo6_99BY.js";import"./SkeletonTable-5bHQrafN.js";import"./SkeletonParagraph-CvIzEYe-.js";import"./EntityLink-CQqWwIfn.js";import"./useEntity-D1Vbp73T.js";import"./pickBy-B4gnU8TW.js";import"./isString-CT6WYqqB.js";import"./useSuspenseQuery-Bke-3bkA.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-C2CqcUzD.js";import"./useGetEntityHeaders-YVTgPJm0.js";import"./EntityIcon-C4gAyI6O.js";import"./ErrorChip-C8ZgST_d.js";import"./Chip-BC_6TuQR.js";import"./UserOrTeamBadge-DfEqzrbe.js";import"./UserBadge-BO7tdhe5.js";import"./useUserBundle-tM9bsliG.js";import"./MenuItem-B1PtcVYM.js";import"./Card-_to_Ymcq.js";import"./TeamBadge-CRgAuvop.js";import"./UnmanagedACTAccessRequirementItem-DsyQyhc5.js";import"./RequirementItem-DX6s3b-T.js";import"./LockTwoTone-C-BZ01et.js";import"./UserSearchBoxV2-D4hf_5Fo.js";import"./useDebouncedEffect-DmOjAIrg.js";import"./use-deep-compare-effect.esm-C91J9K-c.js";import"./uniq-Bdn3ztIc.js";import"./without-DrR_VujI.js";import"./Select-aab027f3.esm-Dnpe7q-T.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-Be3_krfa.js";import"./SelfSignAccessRequirementItem-7x7uGODh.js";import"./DataAccessRequestAccessorsFilesForm-CC39HCCm.js";import"./enums-BUyp-lYE.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-DcXNh_qN.js";import"./RadioGroup-DnPimTNE.js";import"./Radio-CZdA52c-.js";import"./SwitchBase-slp36AZK.js";import"./FormGroup-9WcFutCt.js";import"./FormControlLabel-DQneX3qL.js";import"./UploadDocumentField-chxh4Guf.js";import"./FileUpload-DQrUtRJs.js";import"./ManagedACTAccessRequirementFormWikiWrapper-THPKZ9Is.js";import"./GridLegacy-Dhry2rrJ.js";import"./ResearchProjectForm-CEKoirHx.js";import"./TextFieldWithWordLimit-Bc212sKU.js";import"./AuthenticatedRequirement-BT6XD6ob.js";import"./CertificationRequirement-CoJYh1_r.js";import"./TwoFactorAuthEnabledRequirement-BnlMxvAx.js";import"./ValidationRequirement-ycU2Az8t.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-QT9WodQ1.js";import"./RejectDataAccessRequestModal-l0NbwnAb.js";import"./CannedRejectionDialog-CQOpWfOI.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-Cxl5Efnn.js";import"./Checkbox-JxEZSJ4e.js";import"./Grid-SmLd1_qQ.js";import"./upperFirst-C__UvDGh.js";import"./_stringToArray-B96rrC2Z.js";const sr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(R=(c=n.parameters)==null?void 0:c.docs)==null?void 0:R.source}}};const or=["Demo","DemoError"];export{o as Demo,n as DemoError,or as __namedExportsOrder,sr as default};
