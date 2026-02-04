import{jH as p}from"./iframe-BE9PbKHz.js";import{S as a}from"./SchemaDrivenAnnotationEditor-DzRVSGwP.js";import"./index-Chi_LkuB.js";import"./useEntity-BNdCw6PI.js";import"./pickBy-xtq24EuB.js";import"./isString-BhCiwPqI.js";import"./_baseIteratee-BDrJ2YLg.js";import"./useQueries-DxKdEVnO.js";import"./useSuspenseQuery-CEXBd55g.js";import"./useInfiniteQuery-DENunen_.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-KgEtN1d6.js";import"./useSchema-Bk4gxnNo.js";import"./index-bjecFUmz.js";import"./enums-yOWh4fuP.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BRNZQGBt.js";import"./uniq-aLN-a8gH.js";import"./forEach-CWOCpBhE.js";import"./Add-iWLmPViK.js";import"./Grid-C8a2DaSn.js";import"./ListItem-CZV83Ilm.js";import"./listItemButtonClasses-Bn7ExtEm.js";import"./ListItemIcon-tcVt96cI.js";import"./MenuItem-CzNz3VcW.js";import"./ListItemText-DyYMoHHQ.js";import"./ArrowUpward-Daiga50N.js";import"./ContentCopy-DzL_V1pJ.js";import"./FormControlLabel-BWKwjAXp.js";import"./Checkbox-BCZSGj6B.js";import"./SwitchBase-Dr1KbuyN.js";import"./FormGroup-Da7p5KM_.js";import"./RadioGroup-u3KLPXzD.js";import"./Radio-CTw-XFRJ.js";import"./Slider-NJ8_BzSv.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-BBc5_vLI.js";import"./DialogBase-DZLlSH8O.js";import"./Close-Cz-06mD9.js";import"./HelpPopover-C9q_fGyh.js";import"./MarkdownPopover-BkMntjjk.js";import"./LightTooltip-Dge4KYYp.js";import"./MarkdownSynapse-277_eni0.js";import"./SkeletonButton-DJTXNqO5.js";import"./SkeletonInlineBlock-CIXdsi0t.js";import"./SkeletonTable-BL3DzlJY.js";import"./SkeletonParagraph-Sl7bNyS_.js";import"./JsonSchemaForm-CnKxIKm-.js";import"./GridLegacy-CYcE_kBJ.js";import"./HelpTwoTone-CyZwlOa9.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-CIPcQiVf.js";import"./_createAggregator-v7FxIgyV.js";import"./_baseMap-Bl0VqtCc.js";import"./DateTimePicker-CCu8X6qA.js";import"./useMobilePicker-CchKDUhI.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-BXJzzm2s.js";import"./index-Y-POCSpx.js";import"./Chip-TAfdcvOh.js";import"./Tabs-Du9avMb1.js";import"./KeyboardArrowRight-xYVY14fz.js";import"./Autocomplete-uo6rSJrI.js";import"./usePreviousProps-D0pYQqJp.js";import"./use-deep-compare-effect.esm-DVgw6rTb.js";import"./TextWidget-CLkzfkMR.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
