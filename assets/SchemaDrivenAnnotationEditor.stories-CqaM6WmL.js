import{jw as p}from"./iframe-BPNyJNxm.js";import{S as a}from"./SchemaDrivenAnnotationEditor-DGHNfjrg.js";import"./index-Chi_LkuB.js";import"./useEntity-g0LGIseq.js";import"./pickBy-DiD8FMOP.js";import"./isString-LELON9p1.js";import"./_baseIteratee-j2vHxdg-.js";import"./useInfiniteQuery-XrkzDwnB.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DQkGL32t.js";import"./useSchema-BGu59Mrl.js";import"./index-CTmMhP4x.js";import"./enums-DLwho4m7.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-CZ4hYEvj.js";import"./uniq-WHQqfLoB.js";import"./forEach-UWyboym_.js";import"./Add-x8PXHoyA.js";import"./Grid-BO2Ij0QT.js";import"./ListItem-d4IiLeG1.js";import"./listItemButtonClasses-Ds1B8RjS.js";import"./ListItemIcon-BFVaJd6W.js";import"./MenuItem-CEXBRyzq.js";import"./ListItemText-CoMTWwjU.js";import"./ArrowUpward-C1M6sFZE.js";import"./ContentCopy-Neu4R0YP.js";import"./FormControlLabel-DMh_lHXX.js";import"./Checkbox-G1oNYZiA.js";import"./SwitchBase-BHyxwE7g.js";import"./FormGroup-DdzO-B-4.js";import"./RadioGroup-CocA3QwB.js";import"./Radio-CiW1w_Pp.js";import"./Slider-BJwttAkq.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-BpyGFD_j.js";import"./DialogBase-DSrJGPMK.js";import"./Close-wqX4il5f.js";import"./HelpPopover-cbCWQpx5.js";import"./MarkdownPopover-DYWWH0E2.js";import"./LightTooltip-D69z1M63.js";import"./MarkdownSynapse-D3aSYsDm.js";import"./SkeletonButton-DKmXtnFb.js";import"./SkeletonInlineBlock-YVxGd7KG.js";import"./SkeletonTable-DBeYWS70.js";import"./SkeletonParagraph-BxBZJF2o.js";import"./JsonSchemaForm-DLRd-2Ml.js";import"./GridLegacy-C7hN4aXS.js";import"./HelpTwoTone-Q-RxgFyN.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-DQGAI_e_.js";import"./_createAggregator-T_6oP6Of.js";import"./_baseMap-vlPjx_9F.js";import"./DateTimePicker-CCnnrsD8.js";import"./useMobilePicker-DDtxPT7P.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-CqYm3I5Z.js";import"./index-Br3ickc1.js";import"./Chip-Hk6f0McD.js";import"./Tabs-DgcQIQZq.js";import"./KeyboardArrowRight-QkE9j28i.js";import"./Autocomplete-BP7i1wvE.js";import"./usePreviousProps--x0xYk9p.js";import"./use-deep-compare-effect.esm-D-MPp99L.js";import"./TextWidget-DSp39dXG.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
