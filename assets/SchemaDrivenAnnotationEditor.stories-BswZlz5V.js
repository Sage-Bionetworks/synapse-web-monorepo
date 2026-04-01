import{jx as p}from"./iframe-CtRRQlop.js";import{S as a}from"./SchemaDrivenAnnotationEditor-Dc4tOR3I.js";import"./index-Chi_LkuB.js";import"./useEntity-C0Rb3tjf.js";import"./pickBy-B3ZzJcC6.js";import"./isString-D6wtVnUR.js";import"./_baseIteratee-BXQ1WM-F.js";import"./useInfiniteQuery-SCJRjalP.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CXwnc_71.js";import"./useSchema-DBb8g1Dg.js";import"./index-ClNGfEmh.js";import"./enums-Su8IIt7l.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-Hh6WIfXN.js";import"./uniq-Cv8YpuUH.js";import"./forEach-CWOCpBhE.js";import"./Add-CKsnOLn6.js";import"./Grid-DXPNqt8F.js";import"./ListItem-CmuDM2-g.js";import"./listItemButtonClasses-Od4d1K6B.js";import"./ListItemIcon-CMx6nvlS.js";import"./MenuItem-BQGtU2sS.js";import"./ListItemText-B9dbfz01.js";import"./ArrowUpward-3FO6Es4R.js";import"./ContentCopy-D2fqwfcM.js";import"./FormControlLabel-BNm1JdZT.js";import"./Checkbox-cEqZeYxj.js";import"./SwitchBase-DDTU8e8q.js";import"./FormGroup-C2ceEwFD.js";import"./RadioGroup-amjPn9DN.js";import"./Radio-BzPivEnv.js";import"./Slider-CR8x114k.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-D_lIVX08.js";import"./DialogBase-C8HPRqha.js";import"./Close-CTvsNcCQ.js";import"./HelpPopover-DWiuaJ6Y.js";import"./MarkdownPopover-Cjdvah9D.js";import"./LightTooltip-CnDTJ09B.js";import"./MarkdownSynapse-BokKjTo9.js";import"./SkeletonButton-pOxqmMp7.js";import"./SkeletonInlineBlock-DEN7Z-Ku.js";import"./SkeletonTable-DdWEF2Hw.js";import"./SkeletonParagraph-B1xPIO3Y.js";import"./JsonSchemaForm-DRlc-rSw.js";import"./GridLegacy-DwlOiZaW.js";import"./HelpTwoTone-x6HUdnXP.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-BKtKDdjv.js";import"./_createAggregator-Da9W3Y4W.js";import"./_baseMap-DwbT6tLf.js";import"./DateTimePicker-DL7ramhq.js";import"./useMobilePicker-goACTl2K.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-DBq-5Nbw.js";import"./index-6GE_fzjW.js";import"./Chip-CNSuJPte.js";import"./Tabs-usOPXaMi.js";import"./KeyboardArrowRight-LKqxg541.js";import"./Autocomplete-D3lmcKPa.js";import"./usePreviousProps-Twb_anNL.js";import"./use-deep-compare-effect.esm-C0uoZ_oH.js";import"./TextWidget-CYBv0v_d.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
