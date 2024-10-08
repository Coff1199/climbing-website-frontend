import { Fragment } from 'react'
import { Disclosure} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom';
import FooterForm from './FooterForm';

const navigation = [
  { name: 'Home', href: '/home' },
  { name: 'Routes', href: '/climbing-routes' },
  //{ name: 'Projects', href: '/other' },
  //{ name: 'Calendar', href: '/other2' },
]

export default function Header(props) {
  return (
    <>
    <Disclosure as="nav" className="bg-green-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-10 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {/*className={classNames(
                          item.current ? 'no-underline bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'no-underline rounded-md px-3 py-2 text-sm font-medium'
                        )}*/}
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={({isActive}) => {
                            return 'px-3 py-2 text-sm font-medium no-underline ' + 
                            (!isActive 
                                ? 'text-gray-300 hover:bg-green-700 hover:text-white' 
                                : 'bg-green-900 text-white');
                        }}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <NavLink
                    key={item.name}
                    to={item.href}
                    className={({isActive}) => {
                        return 'block rounded-md px-3 py-2 text-base font-medium no-underline' + 
                        (!isActive 
                            ? 'text-gray-100 hover:bg-gray-700 hover:text-white' 
                            : 'bg-gray-900 text-white');
                    }}
                >
                    {item.name}
               </NavLink>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    <div className="h-1 mx-auto  max-w-7xl min-w-screen">

    </div>
    <div className="bg-gray-100 py-2">
        <div className='max-w-7xl mx-auto bg-gray-100 min-h-screen'>
            {props.children}
        </div>
    </div>
    <footer>
      <FooterForm/>
    </footer>
    </>
  )
}
