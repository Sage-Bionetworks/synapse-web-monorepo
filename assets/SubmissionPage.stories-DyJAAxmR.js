import{g as u,k as d,n as t,a3 as c,e0 as R,b as e,kv as i,kw as E,H as s,kx as _,p as m,ky as I,kz as S,ke as O}from"./iframe-D-KER6Qh.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-4049Kyqy.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-CRMkHWWP.js";import"./useAccessRequirements-DJdPqZLJ.js";import"./index-C6MZRWmF.js";import"./_baseOrderBy-DIwOyEp0.js";import"./_baseIteratee-DEkFHii0.js";import"./_baseMap-C2UuXXF2.js";import"./_baseEach-DWPf_RCf.js";import"./useQueries-VDAmT_8W.js";import"./useInfiniteQuery-DdL0acdR.js";import"./groupBy-CifytuAK.js";import"./_createAggregator-Ce1ky4rV.js";import"./DialogBase-SiFub7hc.js";import"./Close-eai8_-Nr.js";import"./HelpPopover-D8a4-Hdu.js";import"./MarkdownPopover-ZXOIcEPl.js";import"./LightTooltip-CmTwAHaz.js";import"./MarkdownSynapse-CV2HCz36.js";import"./SkeletonButton-BHBiM-A7.js";import"./SkeletonInlineBlock-BwJZpIPy.js";import"./SkeletonTable-C--yRYi2.js";import"./SkeletonParagraph-DuJaGlPU.js";import"./EntityLink-8dIjsrxf.js";import"./useEntity-BOsr6wZ7.js";import"./pickBy-GQztHFvZ.js";import"./isString-DdCXbvgk.js";import"./useSuspenseQuery-BSi61cfF.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Bj7rDXSp.js";import"./useGetEntityHeaders-B3Of4QkP.js";import"./EntityIcon-LQDUmvPQ.js";import"./ErrorChip-tHLRdyJm.js";import"./Chip-BMsDoxJ4.js";import"./UserOrTeamBadge-EsRqVp6Z.js";import"./UserBadge-DPBQCDfd.js";import"./useUserBundle-BJw245DA.js";import"./MenuItem-Dh0Z5Zi9.js";import"./Card-222ytxqR.js";import"./TeamBadge-Cc74eBFf.js";import"./UnmanagedACTAccessRequirementItem-BcGvy7Sr.js";import"./RequirementItem-9FUHLsiy.js";import"./LockTwoTone-8VcfJjVc.js";import"./UserSearchBoxV2-3bxAhg8w.js";import"./useDebouncedEffect-11Mmbs1n.js";import"./use-deep-compare-effect.esm-CJo0Bo62.js";import"./uniq-B53z5Mvx.js";import"./without-DXFuuMqJ.js";import"./Select-aab027f3.esm-DdFdvQth.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-dNCy56cD.js";import"./SelfSignAccessRequirementItem-Bag-_91D.js";import"./DataAccessRequestAccessorsFilesForm-Ceni0NY7.js";import"./enums-CKCWh5HL.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-jEumcrR8.js";import"./RadioGroup-1-xWnpnx.js";import"./Radio-CeAejfGH.js";import"./SwitchBase-DLfqjyvF.js";import"./FormGroup-D_F3rPqf.js";import"./FormControlLabel-DYFts0_i.js";import"./UploadDocumentField-2wH74sTe.js";import"./FileUpload-jS6oFLCc.js";import"./ManagedACTAccessRequirementFormWikiWrapper-_YhNkK4d.js";import"./GridLegacy-CLSO357H.js";import"./ResearchProjectForm-DOPYPZY0.js";import"./TextFieldWithWordLimit-CJOvP4tK.js";import"./AuthenticatedRequirement-BEkCugOv.js";import"./CertificationRequirement-EA7_5kzB.js";import"./TwoFactorAuthEnabledRequirement-MJnNiImk.js";import"./ValidationRequirement-ZGK1sjtC.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-aFe4SQQe.js";import"./RejectDataAccessRequestModal-B2wJyox_.js";import"./CannedRejectionDialog-C0r6uM-T.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-CSFf9HzN.js";import"./Checkbox-BxWUJH6V.js";import"./Grid-8grLPPZa.js";import"./upperFirst-DExA-87Q.js";import"./_stringToArray-BGxYFItr.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
