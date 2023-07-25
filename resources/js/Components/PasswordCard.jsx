import { useEffect, useState } from "react"
import totp from 'totp-generator';
import { useCopyToClipboard } from "usehooks-ts";

export default function PasswordCard({ password }) {

    const [otp, setOtp] = useState('')
    const [progress, setProgress] = useState(100)
    const reducerPerSecond = 100 / password.period

    const [value, copy] = useCopyToClipboard()
    const [copied, setCopied] = useState(false)

    const copyToClipboard = () => {
        copy(otp)
        setCopied(true)
        let timeout = setTimeout(() => {
            setCopied(false)
            clearTimeout(timeout)
        }, 1000)
    }

    const generateOtp = () => {
        const token = totp(password.secret, {
            digits: password.digits,
            algorithm: password.algorithm,
            period: password.period,
        })

        setOtp(token)
    }

    const setInitialProgress = () => {
        const d = new Date()
        const minutes = d.getMinutes()
        const seconds = d.getSeconds()

        const timeInSecs = (minutes * 60) + seconds
        const timeSpent = timeInSecs % password.period

        const spentProgress = timeSpent * reducerPerSecond

        setProgress(100 - spentProgress)
    }

    useEffect(() => {
        setInitialProgress()
        generateOtp()
        const interval = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress == 100) {
                    generateOtp()
                }

                if ((oldProgress - reducerPerSecond) <= 0) {
                    return 100
                }

                return oldProgress - reducerPerSecond
            })
        }, 1000);

        return () => clearInterval(interval);
    }, [])

    return (
        <div className="relative rounded-lg bg-white px-6 py-5 shadow overflow-hidden w-56">
            <div className="absolute top-0 left-0 h-0.5 w-full bg-gray-300">
                <div className="h-0.5 bg-gray-500 transition-all" style={{width: `${progress}%`}}></div>
            </div>
            <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                    <img className="h-12 w-12" src={password.icon} alt="" />
                </div>
                <div className="min-w-0 flex-1">
                    <p className="text-sm text-center font-bold text-gray-600 mb-1">
                        {password.name}
                    </p>
                    <pre
                        onClick={copyToClipboard}
                        className="transition-all border border-gray-100 text-center rounded text-sm py-1 px-2 cursor-pointer hover:border-gray-300"
                    >
                        {copied ? 'Copied!' : otp}
                    </pre>
                </div>
            </div>
        </div>
    )
}
