import{z as u,b as e,o as d,s,kq as i,kr as c,H as t,ks as R,i as m,kt as E,ku as _,a0 as I,dH as S,k9 as O}from"./iframe-ebumedXL.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-CmWIYC6l.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-DjfG6bNT.js";import"./useAccessRequirements-De2fY97W.js";import"./index-BXiypiiB.js";import"./_baseOrderBy-Du1uYSUs.js";import"./_baseIteratee-BZfyLuxI.js";import"./_baseMap-DuHHUBBV.js";import"./_baseEach-Bpi3XsvX.js";import"./useInfiniteQuery-DYtjmNBb.js";import"./groupBy-3rF1zG_F.js";import"./_createAggregator-DgFRPDLi.js";import"./DialogBase-CStF3dxn.js";import"./Close-BrRtpMs2.js";import"./HelpPopover-BgDuyYAY.js";import"./MarkdownPopover-B-Z3CE2b.js";import"./LightTooltip-CgA2Jxaj.js";import"./MarkdownSynapse-BSPB6zOl.js";import"./SkeletonButton-ClK4nZ4V.js";import"./SkeletonInlineBlock--tfqxNwn.js";import"./SkeletonTable-D1WsuyYZ.js";import"./SkeletonParagraph-CjkSb5xZ.js";import"./EntityLink-B5lzHA50.js";import"./useEntity-8Ga6EkSh.js";import"./pickBy-BpZa6GB7.js";import"./isString-AT5xGzJd.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CfivZ6YV.js";import"./useGetEntityHeaders-DB5hbNfY.js";import"./EntityIcon-Dgp5oPNQ.js";import"./ErrorChip-B3JEivCb.js";import"./Chip-DwqfSnWD.js";import"./UserOrTeamBadge-BcM60gWe.js";import"./UserBadge-Cxc18L8a.js";import"./useUserBundle-ClJAa-1h.js";import"./MenuItem-DMONT234.js";import"./Card-TzJMzE0i.js";import"./TeamBadge-BHQ5XRWZ.js";import"./UnmanagedACTAccessRequirementItem-9TCbkDDa.js";import"./RequirementItem--S-MBFd7.js";import"./CheckTwoTone-CpN8LQP1.js";import"./ManagedACTAccessRequirementItemView-IUuSagdO.js";import"./SelfSignAccessRequirementItem-B4c6dQlh.js";import"./DataAccessRequestAccessorsFilesForm-Gun-vdSk.js";import"./enums-CWjtjxud.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-DcVzBxPM.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-DM3crkkD.js";import"./UserSearchBox-Dv8ml4J-.js";import"./useDebouncedEffect-YWXeh-W5.js";import"./Autocomplete-CEr_Ge2j.js";import"./usePreviousProps-UzYqkF7W.js";import"./RadioGroup-C-Ce5FAn.js";import"./Radio-kqohRild.js";import"./SwitchBase-hiOfS_D4.js";import"./FormGroup-DbgWVAsY.js";import"./FormControlLabel-EbJgvWzn.js";import"./UploadDocumentField-CtUWAPpL.js";import"./FileUpload-q4oyvYLf.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BG6ay5NX.js";import"./GridLegacy-Ca8rc9it.js";import"./ResearchProjectForm-AT0r4BX5.js";import"./TextFieldWithWordLimit-DPCm40nA.js";import"./AuthenticatedRequirement-C2gz3X44.js";import"./CertificationRequirement-yDcPAi3W.js";import"./TwoFactorAuthEnabledRequirement-DXhXGk4d.js";import"./ValidationRequirement-D92yiCwB.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-DQMdnDd4.js";import"./RejectDataAccessRequestModal-C91T-rKj.js";import"./CannedRejectionDialog-CKeSyyn2.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-Cl7cQ4Nu.js";import"./Checkbox-CZffvlFh.js";import"./Grid-C5Yci4HF.js";import"./upperFirst-CpsNwf4X.js";import"./_stringToArray-DJmNShUm.js";const xe={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),s.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return t.json(a,{status:200})}),s.get(`${e}${R(":id")}`,()=>t.json(m,{status:200})),s.get(`${e}${E(":id")}`,()=>t.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),s.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>t.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),s.put(`${e}${i(":id")}`,async({request:r})=>t.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[s.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return t.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Je=["Demo","DemoError"];export{o as Demo,n as DemoError,Je as __namedExportsOrder,xe as default};
