import { QueryResultBundle } from '@sage-bionetworks/synapse-types'

const syn51735464: QueryResultBundle = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
  maxRowsPerPage: 50,
  queryResult: {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryResult',
    queryResults: {
      concreteType: 'org.sagebionetworks.repo.model.table.RowSet',
      tableId: 'syn51735464',
      etag: 'DEFAULT',
      headers: [
        {
          name: 'id',
          columnType: 'STRING',
        },
        {
          name: 'phase',
          columnType: 'STRING',
        },
        {
          name: 'submitterName',
          columnType: 'STRING',
        },
        {
          name: 'submitterUserId',
          columnType: 'STRING',
        },
        {
          name: 'time',
          columnType: 'STRING',
        },
        {
          name: 'timeUnits',
          columnType: 'STRING',
        },
        {
          name: 'text',
          columnType: 'STRING',
        },
        {
          name: 'tag',
          columnType: 'STRING',
        },
      ],
      rows: [
        {
          rowId: 3,
          versionNumber: 0,
          values: [
            'd35079d8-8137-4e42-8730-e34b9058c5f0',
            'prenatal',
            'X',
            '999',
            '3',
            'weeks',
            'Gross optic nerve and chiasm enlargement',
            'pathologic',
          ],
        },
        // rowId 4 is at the same timepoint as rowId 3
        {
          rowId: 4,
          versionNumber: 0,
          values: [
            'f46aaaca-176d-4ceb-af49-86bfc07908aa',
            'prenatal',
            'X',
            '999',
            '3',
            'weeks',
            'Gross optic nerve and/or chiasm enlargement. Increased cellularity with GFAP-immunoreactive astrocytes and mild Ki67 proliferative indices. Increase in isolectin-B4 positive microglia.',
            'pathologic',
          ],
        },
        {
          rowId: 5,
          versionNumber: 0,
          values: [
            '48cde25b-cca2-46e4-b819-b44c69f9629d',
            'neonatal',
            'X',
            '999',
            '8',
            'days',
            'Optic glioma, focal expansion of prechiasmatic optic nerves and chiasm. Low proliferative indices. Lack of eosinophilic granular bodies, Rosenthal fibers or microcystic structures commonly seen in humans (therefore not juvenile pilocytic astrocytomas). Decrease in IPL-GCL and RNFL thickness by SD-OCT',
            'pathologic',
          ],
        },
        {
          rowId: 6,
          versionNumber: 0,
          values: [
            '56468de9-cbe9-467f-847d-4e4e97c88a80',
            'neonatal',
            'X',
            '999',
            '1',
            'months',
            'Gross optic nerve thickening with astrocyte hyperplasia, but no overt neoplastic changes (nuclear atypia). Significant increase in Ki-67/GFAP positive cells indicative astrocyte proliferative index. Increase in small blood vessels in optic nerve and chiasm. Increase in OX42-positive microglia cells in optic nerve and chiasm.',
            'pathologic',
          ],
        },
        {
          rowId: 7,
          versionNumber: 0,
          values: [
            'b8f1d2d4-4d60-4b3e-8824-08a12ad720c2',
            'weanling',
            'X',
            '999',
            '7',
            'days',
            'Enlargement of optic nerve and chiasm. Hypercellularity with clear evidence of neoplastic changes with obvious nuclear atypia. Significant increase Ki-67/GFAP positive cells indicative astrocyte proliferative index. Increase in small and large blood vessels in optic nerve and chiasm.',
            'pathologic',
          ],
        },
        {
          rowId: 8,
          versionNumber: 0,
          values: [
            '178b1cd0-347b-46f3-89d4-197e194551d7',
            'weanling',
            'X',
            '999',
            '1',
            'months',
            'Enlargement of optic nerve and chiasm. Hypercellularity with clear evidence of neoplastic changes with obvious nuclear atypia. Increase in Ki-67/GFAP positive cells indicative astrocyte proliferative index. Increase in small and large blood vessels in optic nerve and chiasm. Retinal ganglion cell loss (loss of Brn3a + cells). Decrease in IPL-GCL and RNFL thickness by SD-OCT.',
            'pathologic',
          ],
        },
        {
          rowId: 9,
          versionNumber: 0,
          values: [
            '8734e78c-cb78-4346-a999-359ee596e53c',
            'juvenile',
            'James Goss',
            '999',
            '6',
            'days',
            'Hypercellularity with clear evidence of neoplastic changes with obvious nuclear atypia. Mild increase in Ki-67/GFAP positive cells indicative astrocyte proliferative index. Elevated number of activated microglia. Retinal ganglion cell loss (loss of Brn3a + cells). Decrease in IPL-GCL and RNFL thickness by SD-OCT.',
            'pathologic',
          ],
        },
        {
          rowId: 10,
          versionNumber: 0,
          values: [
            'aaa69c90-2258-4cce-b29c-4cfb11a03c3d',
            'juvenile',
            'X',
            '999',
            '4',
            'weeks',
            'Hypercellularity with clear evidence of neoplastic changes with obvious nuclear atypia. Mild increase in Ki-67/GFAP positive cells indicative astrocyte proliferative index.',
            'pathologic',
          ],
        },
        {
          rowId: 11,
          versionNumber: 0,
          values: [
            '702f45c3-7521-43f7-a354-0428485185e2',
            'adolescent',
            'X',
            '999',
            '1',
            'months',
            'Increased proliferative index (Ki-67+ cells)',
            'pathologic',
          ],
        },
        {
          rowId: 12,
          versionNumber: 0,
          values: [
            '0f894512-9c57-420d-8acb-9171bb29c5d1',
            'adolescent',
            'X',
            '999',
            '2',
            'months',
            'Increased proliferative index (Ki-67+ cells)',
            'pathologic',
          ],
        },
        {
          rowId: 13,
          versionNumber: 0,
          values: [
            '5db58943-4726-4bc7-9b8c-98d2f29328ed',
            'adolescent',
            'X',
            '999',
            '6',
            'days',
            'Increase in phosphorylated neurofilament-H immunoreactivity in optic nerve (marker for axonal injury). Increase in TUNEL+ cells in the ganglion cell layer.',
            'neurochemical',
          ],
        },
        {
          rowId: 14,
          versionNumber: 0,
          values: [
            'e91e5d44-b9f6-48e8-b69f-a3937c422e95',
            'adolescent',
            'X',
            '999',
            '12',
            'months',
            'Retinal ganglion cell loss (loss of Brn3a + cells). Decrease in IPL-GCL and RNFL thickness by SD-OCT.',
            'pathologic',
          ],
        },
        // note there is no data in the adult phase (but the phase should still be represented in the timeline)
      ],
    },
  },
}

export default syn51735464
