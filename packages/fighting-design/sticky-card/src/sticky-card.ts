import type { PropType } from 'vue'
import type { emitInterface } from './interface'

export const Props = {
  open: {
    type: Boolean,
    default: (): boolean => false
  },
  background: {
    type: String,
    default: (): string => ''
  },
  openText: {
    type: String,
    default: (): string => '关闭'
  },
  closeText: {
    type: String,
    default: (): string => '开启'
  },
  openHeight: {
    type: [String, Number] as PropType<string | number>,
    default: (): string => '400px'
  },
  openEnd: {
    type: Function as PropType<emitInterface>,
    default: (): null => null
  },
  closeEnd: {
    type: Function as PropType<emitInterface>,
    default: (): null => null
  }
} as const