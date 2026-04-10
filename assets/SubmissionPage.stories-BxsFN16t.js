import{z as d,b as e,o as u,s as t,kp as i,kq as c,H as s,kr as R,i as m,ks as E,kt as _,a0 as I,dG as S,k8 as O}from"./iframe-BCS2zFLE.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-rwrH3cAi.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-CVwTI7sF.js";import"./useAccessRequirements-88mOTYbo.js";import"./index-BEuukshQ.js";import"./_baseOrderBy-0suuNoPn.js";import"./_baseIteratee-CNNmt5Ou.js";import"./_baseMap-D6Z2KTJp.js";import"./_baseEach-DR-ZM-OT.js";import"./useInfiniteQuery-C7RDpDyE.js";import"./groupBy-D3fmEvsL.js";import"./_createAggregator-uLAI0WRG.js";import"./DialogBase-DQkj6zY_.js";import"./Close-D_V12edy.js";import"./HelpPopover-S99r4Lui.js";import"./MarkdownPopover-BSxLlxLY.js";import"./LightTooltip-CQxu9Yos.js";import"./MarkdownSynapse-CJf-YsFP.js";import"./SkeletonButton-BlPG-SPD.js";import"./SkeletonInlineBlock-9a6I1Gvz.js";import"./SkeletonTable-D-hZBWBR.js";import"./SkeletonParagraph-Ch_An-pk.js";import"./EntityLink-DdXVDGC5.js";import"./useEntity-RNacaqvz.js";import"./pickBy-CnMUFS2E.js";import"./isString-C9PyDJdm.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Czrapiy_.js";import"./useGetEntityHeaders-DYnTdMj8.js";import"./EntityIcon-CzbuSjjc.js";import"./ErrorChip-BiW6d4ok.js";import"./Chip-BWwS-E8w.js";import"./UserOrTeamBadge-p1O2I4ES.js";import"./useUserGroupHeader-rqOoqMM6.js";import"./TeamBadge-00pFqE-a.js";import"./UserBadge-C35_-Ssp.js";import"./useUserBundle-CeR9IeV9.js";import"./MenuItem-p1NQf3Mg.js";import"./Card-DPmweuYt.js";import"./UnmanagedACTAccessRequirementItem-DDOJbdgp.js";import"./RequirementItem-UtIdD3p0.js";import"./LockTwoTone-D_8orY7J.js";import"./ManagedACTAccessRequirementItemView-Bewg33ly.js";import"./SelfSignAccessRequirementItem-FT1eMqfx.js";import"./DataAccessRequestAccessorsFilesForm-Jh4aetsT.js";import"./enums-kokurATL.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-DROKfxkE.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-Bmhs3bt_.js";import"./UserSearchBox-CogtUD1-.js";import"./useDebouncedEffect-DRiczT2r.js";import"./Autocomplete-CGtpzGiq.js";import"./usePreviousProps-Dzc1i5J4.js";import"./RadioGroup-CTo50XVK.js";import"./Radio-D_chF1FW.js";import"./SwitchBase-BktFrpMy.js";import"./FormGroup-CC82Fw5i.js";import"./FormControlLabel-CuWbK74X.js";import"./UploadDocumentField-Dblrgoe3.js";import"./FileUpload-NLeT_7-8.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BOgbnJXb.js";import"./GridLegacy-B03z6nHU.js";import"./ResearchProjectForm-JORFcWCy.js";import"./TextFieldWithWordLimit-zE16kQGX.js";import"./AuthenticatedRequirement-Dlgeffg3.js";import"./CertificationRequirement-H31CNmAb.js";import"./TwoFactorAuthEnabledRequirement-SPl-ehyF.js";import"./ValidationRequirement-Nf_QgznN.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-Dlwxx9D-.js";import"./RejectDataAccessRequestModal-CkyT7uzF.js";import"./CannedRejectionDialog-BltebtxL.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-BsPPfOv5.js";import"./Checkbox-CRlsiFLX.js";import"./Grid-LqL3SHkR.js";import"./upperFirst-B0vqwoxm.js";import"./_stringToArray-DuoQw2kZ.js";const Je={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${R(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${E(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Ve=["Demo","DemoError"];export{o as Demo,n as DemoError,Ve as __namedExportsOrder,Je as default};
