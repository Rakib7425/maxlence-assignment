const Profile = () => {
	return (
		<div className='h-full w-full'>
			<div className='grid grid-cols-1 px-4 pt-6 xl:grid-cols-3 xl:gap-4 dark:bg-gray-900'>
				<div className='mb-4 col-span-full xl:mb-2'>
					<nav className='flex mb-5' aria-label='Breadcrumb'>
						<ol className='inline-flex items-center space-x-1 text-sm font-medium md:space-x-2'>
							<li className='inline-flex items-center'>
								<a
									href='#'
									className='inline-flex items-center text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white'
								>
									<svg
										className='w-de h-5 mr-2.5'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z'></path>
									</svg>
									Home
								</a>
							</li>
							<li>
								<div className='flex items-center'>
									<svg
										className='w-6 h-6 text-gray-400'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											fillRule='evenodd'
											d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
											clipRule='evenodd'
										></path>
									</svg>
									<a
										href='#'
										className='ml-1 text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-300 dark:hover:text-white'
									>
										Users
									</a>
								</div>
							</li>
							<li>
								<div className='flex items-center'>
									<svg
										className='w-6 h-6 text-gray-400'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											fillRule='evenodd'
											d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
											clipRule='evenodd'
										></path>
									</svg>
									<span
										className='ml-1 text-gray-400 md:ml-2 dark:text-gray-500'
										aria-current='page'
									>
										Settings
									</span>
								</div>
							</li>
						</ol>
					</nav>
					<h1 className='text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white'>
						User settings
					</h1>
				</div>
				{/* Right Content */}
				<div className='col-span-full xl:col-auto'>
					<div className='p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800'>
						<div className='items-center sm:flex xl:block 2xl:flex sm:space-x-4 xl:space-x-0 2xl:space-x-4'>
							<img
								className='mb-4 rounded-lg w-28 h-28 sm:mb-0 xl:mb-4 2xl:mb-0'
								src='https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png'
								alt='Jese picture'
							/>
							<div>
								<h3 className='mb-1 text-xl font-bold text-gray-900 dark:text-white'>
									Profile picture
								</h3>
								<div className='mb-4 text-sm text-gray-500 dark:text-gray-400'>
									JPG, GIF or PNG. Max size of 800K
								</div>
								<div className='flex items-center space-x-4'>
									<button
										type='button'
										className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
									>
										<svg
											className='w-4 h-4 mr-2 -ml-1'
											fill='currentColor'
											viewBox='0 0 20 20'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path d='M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z'></path>
											<path d='M9 13h2v5a1 1 0 11-2 0v-5z'></path>
										</svg>
										Upload picture
									</button>
									<button
										type='button'
										className='py-2 px-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
									>
										Upload
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='col-span-2'>
					<div className='p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800'>
						<h3 className='mb-4 text-xl font-semibold dark:text-white'>
							General information
						</h3>
						<form action='#'>
							<div className='grid grid-cols-6 gap-6'>
								<div className='col-span-6 sm:col-span-3'>
									<label
										htmlFor='first-name'
										className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
									>
										First Name
									</label>
									<input
										type='text'
										name='first-name'
										id='first-name'
										className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
										placeholder='Bonnie'
										required=''
									/>
								</div>
								<div className='col-span-6 sm:col-span-3'>
									<label
										htmlFor='last-name'
										className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
									>
										Last Name
									</label>
									<input
										type='text'
										name='last-name'
										id='last-name'
										className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
										placeholder='Green'
										required=''
									/>
								</div>
								<div className='col-span-6 sm:col-span-3'>
									<label
										htmlFor='address'
										className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
									>
										Address
									</label>
									<input
										type='text'
										name='address'
										id='address'
										className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
										placeholder='e.g. California'
										required=''
									/>
								</div>
								<div className='col-span-6 sm:col-span-3'>
									<label
										htmlFor='email'
										className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
									>
										Email
									</label>
									<input
										type='email'
										name='email'
										id='email'
										className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
										placeholder='example@company.com'
										required=''
									/>
								</div>
								<div className='col-span-6 sm:col-span-3'>
									<label
										htmlFor='role'
										className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
									>
										Role
									</label>
									<input
										type='text'
										name='role'
										id='role'
										className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
										placeholder='React Developer'
										required=''
									/>
								</div>
								<div className='col-span-6 sm:col-full'>
									<button
										className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
										type='submit'
									>
										Save all
									</button>
								</div>
							</div>
						</form>
					</div>
					<div className='p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800'>
						<h3 className='mb-4 text-xl font-semibold dark:text-white'>
							Password information
						</h3>
						<form>
							<div className='grid grid-cols-6 gap-6'>
								<div className='col-span-6 sm:col-span-3'>
									<label
										htmlFor='current-password'
										className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
									>
										Current password
									</label>
									<input
										type='text'
										name='current-password'
										id='current-password'
										className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
										placeholder='••••••••'
										required=''
									/>
								</div>
								<div className='col-span-6 sm:col-span-3'>
									<label
										htmlFor='password'
										className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
									>
										New password
									</label>
									<input
										data-popover-target='popover-password'
										data-popover-placement='bottom'
										type='password'
										id='password'
										className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
										placeholder='••••••••'
										required=''
									/>
									<div
										data-popover=''
										id='popover-password'
										role='tooltip'
										className='absolute z-10 invisible inline-block text-sm font-light text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400'
										style={{
											position: "absolute",
											inset: "auto auto 0px 0px",
											margin: "0px",
											transform: "translate3d(840px, -465.6px, 0px)",
										}}
										data-popper-placement='top'
										data-popper-reference-hidden=''
										data-popper-escaped=''
									>
										<div className='p-3 space-y-2'>
											<h3 className='font-semibold text-gray-900 dark:text-white'>
												Must have at least 6 characters
											</h3>
											<div className='grid grid-cols-4 gap-2'>
												<div className='h-1 bg-orange-300 dark:bg-orange-400'></div>
												<div className='h-1 bg-orange-300 dark:bg-orange-400'></div>
												<div className='h-1 bg-gray-200 dark:bg-gray-600'></div>
												<div className='h-1 bg-gray-200 dark:bg-gray-600'></div>
											</div>
											<p>It’s better to have:</p>
											<ul>
												<li className='flex items-center mb-1'>
													<svg
														className='w-4 h-4 mr-2 text-green-400 dark:text-green-500'
														aria-hidden='true'
														fill='currentColor'
														viewBox='0 0 20 20'
														xmlns='http://www.w3.org/2000/svg'
													>
														<path
															fillRule='evenodd'
															d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
															clipRule='evenodd'
														></path>
													</svg>
													Upper &amp; lower case letters
												</li>
												<li className='flex items-center mb-1'>
													<svg
														className='w-4 h-4 mr-2 text-gray-300 dark:text-gray-400'
														aria-hidden='true'
														fill='currentColor'
														viewBox='0 0 20 20'
														xmlns='http://www.w3.org/2000/svg'
													>
														<path
															fillRule='evenodd'
															d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
															clipRule='evenodd'
														></path>
													</svg>
													A symbol (#$&amp;)
												</li>
												<li className='flex items-center'>
													<svg
														className='w-4 h-4 mr-2 text-gray-300 dark:text-gray-400'
														aria-hidden='true'
														fill='currentColor'
														viewBox='0 0 20 20'
														xmlns='http://www.w3.org/2000/svg'
													>
														<path
															fillRule='evenodd'
															d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
															clipRule='evenodd'
														></path>
													</svg>
													A longer password (min. 12 chars.)
												</li>
											</ul>
										</div>
										<div
											data-popper-arrow=''
											style={{
												position: "absolute",
												left: "0px",
												transform: "translate3d(139.2px, 0px, 0px)",
											}}
										></div>
									</div>
								</div>
								<div className='col-span-6 sm:col-span-3'>
									<label
										htmlFor='confirm-password'
										className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
									>
										Confirm password
									</label>
									<input
										type='text'
										name='confirm-password'
										id='confirm-password'
										className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
										placeholder='••••••••'
										required=''
									/>
								</div>
								<div className='col-span-6 sm:col-full'>
									<button
										className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
										type='submit'
									>
										Change password
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
