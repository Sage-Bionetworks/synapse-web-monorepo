import{jF as T}from"./iframe-BPjtn3Py.js";import{S as C}from"./SchemaDrivenAnnotationEditor-Bzc2bBjN.js";import"./index-r8ZA1smB.js";import"./useEntity-BvLnmvTw.js";import"./pickBy-B9uRmH6n.js";import"./isString-DVm4aFm_.js";import"./_baseIteratee-BO1Lzx2o.js";import"./useQueries-D_0vtMqr.js";import"./useSuspenseQuery-CJees8i4.js";import"./useInfiniteQuery-Bh3zdLrB.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-8UvGpf8k.js";import"./useSchema-BPeYCY_N.js";import"./index-CK8gwHRW.js";import"./enums-DfIrwVZM.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-RhlMNDap.js";import"./uniq-MZuYRl1i.js";import"./forEach-B8iwwgef.js";import"./Grid-C0X2h71G.js";import"./ListItem-CkKLwbMV.js";import"./listItemButtonClasses-DdJLo_SH.js";import"./ListItemIcon-BudFtV5s.js";import"./MenuItem-BbZL7_By.js";import"./ListItemText-CcjBqUfd.js";import"./ArrowUpward-D7eqZQdh.js";import"./ContentCopy-D_NiqwdI.js";import"./FormControlLabel-B9Z-sxvt.js";import"./Checkbox-D0c25wmp.js";import"./SwitchBase-CecYQ9Z7.js";import"./FormGroup-C4t7alHD.js";import"./RadioGroup-Dj2x-IZ8.js";import"./Radio-mLeYf0CT.js";import"./Slider-D9DPGwhL.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-zddbqXSX.js";import"./DialogBase-CwUJKQgZ.js";import"./Close-D3DgklsR.js";import"./HelpPopover-DC_dXnpY.js";import"./MarkdownPopover-BqDmByvq.js";import"./LightTooltip-CRT29ubt.js";import"./MarkdownSynapse-C8_fbXMJ.js";import"./SkeletonButton-D4b9c6Gf.js";import"./SkeletonInlineBlock-DU00_odl.js";import"./SkeletonTable-Dybo1wxv.js";import"./SkeletonParagraph-D1AtTIOG.js";import"./JsonSchemaForm-Czb1QHTz.js";import"./GridLegacy-DBLQIMgV.js";import"./HelpTwoTone-BOv5sbyM.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-Devd54Lj.js";import"./_createAggregator-ch_DvEKH.js";import"./_baseMap-jzXUhPol.js";import"./DateTimePicker-D8D-gB1p.js";import"./useMobilePicker-DRqL82z1.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-DtzZYK5M.js";import"./index-MU1GfQRJ.js";import"./Chip-B9tVR_eV.js";import"./Tabs-BbVb8d_1.js";import"./KeyboardArrowRight-DGjERXGN.js";import"./Autocomplete-DkVhAa1G.js";import"./usePreviousProps-D1XVPvif.js";import"./use-deep-compare-effect.esm-D8lyhZzE.js";import"./TextWidget-Cn4q6UMK.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Kr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(b=(q=s.parameters)==null?void 0:q.docs)==null?void 0:b.source}}};const Lr=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Lr as __namedExportsOrder,Kr as default};
