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
  [Variant.Primary]: 'bg-gray-1200 hover:bg-gray-1300 disabled:bg-gray-800',
  [Variant.Secondary]: 'bg-gray-1200 hover:bg-gray-1300 disabled:bg-gray-800',
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
