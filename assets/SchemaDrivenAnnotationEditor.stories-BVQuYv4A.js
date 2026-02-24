import{jF as p}from"./iframe-BQS6qtw3.js";import{S as a}from"./SchemaDrivenAnnotationEditor-CPKd6QC6.js";import"./index-Chi_LkuB.js";import"./useEntity-D-Y1SZCd.js";import"./pickBy-jxgpgMOu.js";import"./isString-ZjUzAhK6.js";import"./_baseIteratee-tzEKu30x.js";import"./useQueries-CUWRB_Du.js";import"./useSuspenseQuery-z742AnhG.js";import"./useInfiniteQuery-CbIRomxB.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BsZvQjm7.js";import"./useSchema-CjIJl6z2.js";import"./index-BlAucHxd.js";import"./enums-lTsc-J9N.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-DGXnFwjl.js";import"./uniq-jIB07xbu.js";import"./forEach-CWOCpBhE.js";import"./Add-DxTxKJ0Q.js";import"./Grid-3RO3DzDO.js";import"./ListItem-CHHP6nus.js";import"./listItemButtonClasses-B9xhDk9q.js";import"./ListItemIcon-DBSGcpow.js";import"./MenuItem-C3kzUxKu.js";import"./ListItemText-D4NNIP1F.js";import"./ArrowUpward-B5LFadWY.js";import"./ContentCopy-BXNBER4F.js";import"./FormControlLabel-C7djf5vw.js";import"./Checkbox-DGUKfIt9.js";import"./SwitchBase-mlDnfciu.js";import"./FormGroup-BCCvC1EK.js";import"./RadioGroup-Dx_zNfZP.js";import"./Radio-C34-CQ0l.js";import"./Slider-CBY6lil_.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-ycX2jcUO.js";import"./DialogBase-BFxYZZoa.js";import"./Close-DNav6fH0.js";import"./HelpPopover-qCLkd-Tk.js";import"./MarkdownPopover-DTfEgFmO.js";import"./LightTooltip-CsVEpTPe.js";import"./MarkdownSynapse-DVax0Jmd.js";import"./SkeletonButton-Cq3ID3gv.js";import"./SkeletonInlineBlock-D36uEl4g.js";import"./SkeletonTable-EcKAjw5h.js";import"./SkeletonParagraph-C3oZhxG8.js";import"./JsonSchemaForm-BC-qVHhE.js";import"./GridLegacy-DkRO5Enk.js";import"./HelpTwoTone-B6-W2dfU.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-TpYWqjub.js";import"./_createAggregator-8VvYkSxC.js";import"./_baseMap-D1_qqhz5.js";import"./DateTimePicker-BbckSJYo.js";import"./useMobilePicker-Coss7P6q.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-BbhrgGW0.js";import"./index-DIRtHi4A.js";import"./Chip-ecDlwPeu.js";import"./Tabs-ByN1WqRH.js";import"./KeyboardArrowRight-DRwO80wh.js";import"./Autocomplete-DrDCVv3C.js";import"./usePreviousProps-C6Ae5BQU.js";import"./use-deep-compare-effect.esm-Ds654Svp.js";import"./TextWidget-CYJukz7C.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Er={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
