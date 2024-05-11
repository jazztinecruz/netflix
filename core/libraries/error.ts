const grabError = (error: unknown) => {
  return {
    error: {
      message: error instanceof Error ? error.message : 'Unknown error occurred',
    },
  }
}

export default grabError
