import{g as d,k as u,n as t,a3 as c,dZ as R,b as e,kw as i,kx as E,H as s,ky as _,p as m,kz as I,kA as S,kf as O}from"./iframe-D92BdoG9.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-BgelK0mw.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-BQAYVkQt.js";import"./useAccessRequirements-ubIn3UUp.js";import"./index-CYdrGrZN.js";import"./_baseOrderBy-Bz-jU8fr.js";import"./_baseIteratee-CHqDSNyX.js";import"./_baseMap-PntIsZSQ.js";import"./_baseEach-Ot8mX9XG.js";import"./useQueries-B2gtnRyW.js";import"./useInfiniteQuery-wn2juHd0.js";import"./groupBy-BB3i2P8R.js";import"./_createAggregator-CstjyadL.js";import"./DialogBase-7QNHfM8i.js";import"./Close-CMNaFelZ.js";import"./HelpPopover-DwSVnQpf.js";import"./MarkdownPopover-DYuidQle.js";import"./LightTooltip-DHXuYbNh.js";import"./MarkdownSynapse-BXkVd7Pm.js";import"./SkeletonButton-DkZdiJnq.js";import"./SkeletonInlineBlock-BoREPhEN.js";import"./SkeletonTable-DmBSaFM1.js";import"./SkeletonParagraph-BlcJcRxn.js";import"./EntityLink-2yqwVr0M.js";import"./useEntity-XJ3PPFz3.js";import"./pickBy-BadgPrJW.js";import"./isString-BpKkdU6U.js";import"./useSuspenseQuery-B_1ZDlRS.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BO4ly07m.js";import"./useGetEntityHeaders-Bd9jOAx_.js";import"./EntityIcon-B-mmyFcC.js";import"./ErrorChip-duvtScxI.js";import"./Chip-CniQq1ch.js";import"./UserOrTeamBadge-FohF2T8N.js";import"./UserBadge-BNFHqCyR.js";import"./useUserBundle-BBzdm9g8.js";import"./MenuItem-BJFdqxGb.js";import"./Card-CM0Ob5QK.js";import"./TeamBadge-FuWHFXf_.js";import"./useRealmPrincipals-c1OtnzHz.js";import"./UnmanagedACTAccessRequirementItem-DtgCqH0e.js";import"./RequirementItem-qlSokOYM.js";import"./LockTwoTone-CVlVq6WM.js";import"./UserSearchBoxV2-DCQtQ3zP.js";import"./useDebouncedEffect-D9OyDsvv.js";import"./use-deep-compare-effect.esm-BmxS3Z7I.js";import"./uniq-DjBXqiF7.js";import"./without-DoqBO4f-.js";import"./Select-aab027f3.esm-DCi0DAYG.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-meKpof_K.js";import"./SelfSignAccessRequirementItem-B832JP1g.js";import"./DataAccessRequestAccessorsFilesForm-BUD8yIWD.js";import"./enums-D16CJe00.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-AapazaSy.js";import"./RadioGroup-B4c40IYI.js";import"./Radio-BhaLOb8J.js";import"./SwitchBase-C-CWJzfm.js";import"./FormGroup-CYqDjnEH.js";import"./FormControlLabel-lXpCaRp3.js";import"./UploadDocumentField-DgMCYzRw.js";import"./FileUpload-Dc0ffb97.js";import"./ManagedACTAccessRequirementFormWikiWrapper-C884d0SS.js";import"./GridLegacy-Ek-t45Oo.js";import"./ResearchProjectForm-BbooyBzM.js";import"./TextFieldWithWordLimit-CaNjzQpD.js";import"./AuthenticatedRequirement-UI3388vw.js";import"./CertificationRequirement-C5YeHW3p.js";import"./TwoFactorAuthEnabledRequirement-tjL1b0BP.js";import"./ValidationRequirement-BhTQQ586.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-DpbVXm-Y.js";import"./RejectDataAccessRequestModal-37ITyPSF.js";import"./CannedRejectionDialog-Ds_1kgUK.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog--5BBCv73.js";import"./Checkbox-Dd-GqwcY.js";import"./Grid-BmWkcZL3.js";import"./upperFirst-BDP6i2kZ.js";import"./_stringToArray-CbWQ4t_b.js";const Xe={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const er=["Demo","DemoError"];export{o as Demo,n as DemoError,er as __namedExportsOrder,Xe as default};
