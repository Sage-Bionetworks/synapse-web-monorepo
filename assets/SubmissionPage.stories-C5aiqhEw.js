import{g as I,k as S,n as t,a2 as O,e2 as g,b as e,kt as i,ku as C,H as s,kv as l,p as m,kw as b,kx as T,k8 as A}from"./iframe-BWoxTCTX.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-BuQ3anm1.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-Bf4KBYHI.js";import"./useAccessRequirements-mAF70aXt.js";import"./index-5LTwdmKr.js";import"./_baseOrderBy-0yWC6QnQ.js";import"./_baseIteratee-Dnn4YH6E.js";import"./_baseMap-BjjJ5wwm.js";import"./_baseEach-BPp_zO2O.js";import"./useQueries-B7bat4DS.js";import"./useInfiniteQuery-BFw00c2J.js";import"./groupBy-C2k-cSF0.js";import"./_createAggregator-Cc8oj8s_.js";import"./DialogBase-CKSePREQ.js";import"./Close-C-cK2lYC.js";import"./HelpPopover-CUR8Ata8.js";import"./MarkdownPopover-BOtUKsGI.js";import"./LightTooltip-BCeCgvjx.js";import"./MarkdownSynapse--YX1K4_Z.js";import"./SkeletonButton-DXw0folj.js";import"./SkeletonInlineBlock-BaZVo3o2.js";import"./SkeletonTable-CL-McIOd.js";import"./SkeletonParagraph-C8b1sIfc.js";import"./EntityLink-DS-ZpkED.js";import"./useEntity-CpNVHOmb.js";import"./pickBy-Kpx_SBE9.js";import"./isString-BOx_ak6Z.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-C0QJFTTF.js";import"./useGetEntityHeaders-CiU31_Oa.js";import"./EntityIcon-BK6WBDFO.js";import"./ErrorChip-Cm8OJJzn.js";import"./Chip-BAz2TZVD.js";import"./UserOrTeamBadge-CGc9IVkr.js";import"./UserBadge-fOqD1Jo7.js";import"./MenuItem-Cb5PHefC.js";import"./Card-DGhLT-5R.js";import"./TeamBadge-KiRO02Ur.js";import"./UnmanagedACTAccessRequirementItem-Bph_EhTt.js";import"./RequirementItem-CabA1thd.js";import"./LockTwoTone-DJQRoyl6.js";import"./UserSearchBoxV2-XisVRZWc.js";import"./useDebouncedEffect-CU1dj_I2.js";import"./use-deep-compare-effect.esm-CLHbK7aY.js";import"./uniq-rMnJ_xco.js";import"./without-iTE0D7V6.js";import"./Select-aab027f3.esm-CRJrxeXm.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-D956ifi1.js";import"./SelfSignAccessRequirementItem-Cl6iggzQ.js";import"./DataAccessRequestAccessorsFilesForm-BdFI7pcd.js";import"./enums-CIFMKXP_.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-zpalcHrE.js";import"./RadioGroup-CmwSqDsg.js";import"./Radio-B8VxSV1o.js";import"./SwitchBase-B-PayEdB.js";import"./FormGroup-6gQlFaye.js";import"./FormControlLabel-eGU9xjNz.js";import"./UploadDocumentField-C_V-nVir.js";import"./FileUpload-DM0WEHiY.js";import"./ManagedACTAccessRequirementFormWikiWrapper-DsOebjql.js";import"./GridLegacy-9xmQJQ6x.js";import"./ResearchProjectForm-Dz_s7jGW.js";import"./TextFieldWithWordLimit-DxpWhACF.js";import"./AuthenticatedRequirement-BlvIf5IR.js";import"./CertificationRequirement-bO623P-s.js";import"./TwoFactorAuthEnabledRequirement-DL5Zpujk.js";import"./ValidationRequirement-o16aDtrY.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-Tg5W4Bgw.js";import"./RejectDataAccessRequestModal-C5-iszMs.js";import"./CannedRejectionDialog-4sVfqhR-.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-DvY5OfgH.js";import"./Checkbox-BaMHxi0X.js";import"./Grid-DVx9HP_b.js";import"./upperFirst-OAfli_hk.js";import"./_stringToArray-BWJL67oG.js";const tr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
