import{jJ as T}from"./iframe-0_E6QA5q.js";import{S as C}from"./SchemaDrivenAnnotationEditor-BvdqhGI7.js";import"./index-r8ZA1smB.js";import"./useEntity-DkxOUomB.js";import"./pickBy-COnlvOP-.js";import"./isString-CHkl6-Jt.js";import"./_baseIteratee-yZQzlcky.js";import"./useQueries-NhDfFyQr.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-CHkzf4rJ.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BuNPg_4p.js";import"./useSchema-DQ-pnh8B.js";import"./index-Nw7-WExh.js";import"./enums-kcFinEpp.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-tGT8U_2K.js";import"./uniq-BJz7K6kn.js";import"./forEach-B8iwwgef.js";import"./Grid-XQrIDmWa.js";import"./ListItem-CQeJIzPi.js";import"./listItemButtonClasses-CadlTcWg.js";import"./ListItemIcon-B6LHolls.js";import"./MenuItem-CAzHj_Ft.js";import"./ListItemText-ClcTStvj.js";import"./ArrowUpward-Cj7EzJUP.js";import"./ContentCopy-DYvvdU-1.js";import"./FormControlLabel-CaOULE1P.js";import"./Checkbox-CKD6Zm0i.js";import"./SwitchBase-D-sUOWXD.js";import"./FormGroup-IpCm7inK.js";import"./RadioGroup-TTWtkyWL.js";import"./Radio-CJZ4Aj9i.js";import"./Slider-B_DhIKIH.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-FBI9JYIN.js";import"./DialogBase-DH7mUDhm.js";import"./Close-BPBl1RMs.js";import"./HelpPopover-DU2BwJqT.js";import"./MarkdownPopover-CxR3E5eY.js";import"./LightTooltip-Cbbiylwj.js";import"./MarkdownSynapse-KMP-leAR.js";import"./SkeletonButton-B7g5trXc.js";import"./SkeletonInlineBlock-C6wGBfZc.js";import"./SkeletonTable-DeeOmUeM.js";import"./SkeletonParagraph--7EvjUiD.js";import"./JsonSchemaForm-yD7IQCoQ.js";import"./GridLegacy-CHCvNL4B.js";import"./HelpTwoTone-Uz4SONTT.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./groupBy-DoS0yKXS.js";import"./_createAggregator-BfwEdQbx.js";import"./_baseMap-DU26S_52.js";import"./DateTimePicker-UdDcApZT.js";import"./useMobilePicker-Mk2MiMbr.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-DJtSQFoe.js";import"./index-BqiUF3nO.js";import"./Chip-CGQIXmoB.js";import"./Tabs-DGfHI0Tt.js";import"./KeyboardArrowRight-BfQtiegX.js";import"./Autocomplete-B8KCOYhy.js";import"./usePreviousProps-CEEBDOLm.js";import"./use-deep-compare-effect.esm-DEjD50c5.js";import"./TextWidget-BGNt4sdr.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Jr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(b=(q=s.parameters)==null?void 0:q.docs)==null?void 0:b.source}}};const Kr=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Kr as __namedExportsOrder,Jr as default};
