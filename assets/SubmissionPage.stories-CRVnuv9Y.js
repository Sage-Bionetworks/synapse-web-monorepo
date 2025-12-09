import{g as I,k as S,n as t,a2 as O,d_ as g,b as e,kr as i,ks as C,H as s,kt as l,p as m,ku as b,kv as T,ka as A}from"./iframe-mfaqAuKn.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-DJwaoKbA.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-5gYYsNiM.js";import"./useAccessRequirements-Ba3EFSgx.js";import"./index-D3AHZnx8.js";import"./_baseOrderBy-5R4U94mW.js";import"./_baseIteratee-DEOpNloE.js";import"./_baseMap-1AzMXr6e.js";import"./_baseEach-_IDFhxIe.js";import"./useQueries-CXO38aGV.js";import"./useInfiniteQuery-CFl_zl7K.js";import"./groupBy-wKISzIui.js";import"./_createAggregator-D2l_exp5.js";import"./DialogBase-BA7H051B.js";import"./Close-YScbRJtZ.js";import"./HelpPopover-CYTH5UW2.js";import"./MarkdownPopover-B-BPuZn1.js";import"./LightTooltip-BuyZuxhp.js";import"./MarkdownSynapse-ChHwalJV.js";import"./SkeletonButton-Df6Re1Ke.js";import"./SkeletonInlineBlock-B--4faiZ.js";import"./SkeletonTable-CQAWTA0x.js";import"./SkeletonParagraph-BK2WyijI.js";import"./EntityLink-DQeqmojQ.js";import"./useEntity-CMPy2fyR.js";import"./pickBy-yTL7T7iJ.js";import"./isString-CpEOJJ0O.js";import"./useSuspenseQuery-Ck8XhOTY.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DbTK85fi.js";import"./useGetEntityHeaders-BsyqJ5FP.js";import"./EntityIcon-C7ec2cVS.js";import"./ErrorChip-BZlFdNxL.js";import"./Chip-BGU9tTve.js";import"./UserOrTeamBadge-CF7tA5NW.js";import"./UserBadge-Bqjav_Ws.js";import"./useUserBundle-DyICHo5Z.js";import"./MenuItem-Ce4v9NmO.js";import"./Card-DtMWtPD2.js";import"./TeamBadge-CAM1kjxf.js";import"./UnmanagedACTAccessRequirementItem-BHRLoTTp.js";import"./RequirementItem-CF5JYsqI.js";import"./LockTwoTone-Bh2Qp3pm.js";import"./UserSearchBoxV2-Dvb4KSLm.js";import"./useDebouncedEffect-BT7rG54I.js";import"./use-deep-compare-effect.esm-BVXF_Pc-.js";import"./uniq-4uLo8lp5.js";import"./without-KQtmhIWX.js";import"./Select-aab027f3.esm-wYGPny1m.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-BNwuGPzi.js";import"./SelfSignAccessRequirementItem-q7FOMG5f.js";import"./DataAccessRequestAccessorsFilesForm-XoH_pPEG.js";import"./enums-DJxiK91A.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-BnrU-6cu.js";import"./RadioGroup-_IbP135o.js";import"./Radio-CerFtbUo.js";import"./SwitchBase-N2YArUPS.js";import"./FormGroup-wt8T43Qe.js";import"./FormControlLabel-phRtYxCJ.js";import"./UploadDocumentField-91PvFVZ_.js";import"./FileUpload-DAp7yB5E.js";import"./ManagedACTAccessRequirementFormWikiWrapper-DXQXM6dX.js";import"./GridLegacy-CQP-_3_d.js";import"./ResearchProjectForm-CLYanm-H.js";import"./TextFieldWithWordLimit-ChhGmNOo.js";import"./AuthenticatedRequirement-C-v2fgyw.js";import"./CertificationRequirement-DHWmFdmD.js";import"./TwoFactorAuthEnabledRequirement-DxIGkqxj.js";import"./ValidationRequirement-BQ0-wcaR.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-C24-j2Of.js";import"./RejectDataAccessRequestModal--kIAjEB9.js";import"./CannedRejectionDialog-DmuAFnOW.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-DK1C4L_H.js";import"./Checkbox-BXDlWSV_.js";import"./Grid-Dx1aGtKO.js";import"./upperFirst-BQUUS5OY.js";import"./_stringToArray-BWsdv7jD.js";const sr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
