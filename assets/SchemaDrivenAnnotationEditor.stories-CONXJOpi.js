import{jH as p}from"./iframe-D5_h0PF9.js";import{S as a}from"./SchemaDrivenAnnotationEditor-9xWG_DyN.js";import"./index-Chi_LkuB.js";import"./useEntity-BDNnEgNG.js";import"./pickBy-BCl_XONO.js";import"./isString-6uu2HqKu.js";import"./_baseIteratee-B05hfmCH.js";import"./useQueries-C4PyX30W.js";import"./useSuspenseQuery-BZOc09Ao.js";import"./useInfiniteQuery-BmUArCE3.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-c9BNONY7.js";import"./useSchema-F6OrEBh0.js";import"./index-DwkOPaCb.js";import"./enums-GqZH8eoU.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BCgxkOtg.js";import"./uniq-CTAZwoHC.js";import"./forEach-CWOCpBhE.js";import"./Add-CWj_HvXe.js";import"./Grid-D-UfU3T_.js";import"./ListItem-DQfH65mv.js";import"./listItemButtonClasses-D-qzCweW.js";import"./ListItemIcon-CmXliqzz.js";import"./MenuItem-CyRowmJi.js";import"./ListItemText-BohuSOn3.js";import"./ArrowUpward-DxNN0wX2.js";import"./ContentCopy-DOv-YbaK.js";import"./FormControlLabel-Bjfctvt0.js";import"./Checkbox-BycybiCS.js";import"./SwitchBase-CdSXRcwt.js";import"./FormGroup-5mcHdi4u.js";import"./RadioGroup-CLCcSlA6.js";import"./Radio-mHWtLaEh.js";import"./Slider-SRUyb2GU.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-BGdn1nyH.js";import"./DialogBase-BSPbIEb2.js";import"./Close-PtWlikut.js";import"./HelpPopover-Cdyc7PIT.js";import"./MarkdownPopover-DYStciEH.js";import"./LightTooltip-B0jdMCwN.js";import"./MarkdownSynapse-rMn4dUa6.js";import"./SkeletonButton-CnXRIIps.js";import"./SkeletonInlineBlock-DCpTDBDa.js";import"./SkeletonTable-C0hupK0t.js";import"./SkeletonParagraph-C3Ev59KW.js";import"./JsonSchemaForm-O6ts-aNz.js";import"./GridLegacy-3EBbUXB6.js";import"./HelpTwoTone-VEvcJGph.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-CwC0bxho.js";import"./_createAggregator-BAg6D6QA.js";import"./_baseMap-BWK9b449.js";import"./DateTimePicker-CpmdCSSs.js";import"./useMobilePicker-BcJ4AW-v.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-Bt8e14jV.js";import"./index-DihqrFgA.js";import"./Chip-CBZ7YR6P.js";import"./Tabs-DhSucA6U.js";import"./KeyboardArrowRight-DIoA8GmN.js";import"./Autocomplete-rZFlf-oS.js";import"./usePreviousProps-B-ckrDkP.js";import"./use-deep-compare-effect.esm-Dj37jx1J.js";import"./TextWidget-B7NWKTpK.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
