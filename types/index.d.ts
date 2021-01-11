/* eslint-disable import/no-unresolved */
import { Component } from './component.d'

export type DateType = 'hover' | 'click'

export default class FormEngine extends Component {
  trigger: DateType
}
