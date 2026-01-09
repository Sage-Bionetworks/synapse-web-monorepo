import{jF as p}from"./iframe-DvdBRTAM.js";import{S as a}from"./SchemaDrivenAnnotationEditor-6BmNoPCY.js";import"./index-Chi_LkuB.js";import"./useEntity-CZLbcF9Z.js";import"./pickBy-C-PLJ321.js";import"./isString-sJ0BruNM.js";import"./_baseIteratee-Dv0BX8Lk.js";import"./useQueries-Cz9ppJHT.js";import"./useSuspenseQuery-0rL7Zkrv.js";import"./useInfiniteQuery-B2hHHZp9.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-C2JsL5FI.js";import"./useSchema-Bwgmg_Nx.js";import"./index-Cn5jfJKX.js";import"./enums-CH7iwYNq.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-Bn6A16a5.js";import"./uniq-D71_5P4-.js";import"./forEach-CWOCpBhE.js";import"./Add-DHYsQs7A.js";import"./Grid-ForzocLI.js";import"./ListItem-CXtU3fAI.js";import"./listItemButtonClasses-CGHB4GqN.js";import"./ListItemIcon-B_Cv2fhH.js";import"./MenuItem-wnk0lrZ5.js";import"./ListItemText-sS1RAy_q.js";import"./ArrowUpward-BfC825vH.js";import"./ContentCopy-CR6bYf7O.js";import"./FormControlLabel-CRRHoKVa.js";import"./Checkbox-DEQvbQfH.js";import"./SwitchBase-DwY80y2S.js";import"./FormGroup-DE28l9AD.js";import"./RadioGroup-7KhzJW7Q.js";import"./Radio-pW-FSExp.js";import"./Slider-B3dxo8Qa.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-CaQzY7SE.js";import"./DialogBase-D0NAWliG.js";import"./Close-DIuhwt4I.js";import"./HelpPopover-BVLYNmZ9.js";import"./MarkdownPopover-DgZvY7up.js";import"./LightTooltip-4pv9jmqt.js";import"./MarkdownSynapse-BLTNNvla.js";import"./SkeletonButton-Bf60llvE.js";import"./SkeletonInlineBlock-DETlLR5h.js";import"./SkeletonTable-ChN7ZUgX.js";import"./SkeletonParagraph-CljYlKAw.js";import"./JsonSchemaForm-R285RFy-.js";import"./GridLegacy-BAoMjj_O.js";import"./HelpTwoTone-DZOcZLr4.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-pbo0LfGC.js";import"./_createAggregator-XND8fc20.js";import"./_baseMap-ClSQlnUC.js";import"./DateTimePicker-BEJ_oMRu.js";import"./useMobilePicker-B_GdWjWf.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-GtQDdrds.js";import"./index-Bj0_rJzU.js";import"./Chip-BH2X6cI_.js";import"./Tabs-CthJN3BQ.js";import"./KeyboardArrowRight-DK3nxC5z.js";import"./Autocomplete-DVboj_pW.js";import"./usePreviousProps-CMNLw1PH.js";import"./use-deep-compare-effect.esm-B6PlCZFQ.js";import"./TextWidget-Boukvbgg.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
