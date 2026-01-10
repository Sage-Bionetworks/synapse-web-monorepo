import{jF as p}from"./iframe-Pdm4gHko.js";import{S as a}from"./SchemaDrivenAnnotationEditor-DKXhkfHP.js";import"./index-Chi_LkuB.js";import"./useEntity-CXbuQxWB.js";import"./pickBy-VwrgkaVz.js";import"./isString-CeqJC2jy.js";import"./_baseIteratee-CHs1BNVw.js";import"./useQueries-CgvL72Zk.js";import"./useSuspenseQuery-2zOEkQmi.js";import"./useInfiniteQuery-B29qh585.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-8acn-Ujm.js";import"./useSchema-BYPp1F7o.js";import"./index-D8p3qCY-.js";import"./enums-C-KKPbSK.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-Br-2w81B.js";import"./uniq-D1wwJhoZ.js";import"./forEach-CWOCpBhE.js";import"./Add-Dtoa3Mr5.js";import"./Grid-BhJcUTyz.js";import"./ListItem-CaARSvW0.js";import"./listItemButtonClasses-mwEcVMPS.js";import"./ListItemIcon-ufIltfb4.js";import"./MenuItem-D1_ZdkN0.js";import"./ListItemText-3tBNthDs.js";import"./ArrowUpward-DU5X527t.js";import"./ContentCopy-d2hU8XMl.js";import"./FormControlLabel-HPR0Le7Z.js";import"./Checkbox-sjZ3Zt0Q.js";import"./SwitchBase-D80GrcEk.js";import"./FormGroup-GrToRjoO.js";import"./RadioGroup-Cu8Y-DyW.js";import"./Radio-DcH-1h8U.js";import"./Slider-sOPMX3PN.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-ewD4gxwv.js";import"./DialogBase-bF1STKBD.js";import"./Close-B5qXrF4s.js";import"./HelpPopover-DyzmZgtg.js";import"./MarkdownPopover-D9mZ0BlU.js";import"./LightTooltip-DYCkK4-y.js";import"./MarkdownSynapse-CRRjtehd.js";import"./SkeletonButton-KgZa_W_5.js";import"./SkeletonInlineBlock-DSI3AO38.js";import"./SkeletonTable-C47tnEUn.js";import"./SkeletonParagraph-DMN2Qcp6.js";import"./JsonSchemaForm-BtR09yKl.js";import"./GridLegacy-BpE5LebZ.js";import"./HelpTwoTone-ZVnT1ia8.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-6DAwTZH8.js";import"./_createAggregator-wgYNPvjm.js";import"./_baseMap-q97RKbZV.js";import"./DateTimePicker-BNqO7hj1.js";import"./useMobilePicker-xl2HQYqi.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-CY6iHKEJ.js";import"./index-DFJ7Q3Tb.js";import"./Chip-D7Y4i0b0.js";import"./Tabs-CkvR7jS-.js";import"./KeyboardArrowRight-DJ5-WBvT.js";import"./Autocomplete-Ddoq0lD8.js";import"./usePreviousProps-CUJbZbv5.js";import"./use-deep-compare-effect.esm-Dxp9kEaT.js";import"./TextWidget-Ts9y_Iyj.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
