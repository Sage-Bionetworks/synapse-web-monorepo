import{g as d,k as u,n as t,a3 as c,dN as R,b as e,ko as i,kp as E,H as s,kq as _,p as m,kr as I,ks as S,k7 as O}from"./iframe-C0ar5Nzr.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-KrZuR6ie.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-DSCO5XRD.js";import"./useAccessRequirements-BVj3I2a5.js";import"./index-BR-nFAVn.js";import"./_baseOrderBy-CBNWoKdz.js";import"./_baseIteratee-FxvFjaQU.js";import"./_baseMap-D6NlnIJT.js";import"./_baseEach-C_xB0_wl.js";import"./useInfiniteQuery-648_I8si.js";import"./groupBy-ClaZiDLX.js";import"./_createAggregator-4kcmP3u9.js";import"./DialogBase-DIEXoqBk.js";import"./Close-BRs0EfFH.js";import"./HelpPopover-CqP6r1FP.js";import"./MarkdownPopover-BkLUE7Bg.js";import"./LightTooltip-2r7pM-Zn.js";import"./MarkdownSynapse-DSVPTxPU.js";import"./SkeletonButton-DLomeGvI.js";import"./SkeletonInlineBlock-sY9elCWZ.js";import"./SkeletonTable-4Tdh8Kss.js";import"./SkeletonParagraph-Cu2Z5Jdt.js";import"./EntityLink-Cjira1-H.js";import"./useEntity-Bmi6NWW2.js";import"./pickBy-CACU_Stn.js";import"./isString-9wfbtwoS.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DdcXHFHM.js";import"./useGetEntityHeaders-LuwyVBc9.js";import"./EntityIcon-BhNPgloc.js";import"./ErrorChip-6pGttyzH.js";import"./Chip-CFPpkp1B.js";import"./UserOrTeamBadge-B5oDR2x3.js";import"./UserBadge-C9kxKIBU.js";import"./useUserBundle-DBMlukq6.js";import"./MenuItem-C89nEhr5.js";import"./Card-C6t8Ijbj.js";import"./TeamBadge-CkbhFm-i.js";import"./UnmanagedACTAccessRequirementItem-Bg3NnLXo.js";import"./RequirementItem-FYw3yD7S.js";import"./LockTwoTone-CXBEjUv9.js";import"./UserSearchBoxV2-CrJPdaR0.js";import"./useDebouncedEffect-DfvXs5CU.js";import"./use-deep-compare-effect.esm-DBpzWEPh.js";import"./uniq-COLEKZdC.js";import"./without-CpNxXjr9.js";import"./Select-aab027f3.esm-Crh1DC3x.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-BeaAsOns.js";import"./SelfSignAccessRequirementItem-DQUWPGrM.js";import"./DataAccessRequestAccessorsFilesForm-DUNVNcI-.js";import"./enums-sZ_unGf-.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-Cj9E1Jwl.js";import"./RadioGroup-Dfcory-g.js";import"./Radio-CtteIh1V.js";import"./SwitchBase-P5zO0V1P.js";import"./FormGroup-cvevfr9x.js";import"./FormControlLabel-C0kLsFRC.js";import"./UploadDocumentField-esPs8SA-.js";import"./FileUpload-Bn8eZ1QS.js";import"./ManagedACTAccessRequirementFormWikiWrapper-CFIA6-Lb.js";import"./GridLegacy-BPW4JcXn.js";import"./ResearchProjectForm-Bu6mnr78.js";import"./TextFieldWithWordLimit-C8c2pPUP.js";import"./AuthenticatedRequirement-CcwHaA7W.js";import"./CertificationRequirement-CxsBpTwG.js";import"./TwoFactorAuthEnabledRequirement-BkcdazON.js";import"./ValidationRequirement-BaMfOgKA.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-rAoh037y.js";import"./RejectDataAccessRequestModal-BPVUsU8L.js";import"./CannedRejectionDialog-y77y7KPn.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-BnyJh5PO.js";import"./Checkbox-Dmy4xA5K.js";import"./Grid-U8F2upY6.js";import"./upperFirst-BJO5hG9l.js";import"./_stringToArray-Dc7f0Etz.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
