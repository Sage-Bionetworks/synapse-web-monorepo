import{jG as p}from"./iframe-BnzpyZ4R.js";import{S as a}from"./SchemaDrivenAnnotationEditor-DVbxJJd9.js";import"./index-Chi_LkuB.js";import"./useEntity-CFZNO4rN.js";import"./pickBy-B9RehOLg.js";import"./isString-ClDL4JuE.js";import"./_baseIteratee-CYQwgzTW.js";import"./useQueries-BJefF8Rg.js";import"./useSuspenseQuery-DmgOfBUR.js";import"./useInfiniteQuery-DFHV1svZ.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BFUqysUw.js";import"./useSchema-D7p1Dnay.js";import"./index-ZMWJuAfL.js";import"./enums-fE-7NkQH.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-CjIRVcie.js";import"./uniq-BOc8w4lb.js";import"./forEach-CWOCpBhE.js";import"./Add-DKV8EkYP.js";import"./Grid-DBIc_0Hh.js";import"./ListItem-Bgjd1xxg.js";import"./listItemButtonClasses-DGvQ_ViX.js";import"./ListItemIcon-CfN6AOOI.js";import"./MenuItem-Dybb420V.js";import"./ListItemText-Dbj5dyhF.js";import"./ArrowUpward-B0Dsicoc.js";import"./ContentCopy-DabwKK9H.js";import"./FormControlLabel-BdTACXg8.js";import"./Checkbox-CKV2rIr3.js";import"./SwitchBase-D7LZNsVh.js";import"./FormGroup-ZoASe_7u.js";import"./RadioGroup-CpHPWM0A.js";import"./Radio-Bwyu611q.js";import"./Slider-BLP3BEty.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-BnDH1gry.js";import"./DialogBase-MszPryaT.js";import"./Close-R1S7vilm.js";import"./HelpPopover-Dd3HqNDX.js";import"./MarkdownPopover-CNvQsgo4.js";import"./LightTooltip-R3PWvr3X.js";import"./MarkdownSynapse-CvPnj5RJ.js";import"./SkeletonButton-BV5Vd7zv.js";import"./SkeletonInlineBlock-DHtOAZL_.js";import"./SkeletonTable-BvL0lrSq.js";import"./SkeletonParagraph-8Qf6t-Ql.js";import"./JsonSchemaForm-CaTHRApz.js";import"./GridLegacy-CSkJ_Qa2.js";import"./HelpTwoTone-Bnf336Bq.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-Be90RSFz.js";import"./_createAggregator-CZJHVbTa.js";import"./_baseMap-zbgTj1k7.js";import"./DateTimePicker-Bams-4WJ.js";import"./useMobilePicker-DrsspbeE.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-CNGuie_I.js";import"./index-YZmY-bAV.js";import"./Chip-BL4PoAJY.js";import"./Tabs-BFTidQFo.js";import"./KeyboardArrowRight-Cx0B1zfV.js";import"./Autocomplete-Cp7gXtPk.js";import"./usePreviousProps-CO1-NR5Z.js";import"./use-deep-compare-effect.esm-B31xc_rp.js";import"./TextWidget-BI6KP7Ix.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const br=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,br as __namedExportsOrder,qr as default};
