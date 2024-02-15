import React from "react";

const Footer = () => {
	return (
		<>
			<div className="flex justify-center items-center px-16 mt-52 w-full text-white bg-blue-900 max-md:px-5 max-md:mt-10 max-md:max-w-full">
				<div className="flex z-10 gap-5 justify-between -mt-40 mb-0 w-full ">
					<div className="flex flex-col self-end mt-60 ">
						<div className="text-6xl tracking-tighter leading-[72px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
							Feeling the lag of inconsistent design?
						</div>
						<div className="mt-7 text-2xl font-light leading-9 text-neutral-200 max-md:max-w-full">
							Partner with us
						</div>
						<div className="justify-center self-start px-8 py-3.5 mt-14 mb-4 text-base leading-7 text-center whitespace-nowrap border border-solid border-[color:var(--Primary-White,#FFF)] rounded-[100px] max-md:px-5 max-md:mt-10">
							Connect now
						</div>
					</div>
					<img
						loading="lazy"
						alt="logo"
						src="https://cdn.builder.io/api/v1/image/assets/TEMP/14627b4c83647d032829aa6b71b297cb14bef929e960099635c3a300f46b5bfb?"
						className="w-1/4 aspect-[0.79]"
					/>
				</div>
			</div>

			<div className="self-center mt-52 w-full px-3 lg:px-60">
				<div className="grid md:grid-cols-2 grid-cols-1 gap-5 justify-center">
					<div className="flex flex-col">
						<div className="flex flex-col self-stretch px-5 pt-2.5 my-auto text-2xl font-light text-neutral-400 max-md:mt-10 max-md:max-w-full">
							<div className="leading-[150%] max-md:max-w-full">
								/Next service
							</div>
							<div className="mt-6 text-5xl tracking-tighter text-white max-md:max-w-full max-md:text-4xl">
								Web and mobile apps
							</div>
							<div className="mt-7 leading-9 max-md:max-w-full hidden lg:inline-flex">
								Design stickiness and retention for web and
								mobile customer apps with our proven and tested
								Customer Experience Design process, builds
								behavioural engagement by leveraging Design
								Thinking for an end-to-end view of the customer
								acquisition and retention journey.
							</div>
							<div className="justify-center self-start px-8 py-3.5 mt-12 text-base leading-7 text-center text-white whitespace-nowrap border border-solid border-[color:var(--Primary-White,#FFF)] rounded-[100px] max-md:px-5 max-md:mt-10">
								Know more
							</div>
						</div>
					</div>
					<div className="flex flex-col ml-5">
						<img
							loading="lazy"
							alt="illustration"
							src="https://cdn.builder.io/api/v1/image/assets/TEMP/432b949344c6c6307026b1b89ee5694c11137aff417e3fd923788b50b58d5132?"
							className="w-full aspect-[0.74]"
						/>
					</div>
				</div>
			</div>

			<div className="flex justify-center items-center px-16 pt-12 pb-8 mt-52 w-full bg-black max-md:px-5 max-md:mt-10 max-md:max-w-full">
				<div className="flex flex-col mt-16 w-full">
					<div className="grid grid-cols-2 md:grid-cols-5 gap-5 justify-between items-start self-center px-8 md:px-1 w-full xl:text-4xl lg:text-3xl md:text-2xl text-4xl tracking-tighter leading-10 text-white">
						<div className="flex gap-3.5">
							<div className="my-auto aspect-square w-3.5 h-3.5 bg-white rounded-full" />
							<div>LinkedIn</div>
						</div>
						<div className="flex gap-3.5">
							<div className="my-auto aspect-square w-3.5 h-3.5 bg-white rounded-full" />
							<div>Instagram</div>
						</div>
						<div className="flex gap-3.5">
							<div className="my-auto aspect-square w-3.5 h-3.5 bg-white rounded-full" />
							<div>Dribbble</div>
						</div>
						<div className="flex gap-3.5">
							<div className="my-auto aspect-square w-3.5 h-3.5 bg-white rounded-full" />
							<div>Behance</div>
						</div>
						<div className="flex gap-3.5">
							<div className="my-auto aspect-square w-3.5 h-3.5 bg-white rounded-full" />
							<div>Twitter</div>
						</div>
					</div>
					<div className="mt-16 max-md:mt-10 max-md:max-w-full">
						<div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
							<div className="flex flex-col w-[28%] max-md:ml-0 max-md:w-full">
								<div className="flex flex-col text-white max-md:mt-10">
									<img
										loading="lazy"
										alt="logo"
										src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d000cafe530e2060407bb493f2544f935fe6dcc6b1b41c2f63a6379b5713d66?"
										className="w-full aspect-[2.44]"
									/>
									<div className="flex flex-col px-6 max-md:px-5">
										<div className="text-xl font-light leading-8">
											7th floor, Corporate Park ||, <br />
											Sion-Trombay Road, Chembur, Mumbai-
											400071 , India.
										</div>
										<div className="mt-12 text-base font-medium leading-8 underline max-md:mt-10">
											View on Google maps
										</div>
									</div>
								</div>
							</div>
							<div className="flex flex-col ml-5 w-[72%] max-md:ml-0 max-md:w-full">
								<div className="flex gap-5 justify-between items-start mt-10 text-xl font-light leading-8 text-white max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
									<div className="flex flex-col mt-3 whitespace-nowrap basis-0">
										<div>The Company</div>
										<div className="mt-10">
											Our Services
										</div>
										<div className="mt-11 max-md:mt-10">
											Our Expertise
										</div>
										<div className="mt-10">Client Work</div>
									</div>
									<div className="flex flex-col flex-1 mt-3">
										<div>Careers</div>
										<div className="mt-12 max-md:mt-10">
											Privacy Policy
										</div>
										<div className="mt-10 whitespace-nowrap">
											Terms & Conditions
										</div>
									</div>
									<div className="self-stretch w-px bg-stone-900 h-[241px]" />
									<div className="flex flex-col flex-1 mt-2.5">
										<div className="text-base leading-7 text-neutral-400">
											Business enquiries:
										</div>
										<div className="mt-4">
											eshani@spinachexperience.design
										</div>
										<div className="mt-6 whitespace-nowrap">
											+91 9821297209
										</div>
										<div className="mt-14 text-base leading-7 text-neutral-400 max-md:mt-10">
											Career enquiries:
										</div>
										<div className="mt-4">
											fedora@spinachexperience.design
										</div>
										<div className="mt-6 whitespace-nowrap">
											+91 8097260369
										</div>
									</div>
									<div className="mt-4 w-1.5 bg-blue-900 h-[132px]" />
								</div>
							</div>
						</div>
					</div>
					<div className="self-start mt-28 ml-6 text-base font-light leading-7 whitespace-nowrap text-neutral-400">
						© 2024 Spinach Experience Design
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
