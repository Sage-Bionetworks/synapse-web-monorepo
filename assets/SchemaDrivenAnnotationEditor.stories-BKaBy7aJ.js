import{jJ as T}from"./iframe-CT7eET3u.js";import{S as C}from"./SchemaDrivenAnnotationEditor-DpYG3h-l.js";import"./index-r8ZA1smB.js";import"./useEntity-DQuCdyPI.js";import"./pickBy-vjMi-KAe.js";import"./isString-DwEkDfRe.js";import"./_baseIteratee-ffgb1Zes.js";import"./useQueries-B6_rUTvG.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-DEhw14be.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DFrie1fk.js";import"./useSchema-BElPbOcf.js";import"./index-BKurYUjY.js";import"./enums-DMquiZ9S.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-CcC5Gm9h.js";import"./uniq-CF5EZ_9u.js";import"./forEach-B8iwwgef.js";import"./Grid-Dxu_nuBK.js";import"./ListItem-DcXFULzB.js";import"./listItemButtonClasses-BNdpzwqL.js";import"./ListItemIcon-BmXmOF3Q.js";import"./MenuItem-BBM99tSl.js";import"./ListItemText-CDma1F7h.js";import"./ArrowUpward-U-MeIqI8.js";import"./ContentCopy-D3Quu0Oz.js";import"./FormControlLabel-DV4h3wNf.js";import"./Checkbox-DStSliuO.js";import"./SwitchBase-BJRjJiBa.js";import"./FormGroup-B_y5cPUd.js";import"./RadioGroup-DjjCV7w8.js";import"./Radio-CQud_s7r.js";import"./Slider-BsMVTcgM.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-DUrsRsl-.js";import"./DialogBase-D8t4wmJE.js";import"./Close-Cz5MAPpl.js";import"./HelpPopover-CruENG9c.js";import"./MarkdownPopover-CpIL_lOT.js";import"./LightTooltip-BTs5YWNB.js";import"./MarkdownSynapse-ChtEi03w.js";import"./SkeletonButton-6cvgvJnT.js";import"./SkeletonInlineBlock-C4Hah5J1.js";import"./SkeletonTable-C5avUwyT.js";import"./SkeletonParagraph-CvhM2TYd.js";import"./JsonSchemaForm-3_pmAxja.js";import"./GridLegacy-CNsSTV_o.js";import"./HelpTwoTone-g-T_weLz.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./groupBy-BML3i0Qy.js";import"./_createAggregator-CjeY3k_c.js";import"./_baseMap-C0MUtlUP.js";import"./DateTimePicker-C5JVpWxu.js";import"./useMobilePicker-DwCOvnGR.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-RGarFbas.js";import"./index-CxiZHnbx.js";import"./Chip-B95kICDp.js";import"./Tabs-8fIEbWZd.js";import"./KeyboardArrowRight-BSN7nhEn.js";import"./Autocomplete-BF6qgY8f.js";import"./usePreviousProps-D00r-cBm.js";import"./use-deep-compare-effect.esm-aMG5GiA7.js";import"./TextWidget-D0Q5Vl9E.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Jr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(b=(q=s.parameters)==null?void 0:q.docs)==null?void 0:b.source}}};const Kr=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Kr as __namedExportsOrder,Jr as default};
