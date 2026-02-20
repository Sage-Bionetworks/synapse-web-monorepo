import{jG as p}from"./iframe-D2314vV7.js";import{S as a}from"./SchemaDrivenAnnotationEditor-Bz6pKWql.js";import"./index-Chi_LkuB.js";import"./useEntity-Bbhi_KOY.js";import"./pickBy-ZOU6t9n3.js";import"./isString-0a-oBQWp.js";import"./_baseIteratee-vNs5qHqV.js";import"./useQueries-CEbKoZrk.js";import"./useSuspenseQuery-Dqm9rcpM.js";import"./useInfiniteQuery-BkYzK-VQ.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DPq4ejvG.js";import"./useSchema-B2BOSpXe.js";import"./index-Ck2JLfAF.js";import"./enums-GrzaVVyp.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-lxWvv5jk.js";import"./uniq-ChD1At2f.js";import"./forEach-CWOCpBhE.js";import"./Add-Be_rbPjO.js";import"./Grid-B3ew8oLs.js";import"./ListItem-CI4GcaHb.js";import"./listItemButtonClasses-BYk7Nv3g.js";import"./ListItemIcon-ClXSUENs.js";import"./MenuItem-Bh76qgcw.js";import"./ListItemText-DyhNIUzD.js";import"./ArrowUpward-BntBSkIZ.js";import"./ContentCopy-tjr1kz0G.js";import"./FormControlLabel-C5kknZuE.js";import"./Checkbox-ClaraH4O.js";import"./SwitchBase-CtNJMxQl.js";import"./FormGroup-z7mM7lym.js";import"./RadioGroup-BB_6UMw8.js";import"./Radio-D3TV5l2y.js";import"./Slider-BF9IfAgh.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-Rlnq_K10.js";import"./DialogBase-CeLIS526.js";import"./Close-DF-SSni9.js";import"./HelpPopover-DPlyz4f8.js";import"./MarkdownPopover-DLwjwgAy.js";import"./LightTooltip-C3RLT3BD.js";import"./MarkdownSynapse-DOP2sYUv.js";import"./SkeletonButton-B53Z_sb3.js";import"./SkeletonInlineBlock-CV4xFhI_.js";import"./SkeletonTable-BKP48mc0.js";import"./SkeletonParagraph-LgnNm5lB.js";import"./JsonSchemaForm-CbFhS-18.js";import"./GridLegacy-8iHMslto.js";import"./HelpTwoTone-BoOOCKjT.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-BcoSiVcA.js";import"./_createAggregator-BEvInwjn.js";import"./_baseMap-CMdkRV5u.js";import"./DateTimePicker-BxmFnJQ3.js";import"./useMobilePicker-C_BEL7R0.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-DLFMNmhA.js";import"./index-uz0aFGkQ.js";import"./Chip-Dx5TUVtU.js";import"./Tabs-BhIBFsK5.js";import"./KeyboardArrowRight-C7rX8qdY.js";import"./Autocomplete-Sle2FEYl.js";import"./usePreviousProps-CDqJKuLz.js";import"./use-deep-compare-effect.esm-NCd8gc-B.js";import"./TextWidget-DsHLHDgZ.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Er={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const qr=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,qr as __namedExportsOrder,Er as default};
