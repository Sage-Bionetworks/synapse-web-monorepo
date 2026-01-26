import{jG as p}from"./iframe-Byg5KEO3.js";import{S as a}from"./SchemaDrivenAnnotationEditor-BjKWbB24.js";import"./index-Chi_LkuB.js";import"./useEntity-B0F1BV1-.js";import"./pickBy-Cy-6Aoff.js";import"./isString-TROJc6Os.js";import"./_baseIteratee-BBeohnql.js";import"./useQueries-C6NKqSzQ.js";import"./useSuspenseQuery-BsTrDnpu.js";import"./useInfiniteQuery-CZPJsNj1.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-D7nhzojx.js";import"./useSchema-DhtGwPW2.js";import"./index-BzWEEIof.js";import"./enums-CTprVHaS.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-DKjp9Dcv.js";import"./uniq-gdhuEJJ5.js";import"./forEach-CWOCpBhE.js";import"./Add-MunB8EZ-.js";import"./Grid-DxpU9yRv.js";import"./ListItem-Dhqn4tAo.js";import"./listItemButtonClasses-CSdhhBnK.js";import"./ListItemIcon-DdQq2rN9.js";import"./MenuItem-CHAd-f9u.js";import"./ListItemText-CctcO0Sv.js";import"./ArrowUpward-WtXwdvp8.js";import"./ContentCopy-DoI6Uppb.js";import"./FormControlLabel-Dqq0s6IM.js";import"./Checkbox-T60t_rf9.js";import"./SwitchBase-C8XdKuoM.js";import"./FormGroup-hRXkSNVI.js";import"./RadioGroup-DsLq5KwB.js";import"./Radio-XqLyY8oA.js";import"./Slider-CJjYkc42.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-JsFCfxK0.js";import"./DialogBase-CnDWnT2B.js";import"./Close-CpMA1DKn.js";import"./HelpPopover-CT10kuL6.js";import"./MarkdownPopover-DISWB6lN.js";import"./LightTooltip-MazkSLsv.js";import"./MarkdownSynapse-DUFzxpBi.js";import"./SkeletonButton-4jGLqIPK.js";import"./SkeletonInlineBlock-BMXq3IDQ.js";import"./SkeletonTable-DoPPIijf.js";import"./SkeletonParagraph-Bg9PA-th.js";import"./JsonSchemaForm-rfaR1fHD.js";import"./GridLegacy-B8qi-HmM.js";import"./HelpTwoTone-DStdARGh.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-DbQGxc7T.js";import"./_createAggregator-BEfVveyE.js";import"./_baseMap-Dh1UxD53.js";import"./DateTimePicker-BHEJwkeU.js";import"./useMobilePicker-CyKauUs-.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-qFRcmL-P.js";import"./index-ChYi0wId.js";import"./Chip-S8C0h81Q.js";import"./Tabs-B5W1XeFg.js";import"./KeyboardArrowRight-DhN1Xb6w.js";import"./Autocomplete-BwnuuCga.js";import"./usePreviousProps-Dn7MxSj9.js";import"./use-deep-compare-effect.esm-BWSGc1tK.js";import"./TextWidget-BO8jCy6w.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
