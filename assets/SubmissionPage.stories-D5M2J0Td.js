import{g as u,k as d,n as t,a3 as c,dO as R,b as e,kq as i,kr as E,H as s,ks as _,p as m,kt as I,ku as S,k9 as O}from"./iframe-B7gyTvXJ.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-B72ZVJ4i.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-BeDTWzfk.js";import"./useAccessRequirements-C-hV9llN.js";import"./index-WdAvK5aU.js";import"./_baseOrderBy-hldRTRhc.js";import"./_baseIteratee-XgjUyU1H.js";import"./_baseMap-DOtyuz8m.js";import"./_baseEach-D6h0LkgA.js";import"./useInfiniteQuery-Cp7Cpj3Z.js";import"./groupBy-pnB2cFPO.js";import"./_createAggregator-Gj7rO-ZD.js";import"./DialogBase--rdhqJoF.js";import"./Close-BtEQAkrf.js";import"./HelpPopover-CgJi15Pc.js";import"./MarkdownPopover-CtJuHvPt.js";import"./LightTooltip-DabWC6y6.js";import"./MarkdownSynapse-27_wa5xd.js";import"./SkeletonButton-BISD75XD.js";import"./SkeletonInlineBlock-w4q-zSuw.js";import"./SkeletonTable-DjMRvgKw.js";import"./SkeletonParagraph-DmG5QWjf.js";import"./EntityLink-Cprmde94.js";import"./useEntity-B9e80l0L.js";import"./pickBy-8ftCar9P.js";import"./isString-DHmHBQ1y.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DIG05F37.js";import"./useGetEntityHeaders-DLq6v4dP.js";import"./EntityIcon-BSf5skmx.js";import"./ErrorChip-Bzwq7ROZ.js";import"./Chip-CZ04a0tX.js";import"./UserOrTeamBadge-PfJiqkmt.js";import"./UserBadge-qo_IX7jY.js";import"./useUserBundle-CZajkvxD.js";import"./MenuItem-Dou85YW3.js";import"./Card-DfwGulL0.js";import"./TeamBadge-CthxkR9A.js";import"./UnmanagedACTAccessRequirementItem-60tS3Gvu.js";import"./RequirementItem-Bdq4xRjl.js";import"./LockTwoTone-B8qTaSFA.js";import"./UserSearchBoxV2-D9o4ONtp.js";import"./useDebouncedEffect-CcTkKR7d.js";import"./use-deep-compare-effect.esm-CaCjzTGw.js";import"./uniq-dO9anJPL.js";import"./without-CVJZHIBe.js";import"./Select-aab027f3.esm-DM7OAWBa.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-CsksEahH.js";import"./SelfSignAccessRequirementItem-ZNuqUs4c.js";import"./DataAccessRequestAccessorsFilesForm-4ozKysQw.js";import"./enums-SAfse8Cx.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-CowWc4at.js";import"./RadioGroup-B4KNPfiB.js";import"./Radio-CRyyzhzR.js";import"./SwitchBase--Gsf_r-d.js";import"./FormGroup-zuN1GtfJ.js";import"./FormControlLabel-Bou_0ZQR.js";import"./UploadDocumentField-C975Ls9F.js";import"./FileUpload-CyVvnLi5.js";import"./ManagedACTAccessRequirementFormWikiWrapper-DjHJKp3V.js";import"./GridLegacy-B65Fb4E2.js";import"./ResearchProjectForm-KZafwQay.js";import"./TextFieldWithWordLimit-BWMBiD_o.js";import"./AuthenticatedRequirement-DAeqXaYw.js";import"./CertificationRequirement-DfLGnvbn.js";import"./TwoFactorAuthEnabledRequirement-Do5boKR-.js";import"./ValidationRequirement-C34hAVHa.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-Oh96K5VX.js";import"./RejectDataAccessRequestModal-BR2WGHql.js";import"./CannedRejectionDialog-BXrcr77C.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-B3QhZ0u5.js";import"./Checkbox-Bx85pmu-.js";import"./Grid-DuwlkHi3.js";import"./upperFirst-DTxPefNO.js";import"./_stringToArray-BGs7cAA1.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
