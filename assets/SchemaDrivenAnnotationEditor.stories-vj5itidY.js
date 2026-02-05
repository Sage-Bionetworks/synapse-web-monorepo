import{jH as p}from"./iframe-CS-qe6F5.js";import{S as a}from"./SchemaDrivenAnnotationEditor-jl0gNtcN.js";import"./index-Chi_LkuB.js";import"./useEntity-CEovt95A.js";import"./pickBy-D3anvpoD.js";import"./isString-DPWYiFta.js";import"./_baseIteratee-Bajx_U4R.js";import"./useQueries-DFD7lTHh.js";import"./useSuspenseQuery-CKSmV4Hq.js";import"./useInfiniteQuery-CgiD7N7J.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DE-sM5d8.js";import"./useSchema-CItWXtp5.js";import"./index-JEnG72dp.js";import"./enums-BUpU8v7D.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-B_Uh_NTp.js";import"./uniq-BiXysGL5.js";import"./forEach-CWOCpBhE.js";import"./Add-BFQ5Me5b.js";import"./Grid-zhl3ip_T.js";import"./ListItem-9FlV2VkA.js";import"./listItemButtonClasses-CHkccG3X.js";import"./ListItemIcon-BFUNBxsR.js";import"./MenuItem-BPeQWsLy.js";import"./ListItemText-NWIx_gN1.js";import"./ArrowUpward-ByIs9ihH.js";import"./ContentCopy-Bn2k7uIM.js";import"./FormControlLabel-Cva61uz-.js";import"./Checkbox-B1DJC-Zw.js";import"./SwitchBase-C9mMDdEY.js";import"./FormGroup-BBnXWAtZ.js";import"./RadioGroup-3WZ3IRxK.js";import"./Radio-CjaQd6Gi.js";import"./Slider-C-JAm1Ay.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-C8o9i-8I.js";import"./DialogBase-DndsSZnx.js";import"./Close-ChktzVWU.js";import"./HelpPopover-BgVCOrU-.js";import"./MarkdownPopover-DjcyZTOi.js";import"./LightTooltip-Cbj-L_pp.js";import"./MarkdownSynapse-CpxRP6ef.js";import"./SkeletonButton-B9T2RRww.js";import"./SkeletonInlineBlock-BdSvJBN8.js";import"./SkeletonTable-BzgRcoI4.js";import"./SkeletonParagraph-B9Sr-CD_.js";import"./JsonSchemaForm-DYnrlgJR.js";import"./GridLegacy-BrSL0tzv.js";import"./HelpTwoTone-Ck3lgdHy.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-DorK-ATy.js";import"./_createAggregator-BKRAGl-H.js";import"./_baseMap-CCpY8ocF.js";import"./DateTimePicker-CpoZOc4w.js";import"./useMobilePicker-CuUe5LzA.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-DnRGJDx0.js";import"./index-DshQ37pH.js";import"./Chip-CoY3YmCv.js";import"./Tabs-D-jTqZbK.js";import"./KeyboardArrowRight-DeLPL8Ue.js";import"./Autocomplete-BaNWls0m.js";import"./usePreviousProps-BNpP5Qm0.js";import"./use-deep-compare-effect.esm-CleOU24F.js";import"./TextWidget-WKCM4o9_.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
