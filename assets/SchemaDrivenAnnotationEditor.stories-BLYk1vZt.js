import{jx as p}from"./iframe-DhpKet55.js";import{S as a}from"./SchemaDrivenAnnotationEditor-CTEp_74J.js";import"./index-Chi_LkuB.js";import"./useEntity-9q1Wh5Bu.js";import"./pickBy-2xqbr6W2.js";import"./isString-CTj-vNCx.js";import"./_baseIteratee-IrfZTN6K.js";import"./useInfiniteQuery-BThf8L3S.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CSN4EF6S.js";import"./useSchema-CNIpFwq7.js";import"./index-Bs9KuhRd.js";import"./enums-BrzcmIpu.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-DYMGRgHQ.js";import"./uniq-DynFiIDi.js";import"./forEach-CWOCpBhE.js";import"./Add-ril2fZ6d.js";import"./Grid-emFPcA4V.js";import"./ListItem-C9y8yrZY.js";import"./listItemButtonClasses-BKQfmJ0n.js";import"./ListItemIcon-p6b5aWfk.js";import"./MenuItem-DFY-M91_.js";import"./ListItemText-xKCu1K3i.js";import"./ArrowUpward-BghIdxfI.js";import"./ContentCopy-kfYrEIHO.js";import"./FormControlLabel-BmYM2_bg.js";import"./Checkbox-Cyn-RvsF.js";import"./SwitchBase-CwwNy5Jt.js";import"./FormGroup-RMHcGD5n.js";import"./RadioGroup-LHxlfuO8.js";import"./Radio-CHzJk7F4.js";import"./Slider-CxwywYzz.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-C_059iZP.js";import"./DialogBase-CQOhgDpz.js";import"./Close-gzmIzwoR.js";import"./HelpPopover-CPRkTcWQ.js";import"./MarkdownPopover-BFmylr6y.js";import"./LightTooltip-B31RTkkv.js";import"./MarkdownSynapse-BSCmNA0L.js";import"./SkeletonButton-DB6VnDRU.js";import"./SkeletonInlineBlock-BpymSWGX.js";import"./SkeletonTable-CDPXZ6i1.js";import"./SkeletonParagraph-CQn9tuId.js";import"./JsonSchemaForm-DE2yhj_j.js";import"./GridLegacy-kaK_QRJr.js";import"./HelpTwoTone-Bgguy1qb.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-Dbfv1xmh.js";import"./_createAggregator-Z0zzultG.js";import"./_baseMap-5raP30rN.js";import"./DateTimePicker-qr5hJyA0.js";import"./useMobilePicker-DfzGAk9L.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-DQcV6WFD.js";import"./index-CpJ472Wk.js";import"./Chip-9P7ZQoxZ.js";import"./Tabs-bBaYhfiw.js";import"./KeyboardArrowRight-DrUHhAVX.js";import"./Autocomplete-B5PDb7nM.js";import"./usePreviousProps-rusbXXek.js";import"./use-deep-compare-effect.esm-Bqj6i4A8.js";import"./TextWidget-BqRDTSUx.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-Arrays',
    entityId: 'syn25959281'
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-IfThenElse'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    schemaId: 'nkauer-ad.main'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    entityId: 'syn32673093'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    entityId: 'syn25959288'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Ir=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Ir as __namedExportsOrder,vr as default};
