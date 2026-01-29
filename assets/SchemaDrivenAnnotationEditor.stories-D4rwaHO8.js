import{jH as p}from"./iframe-DOA--ypP.js";import{S as a}from"./SchemaDrivenAnnotationEditor-Tn1Gdbes.js";import"./index-Chi_LkuB.js";import"./useEntity-CbdSqMq0.js";import"./pickBy-DE-dR2QS.js";import"./isString-VW1VaUU-.js";import"./_baseIteratee-DP1eEInn.js";import"./useQueries-ms_hA1-B.js";import"./useSuspenseQuery-CH8JGQoS.js";import"./useInfiniteQuery-TrFnHSG6.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-kCPWgBXC.js";import"./useSchema-CrR7_2-L.js";import"./index-DDPKxZFy.js";import"./enums-BcOReSNy.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-JG6bUIyt.js";import"./uniq-CZc5lcrU.js";import"./forEach-CWOCpBhE.js";import"./Add-e0QKzbPl.js";import"./Grid-37fxI_NR.js";import"./ListItem-BaTpQ8xZ.js";import"./listItemButtonClasses-eIq3jCjC.js";import"./ListItemIcon-C2O30XtZ.js";import"./MenuItem-BXWiBucH.js";import"./ListItemText-CjabcQM_.js";import"./ArrowUpward-mZ0D3JXo.js";import"./ContentCopy-BLZu8GP1.js";import"./FormControlLabel-Be7cb8-z.js";import"./Checkbox-yVjGcUBI.js";import"./SwitchBase-Bv3lYZre.js";import"./FormGroup-C7GAOV4H.js";import"./RadioGroup-DZpQIN7v.js";import"./Radio-Ba-JRI7Q.js";import"./Slider-CCW-ZOPl.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-Bx9ardy9.js";import"./DialogBase-COBCl3WL.js";import"./Close-SOWXhUL2.js";import"./HelpPopover-CQR-J_g5.js";import"./MarkdownPopover-ByIhHE6X.js";import"./LightTooltip-Cp9tv2pP.js";import"./MarkdownSynapse-CorLAqOX.js";import"./SkeletonButton-SLwBY3oR.js";import"./SkeletonInlineBlock-BSyES9P5.js";import"./SkeletonTable-BN8TQIoy.js";import"./SkeletonParagraph-CKHoRTTC.js";import"./JsonSchemaForm-CTcQ6vQE.js";import"./GridLegacy-vymQ_lBE.js";import"./HelpTwoTone-D3g6cUBg.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-CeBz9jzr.js";import"./_createAggregator-BP4J_q2l.js";import"./_baseMap-CMMBPE8F.js";import"./DateTimePicker-Bc7c9Yb9.js";import"./useMobilePicker-BVbVLmZk.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-BjDFsFAu.js";import"./index-gKWz_61H.js";import"./Chip-B3zCMCcx.js";import"./Tabs-CAJLCJ8T.js";import"./KeyboardArrowRight-BcwmSo_Z.js";import"./Autocomplete-SZgF-wnv.js";import"./usePreviousProps-BkuDIe2k.js";import"./use-deep-compare-effect.esm-Dy9g7tgW.js";import"./TextWidget-F1Pn5onT.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
