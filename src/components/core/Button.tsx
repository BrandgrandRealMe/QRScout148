import React from 'react'
import { classNames } from '../../util/classNames'

export interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  variant: Variant
}

export enum Variant {
  Primary,
  Secondary,
  Danger,
}

const VARIANT_MAPS: Record<Variant, string> = {
  [Variant.Primary]: 'bg-dark-gray-350 hover:bg-dark-gray-400 disabled:bg-dark-gray-150',
  [Variant.Secondary]: 'bg-dark-gray-500 hover:bg-dark-gray-600 disabled:bg-dark-gray-300',
  [Variant.Danger]: 'bg-red-500 hover:bg-red-700 disabled:bg-red-300',
}

export default function Button(props: ButtonProps) {
  return (
    <button
      type="button"
      onClick={props.onClick}
      className={classNames(
        'focus:shadow-outline mx-2 rounded  py-2 px-4 font-bold text-white focus:outline-none',
        VARIANT_MAPS[props.variant]
      )}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  )
}
