import * as yup from 'yup'
import { AnyObject, Maybe } from 'yup/lib/types'

declare module 'yup' {
  interface StringSchema<
    TType extends Maybe<string> = string | undefined,
    TContext extends AnyObject = AnyObject,
    TOut extends TType = TType
  > extends yup.BaseSchema<TType, TContext, TOut> {
    phoneNumber(): StringSchema<TType, TContext>
    requiredWhen(condition: boolean): StringSchema<TType, TContext>
    minIfFilled(min: number): StringSchema<TType, TContext>
  }

  interface ObjectSchema<
    TType extends Maybe<object> = object | undefined,
    TContext extends AnyObject = AnyObject,
    TOut extends TType = TType
  > extends yup.BaseSchema<TType, TContext, TOut> {
    requiredWhen(condition: boolean): ObjectSchema<TType, TContext>
  }
}
