import{jw as p}from"./iframe-C4gfjmJw.js";import{S as a}from"./SchemaDrivenAnnotationEditor-CoolBDF7.js";import"./index-Chi_LkuB.js";import"./useEntity-B8ZSyINM.js";import"./pickBy-B-9RPfBW.js";import"./isString-BCzxW86Q.js";import"./_baseIteratee-Dz35VWMi.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-R-HWjYUM.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BJFjglAu.js";import"./useSchema-IuNFYuCb.js";import"./index-BLRk_Yr3.js";import"./enums-DMKx5-3S.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-kgydWJu2.js";import"./uniq-C7JZ0xUB.js";import"./forEach-UWyboym_.js";import"./Add-CBDgnpsW.js";import"./Grid-IW5afcOZ.js";import"./ListItem-B_w-e8lR.js";import"./listItemButtonClasses-CtCO37B-.js";import"./ListItemIcon-pfb80Qjg.js";import"./MenuItem-cS-lgy5x.js";import"./ListItemText-NJXlySYP.js";import"./ArrowUpward-Cb_mU103.js";import"./ContentCopy-CUvUMojO.js";import"./FormControlLabel-xBN1RuLV.js";import"./Checkbox-Bg5y91Je.js";import"./SwitchBase-BsLUiaA3.js";import"./FormGroup-B60NxcFF.js";import"./RadioGroup-d01mPoxn.js";import"./Radio-9nLnIffF.js";import"./Slider-CSC2luW-.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-Cn43g34R.js";import"./DialogBase-B_shssNk.js";import"./Close-DN6bOWfw.js";import"./HelpPopover-COiLoIGR.js";import"./MarkdownPopover-5mB1Kxab.js";import"./LightTooltip-DDJdQBDx.js";import"./MarkdownSynapse-BLr68Dpv.js";import"./SkeletonButton-BIeEptZL.js";import"./SkeletonInlineBlock-BRt0lIXt.js";import"./SkeletonTable-BpAtksSS.js";import"./SkeletonParagraph-C0oOWbiy.js";import"./JsonSchemaForm-Bx6KN_1B.js";import"./GridLegacy-CD6hn1ev.js";import"./HelpTwoTone-DdxlRE6Y.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-169bNJzg.js";import"./_createAggregator-DCzl-64_.js";import"./_baseMap-DkFsmMNY.js";import"./DateTimePicker--DzsRiqV.js";import"./useMobilePicker-BYR2DTOx.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-eHNwvKlP.js";import"./index-XCAB_K8P.js";import"./Chip-DjisOeCN.js";import"./Tabs-DpY6Wtf_.js";import"./KeyboardArrowRight-UKnrPL3E.js";import"./Autocomplete-Bm2VOkjp.js";import"./usePreviousProps-DMi3XmsN.js";import"./use-deep-compare-effect.esm-Cy7-y4j1.js";import"./TextWidget-quABAVdX.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Ir={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
