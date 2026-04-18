import{jx as p}from"./iframe-BFoBHJbY.js";import{S as a}from"./SchemaDrivenAnnotationEditor-CA3CQl6-.js";import"./index-Chi_LkuB.js";import"./useEntity--0S7JxW-.js";import"./pickBy-DU6VSHZ0.js";import"./isString-xpqwFCDW.js";import"./_baseIteratee-B7mx-Nnp.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-COrQrVed.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Bm-63_Lb.js";import"./useSchema-C9hdYgE3.js";import"./index-DOVxMGuD.js";import"./enums-D2Z2Pgvo.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-Ct7kGFnH.js";import"./uniq-BlRK7NIb.js";import"./forEach-UWyboym_.js";import"./Add-DzY2uJL9.js";import"./Grid-CRNahgZ3.js";import"./ListItem-SsQVG-M3.js";import"./listItemButtonClasses-B34YF75c.js";import"./ListItemIcon-N4iz99nj.js";import"./MenuItem-BjmuKOgF.js";import"./ListItemText-D8dhOjmQ.js";import"./ArrowUpward-DxWYiJGB.js";import"./ContentCopy-CynAgqeH.js";import"./FormControlLabel-D6wGKDYf.js";import"./Checkbox-DTqXBUmS.js";import"./SwitchBase-B0zHafXA.js";import"./FormGroup-4JO5xl3B.js";import"./RadioGroup-CumAG3os.js";import"./Radio-DMjntJGy.js";import"./Slider-QNcE9dfG.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-DQ7ZhkXi.js";import"./DialogBase-BYig5ial.js";import"./Close-C6cmQXhi.js";import"./HelpPopover-C6OrfbQU.js";import"./MarkdownPopover-Dm2f1BST.js";import"./LightTooltip-Dnju38Ge.js";import"./MarkdownSynapse-CTY9rgWg.js";import"./SkeletonButton-RWaImhZL.js";import"./SkeletonInlineBlock-BH9IFr_J.js";import"./SkeletonTable-DpdP1ZU-.js";import"./SkeletonParagraph-CxOMNOR8.js";import"./JsonSchemaForm-DQFuehbP.js";import"./GridLegacy-Bp6zsc0w.js";import"./HelpTwoTone-CtfEZjc4.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-RhBqhpl0.js";import"./_createAggregator-4lTAn3Tn.js";import"./_baseMap-BdAxBLP1.js";import"./DateTimePicker-CyyYLs4e.js";import"./useMobilePicker-N8ztRsro.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-Ca92rHY3.js";import"./index-CIW1_OvL.js";import"./Chip-nCILZLDf.js";import"./Tabs-B9Zfwx1s.js";import"./KeyboardArrowRight-BenwCjPO.js";import"./Autocomplete-CijFYWna.js";import"./usePreviousProps-wXzT0qgu.js";import"./use-deep-compare-effect.esm-BsWsdjnE.js";import"./TextWidget-Hx2C5a_t.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Ir={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
