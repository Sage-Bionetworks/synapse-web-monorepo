import{g as u,k as d,n as t,a3 as c,dP as R,b as e,kr as i,ks as E,H as s,kt as _,p as m,ku as I,kv as S,ka as O}from"./iframe-9Dp3veeu.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-CpaLSVKt.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-LDrtHEEW.js";import"./useAccessRequirements-DLLm8Ex9.js";import"./index-SBatv29g.js";import"./_baseOrderBy-BAW_8EQV.js";import"./_baseIteratee-BdYCFxHU.js";import"./_baseMap-BE81D0D0.js";import"./_baseEach-CZKI3vcT.js";import"./useInfiniteQuery-Db6GiRYb.js";import"./groupBy-DnimklLW.js";import"./_createAggregator-COp81B3V.js";import"./DialogBase-wgKSPL2s.js";import"./Close-RKCQt29o.js";import"./HelpPopover-CV1i3nJO.js";import"./MarkdownPopover-DoQCnLPw.js";import"./LightTooltip-TjP4VxGs.js";import"./MarkdownSynapse-D2Pk-B6S.js";import"./SkeletonButton-COK1UYfn.js";import"./SkeletonInlineBlock-BcYTxiw0.js";import"./SkeletonTable-Cjl9F2Dt.js";import"./SkeletonParagraph-Cn0395FS.js";import"./EntityLink-CTfl4CS0.js";import"./useEntity-D50J89pv.js";import"./pickBy-CpMnZzU7.js";import"./isString-BcDOty8O.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BzblwMUL.js";import"./useGetEntityHeaders-rImvv5h-.js";import"./EntityIcon-CjiFbO8m.js";import"./ErrorChip-fTdTz-mh.js";import"./Chip-gPffx778.js";import"./UserOrTeamBadge-DBX5ht5y.js";import"./UserBadge-Ct4ZfEmE.js";import"./useUserBundle-a5rfcdNm.js";import"./MenuItem-BJVfKgip.js";import"./Card--VJgiAYz.js";import"./TeamBadge-B7smeN3E.js";import"./UnmanagedACTAccessRequirementItem-BcBh9yiR.js";import"./RequirementItem-Ctol4gSf.js";import"./LockTwoTone-HggOfCAw.js";import"./UserSearchBoxV2-CVQ_CSBc.js";import"./useDebouncedEffect-Csoh_NSa.js";import"./use-deep-compare-effect.esm-ARdEFuBi.js";import"./uniq-VUUwasH2.js";import"./without-L0_X9Am6.js";import"./Select-aab027f3.esm-DvNNaR-p.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-DILrB2Lq.js";import"./SelfSignAccessRequirementItem-CvAR0NhY.js";import"./DataAccessRequestAccessorsFilesForm-BUM_FCDg.js";import"./enums-KK4WHYJG.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-DcLmB_ZO.js";import"./RadioGroup-BcG21RaG.js";import"./Radio-BWAawDBb.js";import"./SwitchBase-Cy2X8wXP.js";import"./FormGroup-B_IQchHw.js";import"./FormControlLabel-98dMFZJR.js";import"./UploadDocumentField-BD1bWoqQ.js";import"./FileUpload-DBlL3qSo.js";import"./ManagedACTAccessRequirementFormWikiWrapper-CzLvscO-.js";import"./GridLegacy-WR7HZGDy.js";import"./ResearchProjectForm-VL-2yhkc.js";import"./TextFieldWithWordLimit-DBHylFbV.js";import"./AuthenticatedRequirement-BpMITMtR.js";import"./CertificationRequirement-DgJ4ipV5.js";import"./TwoFactorAuthEnabledRequirement-OX417DE4.js";import"./ValidationRequirement-C8OLJF7v.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-ByENOFkX.js";import"./RejectDataAccessRequestModal-D4JpiPaJ.js";import"./CannedRejectionDialog-k-Py3AUL.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-0O1Dp5pK.js";import"./Checkbox-C2Z84l4l.js";import"./Grid-VfSnU_P-.js";import"./upperFirst-DHP0krsM.js";import"./_stringToArray-BrwavHBd.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Ze=["Demo","DemoError"];export{o as Demo,n as DemoError,Ze as __namedExportsOrder,Ve as default};
