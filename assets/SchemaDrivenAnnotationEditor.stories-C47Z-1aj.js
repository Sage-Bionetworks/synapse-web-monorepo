import{jF as p}from"./iframe-BIEbu1W6.js";import{S as a}from"./SchemaDrivenAnnotationEditor-CS4gW1AU.js";import"./index-Chi_LkuB.js";import"./useEntity-CzT7v2yr.js";import"./pickBy-BSkyHBiD.js";import"./isString-u3kX30a_.js";import"./_baseIteratee-EamAns9I.js";import"./useQueries-Cdmrbg4h.js";import"./useSuspenseQuery-B21UYyAc.js";import"./useInfiniteQuery-B0KU597s.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-D9ouYx9P.js";import"./useSchema-BDN1GrOe.js";import"./index-DbA1-4Q4.js";import"./enums-BLXwpT5J.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-Ds8ZIurE.js";import"./uniq-BxbLoW-Z.js";import"./forEach-CWOCpBhE.js";import"./Add-D4RMLXAF.js";import"./Grid-B9VV0g0f.js";import"./ListItem-DVY-dArN.js";import"./listItemButtonClasses-CENHLeNB.js";import"./ListItemIcon-BHKSR3oZ.js";import"./MenuItem-DN4nfg1A.js";import"./ListItemText-KnGBvpb8.js";import"./ArrowUpward-DVcJmatK.js";import"./ContentCopy-BkpmnE6Q.js";import"./FormControlLabel-Bz8ihAzn.js";import"./Checkbox-BRJfsK-C.js";import"./SwitchBase-CInKnVeE.js";import"./FormGroup-8Ko1PbEu.js";import"./RadioGroup-Dbw0HOdB.js";import"./Radio-CO18wH2-.js";import"./Slider-B1FBtp2U.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-BG7mYTUg.js";import"./DialogBase-BOsW7V0r.js";import"./Close-PD-8PwDw.js";import"./HelpPopover-BMpjG3ih.js";import"./MarkdownPopover-D4XSX2HP.js";import"./LightTooltip-Cl8rvG15.js";import"./MarkdownSynapse-C6TGH7qQ.js";import"./SkeletonButton-CYSUqy8V.js";import"./SkeletonInlineBlock-BPt0uiBn.js";import"./SkeletonTable-xs4-qgjj.js";import"./SkeletonParagraph-C7NGLrAr.js";import"./JsonSchemaForm-CEXw2lTk.js";import"./GridLegacy-CeP0XwCG.js";import"./HelpTwoTone-DyWwy4Tm.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-CkDObAnA.js";import"./_createAggregator-DphnR0Lc.js";import"./_baseMap-CKXGksU7.js";import"./DateTimePicker-BpeWwaM_.js";import"./useMobilePicker-Bb6BLgRQ.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-Yl1vRa2O.js";import"./index-G6SXchb0.js";import"./Chip-BTFPdc0m.js";import"./Tabs-5S7VyZHj.js";import"./KeyboardArrowRight-BM-nqYso.js";import"./Autocomplete-BJ7GNsyf.js";import"./usePreviousProps-B7J_MGTt.js";import"./use-deep-compare-effect.esm-BdamFNJU.js";import"./TextWidget-C_wpajan.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
