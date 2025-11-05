import{g as I,k as S,n as t,a2 as O,an as g,b as e,kr as i,ks as C,H as s,kt as l,p as m,ku as b,kv as T,k6 as A}from"./iframe-DNJeJ5iA.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-k1RiX387.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-DgFLgg7m.js";import"./useAccessRequirements-BJL84sZ9.js";import"./index-CvnLitu3.js";import"./_baseOrderBy-CyGfbCWE.js";import"./_baseIteratee-CpPioSPx.js";import"./_baseMap-DdsroZ9h.js";import"./_baseEach-BNKOyPrU.js";import"./useQueries-BMjBIuDb.js";import"./useInfiniteQuery-Br--10f9.js";import"./groupBy-BYI9Mjm6.js";import"./_createAggregator-CW1Z-2pT.js";import"./DialogBase-CE44SEYA.js";import"./Close-BKUp_exR.js";import"./HelpPopover-CF0Dq4Vm.js";import"./MarkdownPopover-DoRIMtwC.js";import"./LightTooltip-DsJ2BEeZ.js";import"./MarkdownSynapse-DzSnHMfD.js";import"./SkeletonButton-BUOacwJB.js";import"./SkeletonInlineBlock-BeQwzjXN.js";import"./SkeletonTable-DVr3y68U.js";import"./SkeletonParagraph-D6w9BO_7.js";import"./EntityLink-Uokr8dO4.js";import"./useEntity-BEmwNYr1.js";import"./pickBy-DPB3oBK6.js";import"./isString-DOGPTrHh.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DLDN3id7.js";import"./useGetEntityHeaders-C0tSQ8O8.js";import"./EntityIcon--F2d1MSQ.js";import"./ErrorChip-WmDvxW_7.js";import"./Chip-F4DxftXR.js";import"./UserOrTeamBadge-BTN_iAs4.js";import"./UserBadge-DH_o0r3v.js";import"./MenuItem-CT67I_PA.js";import"./Card-hxfs1Pfl.js";import"./TeamBadge-D9eX9Mpp.js";import"./UnmanagedACTAccessRequirementItem-DYbGY538.js";import"./RequirementItem-Cad26Shu.js";import"./LockTwoTone-DXR1A1Rg.js";import"./UserSearchBoxV2-Bn7uqWSl.js";import"./useDebouncedEffect-BN7z__PV.js";import"./use-deep-compare-effect.esm-D3PGmV3S.js";import"./uniq-BSqZ-QXm.js";import"./without-U0AyJbDd.js";import"./Select-aab027f3.esm-Cl4cn728.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-O2j0Xsj5.js";import"./SelfSignAccessRequirementItem-D3lIXInf.js";import"./DataAccessRequestAccessorsFilesForm-nuKRfWj6.js";import"./enums-2tCaPdb0.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-BHQColDS.js";import"./RadioGroup-DHZAR6uM.js";import"./Radio-DJSCc87C.js";import"./SwitchBase-DvvguGJm.js";import"./FormGroup-DLsi-gm9.js";import"./FormControlLabel-BOTHUCHT.js";import"./UploadDocumentField-Dltsu1l9.js";import"./FileUpload-CxdhDcsO.js";import"./ManagedACTAccessRequirementFormWikiWrapper-DYs_zV_4.js";import"./GridLegacy-BBNQ6p-B.js";import"./ResearchProjectForm-CcM3bCwN.js";import"./TextFieldWithWordLimit-DGBgPsUZ.js";import"./AuthenticatedRequirement-CwrPlpC2.js";import"./CertificationRequirement-C6Tu0tsj.js";import"./TwoFactorAuthEnabledRequirement-Cv2SwzYY.js";import"./ValidationRequirement-CaCCD9xw.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-BzzBpTAW.js";import"./RejectDataAccessRequestModal-DNJppMgS.js";import"./CannedRejectionDialog-BSgeb-gS.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-DnlJR0qi.js";import"./Checkbox-CuIt-Arc.js";import"./Grid-BVNpB9GF.js";import"./upperFirst-WMcZIUWT.js";import"./_stringToArray-Bs383xmq.js";const tr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
