import{jw as p}from"./iframe-CkqKht9A.js";import{S as a}from"./SchemaDrivenAnnotationEditor-BdBd_rj0.js";import"./index-Chi_LkuB.js";import"./useEntity-Kb2CejYP.js";import"./pickBy-B2H4A_RN.js";import"./isString-CoHondZR.js";import"./_baseIteratee-DkkmHvlR.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-BEEFWGUG.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CA0fBehT.js";import"./useSchema-GFu8Qen0.js";import"./index-DxIDTrfB.js";import"./enums-DYfcqidQ.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BtLnyfgf.js";import"./uniq-C0ZVZqvR.js";import"./forEach-UWyboym_.js";import"./Add-BKC1fyrQ.js";import"./Grid-K4WyEUbB.js";import"./ListItem-BCiJtmTu.js";import"./listItemButtonClasses-O3BfULam.js";import"./ListItemIcon-OdnvfI37.js";import"./MenuItem-Dmh5bflc.js";import"./ListItemText-BNhMzUit.js";import"./ArrowUpward-CGxUSft5.js";import"./ContentCopy-BvLlvGGG.js";import"./FormControlLabel-SU0MesBd.js";import"./Checkbox-D91AhJdm.js";import"./SwitchBase-DXM-qXId.js";import"./FormGroup-e71CAjjO.js";import"./RadioGroup-DaK169L6.js";import"./Radio-u6cZH-ni.js";import"./Slider-DDHsIf-Y.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-Kok7E28Q.js";import"./DialogBase-Djx01sCY.js";import"./Close-BgF6Uq-0.js";import"./HelpPopover-GKTPM2Ku.js";import"./MarkdownPopover-D9icFnvp.js";import"./LightTooltip-hsorPXi9.js";import"./MarkdownSynapse-tPNUlNWQ.js";import"./SkeletonButton-Di865Zvp.js";import"./SkeletonInlineBlock-Du1ZrXhF.js";import"./SkeletonTable-CWHVzuOA.js";import"./SkeletonParagraph-BjhKqE1J.js";import"./JsonSchemaForm-DO0yjsqP.js";import"./GridLegacy-C7cf5oof.js";import"./HelpTwoTone-CnHuAtkq.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-BTNHo95N.js";import"./_createAggregator-B_y8ozbl.js";import"./_baseMap-CXPVSq4N.js";import"./DateTimePicker-ChjpvbSl.js";import"./useMobilePicker-CvTS13zt.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-C6qNwS5p.js";import"./index-HFPXFcrl.js";import"./Chip-BmVL4eVd.js";import"./Tabs-OKwf2FDy.js";import"./KeyboardArrowRight-y7TueY3U.js";import"./Autocomplete-CVxL4Aj8.js";import"./usePreviousProps-Dg3neEkv.js";import"./use-deep-compare-effect.esm-BgN_xMVq.js";import"./TextWidget-C3SmChyY.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Ir={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
