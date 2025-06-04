import{j as i}from"./jsx-runtime-CRy6x3sP.js";import{I as n}from"./IconSvg-x2jzHSh6.js";import{C as a}from"./ComplexMenu-C3PMZeVt.js";import"./index-CE2Ac4IV.js";import"./iframe-BdAv9r7b.js";import"./createSvgIcon-CiHFREdi.js";import"./createTheme-Chr0Mdmk.js";import"./DefaultPropsProvider-_g6l0FJe.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-DiZnRNE7.js";import"./useTheme-XiVtr3LS.js";import"./Tooltip-CSpbyYgv.js";import"./index-D1UKly7L.js";import"./Grow-DjIVuFVR.js";import"./resolveComponentProps-CP6vIIt2.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-C6Z4Jw8F.js";import"./index-e1WoLxJ7.js";import"./utils-BbQ6ehAh.js";import"./TransitionGroupContext-CxN-DzGm.js";import"./useEventCallback-B2yVaD7P.js";import"./useTimeout-CBH_whYp.js";import"./useControlled-DkdtTMBP.js";import"./useId-BRVnYYpi.js";import"./useIsFocusVisible-dvxC9prE.js";import"./Popper-BLUMdNSt.js";import"./ownerDocument-DW-IO8s5.js";import"./LayersTwoTone-4Zr97sMa.js";import"./ContentCopyTwoTone-Dm8l4M1S.js";import"./HelpOutlineTwoTone-Ck9BzNoC.js";import"./ErrorOutlined-jIgQb_yk.js";import"./GetAppTwoTone-DMwFW_ru.js";import"./InfoOutlined-BfEwnYTs.js";import"./DeleteTwoTone-B6oZ2EKM.js";import"./CheckCircleTwoTone-t841N9sD.js";import"./DropdownMenu-NmFxaXCd.js";import"./Button-DG4g__Z5.js";import"./ButtonBase-D1lRUUMa.js";import"./Typography-cABtXJa_.js";import"./Fade-BePaFpCm.js";import"./Paper-BO3sHqW8.js";import"./ClickAwayListener-Cku9OPRg.js";import"./MenuList-CpImHi-m.js";import"./getScrollbarSize-Bqq2hMjQ.js";import"./List-FCfJBtk7.js";import"./MenuItem-CkMLX_Xu.js";import"./dividerClasses-CjIxhcPN.js";import"./ListItemIcon-DfkG6g5b.js";import"./ListItemText-OgKLI1aF.js";import"./Divider-DcpSP6qc.js";import"./IconSvgButton-B3o_qDq5.js";import"./IconButton-Df9li5yN.js";import"./useMediaQuery-D1Qn5v1G.js";import"./getThemeProps-BS_qL9ir.js";import"./Box-etwwWi4O.js";const co={title:"UI/ComplexMenu",component:a},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    iconButtons: [{
      icon: 'edit',
      tooltipText: 'This is an icon button',
      onClick: onClickHandler('edit icon')
    }, {
      icon: 'label',
      tooltipText: 'View annotations',
      onClick: onClickHandler('label icon')
    }, {
      icon: 'createVersion',
      tooltipText: 'Create new version',
      onClick: onClickHandler('createVersion icon')
    }],
    dropdownMenus: [{
      dropdownButtonText: 'You can have...',
      buttonProps: {
        endIcon: <IconSvg icon="upload" wrap={false} />
      },
      items: [[{
        text: 'Do something cool',
        onClick: onClickHandler(0)
      }, {
        text: 'This one has a tooltip',
        tooltipText: 'Some more info',
        onClick: onClickHandler(1)
      }, {
        text: 'This one is disabled',
        disabled: true,
        onClick: onClickHandler(3)
      }, {
        text: 'This one has both',
        disabled: true,
        tooltipText: "You can't do this for reasons",
        onClick: onClickHandler(4)
      }], [{
        text: 'You can organize actions into groups',
        onClick: onClickHandler(5)
      }]]
    }, {
      dropdownButtonText: '...multiple dropdown menus!',
      buttonProps: {
        endIcon: <IconSvg icon="download" wrap={false} />
      },
      items: [[{
        text: 'Do something cool',
        onClick: onClickHandler(0)
      }, {
        text: 'This one has a tooltip',
        tooltipText: 'Some more info',
        onClick: onClickHandler(1)
      }, {
        text: 'This one is disabled',
        disabled: true,
        onClick: onClickHandler(3)
      }, {
        text: 'This one has both',
        disabled: true,
        tooltipText: "You can't do this for reasons",
        onClick: onClickHandler(4)
      }], [{
        text: 'You can organize actions into groups',
        onClick: onClickHandler(5)
      }]]
    }]
  }
}`,...(l=(r=t.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const mo=["Demo"];export{t as Demo,mo as __namedExportsOrder,co as default};
