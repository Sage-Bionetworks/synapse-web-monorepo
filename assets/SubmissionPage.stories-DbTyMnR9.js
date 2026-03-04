import{g as d,k as u,n as t,a3 as c,dN as R,b as e,kn as i,ko as E,H as s,kp as _,p as m,kq as I,kr as S,k6 as O}from"./iframe-DFPaMFUW.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-bVpnX7yX.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-C6GbNDXn.js";import"./useAccessRequirements-CiX_hKPJ.js";import"./index-C4bY0XrL.js";import"./_baseOrderBy-BWUrDSHp.js";import"./_baseIteratee-KXbrUvbm.js";import"./_baseMap-CV69pYre.js";import"./_baseEach-BoHV8FR1.js";import"./useInfiniteQuery-BfpnCJzv.js";import"./groupBy-_yZTmFgz.js";import"./_createAggregator-C9gUzVzH.js";import"./DialogBase-CfJynkow.js";import"./Close-DygzjPd4.js";import"./HelpPopover-DAgt0Xyv.js";import"./MarkdownPopover-BKU0C0F-.js";import"./LightTooltip-BvScHsJR.js";import"./MarkdownSynapse-BEFLpSba.js";import"./SkeletonButton-DH_a4yMQ.js";import"./SkeletonInlineBlock-9K5K-2fN.js";import"./SkeletonTable-CGGRLKpb.js";import"./SkeletonParagraph-D2lfRP01.js";import"./EntityLink-CI2VfoQg.js";import"./useEntity-CpWZSi6I.js";import"./pickBy-C-hCh3hG.js";import"./isString-DWRNILOM.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-D6_7uDZw.js";import"./useGetEntityHeaders-BBwBvFM5.js";import"./EntityIcon-Be3dzf3J.js";import"./ErrorChip-C-TSVd48.js";import"./Chip-DzCjxfH4.js";import"./UserOrTeamBadge-9Hoo1fmy.js";import"./UserBadge-DRf1oHGg.js";import"./useUserBundle-DG8h57yP.js";import"./MenuItem-DDtYElML.js";import"./Card-D3R-pr0W.js";import"./TeamBadge-CGFmF20_.js";import"./UnmanagedACTAccessRequirementItem-4h488I5P.js";import"./RequirementItem-CTgvLLdN.js";import"./LockTwoTone-CadU95AX.js";import"./UserSearchBoxV2-BS0rS2B9.js";import"./useDebouncedEffect-DRAX2gqn.js";import"./use-deep-compare-effect.esm-CMyFFIrt.js";import"./uniq-fS6aPJ4H.js";import"./without-C0Un_Jkp.js";import"./Select-aab027f3.esm-BMAwcPIO.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-BFid3Q7v.js";import"./SelfSignAccessRequirementItem-B-GRYU-3.js";import"./DataAccessRequestAccessorsFilesForm-DSnQt2Yq.js";import"./enums-Dl-I_R6S.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-C0JC0H7P.js";import"./RadioGroup-BVXvXISi.js";import"./Radio-BoGsdsSj.js";import"./SwitchBase-DsDqfj4L.js";import"./FormGroup-DTXJ3Ccg.js";import"./FormControlLabel-DlHl0rSS.js";import"./UploadDocumentField-G4uad7d_.js";import"./FileUpload-kQI_yTQn.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BKO10EWg.js";import"./GridLegacy-Ds464DSN.js";import"./ResearchProjectForm-fv7fib-k.js";import"./TextFieldWithWordLimit-CuCUuX-j.js";import"./AuthenticatedRequirement-BHhU5gCQ.js";import"./CertificationRequirement-DyXzTDPC.js";import"./TwoFactorAuthEnabledRequirement-C2PeCg9h.js";import"./ValidationRequirement-C8FVlspF.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-BpGhRMCp.js";import"./RejectDataAccessRequestModal-CNDkJZ7N.js";import"./CannedRejectionDialog-mTOe6mA_.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-BbwsptfA.js";import"./Checkbox-B2Yckgpo.js";import"./Grid-fcWsb61-.js";import"./upperFirst-BZMisMdY.js";import"./_stringToArray-Bs2_vJQX.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
