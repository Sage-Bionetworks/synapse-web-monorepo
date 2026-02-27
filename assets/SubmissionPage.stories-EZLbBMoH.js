import{g as d,k as u,n as t,a3 as c,dN as R,b as e,km as i,kn as E,H as s,ko as _,p as m,kp as I,kq as S,k5 as O}from"./iframe-D5fi-UCI.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-B3n4SeFb.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-Df5F46UG.js";import"./useAccessRequirements-1DEUDwY-.js";import"./index-B56RpF6G.js";import"./_baseOrderBy-413dCsCn.js";import"./_baseIteratee-BYNmJDpT.js";import"./_baseMap-CzQRQ99N.js";import"./_baseEach-M2k7E20T.js";import"./useInfiniteQuery-CAh9MY-H.js";import"./groupBy-u8SPXVRA.js";import"./_createAggregator-CUO1SEqw.js";import"./DialogBase-xIV-zqs7.js";import"./Close-BMHbbE_Q.js";import"./HelpPopover-BWSi51uC.js";import"./MarkdownPopover-D-5Kyx4k.js";import"./LightTooltip-DaJf-vKS.js";import"./MarkdownSynapse-BtPA8Eyc.js";import"./SkeletonButton-NAUvRsI1.js";import"./SkeletonInlineBlock-C_oItAmZ.js";import"./SkeletonTable-BVeoay1H.js";import"./SkeletonParagraph-DOydOX8X.js";import"./EntityLink-BF5GTh_x.js";import"./useEntity-DZBcJwIJ.js";import"./pickBy-CM25teq7.js";import"./isString-qWB6MhPe.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CGvoFaMT.js";import"./useGetEntityHeaders-DNjL00D9.js";import"./EntityIcon-CodVHMlC.js";import"./ErrorChip-BACl_teu.js";import"./Chip-B5Ta4kZT.js";import"./UserOrTeamBadge-_biin1UU.js";import"./UserBadge-jQHV7PcE.js";import"./useUserBundle-BCRG-aLd.js";import"./MenuItem-CoEJZbDJ.js";import"./Card-Bv9h-IG_.js";import"./TeamBadge-D-QktPdC.js";import"./UnmanagedACTAccessRequirementItem-SLkUNhIw.js";import"./RequirementItem-Gm8GUhPw.js";import"./LockTwoTone-DkymlXE_.js";import"./UserSearchBoxV2-Vz_mb9pV.js";import"./useDebouncedEffect-kNLZZstO.js";import"./use-deep-compare-effect.esm-BWtN82-j.js";import"./uniq-ogPogOOm.js";import"./without-BynlM_bG.js";import"./Select-aab027f3.esm-cgdqOhFp.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-DaXYLpBP.js";import"./SelfSignAccessRequirementItem-fkzP-NSn.js";import"./DataAccessRequestAccessorsFilesForm-CCk4XnZt.js";import"./enums-BgQvXobo.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-DvwNTPvQ.js";import"./RadioGroup-BnCAZpoA.js";import"./Radio-sdqLknSs.js";import"./SwitchBase-CKR_n_OU.js";import"./FormGroup-MVBaojbS.js";import"./FormControlLabel-DjIggnZV.js";import"./UploadDocumentField-OVMhO-hf.js";import"./FileUpload-BZjVtYm4.js";import"./ManagedACTAccessRequirementFormWikiWrapper-tpY_GHTN.js";import"./GridLegacy-D0ceYKMZ.js";import"./ResearchProjectForm-Cm8LKzzI.js";import"./TextFieldWithWordLimit-CWeQOV6i.js";import"./AuthenticatedRequirement-CWRpAn0e.js";import"./CertificationRequirement-DtfYiFZV.js";import"./TwoFactorAuthEnabledRequirement-C5CbAcx9.js";import"./ValidationRequirement-Wr7lCh4w.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-HzeQpb4h.js";import"./RejectDataAccessRequestModal-BtYpFxUJ.js";import"./CannedRejectionDialog-CIYLBWeQ.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-8rzP4g0a.js";import"./Checkbox-VXABpiEI.js";import"./Grid-w5ufbii7.js";import"./upperFirst-DBJkHwHv.js";import"./_stringToArray-CZpq3J3l.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
