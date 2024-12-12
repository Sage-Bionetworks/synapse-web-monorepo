import { Alert, Box, TextField, Typography } from '@mui/material'

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
        <Box mt={1}>
          <Alert severity="error">{errorMessage}</Alert>
        </Box>
      )}
    </>
  )
}

export default AddExternalRepo
