import{jG as p}from"./iframe-B-xyH02x.js";import{S as a}from"./SchemaDrivenAnnotationEditor-DMDmdy5G.js";import"./index-Chi_LkuB.js";import"./useEntity-B_VK1sTi.js";import"./pickBy-NGLZhl8P.js";import"./isString-BD56fkoe.js";import"./_baseIteratee-fpDZ_ZY4.js";import"./useQueries-D6R1GWKv.js";import"./useSuspenseQuery-C7ZzErHF.js";import"./useInfiniteQuery-Co2saULA.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CFMjsswk.js";import"./useSchema-CCvc3vgK.js";import"./index-DTMQnGmG.js";import"./enums-CbV9-apb.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-CHfNr7If.js";import"./uniq-BhePJzMA.js";import"./forEach-CWOCpBhE.js";import"./Add-B77SYeiR.js";import"./Grid-BrbHm5Ne.js";import"./ListItem-CXfG5eiy.js";import"./listItemButtonClasses-BtFgg0V9.js";import"./ListItemIcon-Bm3yfhiF.js";import"./MenuItem-Dlz7KwY1.js";import"./ListItemText-SoGEW8Bx.js";import"./ArrowUpward-V-iZSbI6.js";import"./ContentCopy-DfdzFWRJ.js";import"./FormControlLabel-CbugnA7k.js";import"./Checkbox-BtMdyA1l.js";import"./SwitchBase-OXBlSqsv.js";import"./FormGroup-CsfZBLJU.js";import"./RadioGroup-B-WJ9OZi.js";import"./Radio-C7f7HjUZ.js";import"./Slider-DV9TIpDJ.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-D9aFQcvZ.js";import"./DialogBase-Bm7WFoz5.js";import"./Close-BSQRjDbl.js";import"./HelpPopover-Bx7iTtjG.js";import"./MarkdownPopover-BdoLK-ES.js";import"./LightTooltip-C149eTsy.js";import"./MarkdownSynapse-CecSU3tu.js";import"./SkeletonButton-DjfAVN5h.js";import"./SkeletonInlineBlock-C-y9BK0k.js";import"./SkeletonTable-Bag6oVsL.js";import"./SkeletonParagraph-DEhsnig5.js";import"./JsonSchemaForm-DLRsSCUl.js";import"./GridLegacy-C2gNJxBQ.js";import"./HelpTwoTone-ozP-LOdY.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-CGL-_oNd.js";import"./_createAggregator-BqyhZRaF.js";import"./_baseMap-DjISqwK4.js";import"./DateTimePicker-CJHwujB1.js";import"./useMobilePicker-wYPzL_k5.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-8in1Tt7f.js";import"./index-BJsp20bP.js";import"./Chip-CRxMN-mm.js";import"./Tabs-CorV7xwu.js";import"./KeyboardArrowRight-CsAjXY4O.js";import"./Autocomplete-Jhp36AtX.js";import"./usePreviousProps-fKqC9N_H.js";import"./use-deep-compare-effect.esm-g-YILfzs.js";import"./TextWidget-CHQ99-1V.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
