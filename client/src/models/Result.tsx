import Activitydetails from "./Activitydetails"

export enum ResultType{
  NEGATIVE = -1,
  POSITIVE = 1,
  NORMAL = 0,
}

export default interface Result{
  id: number
  announcement: Partial<Activitydetails>
  result: string
  resultType: ResultType
  remark: string
  viewDateTime: Date
  ackDateTime: Date
  updateDateTime: Date
  expireDateTime: Date
  userCode: string
  _updated?: boolean
  _deleted?: boolean
}