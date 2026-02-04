const COLOR_VARS = [
  /* Primary Palette */
  '--synapse-primary-action-color',
  '--synapse-primary-focus-border',
  '--synapse-primary-focus-shadow',
  '--synapse-primary-active',
  '--synapse-primary-100',
  '--synapse-primary-200',
  '--synapse-primary-300',
  '--synapse-primary-400',
  '--synapse-primary-500',
  '--synapse-primary-600',
  '--synapse-primary-700',
  '--synapse-primary-800',
  '--synapse-primary-900',

  /* Secondary Palette */
  '--synapse-secondary-action-color',
  '--synapse-secondary-200-hover',
  '--synapse-secondary-100',
  '--synapse-secondary-200',
  '--synapse-secondary-300',
  '--synapse-secondary-400',
  '--synapse-secondary-500',
  '--synapse-secondary-600',
  '--synapse-secondary-700',
  '--synapse-secondary-800',
  '--synapse-secondary-900',

  /* Tertiary Palette */
  '--synapse-tertiary-action-color',
  '--synapse-tertiary-100',
  '--synapse-tertiary-200',
  '--synapse-tertiary-300',
  '--synapse-tertiary-400',
  '--synapse-tertiary-500',
  '--synapse-tertiary-600',
  '--synapse-tertiary-700',
  '--synapse-tertiary-800',
  '--synapse-tertiary-900',

  /* Alpha Variants */
  '--synapse-primary-action-color-alpha-4',
  '--synapse-primary-action-color-alpha-10',
  '--synapse-primary-alpha-05',
  '--synapse-primary-alpha-08',
  '--synapse-secondary-action-color-alpha-10',
  '--synapse-secondary-action-color-alpha-20',
  '--synapse-secondary-action-color-alpha-50',

  /* Status Colors */
  '--synapse-info',
  '--synapse-success',
  '--synapse-warning',
  '--synapse-error',
  '--synapse-green-affirmative',
  '--synapse-yellow-warning',
  '--synapse-red-delete',
  '--synapse-red-required',

  /* Grays */
  '--synapse-white',
  '--synapse-black',
  '--synapse-gray-100',
  '--synapse-gray-200',
  '--synapse-gray-300',
  '--synapse-gray-400',
  '--synapse-gray-500',
  '--synapse-gray-600',
  '--synapse-gray-700',
  '--synapse-gray-800',
  '--synapse-gray-900',
  '--synapse-gray-1000',
  '--synapse-dark-gray',
  '--synapse-gray-dark',
  '--synapse-gray-light',

  /* UI Specific */
  '--synapse-link-underline-color',
  '--synapse-footer-accent',
  '--synapse-footer-accent-dark',
  '--synapse-text-color-dark',
  '--synapse-text-color-disabled',
  '--synapse-active-tab-text',
  '--synapse-inactive-tab-text',
  '--synapse-dropdown-disabled-text',
]

export const ThemeGallery = () => {
  return (
    <div
      style={{
        padding: '20px',
      }}
    >
      <h3>Theme Gallery</h3>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '20px',
          marginTop: '20px',
        }}
      >
        {COLOR_VARS.map(v => (
          <div
            key={v}
            style={{
              border: '1px solid #ddd',
              padding: '10px',
              borderRadius: '8px',
            }}
          >
            <div
              style={{
                backgroundColor: `var(${v})`,
                height: '50px',
                borderRadius: '4px',
                border: '1px solid #eee',
              }}
            />
            <code
              style={{ fontSize: '12px', display: 'block', marginTop: '8px' }}
            >
              {v}
            </code>
          </div>
        ))}
      </div>
    </div>
  )
}
