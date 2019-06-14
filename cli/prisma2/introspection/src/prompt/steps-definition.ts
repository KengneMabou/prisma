import { DatabaseType } from 'prisma-datamodel'
import { SchemaWithMetadata } from '../types'
import {
  INPUT_DATABASE_CREDENTIALS_ELEMENTS,
  SELECT_DATABASE_SCHEMAS_ELEMENTS,
  SELECT_DATABASE_TYPE_ELEMENTS,
  SELECT_LANGUAGE_ELEMENTS,
  SELECT_TEMPLATE_ELEMENTS,
  SELECT_TOOL_ELEMENTS,
} from './prompts-elements'

export enum Steps {
  SELECT_DATABASE_TYPE = 1,
  INPUT_DATABASE_CREDENTIALS = 2,
  SELECT_DATABASE_SCHEMA = 3,
  SELECT_TOOL = 4,
  SELECT_LANGUAGE = 5,
  SELECT_TEMPLATE = 6,
}

export const stepsToElements = {
  [Steps.SELECT_DATABASE_TYPE]: () => SELECT_DATABASE_TYPE_ELEMENTS,
  [Steps.INPUT_DATABASE_CREDENTIALS]: (dbType: DatabaseType) => INPUT_DATABASE_CREDENTIALS_ELEMENTS(dbType),
  [Steps.SELECT_DATABASE_SCHEMA]: (schemas: SchemaWithMetadata[]) => SELECT_DATABASE_SCHEMAS_ELEMENTS(schemas),
  [Steps.SELECT_TOOL]: () => SELECT_TOOL_ELEMENTS,
  [Steps.SELECT_LANGUAGE]: () => SELECT_LANGUAGE_ELEMENTS,
  [Steps.SELECT_TEMPLATE]: () => SELECT_TEMPLATE_ELEMENTS,
}

export const stepToPrevStep = {
  [Steps.SELECT_DATABASE_TYPE]: Steps.SELECT_DATABASE_TYPE,
  [Steps.INPUT_DATABASE_CREDENTIALS]: Steps.SELECT_DATABASE_TYPE,
  [Steps.SELECT_DATABASE_SCHEMA]: Steps.INPUT_DATABASE_CREDENTIALS,
  [Steps.SELECT_TOOL]: Steps.SELECT_DATABASE_SCHEMA,
  [Steps.SELECT_LANGUAGE]: Steps.SELECT_TOOL,
  [Steps.SELECT_TEMPLATE]: Steps.SELECT_LANGUAGE,
}