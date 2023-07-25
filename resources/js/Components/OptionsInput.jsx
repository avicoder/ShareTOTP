import { RadioGroup } from "@headlessui/react";
import clsx from "clsx";

export default function OptionsInput({ options, value, onChange }) {
    return (
        <RadioGroup className="mt-1" value={value} onChange={onChange}>
            <RadioGroup.Label className="sr-only">Pick an option:</RadioGroup.Label>
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                {options.map((option) => (
                    <RadioGroup.Option
                        key={option.value}
                        value={option.value}
                        className={({ active, checked }) =>
                            clsx(
                                active ? 'ring-2 ring-indigo-600 ring-offset-2' : '',
                                checked
                                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                                    : 'ring-1 ring-inset ring-gray-300 bg-white text-gray-900 hover:bg-gray-50',
                                'flex items-center justify-center rounded-md py-3 px-2 text-xs font-semibold sm:flex-1 cursor-pointer'
                            )
                        }
                    >
                        <RadioGroup.Label as="span">{option.label}</RadioGroup.Label>
                    </RadioGroup.Option>
                ))}
            </div>
        </RadioGroup>
    )
}
