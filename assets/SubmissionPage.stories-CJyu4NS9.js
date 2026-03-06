import{g as d,k as u,n as t,a3 as c,dN as R,b as e,ko as i,kp as E,H as s,kq as _,p as m,kr as I,ks as S,k7 as O}from"./iframe-CDA0-aTC.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-B4boS2Zl.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-D4sqsA2t.js";import"./useAccessRequirements-DDQsBaEZ.js";import"./index-Dm5gKV9A.js";import"./_baseOrderBy-BTSbGHSk.js";import"./_baseIteratee-CvzF7y63.js";import"./_baseMap-DXdLzEMj.js";import"./_baseEach-M6TsrMn8.js";import"./useInfiniteQuery-DxqH_ygE.js";import"./groupBy-CtZ_l9AA.js";import"./_createAggregator-C4i4sa4Q.js";import"./DialogBase-BSeeM2-T.js";import"./Close-dI8UPeeO.js";import"./HelpPopover-CUD98UAA.js";import"./MarkdownPopover-eReN4x4q.js";import"./LightTooltip-T2fsq3mX.js";import"./MarkdownSynapse-D1PgnQma.js";import"./SkeletonButton-CyZvMjY_.js";import"./SkeletonInlineBlock-CP8CpyNB.js";import"./SkeletonTable-CTSMcV9b.js";import"./SkeletonParagraph-BVmBcN9J.js";import"./EntityLink-C1JfR_J9.js";import"./useEntity-DzUnFneL.js";import"./pickBy-D2RejS2u.js";import"./isString-DryJE-g5.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-D7efdPpe.js";import"./useGetEntityHeaders-BwdcXOX6.js";import"./EntityIcon-CysEprbQ.js";import"./ErrorChip-DoNyoZqR.js";import"./Chip-iqmVqxV9.js";import"./UserOrTeamBadge-BvRwu4Gs.js";import"./UserBadge-CeyI1m7V.js";import"./useUserBundle-h3_N8fPQ.js";import"./MenuItem-D14RUsdm.js";import"./Card-CNpk9I0N.js";import"./TeamBadge-QVyNcFNM.js";import"./UnmanagedACTAccessRequirementItem-BB-AjWWT.js";import"./RequirementItem-B03WDBFX.js";import"./LockTwoTone-C5PV2ec0.js";import"./UserSearchBoxV2-Cv9zVEbb.js";import"./useDebouncedEffect-BVP3V7ge.js";import"./use-deep-compare-effect.esm-CdqlNPw4.js";import"./uniq-BwP3as-X.js";import"./without-CjA7TAIG.js";import"./Select-aab027f3.esm-lUYbg3gW.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-akNisLBO.js";import"./SelfSignAccessRequirementItem-5KnZRcUL.js";import"./DataAccessRequestAccessorsFilesForm-wIpH_NAI.js";import"./enums-ClNJMPHe.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-D6RpsZTW.js";import"./RadioGroup-_EXHk5Qc.js";import"./Radio-sJHS0GG6.js";import"./SwitchBase-CzJWdvEs.js";import"./FormGroup-DPp-Rj3s.js";import"./FormControlLabel-Bnc2UF74.js";import"./UploadDocumentField-ddSoE7w3.js";import"./FileUpload-4PIgPawW.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BgeJvxbm.js";import"./GridLegacy-BZc0gl5D.js";import"./ResearchProjectForm-Ds-YG3oU.js";import"./TextFieldWithWordLimit-BWiZ0mG7.js";import"./AuthenticatedRequirement-CMVjzMjd.js";import"./CertificationRequirement-gEb9EUUg.js";import"./TwoFactorAuthEnabledRequirement-DZuTdmwr.js";import"./ValidationRequirement-DC5Rvz1q.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-Z-OdqmLt.js";import"./RejectDataAccessRequestModal-BdiuUjlz.js";import"./CannedRejectionDialog-GVbu1qdT.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-BLrGR5e1.js";import"./Checkbox-BuF5DqZv.js";import"./Grid-DPWyAXOo.js";import"./upperFirst-DgSC01sL.js";import"./_stringToArray-B7DjlS9T.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
