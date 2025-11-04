import{jH as T}from"./iframe-BDc0Xlhy.js";import{S as C}from"./SchemaDrivenAnnotationEditor-j97b1hMr.js";import"./index-r8ZA1smB.js";import"./useEntity-BYd3D3ad.js";import"./pickBy-JkhkWReG.js";import"./isString-CG7XuiJe.js";import"./_baseIteratee-CJS0VTxt.js";import"./useQueries-D1wUNo_x.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-CsjtSfjB.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-C928kgNG.js";import"./useSchema-2dBi-Sr1.js";import"./index-xrfU-Zby.js";import"./enums-DlJWIkFQ.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-Lkq8QNxf.js";import"./uniq-B8EPpNaJ.js";import"./forEach-B8iwwgef.js";import"./Grid-DJrpU52t.js";import"./ListItem-BO0iJMtH.js";import"./listItemButtonClasses-Dkr1AD7c.js";import"./ListItemIcon-BV4_5rnZ.js";import"./MenuItem-CGmsTxjm.js";import"./ListItemText-Bh-z5-uO.js";import"./ArrowUpward-AzRhRIKF.js";import"./ContentCopy-Dsx2-MWg.js";import"./FormControlLabel-B4mFleYZ.js";import"./Checkbox-CqOtMQXw.js";import"./SwitchBase-DmlvyMWs.js";import"./FormGroup-CJnNStMK.js";import"./RadioGroup-DohUy2LD.js";import"./Radio-DA5AYJ9b.js";import"./Slider-CHogdzYL.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-VnZWqUcw.js";import"./DialogBase-B1eCoCTw.js";import"./Close-CUTSnCxN.js";import"./HelpPopover-B3UcgT8N.js";import"./MarkdownPopover-BGH4CVk-.js";import"./LightTooltip-DBJFfDVa.js";import"./MarkdownSynapse-GiDTGx5a.js";import"./SkeletonButton-DOlvDp9u.js";import"./SkeletonInlineBlock-BzdKRqEw.js";import"./SkeletonTable-DvNgt2M0.js";import"./SkeletonParagraph-BrPTge09.js";import"./JsonSchemaForm-1-20jj8Y.js";import"./GridLegacy-BFLBbxNn.js";import"./HelpTwoTone-TPQ9P2Ct.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./groupBy-CUWVOhLH.js";import"./_createAggregator-g1y94DAA.js";import"./_baseMap-CAw--vsR.js";import"./DateTimePicker-oLalq4Hj.js";import"./useMobilePicker-DjOFIpFk.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-DNkgThJj.js";import"./index-C41l0OuT.js";import"./Chip-BVXU1kgT.js";import"./Tabs-B7cYHS9a.js";import"./KeyboardArrowRight-YVtSOFgs.js";import"./Autocomplete-BUBputgf.js";import"./usePreviousProps-BjaJ6N-w.js";import"./use-deep-compare-effect.esm-DHzSo00o.js";import"./TextWidget-BVlo9bUu.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Hr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-Arrays',
    entityId: 'syn25959281'
  }
}`,...(m=(a=r.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};var c,d,y;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-IfThenElse'
  }
}`,...(y=(d=e.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var u,h,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    schemaId: 'nkauer-ad.main'
  }
}`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var S,l,A;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    entityId: 'syn32673093'
  }
}`,...(A=(l=o.parameters)==null?void 0:l.docs)==null?void 0:A.source}}};var f,v,I;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    entityId: 'syn25959288'
  }
}`,...(I=(v=n.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var E,q,b;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    validationSchema: {
      $schema: 'http://json-schema.org/draft-07/schema#',
      $id: \`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/\${mockSchemaBinding.jsonSchemaVersionInfo.$id}\`,
      type: 'object',
      properties: {
        country: {
          enum: ['USA', 'CA'],
          description: 'Test description for country property'
        },
        showStringArray: {
          type: 'boolean'
        }
      },
      required: ['country'],
      allOf: [{
        if: {
          properties: {
            country: {
              const: 'USA'
            }
          },
          required: ['country']
        },
        then: {
          properties: {
            state: {
              type: 'string'
            }
          },
          required: ['state']
        }
      }, {
        if: {
          properties: {
            country: {
              const: 'CA'
            }
          },
          required: ['country']
        },
        then: {
          properties: {
            province: {
              type: 'string'
            }
          },
          required: ['province']
        }
      }, {
        if: {
          properties: {
            showStringArray: {
              const: true
            }
          },
          required: ['showStringArray']
        },
        then: {
          properties: {
            stringArray: {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          }
        }
      }]
    }
  }
}`,...(b=(q=s.parameters)==null?void 0:q.docs)==null?void 0:b.source}}};const Kr=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Kr as __namedExportsOrder,Hr as default};
