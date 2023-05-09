import { CheckIcon } from '@heroicons/react/20/solid'

const includedFeatures = [
  'Priority access to encryptedXs cybersecurity consulting services',
  'Encryption of transaction data at rest and in transit',
  'Implementation of multi-factor authentication to secure transaction processing',
  'Access to secure payment gateways and fraud detection services',
]

export default function Pricing() {
  return (
    <div id='pricing' className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold text-white tracking-tight sm:text-4xl">Service Pricing</h2>
          <p className="mt-6 text-lg leading-8 text-white">
          Protect your data without breaking the bank - affordable plans for every need at EncryptedX.
          </p>
        </div>
        <div className="mx-auto bg-white mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8  sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight ">Permanent encryption benefits</h3>
            <p className="mt-6 text-base leading-7">
            With our permanent encryption benefits, you'll never have to worry about data breaches or cyber attacks again.            
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">What’s included</h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">Get access now and start securing your data.</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">₱50,000</span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">PHP</span>
                </p>
                <a
                  href="#"
                  className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get access
                </a>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                Our encrypted data solutions make it easy to protect your sensitive information, from financial records to customer data.
                            </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
