

export type RegimenType = {
  name: string,
  description: string,
  doctorAssigned: boolean,
  doctor?: string,
  startDate: string,
  endDate: string,
  exercises: Array<ExcerciseType>,
}

export type ExerciseType = {
  name: string,
  description: string,
  reps?: string,
  completed: boolean,
}
