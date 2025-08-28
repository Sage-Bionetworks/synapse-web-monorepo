import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{I as n}from"./IconSvg-CnT4vWM-.js";import{C as p}from"./ComplexMenu-CaWGa6lg.js";import"./createSvgIcon-DdAS40k4.js";import"./index-yCXaIsJ4.js";import"./iframe-Dgw0ddSq.js";import"./createTheme-Do2aQZve.js";import"./DefaultPropsProvider-DA7gNYCg.js";import"./spreadSx-CwcO6WA9.js";import"./useTheme-Cp6Z_OGT.js";import"./useTheme-C0QTeBxb.js";import"./Tooltip-BrgXw1Ls.js";import"./index-jmgeEAfX.js";import"./useSlot-DEVxrYXR.js";import"./useForkRef-Bn9qWfWW.js";import"./useTimeout-Da7I_d7d.js";import"./useControlled-vLN5jkuc.js";import"./getReactElementRef-CXJuXcK9.js";import"./index-DmP6khY1.js";import"./index-CQ8BoWaF.js";import"./Grow-r6SG4a-A.js";import"./Popper-CZtBRXx-.js";import"./ownerDocument-DW-IO8s5.js";import"./isFocusVisible-B8k4qzLc.js";import"./LayersTwoTone-BuJLeBPW.js";import"./ContentCopyTwoTone-q9P_ajgB.js";import"./HelpOutlineTwoTone-DeUIenpf.js";import"./ErrorOutlined-Cw-_nxLs.js";import"./GetAppTwoTone-CexIQ1Ef.js";import"./InfoOutlined-CoCuWFsQ.js";import"./PhoneTwoTone-DvUuiQZT.js";import"./DeleteTwoTone-mMY7zHiE.js";import"./CheckCircleTwoTone-B-HOVuQz.js";import"./DropdownMenu-BlYkwhi_.js";import"./Button-Bdu-kUqw.js";import"./createSimplePaletteValueFilter-BHnhbDkS.js";import"./ButtonBase-BGA1bzPt.js";import"./CircularProgress-BVLjCIit.js";import"./Typography-CmGZeFeL.js";import"./index-DwjXVB4n.js";import"./extendSxProp-B1V_wo3n.js";import"./Fade-tsytefLF.js";import"./Paper-DMmdFBKL.js";import"./ClickAwayListener-DRFmCXUS.js";import"./MenuList-Bp0L4yOe.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-BlY_NjrL.js";import"./MenuItem-DMTneFgn.js";import"./dividerClasses-CbJKIiPL.js";import"./ListItemIcon-CQQ8geGo.js";import"./ListItemText-PBs3OrZ0.js";import"./Divider-B_D3n_cy.js";import"./IconSvgButton-npH8FzGS.js";import"./IconButton-CblLNGjE.js";import"./index-Ch1fV5Lz.js";import"./getThemeProps-D7cW0aau.js";import"./Box-CRuUmbYm.js";const xo={title:"UI/ComplexMenu",component:p},o=s=>()=>{console.log("Item clicked",s)},t={args:{iconButtons:[{icon:"edit",tooltipText:"This is an icon button",onClick:o("edit icon")},{icon:"label",tooltipText:"View annotations",onClick:o("label icon")},{icon:"createVersion",tooltipText:"Create new version",onClick:o("createVersion icon")}],dropdownMenus:[{dropdownButtonText:"You can have...",buttonProps:{endIcon:i.jsx(n,{icon:"upload",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]},{dropdownButtonText:"...multiple dropdown menus!",buttonProps:{endIcon:i.jsx(n,{icon:"download",wrap:!1})},items:[[{text:"Do something cool",onClick:o(0)},{text:"This one has a tooltip",tooltipText:"Some more info",onClick:o(1)},{text:"This one is disabled",disabled:!0,onClick:o(3)},{text:"This one has both",disabled:!0,tooltipText:"You can't do this for reasons",onClick:o(4)}],[{text:"You can organize actions into groups",onClick:o(5)}]]}]}};var e,r,l;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(l=(r=t.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const Co=["Demo"];export{t as Demo,Co as __namedExportsOrder,xo as default};
