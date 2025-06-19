import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

type AddExternalRepoProps = {
  repoName: string
  errorMessage?: string
  onRepoNameChange: (value: string) => void
}

function AddExternalRepo({
  errorMessage,
  repoName,
  onRepoNameChange,
}: AddExternalRepoProps) {
  return (
    <>
      <Typography variant="body1">Repository Name</Typography>
      <TextField
        id="repo"
        name="repo"
        fullWidth
        onChange={e => onRepoNameChange(e.target.value)}
        placeholder="ex. index.docker.io:500/library/ubuntu"
        value={repoName}
      />
      {errorMessage && (
        <Box
          sx={{
            mt: 1,
          }}
        >
          <Alert severity="error">{errorMessage}</Alert>
        </Box>
      )}
    </>
  )
}

export default AddExternalRepo
