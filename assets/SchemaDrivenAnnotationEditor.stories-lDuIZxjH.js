import{jx as p}from"./iframe-DiPm50UB.js";import{S as a}from"./SchemaDrivenAnnotationEditor-BrT4LqOp.js";import"./index-Chi_LkuB.js";import"./useEntity-B2TZVtlA.js";import"./pickBy-BPtPdY-S.js";import"./isString-CzPPo9io.js";import"./_baseIteratee-DWhIL05T.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-CatJNhxp.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-D9nmL3Wc.js";import"./useSchema-CmCK9Et7.js";import"./index-CcCiHC3k.js";import"./enums-DRct_Xp7.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-FF_VpvRu.js";import"./uniq-BQM38-Gy.js";import"./forEach-UWyboym_.js";import"./Add-B15oZ2e8.js";import"./Grid-CFNAgCmm.js";import"./ListItem-BqlNB6QC.js";import"./listItemButtonClasses-CiJM6hGw.js";import"./ListItemIcon-iuoJ4PNF.js";import"./MenuItem-V4SUklHJ.js";import"./ListItemText-B9V_fAo3.js";import"./ArrowUpward-DQ7YaAz0.js";import"./ContentCopy-DwiPCx8W.js";import"./FormControlLabel-DJXVjsUK.js";import"./Checkbox-BcJ_w-AA.js";import"./SwitchBase-CIORlFGi.js";import"./FormGroup-q2j9yogA.js";import"./RadioGroup-BJT98eWm.js";import"./Radio-CzlaKIzr.js";import"./Slider-CpRRyAS_.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-EphxDidc.js";import"./DialogBase-DSnQo3lU.js";import"./Close-Jre6tOCB.js";import"./HelpPopover-C-0MB3By.js";import"./MarkdownPopover-D6A11oRt.js";import"./LightTooltip-BwkWxZAw.js";import"./MarkdownSynapse-CVBPcDA6.js";import"./SkeletonButton-Bvb1MiX7.js";import"./SkeletonInlineBlock-LodHGZ4G.js";import"./SkeletonTable-DrjQboaV.js";import"./SkeletonParagraph-CeZAzIZD.js";import"./JsonSchemaForm-CVagjt3d.js";import"./GridLegacy-C22bhzAm.js";import"./HelpTwoTone-C3fyMyTM.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-C1PpRg7J.js";import"./_createAggregator-DuGBtTXr.js";import"./_baseMap-xyu6HgKJ.js";import"./DateTimePicker-DoyWV7b7.js";import"./useMobilePicker-B2ftGsrE.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-BhDvPYLb.js";import"./index-B9ANVuh5.js";import"./Chip-FHtW8UvL.js";import"./Tabs-BZw_0yj6.js";import"./KeyboardArrowRight-CBj8dExS.js";import"./Autocomplete-Cwaz2roQ.js";import"./usePreviousProps-Ca8WKoot.js";import"./use-deep-compare-effect.esm-Dmgrn7Pn.js";import"./TextWidget-BsN5xtDh.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Ir={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Er=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Er as __namedExportsOrder,Ir as default};
