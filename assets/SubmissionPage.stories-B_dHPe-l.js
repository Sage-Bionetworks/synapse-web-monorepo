import{g as d,k as u,n as t,a3 as c,dZ as R,b as e,kw as i,kx as E,H as s,ky as _,p as m,kz as I,kA as S,kf as O}from"./iframe-OvMmZLQw.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-s6nwN9FC.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-BWmoCKG5.js";import"./useAccessRequirements-B3Xh28Ol.js";import"./index--E8oFEpF.js";import"./_baseOrderBy-DIkncgGP.js";import"./_baseIteratee-ByJHsXBB.js";import"./_baseMap-DqU8tWvx.js";import"./_baseEach-B6VA7Zf5.js";import"./useQueries-Bl6uHz3x.js";import"./useInfiniteQuery-8PVcqDIl.js";import"./groupBy-BTh1qMdC.js";import"./_createAggregator-AZMirhWv.js";import"./DialogBase-ibfiDrrj.js";import"./Close-C3EhJtlG.js";import"./HelpPopover-6zcoBJtq.js";import"./MarkdownPopover-DIqu7B8a.js";import"./LightTooltip-D4lO7JMJ.js";import"./MarkdownSynapse-C8qQ4WRw.js";import"./SkeletonButton-Cyy-yL2p.js";import"./SkeletonInlineBlock-DfEg9q_u.js";import"./SkeletonTable-BYbIFMu2.js";import"./SkeletonParagraph-DkLTjuRc.js";import"./EntityLink-CWU-p2fP.js";import"./useEntity-BUtNU_xP.js";import"./pickBy-XDNnLnBh.js";import"./isString-BqeewCpc.js";import"./useSuspenseQuery-C4irymMN.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-uaGE46Td.js";import"./useGetEntityHeaders-CcfJ4auE.js";import"./EntityIcon-DaGwdy-v.js";import"./ErrorChip-zFQZtIFj.js";import"./Chip-mRnT2cVS.js";import"./UserOrTeamBadge-BQ-dmzvT.js";import"./UserBadge-D9HYZUx3.js";import"./useUserBundle-CBDFXWMp.js";import"./MenuItem-BWMN49kR.js";import"./Card-DE3tt8NQ.js";import"./TeamBadge-DuMGRwzg.js";import"./useRealmPrincipals-DF5Jo9d5.js";import"./UnmanagedACTAccessRequirementItem-UtqDK9kI.js";import"./RequirementItem-BKgb2xgn.js";import"./LockTwoTone-DGk46gdD.js";import"./UserSearchBoxV2-7pdF0USr.js";import"./useDebouncedEffect-C8rfpcCv.js";import"./use-deep-compare-effect.esm-CXpco7o1.js";import"./uniq-Ds8tYlxg.js";import"./without-Cijc3Ck4.js";import"./Select-aab027f3.esm-B1vAodYH.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-CcpMPgbM.js";import"./SelfSignAccessRequirementItem-BUmQqzFV.js";import"./DataAccessRequestAccessorsFilesForm-B-VMlusu.js";import"./enums-C5DDkwu8.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-BXWdE2c2.js";import"./RadioGroup-C0kdX7Lg.js";import"./Radio-DmKUzAvc.js";import"./SwitchBase-DO28J9p4.js";import"./FormGroup-D9m0vmLR.js";import"./FormControlLabel-NCFeGzy8.js";import"./UploadDocumentField-B8ooFUHP.js";import"./FileUpload-kLMdq4WA.js";import"./ManagedACTAccessRequirementFormWikiWrapper-DOEIU1L_.js";import"./GridLegacy-Bzg6Nwyv.js";import"./ResearchProjectForm-9VylmK_Q.js";import"./TextFieldWithWordLimit-C7d3Ddob.js";import"./AuthenticatedRequirement-DePB83jm.js";import"./CertificationRequirement-CIp7RvuP.js";import"./TwoFactorAuthEnabledRequirement-r8DBUfBE.js";import"./ValidationRequirement-Cx5bgjBX.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-BnCyJvIq.js";import"./RejectDataAccessRequestModal-C7EDaYgA.js";import"./CannedRejectionDialog-DTpGZwRV.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-CjxFskfc.js";import"./Checkbox-BpWdqwWg.js";import"./Grid-PPAzNItH.js";import"./upperFirst-DGRMG8DJ.js";import"./_stringToArray-CEToHk7C.js";const Xe={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
