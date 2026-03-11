import{g as u,k as d,n as t,a3 as c,dP as R,b as e,kr as i,ks as E,H as s,kt as _,p as m,ku as I,kv as S,ka as O}from"./iframe-DATRO4pg.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-CCp_gOsI.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-BP3UCNxo.js";import"./useAccessRequirements-ddMgcJ99.js";import"./index-33OaJtki.js";import"./_baseOrderBy-CRhNjc5f.js";import"./_baseIteratee--pAE4BC1.js";import"./_baseMap-BGYDPwov.js";import"./_baseEach-6wOhS19j.js";import"./useInfiniteQuery-BsjpUEc3.js";import"./groupBy-DnR7y1Qh.js";import"./_createAggregator-Dy0RHyMz.js";import"./DialogBase-C1AukqcU.js";import"./Close-DSBWsbNS.js";import"./HelpPopover-BpoQ9RLF.js";import"./MarkdownPopover-C8lzSMfg.js";import"./LightTooltip-DjHUKC3t.js";import"./MarkdownSynapse-COvAtPgs.js";import"./SkeletonButton-D-kO1kuw.js";import"./SkeletonInlineBlock-BHsC0ZVh.js";import"./SkeletonTable-CwWcK3KH.js";import"./SkeletonParagraph-BO1hpxq5.js";import"./EntityLink-D0FHiTtL.js";import"./useEntity-0PtRbFpy.js";import"./pickBy-fuGgesyS.js";import"./isString-Be5094FN.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-C6vjTeKW.js";import"./useGetEntityHeaders-jbPUkwtl.js";import"./EntityIcon-QuQAzYne.js";import"./ErrorChip-C8rrxTJd.js";import"./Chip-DWvykSmW.js";import"./UserOrTeamBadge-BtYlE-iy.js";import"./UserBadge-BegEEQMp.js";import"./useUserBundle-B4qTlzlm.js";import"./MenuItem-BO0T4yAa.js";import"./Card-BQzn9VZu.js";import"./TeamBadge-D_Jvj86j.js";import"./UnmanagedACTAccessRequirementItem-D7_J7dFK.js";import"./RequirementItem-1yr-9zE1.js";import"./LockTwoTone-BibPB-nX.js";import"./UserSearchBoxV2-40i6jy0O.js";import"./useDebouncedEffect-CfbLi_k3.js";import"./use-deep-compare-effect.esm-a847B46a.js";import"./uniq-C8e4NYmZ.js";import"./without-copMPav4.js";import"./Select-aab027f3.esm-C4-NAwD7.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-CwmymnH7.js";import"./SelfSignAccessRequirementItem-BSrmtOUe.js";import"./DataAccessRequestAccessorsFilesForm-BqIo3asW.js";import"./enums-BOa3x7Vq.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-B49QlgXI.js";import"./RadioGroup-B1LUlcyw.js";import"./Radio-DOqDWEHL.js";import"./SwitchBase-IkX6tI92.js";import"./FormGroup-glIIIKws.js";import"./FormControlLabel-DZ_R2mT0.js";import"./UploadDocumentField-DFnz78vd.js";import"./FileUpload-MsQ22M8r.js";import"./ManagedACTAccessRequirementFormWikiWrapper-FcpM2xwA.js";import"./GridLegacy-CM0G7_B7.js";import"./ResearchProjectForm-ChvOMzCt.js";import"./TextFieldWithWordLimit-CnNY2nBK.js";import"./AuthenticatedRequirement-5k7nLwyq.js";import"./CertificationRequirement-CQU17Mlt.js";import"./TwoFactorAuthEnabledRequirement-CI1sWmzp.js";import"./ValidationRequirement-yMxfYhm1.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-Ogi3U0Qa.js";import"./RejectDataAccessRequestModal-BUM2ZgkI.js";import"./CannedRejectionDialog-DzZ9qRJZ.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-YayW6Yer.js";import"./Checkbox-D1X7uu44.js";import"./Grid-vIm1_Lpj.js";import"./upperFirst-CgejOek0.js";import"./_stringToArray-w_POn75L.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
