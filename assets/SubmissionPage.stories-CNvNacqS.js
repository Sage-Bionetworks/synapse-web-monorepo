import{g as u,k as d,n as t,a2 as c,d_ as R,b as e,ks as i,kt as E,H as s,ku as _,p as m,kv as I,kw as S,kb as O}from"./iframe-BnzpyZ4R.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-Dt4SklbI.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-D3xcLIIE.js";import"./useAccessRequirements-Dle0ovZO.js";import"./index-YZmY-bAV.js";import"./_baseOrderBy-DJq1fRki.js";import"./_baseIteratee-CYQwgzTW.js";import"./_baseMap-zbgTj1k7.js";import"./_baseEach-CjIRVcie.js";import"./useQueries-BJefF8Rg.js";import"./useInfiniteQuery-DFHV1svZ.js";import"./groupBy-Be90RSFz.js";import"./_createAggregator-CZJHVbTa.js";import"./DialogBase-MszPryaT.js";import"./Close-R1S7vilm.js";import"./HelpPopover-Dd3HqNDX.js";import"./MarkdownPopover-CNvQsgo4.js";import"./LightTooltip-R3PWvr3X.js";import"./MarkdownSynapse-CvPnj5RJ.js";import"./SkeletonButton-BV5Vd7zv.js";import"./SkeletonInlineBlock-DHtOAZL_.js";import"./SkeletonTable-BvL0lrSq.js";import"./SkeletonParagraph-8Qf6t-Ql.js";import"./EntityLink-Bc5tGalR.js";import"./useEntity-CFZNO4rN.js";import"./pickBy-B9RehOLg.js";import"./isString-ClDL4JuE.js";import"./useSuspenseQuery-DmgOfBUR.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BFUqysUw.js";import"./useGetEntityHeaders-CwpbsS0k.js";import"./EntityIcon-DvX365U4.js";import"./ErrorChip-CClg3g2M.js";import"./Chip-BL4PoAJY.js";import"./UserOrTeamBadge-DPPp1REB.js";import"./UserBadge-BrDgbY53.js";import"./useUserBundle-DkcVB5OF.js";import"./MenuItem-Dybb420V.js";import"./Card-mUm3rODo.js";import"./TeamBadge-DJkysIng.js";import"./UnmanagedACTAccessRequirementItem-tP88ca81.js";import"./RequirementItem-DNdUMm-f.js";import"./LockTwoTone-BNGEVNTF.js";import"./UserSearchBoxV2-BeCEHapC.js";import"./useDebouncedEffect-C4sNKZ7Q.js";import"./use-deep-compare-effect.esm-B31xc_rp.js";import"./uniq-BOc8w4lb.js";import"./without-D6gyxdxa.js";import"./Select-aab027f3.esm-C8iLyD3n.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-1THP7PpC.js";import"./SelfSignAccessRequirementItem-DFFpqtw_.js";import"./DataAccessRequestAccessorsFilesForm-DOYyYIoF.js";import"./enums-fE-7NkQH.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-CwnHS5xS.js";import"./RadioGroup-CpHPWM0A.js";import"./Radio-Bwyu611q.js";import"./SwitchBase-D7LZNsVh.js";import"./FormGroup-ZoASe_7u.js";import"./FormControlLabel-BdTACXg8.js";import"./UploadDocumentField-DhYGr-ic.js";import"./FileUpload-CaNfXkLz.js";import"./ManagedACTAccessRequirementFormWikiWrapper-Bm3C7xRh.js";import"./GridLegacy-CSkJ_Qa2.js";import"./ResearchProjectForm-D5He-wet.js";import"./TextFieldWithWordLimit-ClVTGrmG.js";import"./AuthenticatedRequirement-D51DeSLr.js";import"./CertificationRequirement-BwjJNQAK.js";import"./TwoFactorAuthEnabledRequirement-BBiu3U0j.js";import"./ValidationRequirement-D1peDCRa.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-BIdm6c5j.js";import"./RejectDataAccessRequestModal-C6ycMRP2.js";import"./CannedRejectionDialog-CVbJ815G.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-BnDH1gry.js";import"./Checkbox-CKV2rIr3.js";import"./Grid-DBIc_0Hh.js";import"./upperFirst-C2WAo2qo.js";import"./_stringToArray-CAeftnJE.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Xe=["Demo","DemoError"];export{o as Demo,n as DemoError,Xe as __namedExportsOrder,ze as default};
