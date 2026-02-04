import{g as u,k as d,n as t,a2 as c,d_ as R,b as e,kt as i,ku as E,H as s,kv as _,p as m,kw as I,kx as S,kc as O}from"./iframe-PYPp7xnK.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-CCL9Z5RD.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-DDILTDfr.js";import"./useAccessRequirements-BOF9CfPc.js";import"./index-1SI29lko.js";import"./_baseOrderBy-BrDbsaFY.js";import"./_baseIteratee-BZFVvPTZ.js";import"./_baseMap-D_SXijK0.js";import"./_baseEach-ClcsA4o0.js";import"./useQueries-Be8MxYe3.js";import"./useInfiniteQuery-BNv7EGxj.js";import"./groupBy-C12Wap_i.js";import"./_createAggregator-CyHyL8R5.js";import"./DialogBase-d_CECZtd.js";import"./Close-NsSVTbKR.js";import"./HelpPopover-CRuNxnYI.js";import"./MarkdownPopover-CTfESMzb.js";import"./LightTooltip-DTNQsZN6.js";import"./MarkdownSynapse-nwSv3Tm6.js";import"./SkeletonButton-CWan3o9p.js";import"./SkeletonInlineBlock-CdKZUiWg.js";import"./SkeletonTable-CVr3KqkK.js";import"./SkeletonParagraph-DNnDNfQN.js";import"./EntityLink-d_CTKyQH.js";import"./useEntity-DjbIpPgI.js";import"./pickBy-DX0aEh93.js";import"./isString-17Is4p-i.js";import"./useSuspenseQuery-DpR9wtQx.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-iIAWiZii.js";import"./useGetEntityHeaders-CRLpBfs1.js";import"./EntityIcon-BHt0tFoV.js";import"./ErrorChip-DqugYGvx.js";import"./Chip-BkoJj4oN.js";import"./UserOrTeamBadge-D15NH0y6.js";import"./UserBadge-Dhz-w7oT.js";import"./useUserBundle-Cc0t0_AU.js";import"./MenuItem-h2F7yZes.js";import"./Card-Dcs6KWbP.js";import"./TeamBadge-DIL3iLZa.js";import"./UnmanagedACTAccessRequirementItem-CKKRSX7R.js";import"./RequirementItem-BmEboIzz.js";import"./LockTwoTone-BpzbHJwp.js";import"./UserSearchBoxV2-BtOxq4cm.js";import"./useDebouncedEffect-B2d5hwCH.js";import"./use-deep-compare-effect.esm-BUizEgvt.js";import"./uniq-DMKjuRDc.js";import"./without-Ba7yjj4r.js";import"./Select-aab027f3.esm-D-uVAGlb.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-DDoGeGNP.js";import"./SelfSignAccessRequirementItem-CqqqZMbu.js";import"./DataAccessRequestAccessorsFilesForm-COZyqdOo.js";import"./enums-B5aqgI9R.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-DUxP30jz.js";import"./RadioGroup-DtGieEoE.js";import"./Radio-Bi5gBi0N.js";import"./SwitchBase-BFhf4PEE.js";import"./FormGroup-DonTTMcO.js";import"./FormControlLabel-BFgRNFSG.js";import"./UploadDocumentField-CHLt1DwU.js";import"./FileUpload-XsMGMykY.js";import"./ManagedACTAccessRequirementFormWikiWrapper-NNmo_tic.js";import"./GridLegacy-knY4Yqxc.js";import"./ResearchProjectForm-DifesslJ.js";import"./TextFieldWithWordLimit-DFZUHWj7.js";import"./AuthenticatedRequirement-C8aBv2vh.js";import"./CertificationRequirement-D0CmTul4.js";import"./TwoFactorAuthEnabledRequirement-xFXmwXvg.js";import"./ValidationRequirement-DR-MJgCv.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-DurTXG3K.js";import"./RejectDataAccessRequestModal-c62l36qC.js";import"./CannedRejectionDialog-BkFQ9dqJ.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-2zXE13iH.js";import"./Checkbox-Ds0rvTa4.js";import"./Grid-v4mjr64H.js";import"./upperFirst-gQP4xssU.js";import"./_stringToArray-DumEo2UC.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
