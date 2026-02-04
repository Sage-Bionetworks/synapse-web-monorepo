import{g as u,k as d,n as t,a2 as c,d_ as R,b as e,kt as i,ku as E,H as s,kv as _,p as m,kw as I,kx as S,kc as O}from"./iframe-BE9PbKHz.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-CNQvgLv6.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList--SJsIK6Z.js";import"./useAccessRequirements-CDjCRRV0.js";import"./index-Y-POCSpx.js";import"./_baseOrderBy-KBQpSRRG.js";import"./_baseIteratee-BDrJ2YLg.js";import"./_baseMap-Bl0VqtCc.js";import"./_baseEach-BRNZQGBt.js";import"./useQueries-DxKdEVnO.js";import"./useInfiniteQuery-DENunen_.js";import"./groupBy-CIPcQiVf.js";import"./_createAggregator-v7FxIgyV.js";import"./DialogBase-DZLlSH8O.js";import"./Close-Cz-06mD9.js";import"./HelpPopover-C9q_fGyh.js";import"./MarkdownPopover-BkMntjjk.js";import"./LightTooltip-Dge4KYYp.js";import"./MarkdownSynapse-277_eni0.js";import"./SkeletonButton-DJTXNqO5.js";import"./SkeletonInlineBlock-CIXdsi0t.js";import"./SkeletonTable-BL3DzlJY.js";import"./SkeletonParagraph-Sl7bNyS_.js";import"./EntityLink-VJsxo-sQ.js";import"./useEntity-BNdCw6PI.js";import"./pickBy-xtq24EuB.js";import"./isString-BhCiwPqI.js";import"./useSuspenseQuery-CEXBd55g.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-KgEtN1d6.js";import"./useGetEntityHeaders-wfwG9w3y.js";import"./EntityIcon-iV9l4Q-4.js";import"./ErrorChip-pIUQZch7.js";import"./Chip-TAfdcvOh.js";import"./UserOrTeamBadge-DwrTfPaa.js";import"./UserBadge-C6jEbLoI.js";import"./useUserBundle-CnmcW3Hx.js";import"./MenuItem-CzNz3VcW.js";import"./Card-Z11x_8d2.js";import"./TeamBadge-BPBLBwfu.js";import"./UnmanagedACTAccessRequirementItem-eIIqiYNv.js";import"./RequirementItem-B7HpiW1U.js";import"./LockTwoTone-CQVeHXtj.js";import"./UserSearchBoxV2-DbYp4qQr.js";import"./useDebouncedEffect-m0trbjn7.js";import"./use-deep-compare-effect.esm-DVgw6rTb.js";import"./uniq-aLN-a8gH.js";import"./without-BoELuCtv.js";import"./Select-aab027f3.esm-DkoFzdrr.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-BL0MUGhW.js";import"./SelfSignAccessRequirementItem-BAQS59Rg.js";import"./DataAccessRequestAccessorsFilesForm-BXt8IJMx.js";import"./enums-yOWh4fuP.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-ChTa4R5w.js";import"./RadioGroup-u3KLPXzD.js";import"./Radio-CTw-XFRJ.js";import"./SwitchBase-Dr1KbuyN.js";import"./FormGroup-Da7p5KM_.js";import"./FormControlLabel-BWKwjAXp.js";import"./UploadDocumentField-D86_Ukl8.js";import"./FileUpload-BydXo11u.js";import"./ManagedACTAccessRequirementFormWikiWrapper-DYDalq3J.js";import"./GridLegacy-CYcE_kBJ.js";import"./ResearchProjectForm-C9gytkIF.js";import"./TextFieldWithWordLimit-BcmC-Se7.js";import"./AuthenticatedRequirement-N2vMWa70.js";import"./CertificationRequirement-Dk1gaB2x.js";import"./TwoFactorAuthEnabledRequirement-CeJiSU5v.js";import"./ValidationRequirement-DSQailJf.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-BrRXuUNt.js";import"./RejectDataAccessRequestModal-BQNx3XFK.js";import"./CannedRejectionDialog-Dy2Syhch.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-BBc5_vLI.js";import"./Checkbox-BCZSGj6B.js";import"./Grid-C8a2DaSn.js";import"./upperFirst-DEnLGlVV.js";import"./_stringToArray-gyN3cYXH.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
