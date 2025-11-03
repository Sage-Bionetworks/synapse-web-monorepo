import{jH as T}from"./iframe-kh7i1csa.js";import{S as C}from"./SchemaDrivenAnnotationEditor-D5Mnwiyd.js";import"./index-r8ZA1smB.js";import"./useEntity-C1yyUaFg.js";import"./pickBy-COpr4INF.js";import"./isString-BzYB4S-B.js";import"./_baseIteratee-CNSij9QJ.js";import"./useQueries-gSpjMszZ.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-DYbKlyxH.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DJ7rMmas.js";import"./useSchema-Cm8En2e_.js";import"./index-DD-jbIpn.js";import"./enums-BfA0Jntc.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-C-q0c1u0.js";import"./uniq-C6C8K34y.js";import"./forEach-B8iwwgef.js";import"./Grid-nnrsqVv6.js";import"./ListItem-CarGqENm.js";import"./listItemButtonClasses-CHWCFeWd.js";import"./ListItemIcon-BUFEjsaO.js";import"./MenuItem-CfQGt1HR.js";import"./ListItemText-BOLkHArO.js";import"./ArrowUpward-BPS5Aqed.js";import"./ContentCopy-DfsnV8dz.js";import"./FormControlLabel-BdtGU7On.js";import"./Checkbox-BwE9-nDN.js";import"./SwitchBase-jMUczUFb.js";import"./FormGroup-QCZKBm1U.js";import"./RadioGroup-BVYEgdFY.js";import"./Radio-B0W9sHa3.js";import"./Slider-XGev_dqK.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-BNscjmOg.js";import"./DialogBase-BL1IBdld.js";import"./Close-Cx-5EQFG.js";import"./HelpPopover-BJBDK_g9.js";import"./MarkdownPopover-4Eys4uDE.js";import"./LightTooltip-CpgsJh3_.js";import"./MarkdownSynapse-BXo153sN.js";import"./SkeletonButton-B_CN37W2.js";import"./SkeletonInlineBlock-ClnumZW6.js";import"./SkeletonTable-BqcwQAxC.js";import"./SkeletonParagraph-BnqUYHvv.js";import"./JsonSchemaForm-D0j_H30P.js";import"./GridLegacy-ZqbjlI9w.js";import"./HelpTwoTone-BYWYybOB.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./groupBy-3vHGIfxQ.js";import"./_createAggregator-ClyW0yBd.js";import"./_baseMap-BsEQLRd5.js";import"./DateTimePicker-6ffwWj2o.js";import"./useMobilePicker-blMy10o-.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-BAgkfdty.js";import"./index-BmXyVNEx.js";import"./Chip-BOVRxSkP.js";import"./Tabs-DQ_VL4oy.js";import"./KeyboardArrowRight-CM4chgR1.js";import"./Autocomplete-DxWBSpdz.js";import"./usePreviousProps-iOEW2BmJ.js";import"./use-deep-compare-effect.esm-B88DIzUC.js";import"./TextWidget-CD95ddgT.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Hr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-Arrays',
    entityId: 'syn25959281'
  }
}`,...(m=(a=r.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};var c,d,y;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-IfThenElse'
  }
}`,...(y=(d=e.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var u,h,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    schemaId: 'nkauer-ad.main'
  }
}`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var S,l,A;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    entityId: 'syn32673093'
  }
}`,...(A=(l=o.parameters)==null?void 0:l.docs)==null?void 0:A.source}}};var f,v,I;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    entityId: 'syn25959288'
  }
}`,...(I=(v=n.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var E,q,b;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(b=(q=s.parameters)==null?void 0:q.docs)==null?void 0:b.source}}};const Kr=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Kr as __namedExportsOrder,Hr as default};
