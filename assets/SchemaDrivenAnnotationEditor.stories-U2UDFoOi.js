import{jG as p}from"./iframe-BoCRNbsR.js";import{S as a}from"./SchemaDrivenAnnotationEditor-CjIE3BGH.js";import"./index-Chi_LkuB.js";import"./useEntity-BLxQdrE1.js";import"./pickBy-6pkKX37b.js";import"./isString-1YX391PZ.js";import"./_baseIteratee-CTfPkNe8.js";import"./useQueries-DDvkrzrG.js";import"./useSuspenseQuery-BPlGfXJb.js";import"./useInfiniteQuery-C7o_Dqt1.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-anaddiS5.js";import"./useSchema-BRz8N8Zn.js";import"./index-Diub7Xbh.js";import"./enums-j_O7apI4.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-CrkqBzm4.js";import"./uniq-DRjkbO_K.js";import"./forEach-CWOCpBhE.js";import"./Add-lw_Cz7FM.js";import"./Grid-bLyHLBDy.js";import"./ListItem-Bh2QNf2Q.js";import"./listItemButtonClasses-DRvlpZ1L.js";import"./ListItemIcon-BxnZbqYi.js";import"./MenuItem-jUPn2SHm.js";import"./ListItemText-CjZ7Dwuf.js";import"./ArrowUpward-B-7laCQL.js";import"./ContentCopy-EqmI9vLp.js";import"./FormControlLabel-BKE42yhb.js";import"./Checkbox-DV0KOIC_.js";import"./SwitchBase-DMiiRzXA.js";import"./FormGroup-DctWVFCf.js";import"./RadioGroup-HkR5c_Uz.js";import"./Radio-aiIcsTLC.js";import"./Slider-mAB-sBxx.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-DXOTVrB0.js";import"./DialogBase-BB6caHGd.js";import"./Close-DsrOrIhe.js";import"./HelpPopover-_vX2Eq3R.js";import"./MarkdownPopover-CTLC6eAI.js";import"./LightTooltip-BeuPdc0Y.js";import"./MarkdownSynapse-DncFydPI.js";import"./SkeletonButton-DmCSxkyJ.js";import"./SkeletonInlineBlock-C7NJLvZR.js";import"./SkeletonTable-COyqVKjD.js";import"./SkeletonParagraph-DoTSC7_a.js";import"./JsonSchemaForm-DJbMjTQn.js";import"./GridLegacy-Zhp2FBJW.js";import"./HelpTwoTone-Q-taD-7T.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-Cwj15R-_.js";import"./_createAggregator-DHMybxwl.js";import"./_baseMap-m90rBXOw.js";import"./DateTimePicker-BEZMFpdn.js";import"./useMobilePicker-BPdq5kCC.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-DsUS1khA.js";import"./index-DSH6M_f8.js";import"./Chip-BpnG7Xon.js";import"./Tabs-KF2FVT2g.js";import"./KeyboardArrowRight-3N7FPcdr.js";import"./Autocomplete-CGi_FT-H.js";import"./usePreviousProps-i9wGGziR.js";import"./use-deep-compare-effect.esm-B8nkfzTc.js";import"./TextWidget-DgQm6vkT.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Er={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
