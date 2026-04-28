import{n as e}from"./chunk-zsgVPwQN.js";import{Tn as t,xn as n}from"./SynapseClient-BzG4sNth.js";import{r,t as i}from"./mock_user_profile-NKYbA1Kn.js";import{a,o,s}from"./mockTeam-7Xj89NnP.js";import{n as c,t as l}from"./teamHandlers-BEScjAwW.js";import{n as u,t as d}from"./OpenInvitationsToUserCard-LqwkHKmu.js";var f,p,m,h,g,_;e((()=>{u(),c(),r(),s(),t(),f={title:`Features/Team/OpenInvitationsToUser`,component:d,parameters:{stack:`mock`},args:{cardProps:{sx:{p:4}}}},p={parameters:{msw:{handlers:{team:l(n,[{id:`invitation-1`,createdOn:new Date().toISOString(),createdBy:String(i),teamId:String(a),inviteeId:`999`,message:`Come join my cool team so we can submit to the challenge together!`},{id:`invitation-2`,createdOn:new Date().toISOString(),createdBy:String(i),teamId:String(o),inviteeId:`999`,message:`We would love to have you on our research team!`}])}}}},m={parameters:{msw:{handlers:{team:l(n,[])}}}},h={parameters:{msw:{handlers:{team:l(n,[{id:`invitation-1`,createdOn:new Date().toISOString(),createdBy:String(i),teamId:String(a),inviteeId:`999`,message:`Join our team!`}])}}}},g={parameters:{msw:{handlers:{team:l(n,[{id:`invitation-1`,createdOn:new Date().toISOString(),createdBy:String(i),teamId:String(a),inviteeId:`999`}])}}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: {
        team: getAllTeamHandlers(MOCK_REPO_ORIGIN, [{
          id: 'invitation-1',
          createdOn: new Date().toISOString(),
          createdBy: String(MOCK_USER_ID_2),
          teamId: String(MOCK_TEAM_ID_4),
          inviteeId: String(MOCK_USER_ID),
          message: 'Come join my cool team so we can submit to the challenge together!'
        }, {
          id: 'invitation-2',
          createdOn: new Date().toISOString(),
          createdBy: String(MOCK_USER_ID_2),
          teamId: String(MOCK_TEAM_ID_5),
          inviteeId: String(MOCK_USER_ID),
          message: 'We would love to have you on our research team!'
        }])
      }
    }
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: {
        team: getAllTeamHandlers(MOCK_REPO_ORIGIN, [])
      }
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: {
        team: getAllTeamHandlers(MOCK_REPO_ORIGIN, [{
          id: 'invitation-1',
          createdOn: new Date().toISOString(),
          createdBy: String(MOCK_USER_ID_2),
          teamId: String(MOCK_TEAM_ID_4),
          inviteeId: String(MOCK_USER_ID),
          message: 'Join our team!'
        }])
      }
    }
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: {
        team: getAllTeamHandlers(MOCK_REPO_ORIGIN, [{
          id: 'invitation-1',
          createdOn: new Date().toISOString(),
          createdBy: String(MOCK_USER_ID_2),
          teamId: String(MOCK_TEAM_ID_4),
          inviteeId: String(MOCK_USER_ID)
        }])
      }
    }
  }
}`,...g.parameters?.docs?.source}}},_=[`WithPendingInvitations`,`WithNoInvitations`,`WithSingleInvitation`,`WithInvitationNoMessage`]}))();export{g as WithInvitationNoMessage,m as WithNoInvitations,p as WithPendingInvitations,h as WithSingleInvitation,_ as __namedExportsOrder,f as default};