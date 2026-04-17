import{jx as p}from"./iframe-C6yCTbiI.js";import{S as a}from"./SchemaDrivenAnnotationEditor-3pRloHNU.js";import"./index-Chi_LkuB.js";import"./useEntity-D7yOxlls.js";import"./pickBy-C9S9PEhh.js";import"./isString-DiBu6olv.js";import"./_baseIteratee-PNjmm_hH.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-87POMCNY.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-bQN7DN24.js";import"./useSchema-BbSGZX93.js";import"./index-CrcXsXJd.js";import"./enums-BJnuL9zs.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-qqIK4uJJ.js";import"./uniq-c37ck-8z.js";import"./forEach-UWyboym_.js";import"./Add-CP9QihTO.js";import"./Grid-BC0gKlm6.js";import"./ListItem-B-_eQXBk.js";import"./listItemButtonClasses-BevsLqTj.js";import"./ListItemIcon-CH-gkhAA.js";import"./MenuItem-CKNKfHkT.js";import"./ListItemText-BWWMyj_h.js";import"./ArrowUpward-DsmXOck3.js";import"./ContentCopy-Cq-RN0zB.js";import"./FormControlLabel-blAWuUdq.js";import"./Checkbox-BvslvcYh.js";import"./SwitchBase-C0tFzd3x.js";import"./FormGroup-kIgz71P_.js";import"./RadioGroup-D5iDnSEE.js";import"./Radio-B1Nj13eJ.js";import"./Slider-UiI3MH6T.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-BfhgLdtZ.js";import"./DialogBase-Blh69WLu.js";import"./Close-ZVMj15KJ.js";import"./HelpPopover-CL5CAAmH.js";import"./MarkdownPopover-CU_-CB6C.js";import"./LightTooltip-COIY3s5G.js";import"./MarkdownSynapse-BPE6Gggh.js";import"./SkeletonButton-BSw7ANLA.js";import"./SkeletonInlineBlock-kzXVwRpV.js";import"./SkeletonTable-BTe-OCwr.js";import"./SkeletonParagraph-CZqj6TP0.js";import"./JsonSchemaForm-DCy9tTQk.js";import"./GridLegacy-Dnt2SI7J.js";import"./HelpTwoTone-B6-Vxncw.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-qNYnuUss.js";import"./_createAggregator-CdrkCsnc.js";import"./_baseMap-Bc4yxRDs.js";import"./DateTimePicker-DeEpK_Hc.js";import"./useMobilePicker-mt4sp3DE.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-SMteQumw.js";import"./index-B3SxQMwi.js";import"./Chip-DN5j6xVl.js";import"./Tabs-DDTwZG9d.js";import"./KeyboardArrowRight-ewEojX5V.js";import"./Autocomplete-BsHfqsAU.js";import"./usePreviousProps-BlssNkvg.js";import"./use-deep-compare-effect.esm-7TxBd-sn.js";import"./TextWidget-hBtruryk.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Ir={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
