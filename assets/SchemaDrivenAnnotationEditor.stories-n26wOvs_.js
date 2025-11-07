import{jJ as T}from"./iframe-BMyGeve0.js";import{S as C}from"./SchemaDrivenAnnotationEditor-BqboV9hS.js";import"./index-r8ZA1smB.js";import"./useEntity-B1zulruF.js";import"./pickBy-uRBOk6GW.js";import"./isString-CUA9WR5g.js";import"./_baseIteratee-DmZh1ikp.js";import"./useQueries-C9hmeEBs.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-TUyJsnEQ.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Cw_sP7d3.js";import"./useSchema--MmMvA1U.js";import"./index-D4zU3MqF.js";import"./enums-BrbQ9Mgg.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-Dz2o9pba.js";import"./uniq-B7AesGtx.js";import"./forEach-B8iwwgef.js";import"./Grid-BOL_C7u3.js";import"./ListItem-Drp_MhIv.js";import"./listItemButtonClasses-DeebaXes.js";import"./ListItemIcon-CCIwjdF8.js";import"./MenuItem-BW_PF2Vf.js";import"./ListItemText-D8vIFEvn.js";import"./ArrowUpward-B9G1vqJz.js";import"./ContentCopy-rSYL-Zp3.js";import"./FormControlLabel-lPD3-OXR.js";import"./Checkbox-CcvRFkl_.js";import"./SwitchBase-ioZOas69.js";import"./FormGroup-CHt7AZVd.js";import"./RadioGroup-CI5tNLIy.js";import"./Radio-zrUGfGoZ.js";import"./Slider-DB63QFUd.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-V6lMhXLs.js";import"./DialogBase-BjM9P9Rn.js";import"./Close-BXCO7x3F.js";import"./HelpPopover-C7G9YaEw.js";import"./MarkdownPopover-DuWNQuTs.js";import"./LightTooltip-CblZ2Lnk.js";import"./MarkdownSynapse-DLZKpOPg.js";import"./SkeletonButton-Bk8uTKNs.js";import"./SkeletonInlineBlock-C3rHjTF4.js";import"./SkeletonTable-DlFasnP9.js";import"./SkeletonParagraph-B_kTspc1.js";import"./JsonSchemaForm-CgKUry_f.js";import"./GridLegacy-DjuTwKx6.js";import"./HelpTwoTone-bJiiSV3H.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./groupBy-DoYN40KM.js";import"./_createAggregator-CyEP6dnk.js";import"./_baseMap-7niBu5kX.js";import"./DateTimePicker-BJdZjniM.js";import"./useMobilePicker-NHpbAEJ5.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-A8gm55pd.js";import"./index-D4olMQqi.js";import"./Chip-7xwsG1n1.js";import"./Tabs-DuDLArau.js";import"./KeyboardArrowRight-DIkjzg-4.js";import"./Autocomplete-RzTybhnX.js";import"./usePreviousProps-Bgmjlotm.js";import"./use-deep-compare-effect.esm-YcNwKKf6.js";import"./TextWidget-CzsLC98d.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Jr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
