import { Transition } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/20/solid'
import { usePage } from '@inertiajs/react'
import { Fragment, useEffect, useState } from 'react'

export default function FlashAlert() {
    const { flash } = usePage().props
    const [show, setShow] = useState(!!flash.message)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false)
        }, 3000)

        return () => clearTimeout(timer)
    }, [flash])

    return (
        <Transition
            as={Fragment}
            show={show}
            enter="transform transition duration-[400ms]"
            enterFrom="opacity-0 scale-y-0"
            enterTo="opacity-100 rotate-0 scale-y-100"
            leave="transform duration-200 transition ease-in-out"
            leaveFrom="opacity-100 scale-y-100 "
            leaveTo="opacity-0 scale-y-0 "
        >
            <div className="rounded-md bg-green-50 p-4">
                <div className="flex">
                    <div className="flex-shrink-0">
                        <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
                    </div>
                    <div className="ml-3">
                        <h3 className="text-sm font-medium text-green-800">{flash.message}</h3>
                    </div>
                </div>
            </div>
        </Transition>
    )
}
