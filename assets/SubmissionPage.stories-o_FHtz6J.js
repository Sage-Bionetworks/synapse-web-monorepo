import{g as I,k as S,n as t,a2 as O,d_ as g,b as e,kp as i,kq as C,H as s,kr as l,p as m,ks as b,kt as T,k4 as A}from"./iframe-CnFFtBM5.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-C-YBo1_q.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-D4UpslgG.js";import"./useAccessRequirements-DDzrtyTK.js";import"./index-BSyMNs-U.js";import"./_baseOrderBy-82OEhp49.js";import"./_baseIteratee-BVMr-kVb.js";import"./_baseMap-BkngOU8S.js";import"./_baseEach-De-JfD7a.js";import"./useQueries-BF7Qkzzf.js";import"./useInfiniteQuery-CQzVs7Nm.js";import"./groupBy-DoZvwjGn.js";import"./_createAggregator-BIjQbBAT.js";import"./DialogBase-KF2hOckI.js";import"./Close-Dtzq_6wc.js";import"./HelpPopover-D_UunFPX.js";import"./MarkdownPopover-CzPIRMxY.js";import"./LightTooltip-Dl0q57ba.js";import"./MarkdownSynapse-CRdc62jY.js";import"./SkeletonButton-CClASP2Q.js";import"./SkeletonInlineBlock-SiFBwNDW.js";import"./SkeletonTable-CeXSUdJ0.js";import"./SkeletonParagraph-Bh_V5SGk.js";import"./EntityLink-BQMm6OMD.js";import"./useEntity-DTVkIL6t.js";import"./pickBy-vcWcat19.js";import"./isString-B3KL6qo9.js";import"./useSuspenseQuery-D8hCSSQZ.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Bx-Kc9ii.js";import"./useGetEntityHeaders-BQZ1dKpb.js";import"./EntityIcon-Df5vqSTx.js";import"./ErrorChip-CPY5ThBF.js";import"./Chip-B7HTEMX4.js";import"./UserOrTeamBadge-94BSY1Eg.js";import"./UserBadge-RHwyWXL_.js";import"./useUserBundle-C5RZncTV.js";import"./MenuItem-DeX5RPAC.js";import"./Card-DFm6JQIv.js";import"./TeamBadge-DCyXy8u3.js";import"./UnmanagedACTAccessRequirementItem-DH9iMd7g.js";import"./RequirementItem-AwjBYCq4.js";import"./LockTwoTone-CVcGq4EN.js";import"./UserSearchBoxV2-zFeRi4PM.js";import"./useDebouncedEffect-DQf3jctQ.js";import"./use-deep-compare-effect.esm-_S-D4OI6.js";import"./uniq-CjmDJsGa.js";import"./without-Dw0AmUic.js";import"./Select-aab027f3.esm-IgiVXpOj.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-ByPj7vdz.js";import"./SelfSignAccessRequirementItem-DIKZMdEj.js";import"./DataAccessRequestAccessorsFilesForm-B-5AqMyy.js";import"./enums-5YtokKXT.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-0tbse0Ha.js";import"./RadioGroup-El6UroqD.js";import"./Radio-D9oRIHzH.js";import"./SwitchBase-BUvuFp9Q.js";import"./FormGroup-u1jdIV4F.js";import"./FormControlLabel-Bli_r3Hb.js";import"./UploadDocumentField-3Rxq-jAI.js";import"./FileUpload-Bi9C1uh0.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BpuLPy87.js";import"./GridLegacy-DPj44OJs.js";import"./ResearchProjectForm-DicmeVvd.js";import"./TextFieldWithWordLimit-DZczdAEC.js";import"./AuthenticatedRequirement-CH3r1hP6.js";import"./CertificationRequirement-BT5Rm25R.js";import"./TwoFactorAuthEnabledRequirement-BSm-eoZ3.js";import"./ValidationRequirement-BbPI0g-Q.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-CAz6-Q6s.js";import"./RejectDataAccessRequestModal-Bs7Czn_x.js";import"./CannedRejectionDialog--9jl8_IC.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-CmTg6HIg.js";import"./Checkbox-BkPCt9V2.js";import"./Grid-BGJHGkXH.js";import"./upperFirst-CgH_NbIY.js";import"./_stringToArray-DZR9I2B9.js";const sr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,d;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
