'use client'

import { Fragment, useEffect, useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Transition,
} from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Avatar, Button, Menu, MenuItem } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import { useLocation, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import AuthModel from '../../Auth/AuthModel'
import { useDispatch, useSelector } from 'react-redux'
import { getUser, logout } from '../../../State/Auth/Action'
import { navigation } from './NavigationData'




 function ClassNames(...classes){
  return classes.filter(Boolean).join("");
 }
export default function Navigation() {
  const [open, setOpen] = useState(false)
  const[openAuthModel,setOpenAuthModel] = useState(false)
  const[anchorEl,setAnchorEl]=useState(null)
  const openUserMenu=Boolean(anchorEl);
  const jwt = localStorage.getItem("jwt")
   const {auth} = useSelector(store=>store)
   const dispatch = useDispatch();
   const navigate=useNavigate();
 const location = useLocation();






  const handleUserClick=(e)=>{
    setAnchorEl(e.currentTarget);
  }
  const handleCloseUserMenu=(e)=>{
    setAnchorEl(null)
  }

  const handleOpen =()=>{
    
    setOpenAuthModel(true);

  }

  const handleClose=()=>{
    setOpenAuthModel(false)
  
  }

  
const handleCategoryClick = (catogery, section, item, close) => {
  navigate(`/${catogery.id}/${section.id}/${item.id}`);
  close();
};
     useEffect(()=>{
      if(jwt){
       dispatch(getUser(jwt))
      }
      
     }, [jwt,auth.jwt])

  useEffect(()=>{
        if(auth.user){
          handleClose()
        }
        if(location.pathname==="/login" || location.pathname==="/register")
          navigate(-1)
  },[auth.user])
  const handleLogout=()=>{
    dispatch(logout())
    handleCloseUserMenu()
 
  }

  return (
    <div className="bg-white  z-50">
      {/* Mobile menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
        />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-closed:-translate-x-full"
          >
            <div className="flex px-4 pt-5 pb-2">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            {/* Links */}
            <TabGroup className="mt-2">
              <div className="border-b border-gray-200">
                <TabList className="-mb-px flex space-x-8 px-4">
                  {navigation.categories.map((catogery) => (
                    <Tab
                      key={catogery.name}
                      className="flex-1 border-b-2 border-transparent px-1 py-4 text-base font-medium whitespace-nowrap text-gray-900 data-selected:border-indigo-600 data-selected:text-indigo-600"
                    >
                      {catogery.name}
                    </Tab>
                  ))}
                </TabList>
              </div>
              <TabPanels as={Fragment}>
                {navigation.categories.map((catogery) => (
                  <TabPanel key={catogery.name} className="space-y-10 px-4 pt-10 pb-8">
                    <div className="grid grid-cols-2 gap-x-4">
                      {catogery.featured.map((item) => (
                        <div key={item.name} className="group relative text-sm">
                          <img
                            alt={item.imageAlt}
                            src={item.imageSrc}
                         
                            className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                          />
                          <a href={item.href} className="mt-6 block font-medium text-gray-900">
                            <span aria-hidden="true" className="absolute inset-0 z-10" />
                            {item.name}
                          </a>
                          <p aria-hidden="true" className="mt-1">
                            Shop now
                          </p>
                        </div>
                      ))}
                    </div>
                    {catogery.sections.map((section) => (
                      <div key={section.name}>
                        <p id={`${catogery.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
                          {section.name}
                        </p>
                        <ul
                          role="list"
                          aria-labelledby={`${catogery.id}-${section.id}-heading-mobile`}
                          className="mt-6 flex flex-col space-y-6"
                        >
                          {section.items.map((item) => (
                            <li key={item.name} className="flow-root">
                              <a href={item.href} className="-m-2 block p-2 text-gray-500">
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {navigation.pages.map((page) => (
                <div key={page.name} className="flow-root">
                  <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                    {page.name}
                  </a>
                </div>
              ))}
            </div>

    
          </DialogPanel>
        </div>
      </Dialog>

      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          Get free delivery on orders over $100
        </p>

        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <a href="#">
                  <span className="sr-only">Your Company</span>
                  <img
                    alt=""
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                    className="h-8 w-auto"
                  />
                </a>
              </div>

              {/* Flyout menus */}
              <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((catogery) => (
                    <Popover key={catogery.name} className="flex">
                      {({open,close})=>(
                        <>
                      <div className="relative flex">
                        <PopoverButton
                         className={ClassNames(
                          open
                          ? "border-indigo-600 text-indigo-600"
                          : "border-transparent text-gray-700 hover:text-gray-800",
                         "relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800 data-open:border-indigo-600 data-open:text-indigo-600"
                              

                         )}
                         >
                         {catogery.name}
                        </PopoverButton>
                      </div>
                      <Transition
                      as= {Fragment}
                      enter="transtion ease-out duration-200"
                      enterform="opacity-0"
                      enterto ="opacity-100"
                      leave="transition ease-in duration-150"
                      leaveform="opacity-100"
                      leaveto="opacity-0"
                      
                       >


                      <PopoverPanel
                        transition
                        className="absolute z-50 mt-2 w-screen left-0 right-0 top-full text-sm text-gray-500"
                        
                      >
                        {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                        <div aria-hidden="true" className="absolute inset-0 top-1/2 bg-white shadow-sm" />

                        <div className="relative bg-white">
                          <div className="mx-auto max-w-7xl px-8">
                            <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                              <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                {catogery.featured.map((item) => (
                                  <div key={item.name} className="group relative text-base sm:text-sm">
                                    <img
                                      alt={item.imageAlt}
                                      src={item.imageSrc}
                                      className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                                    />
                                    <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                      <span aria-hidden="true" className="absolute inset-0 z-10" />
                                      {item.name}
                                    </a>
                                    <p aria-hidden="true" className="mt-1">
                                      Shop now
                                    </p>
                                  </div>
                                ))}
                              </div>
                              <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                {catogery.sections.map((section) => (
                                  <div key={section.name}>
                                    <p id={`${section.name}-heading`} className="font-medium text-gray-900">
                                      {section.name}
                                    </p>
                                    <ul
                                      role="list"
                                      aria-labelledby={`${section.name}-heading`}
                                      className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                    >
                                     {section.items.map((item) => (
                                  <li key={item.name} className="flex">
                               
                                   <p
                                       onClick={() => 
                                        handleCategoryClick(catogery, section, item, close)
                                    }
                                      className="cursor-pointer hover:text-gray-800"
                                      >
                                      
                                  {item.name}
                                  </p>
                                       </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </PopoverPanel>
                      </Transition>
                      </>
                      )}
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </PopoverGroup>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                 {auth.user?.firstName ? (
                   <div>
                    <Avatar
                    className='"text-white'
                    onClick={handleUserClick}
                    aria-controls ={open? "basic-menu":undefined}
                    aria-haspopup={open? "true":undefined}
                    sx={{
                      bgcolor:deepPurple[500],
                      color:'white',
                      cursor:'pointer',
                    }}
                    >
                    {auth.user?.firstName[0].toUpperCase()}

                    </Avatar>
                    <Menu
  id="basic-menu"
  anchorEl={anchorEl}
  open={openUserMenu}
  onClose={handleCloseUserMenu} // ✅ this is the fix
  MenuListProps={{
    "aria-labelledby": "basic-button",
  }}
>
  <MenuItem onClick={handleCloseUserMenu}>Profile</MenuItem>
  <MenuItem onClick={() => {
    handleCloseUserMenu(); // close the menu
    navigate("/account/order"); // go to orders page
  }}>
    My Orders
  </MenuItem>
  <MenuItem onClick={handleLogout}>Logout</MenuItem>
</Menu>

                    </div>
                    

                  ):(
                    <Button
                    onClick={handleOpen}
                   className="flex items-center justify-end space-x-6"
                    >
                      Signin
                    </Button>

                  )}
                
                </div>

              
                {/* Search */}
                <div className="flex lg:ml-6">
                  <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon aria-hidden="true" className="size-6" />
                  </a>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                 <button className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      aria-hidden="true"
                      className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <AuthModel handleClose={handleClose} open={openAuthModel}/>
    </div>
  );
}
