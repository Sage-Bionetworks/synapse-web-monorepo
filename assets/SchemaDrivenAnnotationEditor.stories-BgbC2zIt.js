import{jy as p}from"./iframe-DMCVtv3C.js";import{S as a}from"./SchemaDrivenAnnotationEditor-D5dElTJC.js";import"./index-Chi_LkuB.js";import"./useEntity-ixiKDUMF.js";import"./pickBy-DkbDPg0c.js";import"./isString-72zFrImG.js";import"./_baseIteratee-C328X4kO.js";import"./useInfiniteQuery-BJNbTrM6.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CwI3mobv.js";import"./useSchema-CfEIDaXA.js";import"./index-D1Y-j64r.js";import"./enums-BO_dGRAH.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-L2UrfanQ.js";import"./uniq-CjSpefvW.js";import"./forEach-CWOCpBhE.js";import"./Add-C-6O1Ty5.js";import"./Grid-B6Ri9mCx.js";import"./ListItem-Dasx96eJ.js";import"./listItemButtonClasses-B6sKbrqe.js";import"./ListItemIcon-BKeEzGeM.js";import"./MenuItem-C6FnBLsu.js";import"./ListItemText-DnyMD0NH.js";import"./ArrowUpward-CGmleQc9.js";import"./ContentCopy-BIystzK-.js";import"./FormControlLabel-lt0TjqJi.js";import"./Checkbox-DcdUAgDt.js";import"./SwitchBase-CZ_AC8D4.js";import"./FormGroup-Ckf5a08v.js";import"./RadioGroup-vzTaSqYK.js";import"./Radio-DNTroSdi.js";import"./Slider-C20ORCS-.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-CKyFVG8s.js";import"./DialogBase-DFfEYCmA.js";import"./Close-C_COaT7z.js";import"./HelpPopover-C0wJkpLA.js";import"./MarkdownPopover-C9Px5Cb6.js";import"./LightTooltip-BxHujysT.js";import"./MarkdownSynapse-Ceq1ADMf.js";import"./SkeletonButton-DUnRwbBy.js";import"./SkeletonInlineBlock-BvYhcS6U.js";import"./SkeletonTable-IfcvYixP.js";import"./SkeletonParagraph-DBOvbC1y.js";import"./JsonSchemaForm-Bbwck6Of.js";import"./GridLegacy-CYa3I1w0.js";import"./HelpTwoTone-CqZe7RvC.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-BBl0erWG.js";import"./_createAggregator-Cuh-0GBz.js";import"./_baseMap-CqR0YY-2.js";import"./DateTimePicker-BoSnc2oh.js";import"./useMobilePicker-BwGOdt-f.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-DWhLhnZU.js";import"./index-dVTjtAYj.js";import"./Chip-U5DUeNga.js";import"./Tabs-CpTVrQ9P.js";import"./KeyboardArrowRight-UIpJ4RrM.js";import"./Autocomplete-DUlNP0yi.js";import"./usePreviousProps-CfbFjF7N.js";import"./use-deep-compare-effect.esm-2eBdksMj.js";import"./TextWidget-Eekz4UDa.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
